<template>
  <div class="header">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{name: 'Home'}">
          <img src="./logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="28" height="28">
          白酒银行
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{name: 'AssetAnnouncement'}">
            资产公告
          </router-link>
          <router-link class="navbar-item" :to="{name: 'Roadmap'}">
            路线图
          </router-link>
          <router-link class="navbar-item" :to="{name: 'CustomerService'}">
            客服
          </router-link>
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
            </div>
          </div> -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span>
                    登录
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                  <!-- <span class="icon">
                    <i class="fas fa-download"></i>
                  </span> -->
                  <span>注册</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
