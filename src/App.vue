<script>

import axios from 'axios'

export default {
    data () {
    return {
        content: [],
        loading: false,
        selection: 1,
    }
  },
  methods: {
    async MakeRequest () {
      const content = await axios.get('https://corsproxy.io/?https%3A%2F%2Fwww.eventim-light.com%2Fde%2Fa%2F5da03c56503ca200015df6cb%2Fapi%2Fevent')
      this.content = content.data
    },
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  },
  mounted () {
    this.MakeRequest ()
  },
}
</script>
<template>
  <div>
    <v-app id="inspire">
      <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
          ></v-progress-linear>
        </template>
        <v-img
            height="250"
            src="https://www.eventim-light.com/de/api/image/5fb790f208559a0a31c427bb/shop_preview/webp"
        ></v-img>
        <v-card-title>Wohl bekloppt geworden</v-card-title>
        <p class="my-0 text-subtitle-1"></p>
        <v-card-subtitle>Die Comedy Mix Show im Atelier Theater</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-icon small>event</v-icon> 19.11.2022 <font-awesome-icon icon="fa-solid fa-calendar" class="me-2" /> 19:30
        </v-card-text>
        <v-card-actions>
          <v-btn color="green lighten-1" @click="reserve">
            From 17.55€
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>
