import express from 'express';
import puppeteer from "puppeteer";
// import { v4 } from 'uuidv4';
import { CV1 } from "./project/CV/CV1.js";
import { CV2 } from "./project/CV/CV2.js";
import { CV3 } from "./project/CV/CV3.js";
import { CV4 } from "./project/CV/CV4.js";
import { CV5 } from "./project/CV/CV5.js";

const app = express();
const port = 8089;
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use('/home', <div>Home page</div>)

app.post('/generate-pdf', async (req, res) => {
  const data = req.body;
  console.log(data);

  // const uniqueFileName = generateUniqueFileName(); // Замените эту функцию на свою логику генерации уникального имени

  const pdfBuffer = await generatePDF();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=CV.pdf`);

  // Отправка PDF-файла в ответе
  res.send(pdfBuffer);

  // // Сохраните файл на сервере
  // const filePath = path.join('../../testCVs/', uniqueFileName); // Замените путь на путь к вашей директории
  // // Ваш код для генерации файла и сохранения его по указанному пути

  // // Отправьте пользователю ссылку на скачивание файла
  // const downloadUrl = `http://localhost:3002/download-pdf?file=${uniqueFileName}`;
  // res.json({ downloadUrl });
});


// app.get('/download-pdf', (req, res) => {
//   const fileName = req.query.file; // Получите имя файла из параметра запроса

//   const filePath = path.join('../../testCVs/', fileName); // Замените путь на путь к вашей директории

//   // Установка заголовков ответа для передачи файла
//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);

//   // Отправка файла в ответе
//   res.sendFile(filePath);
// });

// Запускаем сервер и слушаем указанный порт
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

// function generateUniqueFileName() {
//   const uniqueId = v4(); // Генерируем уникальный идентификатор
//   const fileName = `${uniqueId}.pdf`; // Формируем имя файла, например, с расширением .pdf
//   return fileName;
// }

async function generatePDF() {
  const browser = await puppeteer.launch(); //{headless:false}
  const page = await browser.newPage();
  await page.setContent(CV5);
  const pdfBuffer = await page.pdf({ format: 'A4' });
  // await page.pdf({ path: '../../testCVs/cv5.pdf', format: 'A4' });
  await browser.close();
  return pdfBuffer;
}

// generatePDF().catch(error => {
//   console.error('Ошибка при создании PDF:', error);
// });