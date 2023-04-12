<template>
        
        <!-- This section will contain an image centered, dunno what yet -->
        <section class="my-picture d-flex justify-content-center">
            <div class="circle d-flex justify-content-center align-items-center">
                <a href="https://github.com/Adrian-Lorente">
                <img src="~/assets/mob.jpg" alt="mobu" style="width: 124px; height: 124px; border-radius: 50%;">
                </a>
            </div>
        </section>
        
        <!-- Writing section -->
        <section class="container innerContent">
            <div class="container fit-content d-flex justify-content-center">
                <div class="h1">
                    So.. who am I?
                </div>
            </div>
            <p align="center" class="text" id="my-text">
                I'm a Computer Science and Engineering student at UC3M, building this website to practice, 
                trying out new technology and being creative in the proccess (or that's the intention at least). 
                This will be a long-term project, which I'll be working on whenever I have time (not too much theese days, pretty busy with uni).
                The final goal is to make this site kind of my personal space, where I share my hobbies, interests and proyects. 
                <br>
                <br>
                I hope you find this interesting :D
            </p>
            </section>
</template>

<style scoped>
.h1{
    text-align: center;
    /* width: 100%; */
    width: 100%;
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
    background: linear-gradient(white, white) no-repeat center/4px 100%;
}

.circle{
    width: 128px;
    height: 128px;
    background-color: white;
    border-radius: 50%;
}

.innerContent{
    max-width: 800px;
}
</style>