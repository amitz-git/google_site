function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var newRow = sheet.getLastRow() + 1;

  // Get form data
  var transactionType = e.parameter.transactionType;
  var inr500 = Number(e.parameter.input500) || 0;
  var inr200 = Number(e.parameter.input200) || 0;
  var inr100 = Number(e.parameter.input100) || 0;
  var inr50 = Number(e.parameter.input50) || 0;
  var inr20 = Number(e.parameter.input20) || 0;
  var inr10 = Number(e.parameter.input10) || 0;
  var inr5 = Number(e.parameter.input5) || 0;
  var inr2 = Number(e.parameter.input2) || 0;
  var inr1 = Number(e.parameter.input1) || 0;

  // Insert data into the sheet
  sheet.appendRow([new Date(), transactionType, inr500, inr200, inr100, inr50, inr20, inr10, inr5, inr2, inr1]);

  return HtmlService.createHtmlOutputFromFile("ThankYou.html");
}
