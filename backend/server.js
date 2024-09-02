const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.post('/send-sms', async (req, res) => {
    const { phoneNumber, message } = req.body;

    try {
        const cors = require('cors');
        app.use(cors());
        const response = await axios.post('https://www.fast2sms.com/dev/bulkV2', {
            route: 'v3',
            sender_id: 'TXTIND',
            message: message,
            language: 'english',
            numbers: phoneNumber,
        }, {
            headers: {
                'authorization': 'DtbRiqNFa9GqUUvImwxlQG5Te8kJwZBf32Qw0m2atW1KhNY8hjUlHSwoSWEi',
                'Content-Type': 'application/json'
            }
        });
        res.json({ message: 'SMS sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send SMS', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
