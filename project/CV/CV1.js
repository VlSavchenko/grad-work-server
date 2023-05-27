
const CV1 = `
<!DOCTYPE html>
<html>
  <style>

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

    *{
      font-family: "Inter";
    }

    html {
      -webkit-print-color-adjust: exact;
    }
    body{
      margin: 0;
    }
    .CVContainer {
      min-width: 210mm;
      min-height: 297mm;
      max-width: 210mm;
      max-height: 297mm;
      // width: 100%;
      // height: 100%;
      display: flex;
      justify-content: center;
      
    }
    .CVContainer .cv1 {
      min-width: 210mm;
      min-height: 297mm;
      max-width: 210mm;
      max-height: 297mm;
      background-color: #ffffff;

    }
    .sidebar {
      width: 35%;
      min-height: 297mm;
      max-height: 297mm;
      // height: 100%;
      background-color: #233a5f;
      float: left;
      padding: 25px 12px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-bottom: 0;
    }
    .CVContainer .cv1 .sidebar .photo {
      width: 120px;
      height: 120px;
      border-radius: 999px;
    }
    .CVContainer .cv1 .sidebar .nameAndPosition {
      display: flex;
      flex-direction: column;
    }
    .CVContainer .cv1 .sidebar .nameAndPosition .name {
      margin: 0px;
      margin-bottom: 5px;
      font-weight: 600;
      color: white;
      font-size: 24px;
    }
    .CVContainer .cv1 .sidebar .nameAndPosition .position {
      margin: 0;
      color: #C3C2C2;
      font-size: 13px;
    }
    .CVContainer .cv1 .sidebar .personalInfo {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .CVContainer .cv1 .sidebar .personalInfo .info {
      display: flex;
      background-color: #E5E5E5;
      color: #233A5F;
      width: 100%;
      min-height: 23px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      box-sizing: border-box;
      padding: 4px 8px;
      align-items: center;
    }
    .CVContainer .cv1 .sidebar .personalInfo .blockTitle {
      color: white;
      font-size: 18px;
      font-weight: 500;
    }
    .CVContainer .cv1 .sidebar .personalInfo .list {
      color: white;
      margin: 0;
      padding-left: 25px;
      font-size: 14px;
    }
    .CVContainer .cv1 .main {
      float: right;
      height: 100%;
      width: 65%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 30px;
      gap: 24px;
    }
    .CVContainer .cv1 .main .blockTitle {
      color: #233A5F;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .CVContainer .cv1 .main hr {
      height: 2px;
      width: 40px;
      margin-top: 6px;
      background-color: #233A5F;
      border: 1px solid #233A5F;
      border-radius: 4px;
      float: left;
    }
    .CVContainer .cv1 .main .aboutBlock {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .CVContainer .cv1 .main .aboutBlock .aboutText {
      font-size: 12px;
    }
    .CVContainer .cv1 .main .block {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .CVContainer .cv1 .main .block .blockContent {
      display: flex;
      gap: 20px;
    }
    .CVContainer .cv1 .main .block .blockContent .time {
      min-width: 100px;
    }
    .CVContainer .cv1 .main .block .blockContent .dot {
      height: 20px;
      margin-right: 8px;
    }
    .CVContainer .cv1 .main .block .blockContent .text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f14_400 {
      font-size: 14px;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f12_600 {
      font-size: 12px;
      font-weight: 600;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f12_400_grey {
      font-size: 12px;
      color: #878787;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f14_600 {
      font-size: 14px;
      font-weight: 600;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f12_400 {
      font-size: 12px;
    }
  </style>
  <body>
    <div class="CVContainer">
      <div class="cv1">
        <aside class="sidebar" id="sidebar">
          <img
            class="photo"
            src="https://i.yapx.ru/WDRME.png"
            alt="user"
          />
          <div class="nameAndPosition">
            <p class="name">Эндрю Маллен</p>
            <p class="position">Фронтенд разработчик</p>
          </div>
          <div class="personalInfo">
            <div class="info">+11012223344</div>
            <div class="info">hello@andrew.com</div>
          </div>
          <div class="personalInfo">
            <div class="blockTitle">Навыки</div>
            <ul class="list">
              <li>HTML and CSS</li>
              <li>
                Языки программирования: Javascript, Typescript, Python, Java
              </li>
              <li>
                Фреймворки/Библиотеки: Django, React, Next, Bootstrap,
                TailwindCSS, etc
              </li>
              <li>
                Понимание дизайна пользовательского интерфейса; Визуальной
                иерархии, системы проектирования и т.д
              </li>
            </ul>
          </div>
          <div class="personalInfo">
            <div class="blockTitle">Языки</div>
            <ul class="list">
              <li>Английский</li>
              <li>Русский</li>
            </ul>
          </div>
        </aside>
        <aside class="main">
          <div class="aboutBlock">
            <div>
              <div class="blockTitle">Обо мне</div>
              <hr />
            </div>
            <div class="aboutText">
              У меня есть опыт работы в области информационных технологий, с
              акцентом на разработку интерфейсов и дизайн пользовательского
              интерфейса. Я отношусь к тому типу людей, которые хватаются за
              любую возможность узнать что-то новое. Вот почему мне нравятся
              сложные задачи. С этого момента я испытываю давление, требующее
              быстрого обучения и приобретете много нового опыта.
            </div>
          </div>
          <div class="block">
            <div>
              <div class="blockTitle">Образование</div>
              <hr />
            </div>
            <div class="blockContent">
              <div class="time">2015 - 2019</div>
              <div class="d-flex flex-row">
                <div class="text">
                  <div class="f14_400">
                    Информатика, Национальный университет Пембангунан ”Ветеран”
                    Джокьякарта
                  </div>
                  <div class="f12_600">
                    Бакалавр компьютерных наук, Искусственный интеллект
                  </div>
                  <div class="f12_400_grey">
                    Здесь вы можете упомянуть о том, что вы изучали, и кратко
                    изложить подробности о том, что вы узнали. Вы также можете
                    упомянуть о любых внеклассных мероприятиях, которые вы
                    проводили в связи с вашей степенью.
                  </div>
                </div>
              </div>
            </div>

            <div class="blockContent">
              <div class="time">2015 - 2019</div>
              <div class="d-flex flex-row">
                <div class="text">
                  <div class="f14_400">
                    Информатика, Национальный университет Пембангунан ”Ветеран”
                    Джокьякарта
                  </div>
                  <div class="f12_600">
                    Бакалавр компьютерных наук, Искусственный интеллект
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="block">
            <div>
              <div class="blockTitle">Опыт работы</div>
              <hr />
            </div>
            <div class="blockContent">
              <div class="time">2019 - Настоящее время</div>
              <div class="d-flex flex-row">
                <div class="text">
                  <div class="f14_600">Upwork</div>
                  <div class="f12_400">Фронтенд разработчик</div>
                  <div class="f12_400_grey">
                    Upwork - это американская платформа для фриланса, где
                    предприятия и отдельные люди объединяются для того, чтобы
                    вести бизнес. Я в настоящее время принимаются удаленные или
                    внештатные работы по веб-разработке и дизайну
                    пользовательского интерфейса с этой платформы.
                  </div>
                </div>
              </div>
            </div>

            <div class="blockContent">
              <div class="time">Октябрь 2020 - Август 2021</div>
              <div class="d-flex flex-row">
                <div class="text">
                  <div class="f14_600">Currinda</div>
                  <div class="f12_400">UI Engineer</div>
                  <div class="f12_400_grey">
                    Я являюсь членом команды инженеров вместе с тремя другими
                    люди. Я отвечаю за создание дизайна интерфейса, который был
                    бы одновременно удобен для пользователя и соответствовал
                    принципам компании марка. Я также помогаю команде с
                    разработкой интерфейса, особенно в создании систем
                    проектирования и компонентов пользовательского интерфейса с
                    помощью React.
                  </div>
                </div>
              </div>
            </div>

            <div class="blockContent">
              <div class="time">Май 2019 - Ноябрь 2019</div>
              <div class="d-flex flex-row">
                <div class="text">
                  <div class="f14_600">Bubays</div>
                  <div class="f12_400">Веб разработчик</div>
                  <div class="f12_400_grey">
                    Я отвечаю за полноценную разработку и обслуживание веб-сайта
                    компании. Работа включает в себя создание и поддержку
                    веб-сайта с нуля. Кроме того, я являюсь единственный
                    веб-разработчик в этой компании.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </body>
</html>`

module.exports = CV1;