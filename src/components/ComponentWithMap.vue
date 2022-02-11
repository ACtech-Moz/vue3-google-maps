<template >
  <div>


<input type="text" placeholder="teste" />
      <GMapAutocomplete
       placeholder="Local xyz"
       @place_changed="setPlace"
    >
  </GMapAutocomplete>




  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116,
          },
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074,
          },
        },
      ],
    };
  },
  methods: {
    setPlace() {
    }
  }
};
</script>

<style>
div.ex1 {

  width: 800px;
  height: 600px;
  align-content: center;
  text-align: center;


  border: 3px solid #73AD21;
}


</style>
