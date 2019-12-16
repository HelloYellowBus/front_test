<template>
  <v-col class="home">
    <GMap cols="6" />
    <KakaoMap cols="6" />
  </v-col>
</template>

<script>
// @ is an alias to /src
import GMap from "@/components/GMap.vue";
import KakaoMap from "@/components/KakaoMap.vue";

export default {
  name: "home",
  components: {
    GMap,
    KakaoMap,
  }
};
</script>
