/**
 * Timemachine & Co - Google Apps Script Webhook
 * 
 * INSTRUCTIONS TO UPDATE IN GOOGLE APPS SCRIPT:
 * 1. Open your Google Sheet.
 * 2. Click Extensions > Apps Script.
 * 3. Replace the code with this updated code.
 * 4. Click 'Save' (Ctrl+S or Cmd+S).
 * 5. Click 'Deploy' > 'Manage deployments'.
 * 6. Click the edit pencil icon next to your active Web App deployment.
 * 7. Change Version to 'New version'.
 * 8. Click 'Deploy'.
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
      sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#1A1816").setFontColor("#FFFFFF");
      sheet.getRange("E:E").setNumberFormat("@"); // Set Column E (Phone Number) as Plain Text
    }

    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    var clientName = data.clientName || "";
    var groomName = data.groomName || "";
    var brideName = data.brideName || "";
    
    // Format phone with single quote prefix so Google Sheets doesn't parse '+91...' as a math formula (#ERROR!)
    var rawPhone = ((data.countryCode || "") + " " + (data.phone || "")).trim();
    var phone = "'" + rawPhone;

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
