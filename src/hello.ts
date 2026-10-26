import express = require('express');
import path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// تفعيل استقبال بيانات الاستمارات (Forms)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// الذاكرة المؤقتة لحفظ الصور والمنتجات المحدثة مباشرة من الموقع
export let storeData = {
    slider: [
        "https://unsplash.com",
        "https://unsplash.com",
        "https://unsplash.com"
    ],
    products: [
        { id: 1, name: "ممتص صدمات رياضي", img: "https://unsplash.com" },
        { id: 2, name: "أضوية أمامية LED فخمة", img: "https://unsplash.com" },
        { id: 3, name: "فلتر هواء عالي الأداء", img: "https://unsplash.com" }
    ]
};

// إرسال البيانات الحالية للمتصفح ليقرأها ديناميكياً
app.get('/api/data', (req, res) => {
    res.json(storeData);
});

// استقبال التحديثات الجديدة من لوحة التحكم وحفظها فوراً
app.post('/api/update', (req, res) => {
    const { password, type, index, url, name } = req.body;
    
    // كلمة المرور الافتراضية لحماية موقعك (يمكنك تغييرها هنا)
    if (password !== "admin123") {
        return res.status(403).send("كلمة المرور خاطئة!");
    }

    if (type === "slider") {
        storeData.slider[Number(index)] = url;
    } else if (type === "product") {
        storeData.products[Number(index)].img = url;
        if (name) storeData.products[Number(index)].name = name;
    }

    res.send("تم التحديث بنجاح!");
});

// عرض الموقع الرئيسي ولوحة التحكم
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
