import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

// GSDevTools.create();
let twin=gsap.to('.box', {
    scale: 1.2,
    opacity: 1,
    rotate: 360,
    duration: 1,
    ease: "power1.inOut",
    borderRadius: "50%",
    // backgroundColor: "red"
});

const play=document.querySelector('.play')
const pause=document.querySelector('.pause')
const resume=document.querySelector('.resume')
const restart=document.querySelector('.restart')
const reverse=document.querySelector('.reverse')
const kill=document.querySelector('.kill')
const yoyo=document.querySelector('.yoyo')

// Add event listeners once - no need for function
play.addEventListener('click', () => {
    if (twin) twin.play();
});

pause.addEventListener('click', () => {
    if (twin) twin.pause();
});

resume.addEventListener('click', () => {
    if (twin) twin.resume();
});

restart.addEventListener('click', () => {
    if (twin) twin.restart();
});

reverse.addEventListener('click', () => {
    if (twin) twin.reverse();
});

kill.addEventListener('click', () => {
    if (twin) twin.kill();
});

let isYoyoActive = false;

yoyo.addEventListener('click', () => {
    if (isYoyoActive) {
        // Turn OFF yoyo - create single animation
        if (twin) twin.kill();
        twin = gsap.to('.box', {
            scale: 1.2,
            opacity: 1,
            rotate: 360,
            duration: 1,
            ease: "power1.inOut",
            borderRadius: "50%"
        });
        isYoyoActive = false;
    } else {
        // Turn ON yoyo - create bouncing animation
        if (twin) twin.kill();
        twin = gsap.to('.box', {
            scale: 1.2,
            y: -20,
            opacity: 1,
            rotate: 360,
            duration: 1,
            ease: "power1.inOut",
            borderRadius: "50%",
            yoyo: true,
            repeat: -1
        });
        isYoyoActive = true;
    }
});