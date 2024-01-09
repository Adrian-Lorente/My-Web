<template>
        
        <!-- ···························· -->
        <!-- WHAT I'D LIKE TO DO -->
        <!-- ···························· -->

        <section class="row m-0">
            
            <div class="container-fluid innerContent d-flex align-items-center justify-content-center p-4 gap-4">
                
                <div class="w-100">
                    
                    <div class="h1">
                    
                        Personal projects
                    
                    </div>
                    
                    <p class="text">
                    
                        This section will contain those projects that I can show. Both started at some point and already completed will be shown.
                    
                    </p>
                
                </div>
            
            </div>
    
        </section>


        <section class="row m-0">
            
                <div class="container-fluid innerContent d-flex align-items-center justify-content-center p-4 gap-4">
                
                    <!-- Text to the left & image to the right -->
                    <div class="w-100">
                        
                        <div class="h2">

                            My website

                        </div>
                        
                        <p class="text">

                            Started at 9/4/2023. Wanted to develop a website using Vue.js. I used the framework Nuxt3 with Bootstrap.
                            I'll be updating the site from time to time so it will probably never leave this <em>What I'm working</em> on spot.

                        </p>
                    
                    </div>
                
                    <a href="https://github.com/Adrian-Lorente/My-Web" target="_blank">
                        
                        <img src="~/assets/images/website_screenshot.png" 
                                alt="my_website_image"
                                title="My website">
                    
                    </a>
            
                </div>
        
        </section>

        <section class="row m-0">
            
                <div class="container-fluid innerContent d-flex align-items-center justify-content-center p-4 gap-4">
                    
                    <!-- Text to the right & image to the left -->
                    <div class="w-100">
                        
                        <div class="h2">

                            The skyfall

                        </div>
                        
                        <p class="text">

                            Started at 3/6/2023. My friends and I are big videogame fans so we decided to learn about it 
                            and create our own videogame from scratch, as long as that summer lasted. 
                            <br><br>
                            Right now, sadly, the development is in pause. Will it start ever again? Who knows. 
                            Maybe I do a videogame on my own (but simpler, and probably a bit more ugly), maybe in the future we resume this project

                        </p>
                    
                    </div>

                    <a href="https://github.com/Adrian-Lorente/VideogameProyect" target="_blank">

                        <img src="~/assets/images/concept_art_cielo.png" 
                                alt="videogame_project_image" 
                                title="My videogame">
                                
                    </a>
                
                </div>
        
        </section>

        <section class="row m-0">
            
            <div class="container-fluid innerContent d-flex align-items-center justify-content-center p-4 gap-4">
                
                <!-- Text to the right & image to the left -->
                <div class="w-100">
                    
                    <div class="h2">

                        FER challenge - 2013

                    </div>
                    
                    <p class="text">

                        In Kaggle, there was a challenge held in 2013 where given a facial emotion dataset,
                        people would use machine learning algorithms to create a model capable of recognize facial emotions.
                        My colleges and I proposed this as a final project for a certain subject, and once we have finished it, I'd love to upload the results.

                    </p>
                
                </div>

                <a href="https://github.com/Adrian-Lorente/fer2013-challenge" target="_blank">

                    <img src="~/assets/images/fer.png" 
                            alt="fer_challenge_image" 
                            title="FER challenge">
                            
                </a>
            
            </div>
    
        </section>

        <section class="row m-0">
            
            <div class="container-fluid innerContent d-flex align-items-center justify-content-center p-4 gap-4">
                
                <!-- Text to the right & image to the left -->
                <div class="w-100">
                    
                    <div class="h2">

                        Japanese OCR

                    </div>
                    
                    <p class="text">

                        Since I'm a japanese student, I'd like to create a basic desktop aplication that 
                        utilizes a deep learning model trained by me, able to recognize and dump the japanese characters inside an image. 

                    </p>
                
                </div>

                <a href="#">

                    <!-- <img src="~/assets/images/fer.png" 
                            alt="ocr_image" 
                            title="OCR"> -->
                            
                </a>
            
            </div>
    
        </section>

</template>

<style scoped>

img {
    width: 80%;
    height: 80%;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);
    transition: all .5s ease;
    border-radius: 20px;
}

img:hover{
    transform: scale(1.1);
}

.innerContent{
    max-width: 1000px;
}

@media(max-width: 768px){
    .innerContent{
        flex-direction: column;
    }
}
</style>