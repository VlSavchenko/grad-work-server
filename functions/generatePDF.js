async function generatePDF() {
  console.log('In generatePDF');
  const browser = await chrome.puppeteer.launch({
    args: chrome.args,
    defaultViewport: chrome.defaultViewport,
    executablePath: await chrome.executablePath,
    headless: "new",
    ignoreHTTPSErrors: true,
  }); //{headless:false}
  const page = await browser.newPage();
  console.log('after newPage');
  await page.setContent(CV5);
  console.log('after setContent');
  const pdfBuffer = await page.pdf({ format: 'A4' });
  console.log('after creating pdf');
  // await page.pdf({ path: '../../testCVs/cv5.pdf', format: 'A4' });
  await browser.close();
  console.log('after browser.close');
  return pdfBuffer;
}

module.exports = generatePDF;