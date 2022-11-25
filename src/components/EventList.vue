<script>

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('api');


  export var apiUrl = `https://corsproxy.io/?https%3A%2F%2Fwww.eventim-light.com%2Fde%2Fa%2F${myParam}%2Fapi%2Fevent`
  export default {

    methods: {
      getImageUrl (id) {
        return `https://www.eventim-light.com/de/api/image/${id}/shop_preview/webp`
      },
      onScroll (e) {
        if (typeof window === 'undefined') return
          const top = window.pageYOffset ||   e.target.scrollTop || 0
          this.fab = top > 20
      },
      toTop () {
        this.$vuetify.goTo(0)
      }
    },

    computed: {
      filteredContent: function () {
        return this.$store.state.content.filter((event) => {
          return event.title.toLowerCase().match(this.$store.state.search.toLowerCase())
        })
      }
    }
  }

</script>


<template>

  <div>
    <v-container>
      <v-text-field v-model="$store.state.search" label="Search" placeholder="Title" filled rounded dense></v-text-field>
    </v-container>
    <v-container>
    <v-layout row wrap justify-space-arround>
      <v-flex v-for="event in filteredContent" :key="event.id">
        <v-card
          class="mx-auto my-5"
          max-width="374"
          min-width="374"
          outlined
        >
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
          <v-card-actions class="justify-end">
            <template v-if="event.soldout">
              <v-btn depressed color="green--text">Sold out</v-btn>
            </template>
            <template v-else-if="!event.salesStart || event.salesStart < new Date().toISOString()">
              <v-btn
                v-scroll="onScroll"
                color="green"
                @click="toTop"
              >
                From {{ $store.getters.formatPrice(event.minPrice) }}
              </v-btn>
            </template>
            <template v-else>
              <v-btn color="green darken-4 grey--text">Coming soon...</v-btn>
            </template>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>

</template>