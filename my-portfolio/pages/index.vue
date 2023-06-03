<template>
    <!-- Everything's wrapped under a containter fluid, centered, with outer border -->
    <div class="container-fluid p-5 d-flex flex-column justify-content-center w-100 outerBorder">
        
        <!-- NavBar is fixed and static component -->
        <NavBar @change-component="function (comp) { myComponent = comp }" />
        
        <!-- This component is dynamic -->
        <component :is='myComponent' />
        
        <!-- Footer is fixed and static component -->
        <Footer />
    
    </div>
</template>

<script>
    // Variable myCompontent stores the dynamic component that user wants to render 
    // based on what was clicked in the NavBar component 
    
    export default{
        data() {
            return {
                myComponent:  shallowRef( resolveComponent("ContentMeMyselfAndI") )
            }
        }
    }
</script>