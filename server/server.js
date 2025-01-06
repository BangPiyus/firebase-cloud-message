const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

const serviceAccount = require('./path/to/service-account-file.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();
app.use(bodyParser.json());

app.post('/send-notification', (req, res) => {
    const { token, title, body } = req.body;

    const message = {
        notification: {
            title,
            body,
        },
        token
    };

    admin.messaging().send(message)
        .then(response => res.status(200).send({ success: true, response }))
        .catch(error => res.status(500).send({ success: false, error }));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));