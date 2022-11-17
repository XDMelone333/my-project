<script>

// import EventCard from "./EventCard.vue";
import axios from 'axios'

export default {
  components: {
//    EventCard,
  },
  methods: {
    async MakeRequest () {
      const content = await axios.get('https://corsproxy.io/?https%3A%2F%2Fwww.eventim-light.com%2Fde%2Fa%2F5da03c56503ca200015df6cb%2Fapi%2Fevent')
      this.content = content.data
    }
  },
  mounted () {
    this.MakeRequest ()
  },
  data () {
    return {
        content: []
    }
  }
};

</script>
<template>
  <v-app>
      <div v-for="event in content" :key="event.id" class="col-12 col-md-6 col-xl-4">
        <li>
            {{ event.id }}
        </li>
    </div>
  </v-app>
</template>