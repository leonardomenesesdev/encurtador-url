import express, {application} from 'express';
import cors from 'cors';
import shortid from 'shortid';
import * as admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json'
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
})

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/shorten', async(req, res) => {
    try{
        const originalUrl = req.body.originalUrl; // CORRIGIDO AQUI
        if (!originalUrl) {
            return res.status(400).json({ error: 'A propriedade "originalUrl" é obrigatória no corpo da requisição.' });
        }
        const shortUrl = shortid.generate();
        await db.collection('urls').doc(shortUrl).set({
            originalUrl: originalUrl,
            shortUrl: shortUrl,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        })
        res.status(201).json({shortUrl: shortUrl, originalUrl: originalUrl})
    } catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
app.get('/:shortUrl', async(req, res) =>{
    const shortUrl = req.params.shortUrl;
    try {
        const urlDoc = await db.collection('urls').doc(shortUrl).get();
        if (!urlDoc.exists) {
            return res.status(404).json({error: 'URL not found'});
        }
        const urlData = urlDoc.data();
        res.redirect(urlData?.originalUrl);
    } catch (error) {
        console.error('Error retrieving URL:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
