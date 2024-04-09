import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import djangoFetch from '../apis/fetch';

export default function Header({ headerBGcontent, }) {
  return (<header className="header">
      <div className="top-bar">
        {/* <img class="text-31" src="images/currency_gbp.png" alt="Currency : GBP   " width="94" height="12" title="Currency : GBP   "> */}
        <div className="cart">
          <img
            className="text-33 cart-img"
            src="/images/image_11.png"
            alt="cart"
          />
          {/* <img class="text-34" src="/images/empty.png" alt="empty   " width="59" height="12" title="empty   "> */}
          <span className="goods-count">
            Пусто
          </span>
          <img
            src="/images/image_7.png"
            alt="arrow"
            className='arrow-img'
            style={{ filter: "contrast(100)" }}
          />
          <Link to="/cart" className='cart-link'></Link>
        </div>
        <NavLink to="/sign-in-and-up" className="text-32">
          Зарегестрироваться
        </NavLink>
        <NavLink to="/sign-in-and-up" className="text-32">
          Войти
        </NavLink>
      </div>
      <div className="header-body">
        <div className="next-gen-gear-abbr">
          <span className="next-gen-gear-abbr-letter">N</span>
          <span className="next-gen-gear-abbr-letter">G</span>
          <span className="next-gen-gear-abbr-letter">G</span>
        </div>
        <h1 className="logo">
          <Link to="/">
            Next Gen&nbsp;
            <strong style={{ fontWeight: 400 }} className="fw700">
              Gear
            </strong>
          </Link>
        </h1>
        <div className="col-4">
          <div className="row-6">
            <div className="nav-2">
              <nav className="nav-2-2">
                <ul className="nav-list-2">
                  <li>
                    <p className="nav-item-1-6 text-item">
                      <NavLink to="/">
                        Главная
                        <img
                          className="navlink-arrow text-37"
                          src="/images/image_7.png"
                          alt=""
                          width={8}
                          height={5}
                          title=""
                        />
                      </NavLink>
                    </p>
                  </li>
                  <li>
                    <p className="nav-item-2 text-item">
                      <NavLink to="/products">
                        Продукты{" "}
                        <img
                          className="navlink-arrow text-37"
                          src="/images/image_7.png"
                          alt=""
                          width={8}
                          height={5}
                          title=""
                        />
                      </NavLink>
                    </p>
                  </li>
                  <li>
                    <p className="nav-item-2-2 text-item">
                      <NavLink to="/view-product/1">
                        Просмотреть продукт{" "}
                        <img
                          className="navlink-arrow text-37"
                          src="/images/image_7.png"
                          alt=""
                          width={8}
                          height={5}
                          title=""
                        />
                      </NavLink>
                    </p>
                  </li>
                  <li>
                    <p className="nav-item-2-3 text-item">
                      <NavLink to="/liked-products">
                        Понраившиеся продукты{" "}
                        <img
                          className="navlink-arrow text-37"
                          src="/images/image_7.png"
                          alt=""
                          width={8}
                          height={5}
                          title=""
                        />
                      </NavLink>
                    </p>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="search"
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="text"
                placeholder="Поиск..."
              />
              <img
                className="text-39"
                src="/images/image_6.png"
                style={{ position: "absolute", right: 5, pointerEvents: "none" }}
                alt=""
                width={13}
                height={15}
                title=""
              />
              {/* <p class="search-2">Search..</p> */}
            </div>
          </div>
          {/* <div class="sub-nav group">
          <div class="row-2 group">
            <div class="casuals">
              <p class="casuals-2">casuals</p>
              <p class="text-40">Jackets<br>Hoodies &amp; Sweatshirts<br>Polo Shirts<br>Sportswear<br>Trousers &amp; Chinos<br>T-Shirts</p>
            </div>
            <div class="formal">
              <p class="formal-2">Formal</p>
              <p class="text-41">Jackets<br>Shirts<br>Suits<br>Trousers</p>
            </div>
          </div>
          <div class="banner">
            <strong class="fw700">Autumn sale!</strong>
            <br>up to 50% off
          </div>
        </div> */}
          <Link className="default-4" to="/products">
            {/* <div class="default-4"> */}
            Посетите страницу с продуктами
            {/* </div> */}
          </Link>
        </div>
      </div>
      <div className="slider">
        <div className="slider-img"></div>
        <div className="slider-shadow"></div>
      </div>
    </header>
  )
}

