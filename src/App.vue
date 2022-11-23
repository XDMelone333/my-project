<script>

import EventList from './components/EventList.vue'
  
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('api');

  export default {
    data () {
      return {
        loadEvents: false
      }
    },

    methods: {
      shouldload (value) {
        if (value) {
          this.loadEvents = true
        }
      },
    },

    mounted () {
      this.shouldload (myParam)
    },

    components: {
      EventList
    }

  }
</script>

<template>
  <div>
    <v-app id="inspire">
      <div v-if="loadEvents">
        <EventList/>
      </div>
      <div v-else style="text-align: center">
        <p>You have not specified the api Parameter. Please specify it.</p>
        <br/>
        <p>Examples: 5da03c56503ca200015df6cb or 5dbf6b3029170500015b181b</p>
      </div>
    </v-app>
  </div>
</template>
