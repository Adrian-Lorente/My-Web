<template>
        
        <!-- ···························· -->
        <!-- INTRO SECTION -->
        <!-- ···························· -->
        
        <section class="row m-0">
                
                <div class="container-fluid innerContent d-flex flex-column align-items-center p-5 gap-4">
                        
                        <div class="h1">
                            My hobbies
                        </div>
        
                        <div class="container-fluid d-flex align-items-center justify-content-between">
                            
                            <div class="my-text text">
                            
                                 When I'm not programming or studying, I spend my free time mostly 
                                 playing <span>videogames</span> or reading <span>manga</span>. I also enjoy watching <span>anime</span>, 
                                 though I don't really have as much time and momentum to do it as I used to.
                                 Also, I like reading normal books but I don't really have a list of favourites.

                                 <br>
                                 <br>

                                 In this section, I want to share some of my all time favourites in each category in a somewhat fancy way.
                        
                            </div>
                        
                        </div>
                    
                </div>

        </section>
        
        <!-- ···························· -->
        <!-- MANGA SECTION -->
        <!-- ···························· -->
        
        <section class="row m-0">
                
                <div class="container-fluid innerContent d-flex flex-column align-items-center p-5 gap-4">
                        
                        <div class="h1">
                            Manga
                        </div>
        
                        <div class="container-fluid d-flex align-items-center justify-content-between">
                            
                                <IconsLeftArrow @press=" function myfunc () { manga_offset = (manga_offset + 1) % manga_lenth ; }" />
                                
                                <!-- Manga carousel -->
                                <div class="carousel">
                                    
                                    <div class="carousel-item" v-for="item in manga" :class = "[  item == manga[manga_offset] ? 'item-1' : // offset is alwas left item in carousel 
                                                      item == manga[(manga_offset + 1) % manga_lenth] ? 'item-2' :  // manga_offset + 1 mod(lenth) is always center item in carousel
                                                      item == manga[(manga_offset + 2) % manga_lenth] ? 'item-3' : 'item-0']"> 
                                    
                                        <a :href="item.link" target="_blank">
                                    
                                            <img :src="item.image" 
                                                 :alt="item.alt"
                                                 :title="item.alt">
                                    
                                        </a>
                                
                                    </div>

                                </div>

                                <IconsRightArrow @press=" function myfunc () { manga_offset == 0 ? 
                                                                          manga_offset = manga_lenth - 1 : 
                                                                          manga_offset = (manga_offset - 1) % manga_lenth ; }" />

                        </div>
                    
                </div>

        </section>
        
        <!-- ···························· -->
        <!-- ANIME SECTION -->
        <!-- ···························· -->

        <section class="row m-0">
                
                <div class="container-fluid innerContent d-flex flex-column align-items-center p-5 gap-4">
                        
                        <div class="h1">
                            Anime
                        </div>
        
                        <div class="container-fluid d-flex align-items-center justify-content-between">
                            
                                <IconsLeftArrow @press=" function myfunc () { anime_offset = (anime_offset + 1) % anime_lenght ; }" />
                                
                                <!-- Manga carousel -->
                                <div class="carousel">
                                    
                                    <div class="carousel-item" v-for="item in anime" :class = "[  item == anime[anime_offset] ? 'item-1' : // anime_offset is alwas left item in carousel 
                                                      item == anime[(anime_offset + 1) % anime_lenght] ? 'item-2' :  // anime_offset + 1 mod(lenth) is always center item in carousel
                                                      item == anime[(anime_offset + 2) % anime_lenght] ? 'item-3' : 'item-0']"> 
                                    
                                        <a :href="item.link" target="_blank">
                                    
                                            <img :src="item.image" 
                                                 :alt="item.alt"
                                                 :title="item.alt">
                                    
                                        </a>
                                
                                    </div>

                                </div>

                                <IconsRightArrow @press=" function myfunc () { anime_offset == 0 ? 
                                                                          anime_offset = anime_lenght - 1 : 
                                                                          anime_offset = (anime_offset - 1) % anime_lenght ; }" />

                        </div>
                    
                </div>

        </section>

        <!-- ···························· -->
        <!-- GAMES SECTION -->
        <!-- ···························· -->
        
        <section class="row m-0">
                
                <div class="container-fluid innerContent d-flex flex-column align-items-center p-5 gap-4">
                        
                        <div class="h1">
                            Videogames
                        </div>
        
                        <div class="container-fluid d-flex align-items-center justify-content-between">
                            
                                <IconsLeftArrow @press=" function myfunc () { games_offset = (games_offset + 1) % games_lenght ; }" />
                                
                                <!-- Manga carousel -->
                                <div class="carousel">
                                    
                                    <div class="carousel-item" v-for="item in games" :class = "[  item == games[games_offset] ? 'item-1' : // offset is alwas left item in carousel 
                                                      item == games[(games_offset + 1) % games_lenght] ? 'item-2' :  // manga_offset + 1 mod(lenth) is always center item in carousel
                                                      item == games[(games_offset + 2) % games_lenght] ? 'item-3' : 'item-0']"> 
                                    
                                        <a :href="item.link" target="_blank">
                                    
                                            <img :src="item.image" 
                                                 :alt="item.alt"
                                                 :title="item.alt">
                                    
                                        </a>
                                
                                    </div>

                                </div>

                                <IconsRightArrow @press=" function myfunc () { games_offset == 0 ? 
                                                                          games_offset = games_lenght - 1 : 
                                                                          games_offset = (games_offset - 1) % games_lenght ; }" />

                        </div>
                    
                </div>

        </section>
        
