import express = require('express');

const app = express();
const PORT = process.env.PORT || 10000; 

app.get('/', (req, res) => {
  res.send('<h1>موقع قطع السيارات يعمل بنجاح! 🚗</h1>');
});

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
