// import express from 'express';
const express = require('express');

// import { v4 } from 'uuidv4';
// import { CV1 } from "./project/CV/CV1.js";
// import { CV2 } from "./project/CV/CV2.js";
// import { CV3 } from "./project/CV/CV3.js";
// import { CV4 } from "./project/CV/CV4.js";
// import { CV5 } from "./project/CV/CV5.js";

const CV1 = require('../project/CV/CV1.js');
const CV2 = require('../project/CV/CV2.js');
const CV3 = require('../project/CV/CV3.js');
const CV4 = require('../project/CV/CV4.js');
const CV5 = require('../project/CV/CV5.js');

const generatePDF = require('./generatePDF');

let chrome = {};
let puppeteer;

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}

const app = express();
const port = 8089;
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use('/home', <div>Home page</div>);

app.post('/generate-pdf', async (req, res) => {
  let options = {};

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    options = {
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    };
  }
  const data = req.body;
  console.log(data);

  try {
    const pdfBuffer = await generatePDF();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=CV.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Ошибка при генерации PDF:', error);
    res.status(500).send('Произошла ошибка при генерации PDF');
  }

});

const handler = async (event, context) => {
  const result = await app(event, context);
  return result;
};

module.exports = { handler };


// Запускаем сервер и слушаем указанный порт
// app.listen(port, () => {
//   console.log(`Сервер запущен на порту ${port}`);
// });


