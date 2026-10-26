import express = require('express');
import path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// تشغيل الواجهة الفنية من خلال قراءة ملف index.html المستقل والمحمي
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// بدء تشغيل الخادم على المنصة المجانية لـ Render
app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
