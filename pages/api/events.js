const {google} = require('googleapis');

export default async function (req, res) {
    //Google sheets instance
    const googleSheetsInstance = google.sheets({ version: "v4"});

    // spreadsheet id
    const spreadsheetId = "13XKmMS2bWeHIM3R6iWW_1TBw8bsN8_cOj5ghHBzRIfo";

    // Read rows from spreadsheet
    const getRows = await googleSheetsInstance.spreadsheets.values.get({
        key: process.env.GOOGLE_SHEETS_KEY,
        spreadsheetId,
        range: "Sheet1",
    })
    
    res.status(200).json({data: getRows.data.values})
}