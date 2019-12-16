<template>
  <div :map="maps"></div>
</template>


<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f9157a0ae6e9594b55ac3ef7fc71cb16"></script>
<script>
export default {
  el: "KMap",
  data() {
    return {
      level: 4,
      lat: 33.450701,
      lng: 126.570667,
      maps: '',
    }
  },
  props: {
    
  },
  methods: {
    loadmap() {
      const options = {
        center: new.kakao.maps.Lating(this.lat, this.lng),
        level: this.level
      }
      this.maps
    }
  },
  mounted: {
    loadmap()
  }
}
</script>

<style>

</style>