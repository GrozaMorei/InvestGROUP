import './Contacts.scss';

export default function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__map-container container">
        <div className="contacts__inner">
          <h3 className="contacts__title">Контакты</h3>
          <p className="contacts__description">Оптовый поставщик «Султан»</p>

          <ul className="contacts__list">
            <li className="contacts__item">
              <h4 className="contacts__item-title">Адрес:</h4>
              <div className="contacts__item-inner">
                <img
                  src="/icons/geo.svg"
                  className="contacts__item-img"
                  alt="Location Icon"
                />
                <p className="contacts__item-text">
                  г. Кокчетав, ул. Ж. Ташенова 129Б (Рынок Восточный)
                </p>
              </div>
            </li>

            <li className="contacts__item">
              <h4 className="contacts__item-title">Отдел продаж:</h4>
              <div className="contacts__item-inner">
                <p className="contacts__item-text">+7 (777) 490-00-91</p>
                <p className="contacts__item-text">opt.sultan@mail.ru</p>
              </div>
            </li>

            <li className="contacts__item no-border">
              <h4 className="contacts__item-title">
                Данные налогоплательщика:
              </h4>
              <div className="contacts__item-inner">
                <img
                  src="/icons/file.svg"
                  className="contacts__item-img"
                  alt="File Icon"
                />
                <p className="contacts__item-text">
                  ИП Катран Д.С
                  <br />
                  ИИН:860113450858
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