</template>


<script>
import manga from "assets/json/manga.json";
import anime from "assets/json/anime.json";
import games from "assets/json/videogames.json";
// Tabbed template for adding manga to manga.json.
// {   "image":"", 
//     "alt": "", 
//     "link":""
// }

export default {
    data(){
        return {
            manga,
            manga_offset: 0,
            manga_lenth: manga.length,

            anime,
            anime_offset: 0,
            anime_lenght: anime.length,

            games,
            games_offset:0,
            games_lenght: games.length
        }
    }
}
</script>


<style scoped>
.innerContent{
    max-width: 1000px;
}

.carousel {
    position: relative;
    width: fit-content;
    height: fit-content;
}

.carousel-item {
    width: fit-content;
}

.item-1, .item-2, .item-3, .item-0 {
    transition: all .6s ease;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
    border-radius: 8%;
}

.item-0 {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: inline;
}

.item-1, .item-3 {
    z-index: 0;
    opacity: 0.5;
    top: 0;
    display: inline;
    position: absolute;
    pointer-events: none;
}

.item-1 {
    transform: translateX(100%) rotate3d(0, 0.3, -0.1, 20deg);
}

.item-2 {
    display: inline;
    transform: scale(1.1);
    opacity: 100%;
    position: relative;
    z-index: 1;
}

.item-3 {
    transform: translateX(-100%) rotate3d(0, 0.3, -0.1, -20deg);
}

img{
    width: 250px;
    height: 350px;
    object-fit: cover;
    border-radius: 8%;
    transition: all .3s ease;
}

img:hover{
    transform: scale(1.06);
}


@media (max-width: 1200px){
    img{
        width: 150px;
        height: 250px;
    }

    .innerContent{
        max-width: 800px;
        padding: 25px !important;
    }

    section{
        padding: 20px;
    }

    .row{
        padding: 20px;
    }
}

@media(max-width: 768px){
    img{
        width: 100px;
        height: 200px;
    }

    .item-1{
        transform: translateX(120%) rotate3d(0, 0.3, -0.1, 20deg);
    }

    .item-3{
        transform: translateX(-120%) rotate3d(0, 0.3, -0.1, -20deg);
    }
}

@media(max-width: 608px){
    img{
        width: 80px;
        height: 160px
    };
}
</style>