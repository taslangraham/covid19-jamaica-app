<template>
  <div>
    <div class="input-field">
      <span class="active">
        <i class="material-icons prefix">search</i>

        <input type="text" placeholder="Search Country" v-model="search" class="valid" />
      </span>
    </div>

    <div class="row">
      <div class="card small col s12" v-for="(country, i) in filteredCountries" :key="i">
        <br />

        <div class="card-content">
          <div>
            <h4 class="card-title">{{country.country}}</h4>

            <h5>Total Cases: {{country.cases}} | Active Cases: {{country.active}}</h5>
            <h5>Deaths: {{country.deaths}}</h5>
            <h5>Recoveries: {{country.recovered}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getCountriesStats();
  },
  data() {
    return {
      search: "",
      countries: []
    };
  },

  computed: {
    filteredCountries() {
      return this.countries.filter(country => {
        return country.country
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    getCountriesStats() {
      fetch("https://corona.lmao.ninja/v2/countries/")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.countries = data;
        });
    }
  }
};
</script>