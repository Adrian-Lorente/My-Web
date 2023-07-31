<template>
        
        <section class="row m-0">
            
                <div class="container innerContent d-flex align-items-center justify-content-center p-4 gap-4">
                    
                        <!-- Text to the left & image to the right -->
                        <div>
                            
                            <div class="h1">
                                My website
                            </div>
                            
                            <p class="text">
                                Started at 9/4/2023. Wanted to develop a website using Vue.js. I used the framework Nuxt3 with Bootstrap.
                            </p>
                        
                        </div>
                    
                        <a href="https://github.com/Adrian-Lorente/My-Web">
                            
                            <img src="~/assets/images/website_placeholder.png" 
                                    alt="my_website_image">
                        
                        </a>
                
                </div>
        
        </section>

        <section class="row m-0">
            
                <div class="container innerContent d-flex align-items-center justify-content-center p-4 gap-4">
                    
                        <!-- Text to the right & image to the left -->
                        <div>
                            
                            <div class="h1">
                                The skyfall
                            </div>
                            
                            <p class="text">
                                Started at 3/6/2023. My friends and I are big videogame fans so we decided to learn about it 
                                and create our own videogame from scratch, as long as that summer lasted. 
                                <br><br>
                                We planned the project and worked together to make it happend.
                                Not only we coded the game, but also wrote the story, made the concept arts, character design, level design, music...
                                <br><br>
                                Built it using Unity Engine and C# for sripting. Character lines and dialogues were made using Ink.
                            </p>
                        
                        </div>

                        <a href="https://github.com/Adrian-Lorente/VideogameProyect">
                            <img src="~/assets/images/website_placeholder.png" alt="my_website_image">
                        </a>
                
                </div>
        
        </section>

</template>

<style scoped>

img {
    width: 12rem;
    height: auto;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);
    transition: all .5s ease;
}

img:hover{
    transform: scale(1.1);
}

.innerContent{
    max-width: 800px;
}
</style>