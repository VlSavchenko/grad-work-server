
export const CV3 = `
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

  .CVContainer .cv3 {
    min-width: 210mm;
    min-height: 297mm;
    max-width: 210mm;
    max-height: 297mm;
    padding: 40px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .CVContainer .cv3 .f10_400_black {
    font-size: 10px;
    font-weight: 400;
    color: #000;
  }

  .CVContainer .cv3 .f14_700_blue {
    font-size: 14px;
    font-weight: 700;
    color: #005BA2;
  }

  .CVContainer .cv3 .f12_400_gray {
    font-size: 12px;
    font-weight: 400;
    color: #454545;
  }

  .CVContainer .cv3 .f12_500_gray {
    font-size: 12px;
    font-weight: 500;
    color: #454545;
  }

  .CVContainer .cv3 .f14_500_black {
    font-size: 14px;
    font-weight: 500;
    color: #000;
  }

  .CVContainer .cv3 .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .CVContainer .cv3 .header .nameAndPosition {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }

  .CVContainer .cv3 .header .nameAndPosition .name {
    font-size: 30px;
    font-weight: 700;
    color: #005BA2;
  }

  .CVContainer .cv3 .header .nameAndPosition .position {
    font-size: 14px;
    font-weight: 500;
    color: #000;
  }

  .CVContainer .cv3 .header .photo {
    width: 130px;
    height: 130px;
    border-radius: 999px;
  }

  .CVContainer .cv3 .asides {
    display: flex;
    gap: 24px;
    height: 100%;
  }

  .CVContainer .cv3 .asides .blockTitle {
    font-size: 18px;
    font-weight: 500;
    color: #000;
    border-bottom: 1px solid #000;
  }

  .CVContainer .cv3 .asides .sidebar {
    width: 40%;
    height: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .CVContainer .cv3 .asides .sidebar .block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    word-wrap: break-word;
  }

  .CVContainer .cv3 .asides .sidebar .block .list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .CVContainer .cv3 .asides .main {
    width: 60%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .CVContainer .cv3 .asides .main .block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    word-wrap: break-word;
  }

  .CVContainer .cv3 .asides .main .block .list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .CVContainer .cv3 .asides .main .block .list .item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .CVContainer .cv3 .asides .main .block .list .item .placeAndPosition {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 2px 10px;
  }

  .CVContainer .cv3 .asides .main .block .list .item .placeAndPosition .place {
    font-size: 14px;
    font-weight: 700;
    color: #005BA2;
  }

  .CVContainer .cv3 .asides .main .block .list .item .placeAndPosition .position {
    font-size: 12px;
    font-weight: 600;
    color: #005BA2;
  }
</style>

<body>
  <div class="CVContainer">
    <div class="cv3">
      <div class="header">
        <div class="nameAndPosition">
          <div class="name">Эндрю Маллен</div>
          <div class="position">Фронтенд разработчик</div>
        </div>
        <img class="photo"
             src="https://i.yapx.ru/WDRME.png"
             alt="user" />
      </div>

      <div class="asides">
        <aside class="main">
          <div class="block">
            <div class="blockTitle">Образование</div>
            <div class="list">
              <div class="item">
                <div class="placeAndPosition">
                  <div class="place">
                    Информатика, Национальный университет Пембангунан
                    ”Ветеран” Джокьякарта
                  </div>
                  <div class="position">
                    Бакалавр компьютерных наук, Искусственный интеллект
                  </div>
                </div>
                <div class="f10_400_black">
                  ИЮНЬ 2018- ИЮНЬ 2022
                </div>
                <div class="f12_400_gray"></div>
              </div>
              <div class="item">
                <div class="placeAndPosition">
                  <div class="place">Школа дизайна</div>
                  <div class="position">
                    Бакалавр компьютерных наук, Искусственный интеллект
                  </div>
                </div>
                <div class="f10_400_black">
                  ИЮНЬ 2018- ИЮНЬ 2022
                </div>
                <div class="f12_400_gray"></div>
              </div>
            </div>
          </div>

          <div class="block">
            <div class="blockTitle">Опыт работы</div>
            <div class="list">
              <div class="item">
                <div class="placeAndPosition">
                  <div class="place">ABC Company</div>
                  <div class="position">Стажер по UX-дизайну</div>
                </div>
                <div class="f10_400_black">
                  ЯНВАРЬ 2023 - НАСТОЯЩЕЕ ВРЕМЯ
                </div>
                <div class="f12_400_gray">
                  Подробная информация о вашем опыте работы приведена здесь.
                  Кратко продемонстрируйте что вы сделали и чего достигли на
                  этой должности. Вы можете также рассказать об инструментах,
                  которые вы использовали.
                </div>
              </div>
              <div class="item">
                <div class="placeAndPosition">
                  <div class="place">ABC Company</div>
                  <div class="position">Стажер по UX-дизайну</div>
                </div>
                <div class="f10_400_black">
                  ЯНВАРЬ 2023 - НАСТОЯЩЕЕ ВРЕМЯ
                </div>
                <div class="f12_400_gray">
                  Подробная информация о вашем опыте работы приведена здесь.
                  Кратко продемонстрируйте что вы сделали и чего достигли на
                  этой должности. Вы можете также рассказать об инструментах,
                  которые вы использовали.
                </div>
              </div>
              <div class="item">
                <div class="placeAndPosition">
                  <div class="place">ABC Company</div>
                  <div class="position">Стажер по UX-дизайну</div>
                </div>
                <div class="f10_400_black">
                  ЯНВАРЬ 2023 - НАСТОЯЩЕЕ ВРЕМЯ
                </div>
                <div class="f12_400_gray">
                  Подробная информация о вашем опыте работы приведена здесь.
                  Кратко продемонстрируйте что вы сделали и чего достигли на
                  этой должности. Вы можете также рассказать об инструментах,
                  которые вы использовали.
                </div>
              </div>
            </div>
          </div>
        </aside>
        <aside class="sidebar">
          <div class="block">
            <div class="blockTitle">Контакты</div>
            <div class="list">
              <div class="f14_500_black">hello@andrew.com</div>
              <div class="f14_500_black">+11012223344</div>
            </div>
          </div>
          <div class="block">
            <div class="blockTitle">Обо мне</div>
            <div class="f12_500_gray">
              У меня есть опыт работы в области информационных технологий, с
              акцентом на разработку интерфейсов и дизайн пользовательского
              интерфейса. Я отношусь к тому типу людей, которые хватаются за
              любую возможность узнать что-то новое. Вот почему мне нравятся
              сложные задачи. С этого момента я испытываю давление, требующее
              быстрого обучения и приобретете много нового опыта.
            </div>
          </div>
          <div class="block">
            <div class="blockTitle">Навыки</div>
            <div class="list">
              <div class="f12_500_gray">Дизайн взаимодействия</div>
              <div class="f12_500_gray">Визуальный дизайн</div>
              <div class="f12_500_gray">
                Пользовательское тестирование
              </div>
            </div>
          </div>
          <div class="block">
            <div class="blockTitle">Языки</div>
            <div class="list">
              <div class="f12_500_gray">Английский</div>
              <div class="f12_500_gray">Русский</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</body>
</html>
`