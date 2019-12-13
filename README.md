# Project HY Bus

## 1. Objects





## 2. Features

- Template 

  - Use [pre-made layouts](https://vuetifyjs.com/en/getting-started/pre-made-layouts) on Vuetify

- Google Maps

  1. Google Cloud Service API KEY

     - set GOOGLE_API_KEY on `.env.local`

       ```
       VUE_APP_[API_NAME]="[API_KEY]"
       ```

     - load GOOGLE_API_KEY on `main.js`

       - need install `vue2-google-maps`
         - `npm i vue2-google-maps`
         - [install page](https://www.npmjs.com/package/vue2-google-maps) - contains github link

       ```javascript
       import * as VueGoogleMaps from "vue2-google-maps";
       
       const API_KEY = process.env.VUE_APP[API_NAME]
       
       Vue.use(VueGoogleMaps, {
         load: {
           key: GOOGLE_API_KEY,
           libraries: "places" // necessary for places input
         }
       });
       ```

     - When Error Occurred

       1. [This Page can't load Google Maps correctly](https://www.thewordcracker.com/basic/구글지도가-제대로-로드되지-않는-문제/) - set credentials

       2. Check where `.env.local` is loacted

          - vue project의 최상단에 위치하도록 한다.

          

  2. Vue Component - `src/components/GMap.vue`

     ```vue
     <gmap-map :center="center" :zoom="12" style="width:400px;  height: 400px;">
     </gmap-map>
     ```

     