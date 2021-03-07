export default {
  name: "PrevisaoTempo",
  data() {
    return {
      results: null,
    };
  },
  template: `
  <div v-if="results">
    <div>
        <h1>
        {{results.title}}
        </h1>
        <ul>
        <li v-for="result in results.consolidated_weather">
        <p>Dia: {{result.applicable_date}}</p>
        <img style="maxWidth: 100px" v-bind:src="'img/' + result.weather_state_abbr + '.svg'" />
        </li>
        </ul>
      </div>
  </div>
  `,

  created() {
    this.fetchTempo();
  },

  methods: {
    async fetchTempo() {
      let response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455827/"
      );
      let json = await response.json();
      console.log(json);
      this.results = json;
    },
  },
};
