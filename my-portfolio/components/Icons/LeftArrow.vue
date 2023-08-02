
<template>

  <button @click="$emit('press')" @touchstart="$emit('press')">
    
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
        <!-- fill could have value currentColor, which inherits parent's background color -->
      
        <path fill="white" d="m327.086 496.89l-142.6-142.6l-11.258-11.15l-85.6-85.6l.054-.054l11.259-11.367l85.5-85.5l.054.054l142.6-142.595L424 114.989L281.506 257.483L424 399.978ZM184.64 309.3l11.266 11.159l131.18 131.181l51.658-51.658l-142.493-142.499l142.493-142.494l-51.658-51.658l-142.392 142.394l-.054-.054l-51.813 51.812Z">
     
        </path>
  
      </svg>
  
  </button>

</template>
  
  <script lang="ts">
  export default {
    name: 'CilChevronLeft'
  }
  </script>

<style scoped>
button{
    height: 100%;
    display: flex;
    align-items: center;
    background-color: inherit;
    border: 0px;
    z-index: 5;
    padding: 3px;
    position: relative;
    width: fit-content;
}
</style>