<template>
        
        <!-- Mob pic and link to my GitHub -->
        <section class="my-picture d-flex justify-content-center">
                
                <div class="circle d-flex justify-content-center align-items-center">
                        
                        <a href="https://github.com/Adrian-Lorente">
                            
                            <img src="~/assets/images/mob.jpg" 
                                 alt="mobu" 
                                 title="GitHub Link">
                        
                        </a>
                
                </div>
        
        </section>

        <!-- Writing section -->
        <section class="container-fluid innerContent">

            <div class="container-fluid fit-content d-flex justify-content-center">
                
                <div class="h1">
                    Ye who enter here, be welcomed
                </div>

            </div>

            <p align="center" class="text" id="my-text">
                I'm creating this site as my personal space, where I share my interests and projects.
            </p>
            
        </section>

</template>

<style scoped>
.h1{
    text-align: center;
    width: 100%;
    max-width: fit-content;
    border-right: 3px solid;
    overflow: hidden;
    white-space: nowrap;
    animation: 
        typing 4s,
        cursor .4s step-end infinite alternate;
}

/* Cursor typing animation */
@keyframes cursor{
    50% {border-color: transparent;}
}
@keyframes typing{
    from {width: 0;}
}

.my-picture{
    background: linear-gradient(#F9F54B, #F9F54B) no-repeat center/2px 100%;
    position: relative;
}

img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
}

.my-picture::after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: blur(2px);
    background: linear-gradient(#fffc43, #fffc43) no-repeat center/3px 100%;
    height: inherit;
}

.circle{
    width: 192px;
    height: 192px;
    background-color: #F9F54B;
    border-radius: 50%;
    position: relative;
    /* box-shadow: 0 0 0.5em 0 #F9F54B; */
    z-index: 1;
}

.circle::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 192px;
    height: 192px;
    filter: blur(2px);
    background-color: #F9F54B;
    z-index: -1;
    border-radius: 50%;
}

.innerContent{
    max-width: 1000px;
}

@media (max-width: 1200px){
    .text{
        font-size: 1.6vw;
    }
}

@media(max-width: 768px){
    .text{
        font-size: calc(.5rem + 1vw);
    }

    img{
        width: 150px;
        height: 150px;
    }

    .circle{
        width: 154px;
        height: 154px;
    }

    .circle::before{
        width: 154px;
        height: 154px;
    }
}

@media(max-width: 608px){
    .h1{
        font-size: calc(1rem + 1vw);
        animation-play-state: paused;
        white-space: pre-wrap;
        border: 0px;
    }

    img{
        width: 124px;
        height: 124px;
    }

    .circle{
        width: 128px;
        height: 128px;
    }

    .circle::before{
        width: 128px;
        height: 128px;
    }
}


</style>