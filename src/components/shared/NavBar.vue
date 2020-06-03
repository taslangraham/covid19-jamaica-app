<template>
  <div>
    <div class="navbar-fixed">
      <nav class="blue darken-1">
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">Covidly</router-link>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <router-link to="/map">Map</router-link>
            </li>
            <li>
              <router-link to="/tweets">Tweets</router-link>
            </li>
            <li>
              <router-link to="/stats">Stats</router-link>
            </li>
            <li>
              <router-link to="/contacts">Contacts</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <ul id="slide-out" class="sidenav sidenav-close">
      <li>
        <router-link to="/map">Map</router-link>
      </li>
      <li>
        <router-link to="/tweets">Tweets</router-link>
      </li>
      <li>
        <router-link to="/stats">Stats</router-link>
      </li>
      <li>
        <router-link to="/contacts">Contacts</router-link>
      </li>
    </ul>
  </div>
</template>



<script>
import M from "materialize-css";

export default {
  mounted() {
    this.loadNav();
  },
  methods: {
    loadNav() {
      let elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {
        preventScrolling: true
      });
    }
  }
};
</script>
<style lang="css" scoped>
nav {
  padding-left: 1em;
}
</style>