<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <router-view class="center-align"></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/shared/NavBar";

import M from "materialize-css";
export default {
  name: "App",

  components: {
    NavBar
  },
  mounted() {
    // initialize materialize.css
    M.AutoInit();
  }
};
</script>

<style >
.main-img {
  max-height: 500px;
  height: auto;
}

body {
  background-color: #edf0f5;
}
</style>
