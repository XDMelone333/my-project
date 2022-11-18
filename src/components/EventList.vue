<script>

// import EventCard from "./EventCard.vue";

import EventContent from './EventContent.vue'

export default {
  components: {
//    EventCard,
    EventContent
  }
};

</script>
<template>
  <v-app>
      <div v-for="event in content" :key="event.id">
        <li>
          {{ event.id }}
          <EventContent/>
        </li>
    </div>
  </v-app>
</template>