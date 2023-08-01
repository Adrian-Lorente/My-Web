<template>
        
        <section class="row m-0">
                
                <div class="container innerContent d-flex flex-column align-items-center p-4 gap-4">
                        
                        <div class="h1">
                            Manga
                        </div>
        
                        <div class="container d-flex align-items-center justify-content-between">
                            
                                <LeftArrow @press=" function myfunc () { offset == 0 ? 
                                                                         offset = manga_lenth - 1 : 
                                                                         offset = (offset - 1) % manga_lenth ; }" />
                                
                                <!-- Manga carousel -->
                                <div class="carousel">
                                    
                                    <div class="carousel-item" v-for="item in manga" :class = "[  item == manga[offset] ? 'item-1' : // offset is alwas left item in carousel 
                                                      item == manga[(offset + 1) % manga_lenth] ? 'item-2' :  // offset + 1 mod(lenth) is always center item in carousel
                                                      item == manga[(offset + 2) % manga_lenth] ? 'item-3' : 'item-0']"> 
                                    
                                        <a :href="item.link">
                                    
                                            <img :src="item.image" 
                                                :alt="item.alt">
                                    
                                        </a>
                                
                                    </div>

                                </div>

                                <RightArrow @press=" function myfunc () { offset = (offset + 1) % manga_lenth ; }" />

                        </div>
                    
                </div>

        </section>

        
        <section class="row m-0">
                
                <div class="container innerContent d-flex flex-column align-items-center p-4 gap-4">
                        <div class="h1">
                            Anime
                        </div>
                        <div class="container d-flex flex-row align-items-center justify-content-center gap-3 p-0">
                            <figure class="left-arrow">
                                hola
                            </figure>
                            
                            <!-- Anime carousel -->
                            <!-- <figure class="gallery-item" v-for="manga in mangas">
                                    <a :href="manga[2]"><img :src="manga[0]" :alt="manga[1]"></a>
                            </figure> -->

                            <figure class="right-arrow">
                                adios
                            </figure>
                        </div>
                
                </div>

        </section>

</template>


<script>
import manga from "assets/json/manga.json"
// Tabbed template for adding manga to manga.json.
// {   "image":"", 
//     "alt": "", 
//     "link":""
// }

export default {
    data(){
        return {
            manga,
            anime: null,
            offset: 0,
            manga_lenth: manga.length
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
    transition: all .3s ease;
    box-shadow:0px 15px 10px rgba(0,0,0,0.25);
}

.item-0 {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
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