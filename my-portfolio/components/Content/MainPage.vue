<template>
        
        <!-- Mob pic and link to my GitHub -->
        <section class="my-picture d-flex justify-content-center">
                
                <div class="circle d-flex justify-content-center align-items-center">
                        
                        <a href="https://github.com/Adrian-Lorente">
                            
                            <img src="~/assets/images/mob.jpg" 
                                 alt="mobu" 
                                 style="width: 124px; 
                                        height: 124px; 
                                        border-radius: 50%;"
                                 title="GitHub Link">
                        
                        </a>
                
                </div>
        
        </section>

        <!-- Writing section -->
        <section class="container innerContent">

            <div class="container fit-content d-flex justify-content-center">
                
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
    /* font-size: 1.8rem; */
    max-width: fit-content;
    border-right: 3px solid;
    overflow: hidden;
    white-space: nowrap;
    animation: 
        typing 4s,
        cursor .4s step-end infinite alternate;
}
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
    z-index: 0;
}

.circle{
    width: 128px;
    height: 128px;
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
    width: 128px;
    height: 128px;
    filter: blur(2px);
    background-color: #F9F54B;
    z-index: -1;
    border-radius: 50%;
}

.innerContent{
    max-width: 800px;
}
</style>