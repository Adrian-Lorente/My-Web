<template>
        
        <section class="row m-0">
                
                <div class="container innerContent d-flex flex-column align-items-center p-4 gap-4">
                        
                        <div class="h1">
                            Manga
                        </div>
        
                        <div class="container d-flex flex-row align-items-center justify-content-center gap-3">
                            
                                <LeftArrow @press=" function myfunc () { let item = manga.pop(); manga.unshift(item); }" />
                                
                                <!-- Manga carousel -->
                                <div v-for="item in manga">
                                    
                                    <div :class = "[ manga.indexOf(item) >= 3 ? 'item-0' : 'item-' + (manga.indexOf(item) + 1) ]">
                                    
                                        <a :href="item.link">
                                    
                                            <img :src="item.image" 
                                                :alt="item.alt">
                                    
                                        </a>
                                
                                    </div>

                                </div>

                                <!-- ANOTHER POSSIBLE SOLUTION TO SHOWING ONLY X NUMBER OF ITEMS IN THE CAROUSEL (BUT CAN'T ANIMATE THE TRANSITIONS) -->
                                <!-- <div class="carousel" v-for="item_index in 3">
                                
                                <a :href="manga[item_index].link">
                            
                                    <img class ="gallery-item-0" 
                                         :src="manga[item_index].image" 
                                         :alt="manga[item_index].alt">
                            
                                </a>
                            
                                </div> -->

                                <RightArrow @press=" function myfunc () { let item = manga.shift(); manga.push(item); }" />

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

.container > * {
    max-width: 100%;

}

.item-0 > *, .item-1 > *, .item-2 > *, .item-3 > *{
    transition: transform .3s ease;
}

.item-0 {
    display: none;
}

.item-1 {
    opacity: 50%;
    transform: translateX(35%);
    position: relative;
    z-index: 1;
}

.item-3 {
    opacity: 50%;
    position: relative;
    transform: translateX(-35%);
    z-index: 1;
}

.item-2 {
    z-index: 3;
    transform: scale(1.1);
    position: relative;
}

img{
    width: 260px;
    height: 350px;
    object-fit: cover;
    border-radius: 8%;
    transition: all .3s ease;
}

img:hover{
    transform: scale(1.06);
}

</style>