<template>
  <div id="app">
    <div id="nav" class="row">
      <div class="column">
        <logo>
          Brazil Is Not Real!
        </logo>
      </div>
      <div class="column">
        <div center>
          [ Welcome ! ]
        </div>
      </div>
      <div class="column">
        <div fright>
          <router-link menuitem to="/">Home</router-link> 
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
}
.column {
  float: left;
  width: 33.33%;
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
  width: 300px;
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
