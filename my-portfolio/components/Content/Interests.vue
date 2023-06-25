<template>
    <section class="row m-0">
        <div class="container innerContent d-flex flex-column align-items-center p-4 gap-4">
            <div class="h1">
                Manga
            </div>
            <div class="container d-flex flex-row align-items-center justify-content-center gap-3">
                <figure class="left-arrow">
                    hola
                </figure>
                
                <!-- Manga carousel -->
                <figure class="gallery-item" v-for="manga in mangas">
                        <a :href="manga[2]"><img :src="manga[0]" :alt="manga[1]"></a>
                </figure>

                <figure class="right-arrow">
                    adios
                </figure>
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
                <figure class="gallery-item" v-for="manga in mangas">
                        <a :href="manga[2]"><img :src="manga[0]" :alt="manga[1]"></a>
                </figure>

                <figure class="right-arrow">
                    adios
                </figure>
            </div>
        
        </div>
    </section>
</template>

<script>
const punpun = ["https://cdn.myanimelist.net/images/manga/3/266834l.jpg", "おやすみプンプン", "https://myanimelist.net/manga/4632/Oyasumi_Punpun"];
const csm = ["https://cdn.myanimelist.net/images/manga/4/254692l.jpg", "マキマ", "https://myanimelist.net/manga/116778/Chainsaw_Man"];
const yotsuba = ["https://cdn.myanimelist.net/images/manga/2/266365l.jpg", "四つ葉", "https://myanimelist.net/manga/104/Yotsuba_to"];


export default {
    data(){
        return {
            mangas: [punpun, csm, yotsuba],
            anime: null
        }
    }
}
</script>

<style scoped>
.innerContent{
    max-width: 1000px;
}

img{
    max-width: 200px;
    max-height: 400px;
    border-radius: 8%;
}
</style>