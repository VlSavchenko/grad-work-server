
export const CV5 = `
<!DOCTYPE html>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  * {
    font-family: "Inter";
  }

  html {
    -webkit-print-color-adjust: exact;
  }

  body {
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

  .CVContainer .cv5 {
    min-width: 210mm;
    min-height: 297mm;
    max-width: 210mm;
    max-height: 297mm;
    box-sizing: border-box;
    padding: 60px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: initial;
  }

  .CVContainer .cv5 .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .CVContainer .cv5 .header .headerLeft {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .CVContainer .cv5 .header .headerLeft .photo {
    width: 120px;
    height: 120px;
    border-radius: 999px;
  }

  .CVContainer .cv5 .header .headerLeft .nameAndPosition {
    display: flex;
    flex-direction: column;
    gap: initial;
  }

  .CVContainer .cv5 .header .headerLeft .nameAndPosition .name {
    font-size: 20px;
    font-weight: 600;
    color: #3F3A45;
  }

  .CVContainer .cv5 .header .headerLeft .nameAndPosition .position {
    font-size: 12px;
    font-weight: 400;
    color: #5C5761;
  }

  .CVContainer .cv5 .header .contact {
    display: flex;
    flex-direction: column;
    gap: initial;
    font-size: 12px;
    font-weight: 400;
    color: #353232;
    justify-content: center;
  }

  .CVContainer .cv5 .asides {
    display: flex;
    gap: 20px;
    height: 100%;
    border-top: 1px solid #AEAEAE;
  }

  .CVContainer .cv5 .asides .blockTitle {
    box-sizing: border-box;
    padding-bottom: 9px;
    border-bottom: 1px solid #AEAEAE;
    font-size: 15px;
    font-weight: 500;
    color: #353232;
  }

  .CVContainer .cv5 .asides .sidebar {
    width: 35%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    padding: 13px 15px 13px 0px;
    border-right: 1px solid #AEAEAE;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .CVContainer .cv5 .asides .sidebar .about {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 12px;
    font-weight: 400;
    color: #5C5761;
  }

  .CVContainer .cv5 .asides .sidebar .skillsAndInterests {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .CVContainer .cv5 .asides .sidebar .skillsAndInterests .list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 24px;
  }

  .CVContainer .cv5 .asides .sidebar .skillsAndInterests .list div {
    font-size: 12px;
    font-weight: 400;
    color: #5C5761;
  }

  .CVContainer .cv5 .asides .sidebar .language {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .CVContainer .cv5 .asides .sidebar .language .list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .CVContainer .cv5 .asides .sidebar .language .list div {
    font-size: 12px;
    font-weight: 400;
    color: #5C5761;
  }

  .CVContainer .cv5 .asides .main {
    width: 65%;
    height: 100%;
    float: right;
    box-sizing: border-box;
    padding: 13px 0px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .CVContainer .cv5 .asides .main .block {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .CVContainer .cv5 .asides .main .block .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .CVContainer .cv5 .asides .main .block .list .item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    box-sizing: border-box;
    padding-bottom: 15px;
    border-bottom: 1px dashed #AEAEAE;
  }

  .CVContainer .cv5 .asides .main .block .list .item .placeAndDate {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 2px 10px;
  }

  .CVContainer .cv5 .asides .main .block .list .item .placeAndDate .place {
    font-size: 14px;
    font-weight: 600;
    color: #353232;
  }

  .CVContainer .cv5 .asides .main .block .list .item .placeAndDate .date {
    font-size: 12px;
    font-weight: 600;
    color: #353232;
  }

  .CVContainer .cv5 .asides .main .block .list .item .position {
    font-size: 12px;
    font-weight: 500;
    color: #A75A54;
  }

  .CVContainer .cv5 .asides .main .block .list .item .description {
    font-size: 12px;
    font-weight: 400;
    color: #5C5761;
  }
</style>

<body>

  <div class="CVContainer">
    <div class="cv5">
      <div class="header">
        <div class="headerLeft">
          <img class="photo"
               src="https://i.yapx.ru/WDRME.png"
               alt="user" />
          <div class="nameAndPosition">
            <div class="name">Эндрю Маллен</div>
            <div class="position">Фронтенд разработчик</div>
          </div>
        </div>

        <div class="contact">
          <div>+11012223344</div>
          <div>hello@andrew.com</div>
        </div>
      </div>
      <div class="asides">
        <aside class="sidebar">
          <div class="about">
            <div class="blockTitle">Обо мне</div>
            <div>
              У меня есть опыт работы в области информационных технологий, с
              акцентом на разработку интерфейсов и дизайн пользовательского
              интерфейса. Я отношусь к тому типу людей, которые хватаются за
              любую возможность узнать что-то новое. Вот почему мне нравятся
              сложные задачи. С этого момента я испытываю давление, требующее
              быстрого обучения и приобретете много нового опыта.
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
          <div class="language">
            <div class="blockTitle">Языки</div>
            <div class="list">
              <div>Русский</div>
              <div>Английский</div>
            </div>
          </div>
        </aside>
        <aside class="main">
          <div class="block">
            <div class="blockTitle">Опыт работы</div>
            <div class="list">
              <div class="item">
                <div class="placeAndDate">
                  <div class="place">Университет Джорджии</div>
                  <div class="date">
                    Сентябрь 2019 - Настоящее время
                  </div>
                </div>
                <div class="position">Научный сотрудник</div>
                <div class="description">
                  Провел исследование пользователей и проанализировал данные
                  для определения дизайна возможности и обоснованные
                  дизайнерские решения. Сотрудничал с кросс-функциональные
                  команды для создания каркасов, прототипов и высокоточных
                  макетов.
                </div>
              </div>
              <div class="item">
                <div class="placeAndDate">
                  <div class="place">Университет Джорджии</div>
                  <div class="date">
                    Сентябрь 2019 - Настоящее время
                  </div>
                </div>
                <div class="position">Научный сотрудник</div>
                <div class="description">
                  Подробная информация о вашем опыте работы приведена здесь.
                  Кратко продемонстрируйте что вы сделали и чего достигли на
                  этой должности. Вы можете также рассказать об инструментах,
                  которые вы использовали.
                </div>
              </div>
              <div class="item">
                <div class="placeAndDate">
                  <div class="place">Университет Джорджии</div>
                  <div class="date">
                    Сентябрь 2019 - Настоящее время
                  </div>
                </div>
                <div class="position">Научный сотрудник</div>
                <div class="description">
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
                <div class="placeAndDate">
                  <div class="place">Университет Джорджии</div>
                  <div class="date">
                    Сентябрь 2019 - Настоящее время
                  </div>
                </div>
                <div class="position">
                  Бакалавр компьютерных наук, Искусственный интеллект
                </div>
                <div class="description">
                  Здесь вы можете упомянуть о том, что вы изучали, и кратко
                  изложить подробности о том, что вы узнали. Вы также можете
                  упомянуть о любых внеклассных мероприятиях, которые вы
                  проводили в связи с вашей степенью.
                </div>
              </div>
              <div class="item">
                <div class="placeAndDate">
                  <div class="place">Университет Джорджии</div>
                  <div class="date">
                    Сентябрь 2019 - Настоящее время
                  </div>
                </div>
                <div class="position">
                  Бакалавр компьютерных наук, Искусственный интеллект
                </div>
                <div class="description">
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
  </div>

</body>

</html>
`;