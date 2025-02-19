function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var newRow = sheet.getLastRow() + 1;

  // Get form data
  var companyName = e.parameter.companyName;
  var empId = e.parameter.empId;
  var mobileNumber = e.parameter.mobileNumber;
  var inr500 = e.parameter.input500 || 0;
  var inr200 = e.parameter.input200 || 0;
  var inr100 = e.parameter.input100 || 0;
  var inr50 = e.parameter.input50 || 0;
  var inr20 = e.parameter.input20 || 0;
  var inr10 = e.parameter.input10 || 0;
  var inr1 = e.parameter.input1 || 0;

  // Insert data into the sheet
  sheet.appendRow([new Date(), companyName, empId, mobileNumber, inr500, inr200, inr100, inr50, inr20, inr10, inr1]);

  return HtmlService.createHtmlOutputFromFile("ThankYou");
}