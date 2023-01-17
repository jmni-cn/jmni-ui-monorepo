// const s: string = 'Hello Typescript'
// console.log(s)

// import SButton from "./button";
// import SFCButton from "./SFCButton.vue";
// import JSXButton from "./JSXButton";

// createApp(SButton)
// createApp(SFCButton)
import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from './entry'
createApp({
    template:`
    <div>
         <SButton color="blue" round plain icon="search" >fff</SButton>
         <SButton color="green" round plain icon="edit" >111</SButton>
         <SButton color="gray" round plain icon="check" >2222</SButton>
         <SButton color="yellow" round plain icon="message" >333</SButton>
         <SButton color="red" round plain icon="delete" >444</SButton>
         <SButton color="black" round plain icon="delete" >444</SButton>
         <SButton color="indigo" round plain icon="delete" >444</SButton>
         <SButton color="purple" round plain icon="delete" >444</SButton>
         <SButton color="pink" round plain icon="delete" >444</SButton>
     </div>
    `
})
.use(SmartyUI)
.mount("#app");