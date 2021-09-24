const {google} = require('googleapis');

export default async function (req, res) {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json", //the key file
        //url to spreadsheets API
        scopes: "https://www.googleapis.com/auth/drive.readonly", 
    });

    //Auth client Object
    const authClientObject = await auth.getClient();

    //Google sheets instance
    const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });

    // spreadsheet id
    const spreadsheetId = "13XKmMS2bWeHIM3R6iWW_1TBw8bsN8_cOj5ghHBzRIfo";

    // Read rows from spreadsheet
    const getRows = await googleSheetsInstance.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1",
    })
    
    res.status(200).json({data: getRows.data.values})
}