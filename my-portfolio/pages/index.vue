<script setup>
    // Importing the components to display them dynamically depending on whatever the user clicks at the header
    const MeMyselfAndI = resolveComponent("ContentMeMyselfAndI");
    const Hobbies = resolveComponent("ContentHobbies");
    const Interests = resolveComponent("ContentInterests");
    const Projects = resolveComponent("ContentProjects");
</script>

<template>
    <div class="container-fluid p-5 d-flex flex-column justify-content-center w-100 outerBorder">
        <NavBar />
        <component :is='MeMyselfAndI' />
        <Footer />
    </div>
</template>