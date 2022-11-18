<script>
import axios from 'axios'
export default {
    data () {
    return {
        content: []
    }
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
}
</script>
<template>
    <h1> {{ content }}</h1>
</template>