<template>
        
        <!-- ···························· -->
        <!-- MANGA SECTION -->
        <!-- ···························· -->
        
        <section class="row m-0">
                
                <div class="container innerContent d-flex flex-column align-items-center p-5 gap-4">
                        
                        <div class="h1">
                            Manga
                        </div>
        
                        <div class="container d-flex align-items-center justify-content-between">
                            
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
                
                <div class="container innerContent d-flex flex-column align-items-center p-5 gap-4">
                        
                        <div class="h1">
                            Anime
                        </div>
        
                        <div class="container d-flex align-items-center justify-content-between">
                            
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

</template>


<script>
import manga from "assets/json/manga.json";
import anime from "assets/json/anime.json";
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
            anime_lenght: anime.length
        }
    }
}
</script>


<style scoped>
.innerContent{
    max-width: 1000px;
}

.container > * {
    max-width: 100%;
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

</style>