<script>
import axios from 'axios'
export default {
  data () {
    return {
      content: [],
      loading: false,
      search: '',
      headers: [
        {
          text: 'Title',
          align: 'start,',
          value: 'title'
        },
        { text: 'Topic', value: 'subtitle' },
        { text: 'Price in EUR', value: 'value' },
        { text: 'Sold out', value: 'soldout' }
      ]
    }
  },
  methods: {
    async MakeRequest () {
      this.loading = true
      const content = await axios.get('https://corsproxy.io/?https%3A%2F%2Fwww.eventim-light.com%2Fde%2Fa%2F5da03c56503ca200015df6cb%2Fapi%2Fevent')
      this.content = content.data
      this.loading = false
    }
  },
  mounted () {
    this.MakeRequest ()
  }
}
</script>
<template>
  <div class="hello">
    <h1>Axios/Vuetify Demo</h1>
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
    ></v-text-field>
        <v-data-table
            :headers="headers"
            :items="content"
            :items-per-page="10"
            :loading="loading"
            loading-text="loading..."
            class="elevation-1"
            :search="search"
        >
        </v-data-table>
  </div>
</template>