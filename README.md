# Google Site with Google Sheets as a Database

This project allows you to collect form data from a Google Site and store it directly into a Google Sheet using Google Apps Script.

---

## **1. Setup Google Sheet**
1. Open [Google Sheets](https://docs.google.com/spreadsheets/).
2. Create a new sheet and name it **Database** (or any name you prefer).
3. Rename the first sheet to **Sheet1** (or match it with the script's sheet name).
4. Add column headers (e.g., `Name`, `Email`, `Message`).

---

## **2. Setup Google Apps Script**
1. In Google Sheets, go to **Extensions > Apps Script**.
2. Delete any existing code and insert the following in `Code.gs`:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSpreadsheet();
  var data = e.parameter;
  
  sheet.appendRow([data.name, data.email, data.message, new Date()]);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
```

3. Click **Deploy** > **New Deployment**.
4. Select **Web app** as the type.
5. Under **Who has access**, choose **Anyone**.
6. Click **Deploy** and **Authorize** the script.
7. Copy the **Web App URL**.

---

## **3. Create HTML Form**
Create an `index.html` file with the following content:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Google Sheet Form</title>
</head>
<body>
    <h2>Submit Your Details</h2>
    <form action="YOUR_WEB_APP_URL" method="post">
        <label>Name:</label>
        <input type="text" name="name" required><br><br>

        <label>Email:</label>
        <input type="email" name="email" required><br><br>

        <label>Message:</label>
        <textarea name="message" required></textarea><br><br>

        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

**Replace `YOUR_WEB_APP_URL`** with the actual Web App URL copied from Step 2.

---

## **4. Embed in Google Sites**
1. Open **Google Sites**.
2. Click **Embed** > **Embed Code**.
3. Paste the link to your hosted HTML file or use an iframe.
4. Publish and test your form.

---

## **5. Testing & Validation**
1. Open the Google Site and submit the form.
2. Check Google Sheets to verify that the data has been stored.

---

## **6. Notes & Enhancements**
- Add **CSS & JavaScript** to improve form styling and validation.
- Use **Google Forms** if you prefer a simpler alternative.
- Ensure **permissions** are set correctly for public access.

---

Now, your **Google Site** collects data and stores it in **Google Sheets** seamlessly! 🚀

