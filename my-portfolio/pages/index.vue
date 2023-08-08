<template>
    <!-- Everything's wrapped under a containter fluid, centered, with outer border -->
        <Head>
            <Title>
                Adrián Lorente González
            </Title>

            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
        </Head>
    
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