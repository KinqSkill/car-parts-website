import express = require('express');

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>متجر قطع السيارات - طلب مسبق</title>
    <link rel="preconnect" href="https://googleapis.com">
    <link rel="preconnect" href="https://gstatic.com" crossorigin>
    <link href="https://googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet">
    
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Cairo', sans-serif;
        }
        body {
            background-color: #121212;
            color: #ffffff;
            overflow-x: hidden;
        }
        header {
            background-color: #1a1a1a;
            padding: 15px 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #ff3333;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff3333;
        }
        .social-top a {
            color: #fff;
            margin-right: 15px;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.3s;
        }
        .social-top a:hover {
            color: #ff3333;
        }
        .hero-container {
            display: flex;
            min-height: 500px;
            align-items: center;
            padding: 40px 5%;
            background: linear-gradient(145deg, #1a1a1a, #121212);
        }
        .hero-text {
            flex: 1;
            padding-left: 20px;
            z-index: 10;
        }
        .hero-text h1 {
            font-size: 42px;
            color: #ffffff;
            margin-bottom: 20px;
            line-height: 1.4;
        }
        .hero-text p {
            font-size: 18px;
            color: #b3b3b3;
            margin-bottom: 30px;
        }
        .cta-btn {
            background-color: #ff3333;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            transition: background 0.3s;
            display: inline-block;
        }
        .cta-btn:hover {
            background-color: #cc0000;
        }
        .hero-slider {
            flex: 1;
            position: relative;
            width: 100%;
            height: 350px;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }
        .slides {
            width: 100%;
            height: 100%;
            position: relative;
        }
        .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .slide.active {
            opacity: 1;
        }
        .slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .slider-dots {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
            z-index: 15;
        }
        .dot {
            width: 12px;
            height: 12px;
            background-color: rgba(255,255,255,0.5);
            border-radius: 50%;
            cursor: pointer;
        }
        .dot.active {
            background-color: #ff3333;
        }
        .products-section {
            padding: 60px 5%;
            text-align: center;
        }
        .products-section h2 {
            font-size: 32px;
            margin-bottom: 40px;
            color: #ff3333;
        }
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }
        .product-card {
            background-color: #1a1a1a;
            border: 1px solid #333;
            border-radius: 8px;
            padding: 20px;
            transition: transform 0.3s;
            position: relative;
        }
        .product-card:hover {
            transform: translateY(-5px);
            border-color: #ff3333;
        }
        .product-card img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 15px;
        }
        .product-card h3 {
            font-size: 20px;
            margin-bottom: 10px;
        }
        .price-tag {
            color: #ffcc00;
            font-weight: bold;
            margin-bottom: 15px;
            display: block;
        }
        .add-to-cart-btn {
            background-color: #333;
            color: #fff;
            border: 1px solid #ff3333;
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-weight: bold;
            transition: all 0.3s;
        }
        .add-to-cart-btn:hover {
            background-color: #ff3333;
        }
        .form-section {
            background-color: #1a1a1a;
            padding: 50px 5%;
            margin: 40px 5%;
            border-radius: 10px;
            border: 1px solid #333;
        }
        .form-section h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #ffffff;
        }
        .cart-summary {
            background-color: #222;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            border-right: 4px solid #ffcc00;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #b3b3b3;
        }
        .form-group input, .form-group textarea {
            width: 100%;
            padding: 12px;
            background-color: #262626;
            border: 1px solid #444;
            color: white;
            border-radius: 5px;
        }
        .form-group input:focus, .form-group textarea:focus {
            border-color: #ff3333;
            outline: none;
        }
        .submit-whatsapp-btn {
            background-color: #25D366;
            color: white;
            padding: 15px;
            border: none;
            width: 100%;
            border-radius: 5px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s;
        }
        .submit-whatsapp-btn:hover {
            background-color: #20ba5a;
        }
        footer {
            background-color: #1a1a1a;
            padding: 40px 5%;
            text-align: center;
            border-top: 1px solid #333;
            margin-top: 60px;
        }
        .footer-links {
            margin-bottom: 20px;
        }
        .footer-links a {
            color: #b3b3b3;
            text-decoration: none;
            margin: 0 15px;
            font-size: 14px;
        }
        .footer-links a:hover {
            color: #ff3333;
        }
        .copyright {
            color: #666;
            font-size: 14px;
        }
        @media (max-width: 768px) {
            header {
                flex-direction: column;
                gap: 10px;
            }
            .hero-container {
                flex-direction: column;
                text-align: center;
                padding: 20px 5%;
            }
            .hero-text {
                padding-left: 0;
                margin-bottom: 30px;
            }
            .hero-text h1 {
                font-size: 30px;
            }
            .hero-slider {
                height: 220px;
            }
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">🏁 كينق سكيل لقطع السيارات</div>
        <div class="social-top">
            <a href="https://instagram.com" target="_blank">إنستغرام 📸</a>
            <a href="https://tiktok.com" target="_blank">تيك توك 🎵</a>
        </div>
    </header>

    <section class="hero-container">
        <div class="hero-text">
            <h1>هندسة أدق.<br>اختيار أوثق.</h1>
            <p>اكتشف أقوى قطع الغيار الترند لسيارتك. حدد طلبك، أرسله عبر الواتساب، ودعنا نتولى التوفير والشحن السريع بناءً على طلبك المسبق.</p>
            <a href="#products" class="cta-btn">استكشف الكتالوج 🚗</a>
        </div>
        
        <div class="hero-slider">
            <div class="slides" id="slider">
                <div class="slide active">
                    <img src="https://unsplash.com" alt="BMW 5 Series">
                </div>
                <div class="slide">
                    <img src="https://unsplash.com" alt="Mercedes AMG">
                </div>
                <div class="slide">
                    <img src="https://unsplash.com" alt="Audi RS">
                </div>
            </div>
            <div class="slider-dots" id="dotsContainer">
                <div class="dot active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    </section>

    <section class="products-section" id="products">
        <h2>🔥 الأكثر طلباً وترند هذا الأسبوع</h2>
        <div class="products-grid">
            
            <div class="product-card">
