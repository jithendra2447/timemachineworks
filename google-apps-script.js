/**
 * Timemachine & Co - Google Apps Script Webhook
 * 
 * INSTRUCTIONS TO SET UP:
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Click Extensions > Apps Script
 * 3. Delete any existing code and paste this ENTIRE file into the editor.
 * 4. Click 'Save' (Ctrl+S or Cmd+S).
 * 5. Click 'Deploy' > 'New deployment'.
 * 6. Select Type: 'Web app'.
 * 7. Description: 'Timemachine Quote Webhook'.
 * 8. Execute as: 'Me'.
 * 9. Who has access: 'Anyone'.
 * 10. Click 'Deploy', authorize access, and copy the Web App URL!
 * 11. Paste the Web App URL into your .env file as:
 *     GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Client Name",
        "Groom Name",
        "Bride Name",
        "Phone Number",
        "Event Name",
        "Event Date",
        "Event Time",
        "Location",
        "No. of Guests"
      ]);
      sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#1C1C1E").setFontColor("#FFFFFF");
    }

    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    var clientName = data.clientName || "";
    var groomName = data.groomName || "";
    var brideName = data.brideName || "";
    var phone = (data.countryCode || "") + " " + (data.phone || "");
    var events = data.events || [];

    // Append one row per event in the itinerary
    if (events.length > 0) {
      events.forEach(function(evt) {
        sheet.appendRow([
          timestamp,
          clientName,
          groomName,
          brideName,
          phone,
          evt.name || "",
          evt.date || "",
          evt.time || "",
          evt.location || "",
          evt.guests || ""
        ]);
      });
    } else {
      sheet.appendRow([
        timestamp,
        clientName,
        groomName,
        brideName,
        phone,
        "-",
        "-",
        "-",
        "-",
        "-"
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
