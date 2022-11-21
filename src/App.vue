<script>
  import axios from 'axios'
  
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('api');
  
  export var apiUrl = `https://corsproxy.io/?https%3A%2F%2Fwww.eventim-light.com%2Fde%2Fa%2F${myParam}%2Fapi%2Fevent`;
  export default {
    data () {
      return {
        content: [],
        selection: 1,
        loadEvents: false
      }
    },
    methods: {
      async MakeRequest () {
        if (myParam) { 
          const content = await axios.get(apiUrl)
          this.content = content.data
        }
      },
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
      getImageUrl (id) {
        return `https://www.eventim-light.com/de/api/image/${id}/shop_preview/webp`
      },
      formatPrice (price) {
        if (price.currency === "EUR") return `${price.value} €`
        else return `${price.value} ${price.currency}`
      },
      shouldload () {
        if (myParam) {
          this.loadEvents = true
        }
      }
    },
    mounted () {
      this.MakeRequest ()
      this.shouldload ()
    }
  }
</script>

<template>
  <div>
    <v-app id="inspire">
      <v-row no-gutters v-if="loadEvents">
        <v-col v-for="event in content" :key="event.id">
          <v-card
            class="mx-auto my-5"
            max-width="374"
            min-width="374"
            outlined
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              >
              </v-progress-linear>
            </template>
            <v-img height="250" :src="getImageUrl(event.image.id)"></v-img>
            <figcaption class="mx-3 mt-1 text-end grey--text" :style="{'font-size': '12px'}">Image: {{ event.image.copyright }}</figcaption>
            <div class="white--text">
              <h3 class="mx-4">{{ event.title }}</h3>
              <v-card-subtitle class="mt-0">{{ event.subtitle }}</v-card-subtitle>
              <v-divider class="mx-4"></v-divider>
              <v-card-text>
                <font-awesome-icon icon="fa-solid fa-calendar" class="me-1"/> {{ new Date(event.doorsOpen).toLocaleDateString("de-DE") }}
                <font-awesome-icon icon="fa-solid fa-clock" class="ms-2" /> {{ new Date(event.doorsOpen).toLocaleTimeString("de-DE", {hour: "2-digit", minute: "2-digit"}) }}
                <div class="my-2">
                  <font-awesome-icon icon="fa-solid fa-location-dot" class="me-1"/> {{ event.venue.name }}, {{ event.venue.city }}
                </div>
              </v-card-text>
            </div>
            <v-card-actions>
              <template v-if="event.soldout">
                <v-btn depressed color="green--text">Sold out</v-btn>
              </template>
              <template v-else-if="!event.salesStart || event.salesStart < new Date().toISOString()">
                <v-btn color="green" @click="reserve"> From {{ formatPrice(event.minPrice) }} </v-btn>
              </template>
              <template v-else>
                <v-btn color="green darken-4 grey--text">Coming soon...</v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div v-else>
        <p>You have not specified the api Parameter. Please specify it.</p>
        <br/>
        <p>Examples: 5da03c56503ca200015df6cb or 5dbf6b3029170500015b181b</p>
      </div>
    </v-app>
  </div>
</template>
