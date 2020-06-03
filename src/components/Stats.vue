<template>
  <div style="margin-top:50px;">
    <div class="row">
      <div class="col m6 s12">
        <div class="card medium" id="local">
          <div class="card-content">
            <h5>Current Statistics in Jamaica</h5>
            <h1 class="divider"></h1>
            <h6>Cases: {{localStats.cases}}</h6>
            <h1 class="divider"></h1>

            <h6>Deaths: {{localStats.deaths}}</h6>
            <h1 class="divider"></h1>
            <h6>Recoveries: {{localStats.recoveries}}</h6>
          </div>
        </div>
      </div>

      <div class="col m6 s12">
        <div class="card medium" id="global">
          <div class="card-content">
            <h5>Global Statistics</h5>
            <h1 class="divider"></h1>
            <h6>Cases: {{globalStats.cases}}</h6>
            <h1 class="divider"></h1>

            <h6>Deaths: {{globalStats.deaths}}</h6>
            <h1 class="divider"></h1>
            <h6>Recoveries: {{globalStats.recoveries}}</h6>
          </div>
        </div>
      </div>
      <button class="btn waves-effect" @click="showContries=!showContries">
        <span>
          <i class="material-icons">language</i>
          Countries
        </span>
      </button>
    </div>

    <div class="row" v-if="showContries">
      <Countries></Countries>
    </div>
  </div>
</template>


<script>
import Countries from "./Countries";
export default {
  components: {
    Countries
  },
  created() {
    this.fetchStatistics(this.localStats, "jm");
    this.fetchStatistics(this.globalStats, "all");
  },

  data() {
    class Stats {
      constructor() {
        this.cases = 0;
        this.deaths = 0;
        this.recoveries = 0;
      }
    }
    return {
      showContries: false,
      localStats: new Stats(),
      globalStats: new Stats()
    };
  },
  methods: {
    fetchStatistics(obj, region) {
      let local = "jm";
      let localUrl = `https://corona.lmao.ninja/v2/countries/jm`;
      let intUrl = `https://coronavirus-19-api.herokuapp.com/all`;
      let url = region === local ? localUrl : intUrl;

      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          obj.cases = data.cases;
          obj.deaths = data.deaths;
          obj.recoveries = data.recovered;
        });
    }
  }
};
</script>
<style lang="css" scoped>
#local {
  background-color: #e3f2fd;
}

#global {
  background-color: #fff9c4;
}

.material-icons {
  display: inline-flex;
  vertical-align: top;
}
</style>