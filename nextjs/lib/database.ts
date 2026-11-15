/**
 * Career Compass - Next.js Session & Settings Persistence Layer
 * Provides high-speed in-memory store with filesystem JSON persistence.
 */

import fs from 'fs';
import path from 'path';
import { AssessmentSession } from './types';

const DATA_DIR = path.join(process.cwd(), '.data');
const SESSIONS_FILE = path.join(DATA_DIR, 'sessions.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

// In-memory cache
const sessionsCache = new Map<string, AssessmentSession>();
const settingsCache = new Map<string, string>();
let isInitialized = false;

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    try {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    } catch {
      // Ignore if directory creation fails
    }
  }
}

function initStorage() {
  if (isInitialized) return;
  ensureDataDir();

  // Load sessions from disk
  if (fs.existsSync(SESSIONS_FILE)) {
    try {
      const raw = fs.readFileSync(SESSIONS_FILE, 'utf-8');
      const list: AssessmentSession[] = JSON.parse(raw);
      list.forEach(s => sessionsCache.set(s.id, s));
    } catch (e) {
      console.warn('[Database] Could not read sessions.json:', e);
    }
  }

  // Load settings from disk
  if (fs.existsSync(SETTINGS_FILE)) {
    try {
      const raw = fs.readFileSync(SETTINGS_FILE, 'utf-8');
      const obj: Record<string, string> = JSON.parse(raw);
      Object.entries(obj).forEach(([k, v]) => settingsCache.set(k, v));
    } catch (e) {
      console.warn('[Database] Could not read settings.json:', e);
    }
  }

  isInitialized = true;
}

function persistSessions() {
  try {
    ensureDataDir();
    const list = Array.from(sessionsCache.values());
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify(list, null, 2), 'utf-8');
  } catch (e) {
    console.warn('[Database] Could not persist sessions:', e);
  }
}

function persistSettings() {
  try {
    ensureDataDir();
    const obj = Object.fromEntries(settingsCache.entries());
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(obj, null, 2), 'utf-8');
  } catch (e) {
    console.warn('[Database] Could not persist settings:', e);
  }
}

export function saveSession(sessionData: AssessmentSession): boolean {
  initStorage();
  const now = new Date().toISOString();
  sessionData.updated_at = now;
  sessionsCache.set(sessionData.id, sessionData);
  persistSessions();
  return true;
}

export function getSession(sessionId: string): AssessmentSession | null {
  initStorage();
  return sessionsCache.get(sessionId) || null;
}

export function listRecentSessions(limit = 20): Partial<AssessmentSession>[] {
  initStorage();
  const all = Array.from(sessionsCache.values());
  all.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  return all.slice(0, limit).map(s => ({
    id: s.id,
    education_level: s.education_level,
    created_at: s.created_at,
    updated_at: s.updated_at,
    completed: s.completed,
    current_question_index: s.current_question_index,
  }));
}

export function setSetting(key: string, value: string): void {
  initStorage();
  settingsCache.set(key, value);
  persistSettings();
}

export function getSetting(key: string): string | null {
  initStorage();
  return settingsCache.get(key) || null;
}
