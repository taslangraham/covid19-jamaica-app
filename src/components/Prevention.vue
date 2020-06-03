<template>
  <div class>
    <div class="row">
      <div>
        <h2 class="col s12">Prevention</h2>
        <sub>Click to enlarge</sub>
      </div>
    </div>

    <div class="row">
      <img
        class="col s12 m6 materialboxed card-image"
        data-caption="Work from home"
        src="https://static.vecteezy.com/system/resources/previews/000/932/107/non_2x/woman-working-from-home-to-prevent-spreading-virus-vector.jpg"
      />

      <img
        class="materialboxed col s12 m6 card-image"
        data-caption="Maintain 6ft social distancing to prevent virus from spreding"
        src="https://static.vecteezy.com/system/resources/previews/000/952/903/non_2x/social-distancing-man-and-woman-vector.jpg"
      />
    </div>

    <div class="row">
      <img
        class="materialboxed col s12 m6"
        data-caption="Wash hands often"
        src="https://image.freepik.com/free-vector/how-wash-your-hands_23-2148477231.jpg"
      />
      <img
        class="col s12 m6 materialboxed"
        data-caption="Wear protective mask"
        src="https://static.vecteezy.com/system/resources/previews/000/833/664/non_2x/people-wearing-protective-face-masks-vector.jpg"
      />
    </div>
  </div>
</template>       



<script>
import M from "materialize-css";

export default {
  mounted() {
    this.setupMaterialBox();
  },
  methods: {
    setupMaterialBox() {
      var elems = document.querySelectorAll(".materialboxed");
      M.Materialbox.init(elems, {
        overlayActive: true,
        inDuration: 35
      });
    }
  }
};
</script>
<style lang="css" scoped>
img {
  max-height: 250px;
}
</style>