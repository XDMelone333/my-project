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
        <p>Examples: </p><a href="./?api=5da03c56503ca200015df6cb">5da03c56503ca200015df6cb</a> <p> or </p> <a href="./?api=5dbf6b3029170500015b181b">5dbf6b3029170500015b181b</a>
      </div>
    </v-app>
  </div>
</template>
