<template>
        
        <section class="row m-0">
                
                <div class="container innerContent d-flex flex-column align-items-center p-4 gap-4">
                        
                        <div class="h1">
                            Manga
                        </div>
        
                        <div class="container d-flex flex-row align-items-center justify-content-center gap-3">
                            
                                <LeftArrow @press=" function myfunc () { let item = manga.shift(); manga.push(item);}" />
                                
                                <!-- Manga carousel -->
                                <div v-for="item in manga">
                                
                                    <a :href="item.link">
                                
                                        <img :class ="'gallery-item-' + manga.indexOf(item)"  
                                             :src="item.image" 
                                             :alt="item.alt">
                                
                                    </a>
                                
                                </div>

                                <!-- ANOTHER POSSIBLE SOLUTION TO SHOWING ONLY X NUMBER OF ITEMS IN THE CAROUSEL (BUT CAN'T ANIMATE THE TRANSITIONS) -->
                                <!-- <div class="carousel" v-for="item_index in 3">
                                
                                <a :href="manga[item_index].link">
                            
                                    <img class ="gallery-item-0" 
                                         :src="manga[item_index].image" 
                                         :alt="manga[item_index].alt">
                            
                                </a>
                            
                                </div> -->

                                <RightArrow @press=" function myfunc () { let item = manga.pop(); manga.unshift(item);}" />

                        </div>
                    
                </div>

        </section>

        
        <section class="row m-0">
                
                <div class="container innerContent d-flex flex-column align-items-center p-4 gap-4">
                        <div class="h1">
                            Anime
                        </div>
                        <div class="container d-flex flex-row align-items-center justify-content-center gap-3">
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
            anime: null
        }
    }
}
</script>


<style scoped>
.innerContent{
    max-width: 1000px;
}

.gallery-item{
    transition: 0.5s ease-in-out;
}

img{
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 8%;
    transition: all .3s ease;
}

img:hover{
    transform: scale(1.1);
}

</style>