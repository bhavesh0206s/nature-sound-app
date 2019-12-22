const icons = document.querySelectorAll(".sound-play");
const backVideo = document.querySelector(".full-video");
const backAudio = document.querySelector("audio");
const stopBtnDisp = document.querySelector(".stop-btn-disp")
const details = document.querySelector(".center-content")

const playVideoAudio = (videoSrc, audioSrc) => {
    backVideo.src = videoSrc;
    backAudio.src = audioSrc
    backAudio.currentTime = 0;
    backAudio.loop = true
    backAudio.play();
}
const stopVideoAudio = () =>{
    backVideo.src = "./videos/home.mp4"
    backAudio.src = ""
}
icons.forEach(icon =>{
    icon.addEventListener("click", (e)=>{
        let music = icon.getAttribute("title")
        details.style.display = "none"
        stopBtnDisp.style.display = "block"
        if(music === "Beach Music"){
            playVideoAudio("./videos/beach.mp4", "./sounds/beach.mp3")
        }
        if(music === "Forest Music"){
            playVideoAudio("./videos/forest.mp4", "./sounds/forest.mp3")
        }
        if(music === "Rain Music"){
            playVideoAudio("./videos/raindrop.mp4", "./sounds/rain.mp3")
        }
        if(music === "River Music"){
            playVideoAudio("./videos/river.mp4", "./sounds/river.mp3")
        }
        icons.forEach(icon=>{
            icon.style.display = "none"
        }) 
    })
})

stopBtnDisp.addEventListener("click", ()=> {
    stopVideoAudio()
    icons.forEach(icon=>{
        icon.style.display = "block"
    })
    details.style.display = "block"
    stopBtnDisp.style.display = "none"
})
