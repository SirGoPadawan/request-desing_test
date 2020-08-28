<template>
  <nav class="header-bottom">
    <div v-if="isOpen" class=" header-bottom__modal search__modal "></div>
    <ul class="header-bottom__list">
      <li>
        <span @click="isOpen = !isOpen" class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/1.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
        <ul v-if="isOpen" class="header-bottom__sub-list">
          <li class="header-bottom__sub-item">
            <div
              :class="{ 'active-sub-menu': isOpenSubMenu }"
              class="header-bottom__div"
              @click="isOpenSubMenu = !isOpenSubMenu"
            >
              Lorem, ipsum dolor.
            </div>
            <div v-if="isOpenSubMenu" class="header-bottom__sub-list_left">
              <ul>
                <li>
                  <ul class="header-bottom__sub-item-prod">
                    <li><a href="#">Бойлерное</a></li>
                    <li><a href="#">Инжекторное</a></li>
                    <li><a href="#">Все сразу</a></li>
                  </ul>
                </li>
                <li>
                  <ul class="header-bottom__sub-item-brands">
                    <li><span>Бренды</span></li>
                    <li><a href="#">Abat</a></li>
                    <li><a href="#">Unox</a></li>
                    <li><a href="#">Проммарш</a></li>
                    <li><a href="#">Atesy</a></li>
                    <li><a href="#">Rational</a></li>
                  </ul>
                </li>
                <li>
                  <ul class="header-bottom__sub-item-country">
                    <li><span>Страны</span></li>
                    <li>
                      <img
                        src="../static/spain.png"
                        alt="spain flag"
                        class="flag"
                      />
                      <a href="#">Испания</a>
                    </li>
                    <li>
                      <img
                        src="../static/switzerland.png"
                        alt="italian flag"
                        class="flag"
                      />
                      <a href="#">Италия</a>
                    </li>
                    <li>
                      <img
                        src="../static/germany.png"
                        alt="germany flag"
                        class="flag"
                      />
                      <a href="#">Германия</a>
                    </li>
                    <li>
                      <img
                        src="../static/turkey.png"
                        alt="turkey flag"
                        class="flag"
                      />
                      <a href="#">Турция</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="header-bottom__sub-item-all">
                <div>
                  <img
                    src="../img/sub-img1.png"
                    alt="картинка"
                    class="header-bottom__sub-item-all__img"
                  />
                </div>
                <span class="header-bottom__sub-item-all__title"
                  >Пароконвектоматы</span
                >
                <a href="#" class="header-bottom__sub-item-all__link"
                  >Все сразу</a
                >
              </div>
            </div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
          <li class="header-bottom__sub-item">
            <div class="header-bottom__div">Lorem, ipsum dolor.</div>
          </li>
        </ul>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/2.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/3.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/4.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/5.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/6.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/7.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/8.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/9.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/10.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
      <li>
        <span class="header-bottom__item">
          <div class="header-bottom__box-img">
            <img src="../img/11.png" alt="lorem" class="header-bottom__img" />
          </div>
          <span>Lorem, ipsum.</span>
        </span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      isOpenSubMenu: false,
    };
  },
};
</script>
