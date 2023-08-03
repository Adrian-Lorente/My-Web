<template>
    <!-- Everything's wrapped under a containter fluid, centered, with outer border -->
    
        <div class="container-fluid p-5 d-flex flex-column justify-content-center w-100 outerBorder">
        
            <!-- NavBar is fixed and static component -->
            <NavBar @change-component="function (comp) { myComponent = comp }" />
        
            <!-- <transition name="switch"> -->
            
            
                <!-- A div wrapping the element is needed to make transitions work. Else, I'd need to use <transition-group> -->
            <div :key="myComponent.__file" > 
                 <!-- style="overflow: auto;"> -->
            
                <component :is='myComponent' />
            
            </div>
            
            
            <!-- </transition> -->
            
            <!-- Footer is fixed and static component -->
            <!-- <Footer /> -->
    
        </div>

</template>

<script>
    // Variable myCompontent stores the dynamic component that user wants to render 
    // based on what was clicked in the NavBar component 
    
    export default{
        data() {
            return {
                myComponent:  shallowRef( resolveComponent("ContentMainPage") )
            }
        }
    }
    
</script>



<!-- SECTION FOR TRANSITIONS. CURRENTLY DISABLED -->
<style scoped>
/* .switch-enter-from{
    transform: translateX(200%);
    opacity: 0;
}

.switch-enter-active{
    transition-delay: 1s;
    transition:  4s ease;
}

.switch-leave-to{
    transform: translateX(-150%);
}

.switch-leave-active{
    transition: 1s ease;
} */
</style>