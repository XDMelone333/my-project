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
      const content = await axios.get('/de/a/5da03c56503ca200015df6cb/api/event')
      this.content = content.data
      this.loading = false
    }
  }
}
</script>
<template>
  <div class="hello">
    <h1>Axios/Vuetify Demo</h1>
    <button @click="MakeRequest">Make Reqest</button>
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