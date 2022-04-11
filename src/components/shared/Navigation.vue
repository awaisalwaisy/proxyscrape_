<template>
  <header>
    <div id="sticky-wrapper-sticky-wrapper" class="sticky-wrapper" style="height: 70px;">
      <nav id="sticky-wrapper fixed-top">
        <div id="navaccordion" class="container accordion">
          <div class="row">
            <div class="col-md-3 mobile-toggler-wrapper">
              <router-link id="logoheadurl" to='/'>
                <img
                  id="toplogo" alt="dark proxyscrape logo"
                  src="https://cdn.proxyscrape.com/img/logo/dark_text_logo.png">
              </router-link>
              <button
                class="navbar-toggler"
                type="button"
              >
                <span class="navbar-toggler-icon">
                <img
                  alt=""
                  src='@/assets/img/svg/menu-toggle.svg'
                  style='width: 100%; height: 100%;'
                >
              </span>
              </button>
            </div>
            <div class="col-md-9 navigation-container">
              <div class="navigation navbar-expand">
                <ul id="mainmenu" class="list-inline text-right collapse navbar-collapse">

                  <li>
                    <router-link to='/'>Home</router-link>
                  </li>
                  <li class="dropdown  current-menu-has-children">
                    <router-link to=''>
                      Services <img alt="" src='@/assets/img/svg/menu-dropdown.svg'>
                    </router-link>
                    <div class="collapse">
                      <ul class="dropdown-nav dropdown-nav-left">
                        <li>
                          <router-link to='/premium'>Premium</router-link>
                        </li>
                        <li>
                          <router-link to='/residential'>Residential</router-link>
                        </li>
                        <li>
                          <router-link to='/dedicated'>Dedicated</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="dropdown  current-menu-has-children">
                    <a>Freebies
                      <img alt="" src='@/assets/img/svg/menu-dropdown.svg'>
                    </a>
                    <div class="collapse show" data-parent="#navaccordion">
                      <ul class="dropdown-nav dropdown-nav-left">
                        <li>
                          <router-link to='/free-proxy-list'>Free proxy list</router-link></li>
                        <li><a href="/web-proxy">Web proxy</a></li>

                        <li><a href="/online-proxy-checker">Online proxy checker</a></li>
                        <li><a href="/proxy-filter">Proxy filter</a></li>
                        <li><a href="https://docs.proxyscrape.com/" target="_blank">API</a></li>
                      </ul>
                    </div>
                  </li>

                  <li class="dropdown current-menu-has-children">
                    <a aria-controls="helpmenu"
                       aria-expanded="false"
                       aria-label="Toggle help navigation"
                       class="collapsed"
                       data-target="#helpmenu" data-toggle="collapse">help
                      center
                      <img alt="" src='@/assets/img/svg/menu-dropdown.svg'>
                    </a>
                    <div id="helpmenu" class="collapse" data-parent="#navaccordion">
                      <ul class="dropdown-nav dropdown-nav-left">
                        <li><a href="/help-center">Visit help center</a></li>
                        <li><a href="https://support.proxyscrape.com/">Knowledge base</a></li>
                        <li><a href="https://roadmap.proxyscrape.com/">Roadmap</a></li>
                        <li><a href="/contact">Contact</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="/blog/">Blog</a></li>
                  <li><a href="https://dashboard.proxyscrape.com/login">Login</a></li>

                </ul>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </div>
  </header>
</template>

<script lang='ts' setup>
</script>

<style scoped>
.navigation > ul > li.current-menu-has-children > a img {
  width: 10px;
  margin-left: 8px;
  fill: #3e445b;
  -webkit-transition: .2s;
  transition: .2s;
}
</style>
