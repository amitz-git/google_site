function doPost(e) {
  try {
    if (!e || !e.parameter) {
      return ContentService.createTextOutput("No data received").setMimeType(ContentService.MimeType.TEXT);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter; // Capture form data

    sheet.appendRow([
      new Date(),
      data.transactionType || "",
      data.input500 || 0, 
      data.input200 || 0, 
      data.input100 || 0, 
      data.input50 || 0, 
      data.input20 || 0, 
      data.input10 || 0, 
      data.input5 || 0, 
      data.input2 || 0, 
      data.input1 || 0
    ]);

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);

  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
