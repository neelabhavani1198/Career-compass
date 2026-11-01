/**
 * Career Compass Career Report Exporter
 * Generates an executive-level, print-ready branded PDF assessment report.
 */

window.CareerExporter = {
  exportReport(sessionData) {
    if (!sessionData) return;

    const { education_level, profile, recommendations, history } = sessionData;
    const is12th = education_level === "12th";
    const reportDate = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Please allow pop-ups to download/print your Career Compass Career Report.");
      return;
    }

    let recsHtml = "";
    if (recommendations && recommendations.length > 0) {
      if (is12th) {
        recsHtml = recommendations.map(rec => `
          <div style="border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin-bottom: 20px; page-break-inside: avoid; background: #ffffff;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #F1F5F9; padding-bottom: 12px; margin-bottom: 14px;">
              <div>
                <span style="background: #EFF6FF; color: #2563EB; font-weight: 700; font-size: 11px; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase;">${rec.rank}</span>
                <h3 style="margin: 8px 0 0 0; color: #14213D; font-size: 18px; font-weight: 700;">${rec.recommended_course}</h3>
                <p style="margin: 2px 0 0 0; color: #64748B; font-size: 13px;">${rec.category_name} &bull; ${rec.domain}</p>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 22px; font-weight: 800; color: #2563EB;">${rec.match_percentage}%</div>
                <div style="font-size: 10px; color: #64748B;">AI Fit Estimate</div>
              </div>
            </div>

            <p style="color: #334155; font-size: 13px; line-height: 1.6; margin-bottom: 16px;">
              <strong>Why This Matches You:</strong> ${rec.why_matches}
            </p>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; font-size: 12px; margin-bottom: 14px; background: #F8FAFC; padding: 12px; border-radius: 8px;">
              <div><strong>Course Duration:</strong> ${rec.duration}</div>
              <div><strong>Eligibility:</strong> ${rec.eligibility}</div>
              <div><strong>Entrance Exams:</strong> ${(rec.entrance_exams || []).join(", ") || "Merit Based"}</div>
              <div><strong>Estimated Starting Salary:</strong> ${rec.salary_range}</div>
            </div>

            <div style="font-size: 12px; margin-bottom: 8px;">
              <strong>Key Curriculum Subjects:</strong> ${(rec.important_subjects || []).join(", ")}
            </div>

            <div style="font-size: 12px;">
              <strong>Career Opportunities:</strong> ${(rec.career_opportunities || []).join(", ")}
            </div>
          </div>
        `).join("");
      } else {
        recsHtml = recommendations.map(rec => `
          <div style="border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin-bottom: 20px; page-break-inside: avoid; background: #ffffff;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #F1F5F9; padding-bottom: 12px; margin-bottom: 14px;">
              <div>
                <span style="background: #EFF6FF; color: #2563EB; font-weight: 700; font-size: 11px; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase;">${rec.rank}</span>
                <h3 style="margin: 8px 0 0 0; color: #14213D; font-size: 20px; font-weight: 700;">${rec.stream_name}</h3>
                <p style="margin: 2px 0 0 0; color: #64748B; font-size: 13px;">${rec.tagline}</p>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 22px; font-weight: 800; color: #2563EB;">${rec.match_percentage}%</div>
                <div style="font-size: 10px; color: #64748B;">Stream Affinity</div>
              </div>
            </div>

            <p style="color: #334155; font-size: 13px; line-height: 1.6; margin-bottom: 16px;">
              <strong>Why This Matches You:</strong> ${rec.why_matches}
            </p>

            <div style="background: #F8FAFC; padding: 12px; border-radius: 8px; margin-bottom: 14px; font-size: 12px;">
              <div style="margin-bottom: 6px;"><strong>Main Subjects:</strong> ${(rec.main_subjects || []).join(", ")}</div>
              <div style="margin-bottom: 6px;"><strong>Academic Rigor:</strong> ${rec.academic_rigor || "High"}</div>
              <div><strong>Board Guidance:</strong> ${rec.board_notes || "Available across all major boards"}</div>
            </div>

            <div style="font-size: 12px; margin-bottom: 8px;">
              <strong>Key Advantages:</strong>
              <ul style="margin: 4px 0 0 16px; padding: 0;">
                ${(rec.important_advantages || []).map(adv => `<li>${adv}</li>`).join("")}
              </ul>
            </div>

            <div style="font-size: 12px; margin-bottom: 8px;">
              <strong>Subjects Needing Attention:</strong>
              <ul style="margin: 4px 0 0 16px; padding: 0; color: #B45309;">
                ${(rec.subjects_needing_attention || []).map(sub => `<li>${sub}</li>`).join("")}
              </ul>
            </div>

            <div style="font-size: 12px;">
              <strong>Future Degrees & Careers:</strong> ${(rec.future_degree_options || []).slice(0, 4).join(", ")} &bull; ${(rec.career_opportunities || []).slice(0, 4).join(", ")}
            </div>
          </div>
        `).join("");
      }
    }

    // Build transcript
    let transcriptHtml = "";
    if (history && history.length > 0) {
      transcriptHtml = history.map((h, i) => {
        const isAI = h.role === "model";
        return `
          <div style="margin-bottom: 10px; padding: 10px 14px; border-radius: 8px; background: ${isAI ? "#F0F7FF" : "#F8FAFC"}; font-size: 12px;">
            <strong style="color: ${isAI ? "#2563EB" : "#14213D"};">${isAI ? "AI Counsellor" : "Student"}:</strong>
            <span style="color: #334155;"> ${h.content}</span>
          </div>
        `;
      }).join("");
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Career Compass Career Assessment Report - ${education_level} Pass</title>
        <style>
          body {
            font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
            margin: 0;
            padding: 30px;
            color: #14213D;
            background: #ffffff;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page { margin: 20mm; }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid #2563EB;
            padding-bottom: 18px;
            margin-bottom: 24px;
          }
          .logo-box {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .logo-img {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            object-fit: cover;
            border: 1px solid #E2E8F0;
          }
          .logo { font-size: 28px; font-weight: 800; color: #14213D; letter-spacing: 1px; }
          .tagline { font-size: 12px; color: #2563EB; font-weight: 600; margin-top: 2px; }
          .report-badge {
            background: #EFF6FF;
            color: #2563EB;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            text-align: right;
          }
          .section-title {
            font-size: 16px;
            font-weight: 700;
            color: #14213D;
            border-left: 4px solid #2563EB;
            padding-left: 10px;
            margin: 24px 0 14px 0;
          }
          .profile-box {
            display: flex;
            gap: 16px;
            background: #F8FAFC;
            border-radius: 10px;
            padding: 16px;
            margin-bottom: 24px;
            border: 1px solid #E2E8F0;
          }
          .profile-item { flex: 1; }
          .profile-label { font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: 600; }
          .profile-val { font-size: 14px; color: #14213D; font-weight: 700; margin-top: 4px; }
          .disclaimer {
            margin-top: 36px;
            padding: 14px;
            border-radius: 8px;
            background: #F8FAFC;
            border-left: 3px solid #64748B;
            font-size: 11px;
            color: #64748B;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo-box">
            <img src="assets/logo-icon.svg" alt="Career Compass" class="logo-img">
            <div>
              <div class="logo">Career Compass</div>
              <div class="tagline">Discover Your Interests. Explore Your Future.</div>
            </div>
          </div>
          <div class="report-badge">
            AI Assessment Report<br>
            <span style="font-weight: 400; font-size: 11px;">Generated: ${reportDate}</span>
          </div>
        </div>

        <div class="profile-box">
          <div class="profile-item">
            <div class="profile-label">Qualification Level</div>
            <div class="profile-val">${education_level === "12th" ? "Class 12 Completed" : "Class 10 Completed"}</div>
          </div>
          <div class="profile-item">
            <div class="profile-label">Assessment Mode</div>
            <div class="profile-val">${is12th ? "Top 3 Degree Course Guidance" : "Top 2 Academic Stream Guidance"}</div>
          </div>
          <div class="profile-item">
            <div class="profile-label">Conversational Questions</div>
            <div class="profile-val">10 Adaptive AI Questions</div>
          </div>
          <div class="profile-item">
            <div class="profile-label">Stream Validated</div>
            <div class="profile-val">${profile?.stream_studied || (is12th ? "Science / General" : "10th Foundation")}</div>
          </div>
        </div>

        <div class="section-title">
          ${is12th ? "Top 3 Recommended Degree Courses" : "Top 2 Recommended Intermediate Streams"}
        </div>
        ${recsHtml}

        <div class="section-title">Conversational Assessment Transcript (10 Questions)</div>
        <div style="border: 1px solid #E2E8F0; border-radius: 10px; padding: 14px; background: #ffffff;">
          ${transcriptHtml}
        </div>

        <div class="disclaimer">
          <strong>Advisory Notice & Ethical Disclaimer:</strong>
          Career Compass AI recommendations are algorithmic guidelines designed to help students discover educational pathways aligned with their self-reported interests, hobbies, and eligibility. They do not constitute formal psychological evaluations or guaranteed admission endorsements. Admission eligibility, cut-off percentages, and entrance examinations vary by university, board, and state. Students and parents are encouraged to consult licensed academic counsellors and official university prospectuses before making final enrolment decisions.
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 600);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
};
