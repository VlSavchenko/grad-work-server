
export const CV2 = `
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
    display: flex;
    justify-content: center;
  }

  .CVContainer .cv2 {
    min-width: 210mm;
    min-height: 297mm;
    max-width: 210mm;
    max-height: 297mm;
    background-color: #FCFBF7;
    border: 1px solid black;
    padding: 40px;
    box-sizing: border-box;
    display: flex;
    gap: 32px;
  }

  .CVContainer .cv2 .blockTitle {
    font-size: 20px;
    font-weight: 500;
    color: #323232;
    margin-bottom: 10px;
  }

  .CVContainer .cv2 .yellowDescription {
    font-size: 16px;
    font-weight: 500;
    color: #F1B43E;
  }

  .CVContainer .cv2 .grayText {
    font-size: 14px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .grayText12 {
    font-size: 12px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .sidebar {
    width: 40%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .CVContainer .cv2 .sidebar .personalInfo {
    height: 263px;
    padding: 32px;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: 0px 6px 50px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .CVContainer .cv2 .sidebar .personalInfo .photo {
    width: 100px;
    height: 100px;
    border-radius: 999px;
  }

  .CVContainer .cv2 .sidebar .personalInfo .nameAndPosition {
    display: flex;
    flex-direction: column;
  }

  .CVContainer .cv2 .sidebar .personalInfo .links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .sidebar .skillsAndInterests {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    box-sizing: border-box;
  }

  .CVContainer .cv2 .sidebar .skillsAndInterests .list {
    display: flex;
    flex-wrap: wrap;
    gap: 14px 24px;
  }

  .CVContainer .cv2 .sidebar .skillsAndInterests .list div {
    font-size: 14px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .sidebar .language {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .main {
    width: 60%;
    height: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .CVContainer .cv2 .main .aboutBlock {
    display: flex;
    flex-direction: column;
  }

  .CVContainer .cv2 .main .block {
    display: flex;
    flex-direction: column;
  }

  .CVContainer .cv2 .main .block .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .CVContainer .cv2 .main .block .list .item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .CVContainer .cv2 .main .block .list .item .placeAndPosition {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 2px 10px;
  }

  .CVContainer .cv2 .main .block .list .item .placeAndPosition .place {
    font-size: 16px;
    font-weight: 500;
    color: #F1B43E;
  }

  .CVContainer .cv2 .main .block .list .item .placeAndPosition .position {
    font-size: 14px;
    font-weight: 400;
    color: #F1B43E;
  }
</style>

<body>
  <div class="CVContainer">
    <div class="cv2">
      <aside class="sidebar">
        <div class="personalInfo">
          <img class="photo"
               src="https://i.yapx.ru/WDRME.png"
               alt="user" />
          <div class="nameAndPosition">
            <div class="blockTitle">Эндрю Маллен</div>
            <div class="yellowDescription">
              Фронтенд разработчик
            </div>
          </div>
          <div class="links">
            <div>+11012223344</div>
            <div>hello@andrew.com</div>
          </div>
        </div>
        <div class="skillsAndInterests">
          <div class="blockTitle">Навыки</div>
          <div class="list">
            <div>Веб-дизайн</div>
            <div>Дизайн UX/UI</div>
            <div>Тестирование юзабилити</div>
            <div>Создание прототипов</div>
            <div>Figma</div>
            <div>After Effects</div>
            <div>Webflow</div>
            <div>Framer</div>
          </div>
        </div>
        <div class="skillsAndInterests">
          <div class="blockTitle">Языки</div>
          <div class="language">
            <div>Русский</div>
            <div>Английский</div>
          </div>
        </div>
      </aside>
      <aside class="main">
        <div class="aboutBlock">
          <div class="blockTitle">Обо мне</div>
          <div class="grayText">
            Я мультидисциплинарный дизайнер продуктов, специализирующийся на
            программировании без кода и визуальной разработке.
          </div>
        </div>
        <div class="block">
          <div class="blockTitle">Опыт работы</div>
          <div class="list">
            <div class="item">
              <div class="placeAndPosition">
                <div class="place">Университет Джорджии</div>
                <div class="position">Научный сотрудник</div>
              </div>

              <div class="grayText12">
                Сентябрь 2019 - Настоящее время
              </div>
              <div class="grayText">
                Подробная информация о вашем опыте работы приведена здесь.
                Кратко продемонстрируйте что вы сделали и чего достигли на
                этой должности. Вы можете также рассказать об инструментах,
                которые вы использовали.
              </div>
            </div>
            <div class="item">
              <div class="placeAndPosition">
                <div class="place">Университет Джорджии</div>
                <div class="position">Научный сотрудник</div>
              </div>
              <div class="grayText12">Jul 2015 - Aug 2019</div>
              <div class="grayText">
                Подробная информация о вашем опыте работы приведена здесь.
                Кратко продемонстрируйте что вы сделали и чего достигли на
                этой должности. Вы можете также рассказать об инструментах,
                которые вы использовали.
              </div>
            </div>
            <div class="item">
              <div class="placeAndPosition">
                <div class="place">Университет Джорджии</div>
                <div class="position">Научный сотрудник</div>
              </div>
              <div class="grayText12">Jan 2012 - Mar 2015</div>
              <div class="grayText">
                Подробная информация о вашем опыте работы приведена здесь.
                Кратко продемонстрируйте что вы сделали и чего достигли на
                этой должности. Вы можете также рассказать об инструментах,
                которые вы использовали.
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="blockTitle">Образование</div>
          <div class="list">
            <div class="item">
              <div class="placeAndPosition">
                <div class="place">Университет Джорджии</div>
                <div class="position">
                  Бакалавр компьютерных наук, Искусственный интеллект
                </div>
              </div>
              <div class="grayText12">
                Сентябрь 2019 - Настоящее время
              </div>
              <div class="grayText">
                Здесь вы можете упомянуть о том, что вы изучали, и кратко
                изложить подробности о том, что вы узнали. Вы также можете
                упомянуть о любых внеклассных мероприятиях, которые вы
                проводили в связи с вашей степенью.
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</body>
</html>
`;