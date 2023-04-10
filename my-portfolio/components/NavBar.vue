<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <!-- Expand button -->          
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation bar. Collapses wen it reaches less than 768px width (set in navbar-expand-md class above) -->
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link nuxt-link-active" href="/">Welcome</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nuxt-link-active" href="/interests">My interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nuxt-link-active" href="/videogames">Proyects</a>
          </li>
          </ul>
        </div>
      </nav>
</template>


<style scoped>
/* a:hover{
    background-color: lime;
    border-radius: 10px 20px;
    color: black !important;
} */
</style>