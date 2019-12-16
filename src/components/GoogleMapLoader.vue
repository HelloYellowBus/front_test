<template>
  <div id="map" style="width:500px;height:400px;">
      


  </div>
</template>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f9157a0ae6e9594b55ac3ef7fc71cb16"></script>
<script>
export default {
    el: "#map",
    data() {
        return {
            map: ''
        }
    },
    methods: {
        reqMap() {
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
        }
    },
    
}
</script>

<style>

</style>