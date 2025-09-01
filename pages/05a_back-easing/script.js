import { gsap } from "gsap";

const tabs=document.querySelector('.tabs')


const tab=document.querySelector('tab')


const indicator=document.querySelector('.indicator')


// const element=(e)=>getBoundingClientRect()

let widthOfTarget=0

tabs.addEventListener('click',(e)=>{

    if(e.target.classList.contains('tab')){


        console.log("width of target",e.target.getBoundingClientRect().width)
        widthOfTarget=e.target.getBoundingClientRect().width
        // remove active class from all tabs
        tabs.querySelectorAll('.tab').forEach(tab=>{
            tab.classList.remove('active')
        })
        // add active class to the clicked tab
        e.target.classList.add('active')

        console.log("boxs clicked")




        gsap.to(indicator,{
            x:e.target.offsetLeft,
            duration:0.3,
            ease: "back.out(1.7)",
            width:widthOfTarget
        })

        console.log(e.target.offsetLeft)
        
    }


})