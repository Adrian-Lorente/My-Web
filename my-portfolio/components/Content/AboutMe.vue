<template>
    
    <section class="row p-4 m-0">

        <div class="container p-4 innerContent d-flex align-items-center justify-content-between">
            
            <!-- ···························· -->
            <!-- LEFT SIDE -->
            <!-- ···························· -->

            <div class="col mx-4 h-100 d-flex flex-column">
                
                <div class="h1 text-center">
                
                    About me
                
                </div>

                <p class="text">

                    Hi! My name is Adrián Lorente.
                    I'm currently in my last year of a Bachelor in <span>Computer Science & Engineering</span> in Spain, but I'm planning on doing a <span>master's degree</span>.
                    <br>
                    <br>
                    Interested in <span>Web, Software and Videogames Development</span>, as well as <span>Machine Learning and AI</span>.
                    <br>
                    <br>
                    Also, I'm a selft-taught japanese learner. I still have a beginner level, which I expect to improve with time and effort.

                </p>

            </div>

            <!-- ···························· -->
            <!-- CENTER -->
            <!-- ···························· -->

            <div class="col mx-0 h-100 d-flex flex-column align-items-center justify-content-center">

                <figure>

                    <img src="~/assets/images/website_placeholder.png" 
                         alt="my_picture"
                         title="Me (*^▽^*)">

                </figure>

                <div class="h1 w-100 d-flex justify-content-center gap-5">
                    <a href="https://github.com/Adrian-Lorente" target="_blank">
                        <IconsGitHub />
                    </a>
                    
                    <button class="button" @click="copyMail">
                        <IconsMail />
                    </button>
                </div>

                <span id="clipboard-alert"> Copied to clipboard! </span>
            </div>

            <!-- ···························· -->
            <!-- RIGHT SIDE -->
            <!-- ···························· -->

            <div class="col mx-4 h-100 d-flex flex-column">
                
                <div class="h1 text-center">
                
                    Skills
                
                </div>

                <p class="text">
                    
                    In programming:
                
                </p>

                <ul class="ul">

                    <li class="d-flex justify-content-left align-items-center text p-0">
                        
                        <div class="text col">
                            
                            Py 3.+:

                        </div>

                        <progress class="col" max="100" value="80"></progress>                            

                    </li>

                    <li class="d-flex justify-content-left align-items-center text p-0">
                        
                        <div class="text col">

                            C: 

                        </div>

                        <progress class="col" max="100" value="40"></progress>   

                    </li>

                    <li class="d-flex justify-content-left align-items-center p-0">
                        
                        <div class="text col">
                            
                            C++:
                        
                        </div> 

                        <progress class="col" max="100" value="25"></progress>   

                    </li>

                    <li class="d-flex justify-content-left align-items-center text p-0">
                        
                        <div class="text col">
                            
                            PL/SQL:

                        </div>

                        <progress class="col" max="100" value="40"></progress>   

                    </li>

                    <li class="d-flex justify-content-left align-items-center text p-0">
                    
                        <div class="text col">
                            
                            HTML, CSS, JS (plain):

                        </div>

                        <progress class="col" max="100" value="75"></progress>   

                    </li>
                
                    <li class="d-flex justify-content-left align-items-center text p-0">
                        
                        <div class="text col">
                            
                            Vue.js, Nuxt3: 

                        </div>

                        <progress class="col" max="100" value="60"></progress>   

                    </li>

                </ul>


                <p class="text">

                    In languages:
                
                </p>

                <ul>

                    <li class="d-flex justify-content-left align-items-center text p-0">
                        
                        <div class="text col">
                            
                            English:

                        </div>

                        <progress class="col" max="100" value="80"></progress>   

                    </li>


                    <li class="d-flex justify-content-left align-items-center text p-0">
                        
                        <div class="text col">
                            
                            Japanese:

                        </div>

                        <progress class="col" max="100" value="10"></progress>   

                    </li>

                </ul>

            </div>

        </div>

    </section>

</template>


<script setup>
    function copyMail() {
        navigator.clipboard.writeText('adrn.lorente@gmail.com');
        document.getElementById("clipboard-alert").style.visibility = 'visible';
        
        setTimeout(function () {
            document.getElementById("clipboard-alert").style.visibility = 'hidden';
        }, 2000)
        
        return;
    } 

</script>

<style scoped>

img{
    max-height: 500px;
    max-width: 500px;
    height: 100%;
    width: 100%;
    border-radius: 20px;
}


span{
    color: var(--my-yellow);
}

button{
    border: 0px;
    z-index: 5;
    background-color: inherit;
}

#clipboard-alert{
    visibility: hidden;
}

progress{
    accent-color: var(--my-yellow);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    animation: 1s ease loadProgressBars;

    
}

progress[value]::-webkit-progress-bar {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-moz-progress-bar {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    
}

progress[value]::-webkit-progress-value {
    background-color: var(--my-yellow);
    animation: 1s ease loadProgressBars;
}

progress[value]::-moz-progress-value {
    background-color: var(--my-yellow);
    animation: 1s ease loadProgressBars;
}

@keyframes loadProgressBars {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@media(max-width: 768px){
    .innerContent{
        flex-direction: column;
    }
}

</style>