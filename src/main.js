// --> IMPORTS
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Storyblok
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import Page from "@/components/storyblok/pages/Page.vue";
import Hero from "@/components/storyblok/bloks/Hero.vue";
import Video from "@/components/storyblok/bloks/Video.vue";
import News from "@/components/storyblok/pages/News.vue";
import NewsEntries from "@/components/storyblok/bloks/NewsEntries.vue";

// --> CONFIG
const app = createApp(App)
app.use(router)

// Storyblok
app.use(StoryblokVue, {
    accessToken: 'bjZvdC50eU7xrB9as9khlAtt',
    bridge: process.env.NODE_ENV !== 'production',
    use: [apiPlugin]
});

app.component('Page', Page);
app.component('Hero', Hero);
app.component('Video', Video);
app.component('News', News);
app.component('NewsEntries', NewsEntries);

// --> MOUNT
app.mount('#app')
