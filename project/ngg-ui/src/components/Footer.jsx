import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="col">
        <div className="row group">
          <nav className="info">
            <h3 className="information">Навигация по сайту</h3>
            <ul className="nav-links footer-nav-links">
              <li className="nav-link footer-nav-link"><NavLink to="/">Главная</NavLink></li>
              <li className="nav-link footer-nav-link"><NavLink to="/products">Все продукты</NavLink></li>
              <li className="nav-link footer-nav-link"><NavLink to="/liked-products">Понравившиеся продукты</NavLink></li>
            </ul>
          </nav>
          <div className="contact">
            <h3 className="text-7 footer-text">Контактная информация</h3>
            <div className="contact-info">
              <p className="text-8 footer-text">
                <i>Главный офис:</i> ИВТиПТ, Мильчакова, 8а, Ростов-на-Дону
              </p>
              <p className="text-9 footer-text">
                <i>Telephone</i>: +7 (988) 890-30-31
                <br />
                <i>Email</i>: hioimimipad@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="banners match-height group">
          <div className="award banner">
            <strong className="fw700">Years last for seconds,</strong>
            <br />
            <i style={{ fontStyle: 'italic', }}>Memories live forever...</i>
          </div>
          <div className="social banner">
            <img
              className="social-media-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
              alt="TG"
            />
            <img
              className="social-media-icon"
              src="/images/vk_logo.png"
              alt="VK"
            />
          </div>
        </div>
      </div>
      <div className="copyright group">
        <div className="copyright-wrap">
          <div className="text-12">© Next Gen Gear</div>
          <div className="site-construction-shotout">
            <div className="site-construction-shotout-design site-construction-shotout-section">
              <span className="site-construction-shotout-section-mark">Design by:&nbsp;</span>
              <a href="https://vk.com/s_i_l_s_i_l">vk.com/s_i_l_s_i_l</a>
            </div>
            <div className="site-construction-shotout-dev site-construction-shotout-section">
            <span className="site-construction-shotout-section-mark">Dev by:</span>
            <ul>
              <li><a href="https://vk.com/meranmadeaheat">vk.com/meranmadeaheat - front-end, logic</a></li>
              <li><a href="https://vk.com/bulbulbulbulbu1">vk.com/bulbulbulbulbu1 - back-end, DBs</a></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
