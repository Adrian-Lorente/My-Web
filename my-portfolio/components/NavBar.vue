<script setup>
    // Resolving the components to display them dynamically depending on whatever the user clicks at the header
    const MainPage = resolveComponent("ContentMainPage");
    const Hobbies = resolveComponent("ContentHobbies");
    const Interests = resolveComponent("ContentInterests");
    const Projects = resolveComponent("ContentProjects");
    const AboutMe = resolveComponent("ContentAboutMe");
</script>

<template>
    
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      
        <!-- Expand button -->          
        <button class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
          
            <span class="navbar-toggler-icon">

            </span>
        
        </button>

        <!-- Navigation bar. Collapses wen it reaches less than 768px width (set in navbar-expand-md class above) -->
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          
            <ul class="navbar-nav">
              
                <li class="nav-item">
                  
                  <button class="nav-link" 
                          title="Home" 
                          v-bind:class="{ 'selected': tab == 1 }" 
                          @click="$emit('changeComponent', shallowRef( MainPage )); tab = 1">
                    
                    <IconsHome />
                  
                  </button>
                
                </li>
              
                <li class="nav-item">
                  
                  <button class="nav-link" 
                          title="Interests" 
                          v-bind:class="{ 'selected': tab == 2 }" 
                          @click="$emit('changeComponent', shallowRef( Interests )); tab = 2">
                    
                    <IconsHeart />
                  
                  </button>
                
                </li>
              
                <li class="nav-item">
                  
                  <button class="nav-link" 
                          title="Projects" 
                          v-bind:class="{ 'selected': tab == 3 }" 
                          @click="$emit('changeComponent', shallowRef( Projects)); tab = 3">
                    
                    <IconsCube />
                  
                  </button>
                
                </li>

                <li class="nav-item">
                  
                  <button class="nav-link" 
                          title="About me & Contact" 
                          v-bind:class="{ 'selected': tab == 4 }" 
                          @click="$emit('changeComponent', shallowRef( AboutMe)); tab = 4">
                    
                    <IconsAboutMeAndContact />
                  
                  </button>
                
                </li>

            </ul>
          
        </div>
      
    </nav>

</template>


<style scoped>

button , button:hover{
    margin: inherit;
    color: white;
    position: relative;
}

button::after, .selected::after{
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    content:'';
    top: 0px;
    left: 0px;
    box-shadow: 0 0 0 2px var(--my-yellow);;
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
  gap: 30px;
  background-color: var(--bg-inner-content);
  border-radius: 20px 20px;
  padding: 5px 10px 5px 10px;
}

.selected{
  background-color: var(--my-yellow);
  color: black;
  border-radius: 50%;
}

.nav-link{
  display: flex;
  align-items: center;
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