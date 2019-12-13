<template>
  <v-col class="home" cols="6">
    <GMap />
  </v-col>
  
</template>

<script>
// @ is an alias to /src
import GMap from "@/components/GMap.vue";

export default {
  name: "home",
  components: {
    GMap
  }
};
</script>
