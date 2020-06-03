<template>
  <div class="row">
    <h3>Click marker to view statistics</h3>
    <div style="height: 89vh; " class="col s12">
      <l-map :zoom="5" :center="center" @update:zoom="zoomUpdated" @update:bounds="boundsUpdated">
        <l-tile-layer :url="url"></l-tile-layer>

        <template v-for="(country, i) in countries">
          <l-marker :key="i" :lat-lng="[country.countryInfo.lat, country.countryInfo.long]" v>
            <l-popup>
              <h5>{{country.country}}</h5>
              <br />
              total case: {{country.cases}},
              active cases : {{country.active}}
              deaths: {{country.deaths}},
              recoveries: {{country.recovered}}
            </l-popup>
          </l-marker>
        </template>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  mounted() {
    this.getCountriesStats();
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 4,
      center: [18.25, -77.5],
      bounds: null,
      countries: []
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
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
