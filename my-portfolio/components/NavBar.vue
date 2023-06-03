<script setup>
    // Resolving the components to display them dynamically depending on whatever the user clicks at the header
    const MeMyselfAndI = resolveComponent("ContentMeMyselfAndI");
    const Hobbies = resolveComponent("ContentHobbies");
    const Interests = resolveComponent("ContentInterests");
    const Projects = resolveComponent("ContentProjects");
</script>

<template>
    
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      
      <!-- Expand button -->          
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation bar. Collapses wen it reaches less than 768px width (set in navbar-expand-md class above) -->
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="nav-link" v-bind:class="{ 'selected': tab == 1 }" @click="$emit('changeComponent', shallowRef( MeMyselfAndI )); tab = 1">
              Welcome
            </button>
          </li>
          
          <li class="nav-item">
            <button class="nav-link" v-bind:class="{ 'selected': tab == 2 }" @click="$emit('changeComponent', shallowRef( Interests )); tab = 2">
              My interests
            </button>
          </li>
          
          <li class="nav-item">
            <button class="nav-link" v-bind:class="{ 'selected': tab == 3 }" @click="$emit('changeComponent', shallowRef( Projects)); tab = 3">
              Projects
            </button>
          </li>
        </ul>
        
      </div>
      
    </nav>

</template>


<style scoped>

button , button:hover{
  background-color: inherit;
  margin: inherit;
  color: white;
  border: 0px;
  position: relative;

}

button::after, .selected::after{
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px 20px;
    content:'';
    top: 0px;
    left: 0px;
    box-shadow: 0 0 0 2px #fffc43;
    -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
    -webkit-transform: scale(.8);
    -moz-transition: -moz-transform 0.2s, opacity 0.2s;
    -moz-transform: scale(.8);
    -ms-transform: scale(.8);
    transition: transform 0.2s, opacity 0.2s;
    transform: scale(.8);
    opacity: 0;

    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    filter: blur(0.6px);
}

button:hover::after, .selected:hover::after{
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
}

.navbar-nav{
  gap: 15px;
}

.selected{
  background-color: #fffc43;
  color: black;
  border-radius: 10px 20px;
}

</style>

<script>
  export default {
    data(){
      return {
        tab: 1
      }
    }
  }
</script>