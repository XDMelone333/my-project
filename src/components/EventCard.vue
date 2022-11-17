<script>

export default {
  data () {
    return {
        
    }
  }
}

const eventStartDate = computed(() => new Date(props.event.doorsOpen).toLocaleDateString("de-DE"));
const eventStartTime = computed(() =>
  new Date(props.event.doorsOpen).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  })
);

function formatPrice(price: Price) {
  if (price.currency === "EUR") return `${price.value} €`;
  else return `${price.value} ${price.currency}`;
}
</script>