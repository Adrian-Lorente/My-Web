
<template>
    
  <button @click="$emit('press')" @touchstart="$emit('press')">
    
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
        <!-- fill could have value currentColor, which inherits parent's background color -->
     
        <path fill="white" d="m183.505 496l-97.268-97.27l143.175-143.174L86.237 112.38l97.268-97.27l143.227 143.228l11.316 11.209l85.9 85.9l.051.05l-11.311 11.419l-85.9 85.9l-.055-.054Zm-52.013-97.27l52.013 52.014L326.629 307.62l.055.054l52.116-52.118l-52.127-52.128l-11.308-11.2l-131.86-131.862l-52.013 52.014l143.175 143.176Z">
       
        </path>
    
      </svg>
    
  </button>
  
</template>
  
  <script lang="ts">
  export default {
    name: 'CilChevronRight'
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