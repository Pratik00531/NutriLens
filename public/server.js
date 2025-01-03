const express = require('express');
const xlsx = require('xlsx');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));  // Make sure the HTML file is accessible

// Load the spreadsheet
const workbook = xlsx.readFile('FMCG_Products.xlsx'); // Replace 'FMCG_Products.xlsx' with your spreadsheet file
const sheetName = workbook.SheetNames[0];
const sheet = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Endpoint to search the spreadsheet
app.get('/search', (req, res) => {
    const barcode = req.query.barcode;
    if (!barcode) {
        return res.status(400).json({ error: 'Barcode is required' });
    }

    const result = sheet.filter(row => row.Barcode == barcode); // Replace 'Barcode' with your actual column name
    if (result.length === 0) {
        return res.status(404).json({ message: 'No results found' });
    }

    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
