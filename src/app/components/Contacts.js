// Импорт стилей
import '../../styles/components/Contacts.css';

export default function Contacts() {
  return (
    <section className="map">
      <div className="container">
        <div className="map-inner">
          <img className="map-img" src="/images/map.jpg"></img>

          <div className="contact-inner">
            <h3 className="contact-title">Контакты</h3>
            <p className="contact-description">Оптовый поставщик «Султан»</p>

            <ul className="contact-list">
              <li className="contact-item">
                <h4 className="item-title">Адрес:</h4>
                <div className="item-inner">
                  <img src="/icons/geo.svg" className="item-img"></img>
                  <p className="item-text">
                    г. Кокчетав, ул. Ж. Ташенова 129Б (Рынок Восточный)
                  </p>
                </div>
                <div className="divider"></div>
              </li>

              <li className="contact-item">
                <h4 className="item-title">Отдел продаж:</h4>
                <div className="item-inner-2">
                  <p className="item-text">+7 (777) 490-00-91</p>
                  <p className="item-text">opt.sultan@mail.ru</p>
                </div>
                <div className="divider"></div>
              </li>

              <li className="contact-item">
                <h4 className="item-title">Данные налогоплательщика:</h4>
                <div className="item-inner">
                  <img src="/icons/file.svg" className="item-img"></img>
                  <p className="item-text">
                    ИП Катран Д.С <br></br>
                    ИИН:860113450858
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
