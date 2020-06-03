<template>
  <div>
    <img
      src="https://www.physicianspractice.com/sites/default/files/MedicalStaffWearingMasks_328176583.png"
      alt
      class="col s12 responsive-img main-img"
    />

    <Corona></Corona>

    <h5 class="divider"></h5>

    <Prevention></Prevention>
  </div>
</template>

<script>
import Corona from "./Corona";
import Prevention from "./Prevention";
export default {
  components: {
    Corona,
    Prevention
  }
};
</script>