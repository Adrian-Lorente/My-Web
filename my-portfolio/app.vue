<template class="w-100 h-100">
    <!-- <NuxtWelcome /> -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <!-- Expand button -->          
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation bar. Collapses wen it reaches less than 768px width (set in navbar-expand-md class above) -->
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about-me">Welcome</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#my-interests">My interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#proyects">Proyects</a>
          </li>
          
          <!-- <div class="navbar-nav"> -->
            <!-- All the LINKS INSIDE this div-->
            <!-- <a class="nav-item nav-link active" href="#">Home</a> -->
            <!-- <a class="nav-item nav-link link-light" href="#about-me">Welcome</a> -->
            <!-- <a class="nav-item nav-link link-light" href="#my-interests">My interests</a> -->
            <!-- <a class="nav-item nav-link link-light" href="#proyects">Proyects</a> -->
            <!-- <a class="nav-item nav-link disabled" href="#">Disabled</a> -->
          <!-- </div> -->
          </ul>
        </div>
      </nav>

    <body class="w-100 h-100">

      <!-- My presentation -->
      <section class="container w-100 d-flex flex-column align-content-center justify-content-center" id="content" data-bs-spy="scroll" data-bs-target=".navbar">
      
        <!-- This section will contain an image centered, dunno what yet -->
        <section class="container" id="about-me">
          <!-- This section will contain a cool quote 😎 -->
          <div class="h1">
            So.. who am I?
          </div>
          <p align="justify" class="text">
            I'm a Computer Science and Engineering student at UC3M, building this website to practice, 
            trying out new technology and being creative in the proccess (or that's the intention at least). 
            This will be a long-term project, which I'll be working on whenever I have time (not too much theese days, pretty busy with uni).
            The final goal is to make this site kind of my personal space, where I share my hobbies, interests and proyects. 
          </p>

          <p align="justify" class="text">
            
          </p>
        </section>
        
        <section class="container" id="my-interests">
          <!-- And lastly, this section will contain a brief summary of my joruney at college, my interests and hobbies -->
            <div class="h1">
                My interests
            </div>
        </section>
      
      </section>
    </body>
</template>
