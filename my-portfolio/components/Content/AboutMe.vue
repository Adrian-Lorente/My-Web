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

                </p>

            </div>

            <!-- ···························· -->
            <!-- CENTER -->
            <!-- ···························· -->

            <div class="col mx-4 h-100 d-flex flex-column align-items-center justify-content-center">

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

                    <ul class="ul">

                        <li class="text p-0">
                            Python 3.+:
                        </li>

                        <li class="text p-0">
                            C: 
                        </li>

                        <li class="text p-0">
                            C++: 
                        </li>

                        <li class="text p-0">
                            PL/SQL: 
                        </li>

                        <li class="text p-0">
                            HTML, CSS, JS (plain): 
                        </li>
                    
                        <li class="text p-0">
                            Vue.js, Nuxt3: 
                        </li>

                    </ul>

                </p>

                <p class="text">

                    In languages:

                    <ul>

                        <li class="text p-0">
                            English:
                        </li>

                        <li class="text p-0">
                            Japanese:
                        </li>

                    </ul>

                </p>

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

</style>