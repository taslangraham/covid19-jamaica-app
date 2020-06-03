<template>
  <div class="row">
    <div class="col m6 s12 card medium">
      <a
        class="twitter-timeline"
        href="https://twitter.com/Babsy_grange?ref_src=twsrc%5Etfw"
      >Tweets by Babsy Grange</a>
    </div>
    <div class="col m6 s12 card medium">
      <a
        class="twitter-timeline"
        href="https://twitter.com/christufton?ref_src=twsrc%5Etfw"
      >Tweets by Chris Tuffton</a>
    </div>
    <div class="col m6 s12 card medium">
      <a
        class="twitter-timeline"
        href="https://twitter.com/themohwgovjm?ref_src=twsrc%5Etfw"
      >Tweets by Chris Tuffton</a>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    this.setupTwitterScript();
  },

  methods: {
    setupTwitterScript() {
      let twitterScript = document.createElement("script");
      twitterScript.setAttribute(
        "src",
        "https://platform.twitter.com/widgets.js"
      );
      document.head.appendChild(twitterScript);
    }
  }
};
</script>

<style lang="css" scoped>
.card {
  max-height: 600px;
  overflow: auto;
}
</style>
