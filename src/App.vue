<template>
  <div id="app">
    <div id="nav" class="row">
      <div class="column">
        <logo>
          Brazil Is Not Real!
        </logo>
      </div>
      <div class="column motdcol">
        <div center>
          [ <span id="motd">loading...</span> ]
        </div>
      </div>
      <div class="column">
        <div fright>
          <router-link menuitem to="/">Home</router-link> 
          <Router-Link to="/about" menuitem >Shop</router-link>
          <router-link to="/catalog">Catalog</router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script src="./assets/main.js"></script>

<style lang="scss">
contentmain {
  position:absolute;
  left: 0;
  top: 100px;
  margin-top: 20px;
  width: 100%;
  height: auto;
  
}

.tleft {
  text-align: left;
  padding-left: 8%;
}
.tright {
  text-align: right;
  padding-right: 8%;
}
conthead {
  font-size: 1.5rem;
  text-decoration: underline;
}
.home {
  width: 100%;
  height: auto;
  margin-top: 20px;
  
}
hr {height: 1px;
    border: 0; border-top: 1px solid rgb(146, 145, 145); padding: 0; }
[asd] {
  width: 65%;
}
img {
  width: 45%;
}

@media (max-width: 815px) {
  .motdcol {visibility: hidden;}
}
#app {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
}
[headd] {
  font-family: 'Titillium Web', sans-serif !important;
  text-transform: uppercase;
  font-weight: 600!important;
  letter-spacing: 1.1px;
  margin: 0 !important;
}
[resp] {
    font-size: 3vw;

}
sub {
  font-family: 'Titillium Web', sans-serif !important;
  text-transform: uppercase;
  font-weight: 400!important;
  font-size: 1.2rem;
}
.column {
  float: left;
  width: 33.33%;
}
.columntwo {
  float: left;
  width: 42%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
[menuitem] {
  margin-right: 25px;
}
logo { 
  float: left;
  font-weight: 550;
  color: #585757;
}
[center] {
  text-align: center;
  width: auto;
  display: block;
    margin-left: auto;
    margin-right: auto;
}
[fright] {
  float: right;
}
#app {
  font-family: "Courier New", "Courier", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #585757;
  z-index: 999 !important;
  pointer-events: auto;
}

#nav {
  padding: 30px;

  a {
    color: #585757;
    text-decoration: none!important;
      font-style: italic;
    &.router-link-exact-active {

      font-weight: 600;
    }
  }
}
</style>

<script>
~(function() {
    var __globals = [];
    (function() {
        const queryString = window.location.search;
        const urlPathname = window.location.pathname;
        const curTitle = window.document.title;
        const dtNow = new Date();

        __globals.push(queryString, urlPathname, curTitle, dtNow);
        console['log']("[RWAPI] RyanWans API v4.5 Alpha Production (GIPE Analytics, PreRender, VueEx");
        
        let motd = "BETA RELEASE"
        $(document).ready(function(){
          $('#motd').text(motd);
        });

        let aa = urlPathname.split("/");
        window.document.title = "Brazil Is Not Real [Beta]";
    })();
})();

</script>

<script lang="ts">

import * as main from './assets/main.js';
main.main();

export default {
  name: 'App',
  methods: {
    newpage() {
      main.main();
    }
  },
  created() {
    this.newpage();
  },
};
</script>