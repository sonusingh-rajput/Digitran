/**
 * =========================================================================
 * DigiTran - Google Apps Script Form Email Sender (No Backend Required)
 * =========================================================================
 * Recipient: sonusingh8002384197@gmail.com
 * Direct Gmail Delivery • No 3rd-Party Services
 * =========================================================================
 */

// Target email address where all inquiries will be delivered
const TARGET_EMAIL = "sonusingh8002384197@gmail.com";

/**
 * Handle incoming POST requests from the website form
 */
function doPost(e) {
  try {
    let data = {};

    // Parse JSON body or form parameters
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Always deliver strictly to TARGET_EMAIL
    const toEmail = TARGET_EMAIL;
    const subject = data.subject || "🔔 New Inquiry received from DigiTran Website";
    const senderEmail = data.email || data.workEmail || data.officialEmail || "";
    const senderName = data.name || data.fullName || data.contactPerson || "Website Visitor";
    const senderPhone = data.phone || data.mobile || "Not provided";
    const organization = data.company || data.college || data.institution || "Not provided";
    const role = data.role || data.designation || "Not provided";
    const service = data.service || data.program || data.interest || "General Inquiry";
    const message = data.body || data.message || data.requirements || "No additional message";
    const pageUrl = data.source || data.page || "DigiTran Contact Form";
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // HTML Email Template
    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f1117; color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #232733;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #181b26 0%, #0d0e14 100%); padding: 26px 24px; border-bottom: 2px solid #F6A305;">
          <h1 style="margin: 0; font-size: 22px; color: #ffffff; font-weight: 700; letter-spacing: -0.5px;">
            ⚡ Digi<span style="color: #F6A305;">Tran</span> New Form Submission
          </h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: #9ca3af;">
            Received on: <strong style="color: #f3f4f6;">${timestamp} (IST)</strong>
          </p>
        </div>

        <!-- Details -->
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tbody>
              <tr style="border-bottom: 1px solid #1f2430;">
                <td style="padding: 12px 8px; color: #F6A305; font-weight: 600; width: 35%;">Organization:</td>
                <td style="padding: 12px 8px; color: #ffffff; font-weight: 500;">${escapeHtml(organization)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1f2430;">
                <td style="padding: 12px 8px; color: #F6A305; font-weight: 600;">Contact Person:</td>
                <td style="padding: 12px 8px; color: #ffffff;">${escapeHtml(senderName)} (${escapeHtml(role)})</td>
              </tr>
              <tr style="border-bottom: 1px solid #1f2430;">
                <td style="padding: 12px 8px; color: #F6A305; font-weight: 600;">Work Email:</td>
                <td style="padding: 12px 8px; color: #ffffff;">
                  <a href="mailto:${escapeHtml(senderEmail)}" style="color: #60a5fa; text-decoration: none;">${escapeHtml(senderEmail)}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #1f2430;">
                <td style="padding: 12px 8px; color: #F6A305; font-weight: 600;">Phone:</td>
                <td style="padding: 12px 8px; color: #ffffff;">
                  <a href="tel:${escapeHtml(senderPhone)}" style="color: #60a5fa; text-decoration: none;">${escapeHtml(senderPhone)}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #1f2430;">
                <td style="padding: 12px 8px; color: #F6A305; font-weight: 600;">Track / Program:</td>
                <td style="padding: 12px 8px; color: #ffffff;">${escapeHtml(service)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1f2430;">
                <td style="padding: 12px 8px; color: #F6A305; font-weight: 600;">Source Page:</td>
                <td style="padding: 12px 8px; color: #9ca3af;">${escapeHtml(pageUrl)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1f2430;">
                <td style="padding: 12px 8px; color: #F6A305; font-weight: 600;">Delivered To:</td>
                <td style="padding: 12px 8px; color: #34d399; font-weight: 600;">${escapeHtml(toEmail)}</td>
              </tr>
            </tbody>
          </table>

          <!-- Message Box -->
          <div style="margin-top: 20px; background-color: #161822; border-left: 3px solid #F6A305; padding: 16px; border-radius: 6px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #F6A305; font-weight: 700;">
              Submission Details:
            </p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e5e7eb; white-space: pre-wrap;">
              ${escapeHtml(message)}
            </p>
          </div>

          <!-- Quick Reply Button -->
          ${senderEmail ? `
          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${escapeHtml(senderEmail)}?subject=Re: DigiTran Inquiry" 
               style="display: inline-block; background-color: #F6A305; color: #000000; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
              ✉️ Reply Directly to ${escapeHtml(senderName)}
            </a>
          </div>
          ` : ''}

        </div>

        <!-- Footer -->
        <div style="background-color: #08090d; padding: 16px 24px; text-align: center; border-top: 1px solid #1f2430; font-size: 12px; color: #6b7280;">
          DigiTran India • Direct Gmail Delivery System
        </div>
      </div>
    `;

    // Plain text alternative
    const textBody = `
New Inquiry received from DigiTran Website
-----------------------------------------
Time: ${timestamp}
To: ${toEmail}
Organization: ${organization}
Contact: ${senderName} (${role})
Email: ${senderEmail}
Phone: ${senderPhone}
Track: ${service}
Source: ${pageUrl}

Details:
${message}
-----------------------------------------
Reply directly to: ${senderEmail}
    `;

    const mailOptions = {
      htmlBody: htmlBody
    };

    if (senderEmail && senderEmail.includes("@")) {
      mailOptions.replyTo = senderEmail;
    }

    // Direct send via MailApp
    MailApp.sendEmail(toEmail, subject, textBody, mailOptions);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Email sent successfully to " + toEmail
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log("Error: " + err.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (test if active)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    message: "DigiTran Form Mailer is ready.",
    recipient: TARGET_EMAIL
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Click "Run" on this function inside Google Apps Script editor
 * to test sending an email immediately to your inbox!
 */
function testSend() {
  MailApp.sendEmail(TARGET_EMAIL, "✅ DigiTran Test - Google Apps Script is Working!", "If you see this email in your inbox, your Google Apps Script is working 100%!");
  Logger.log("Test email successfully sent to: " + TARGET_EMAIL);
}

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
