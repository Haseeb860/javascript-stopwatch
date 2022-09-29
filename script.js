
const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const clearButton = document.getElementsByClassName("lap-clear-button")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centisecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outer-circle")[0];



 
let isplay = false;
let seccounter = 0;
let min = 0;
let sec ;
let centiSec;
let centicounter = 0;
let mincounter = 0;
let lapitem = 0;
let isReset = false;

const toggleButton = () =>{
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
    
}
const play = () => {
    if(!isplay && !isReset){
        playButton.innerHTML = 'pause';
        bg.classList.add("animation-bg");
        min = setInterval(()=>{ 
            minute.innerHTML= `${++mincounter}:`;
    },1000*60);
  
        sec = setInterval(()=>{ 
            if(seccounter === 60){
                seccounter = 0;
            }
        second.innerHTML = `${++seccounter}:`;
    },1000);
  
    centisec = setInterval(()=>{ 
        if(centicounter === 100){
            centicounter = 0;
        }   
        centisecond.innerHTML = `${++centicounter}`;
    },10);
          isplay = true;
        isReset = true;
    } 
    else{
        playButton.innerHTML='play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centisec);
        isplay = false;
        isReset = false;
        bg.classList.remove("animation-bg");
    }
    toggleButton();
}

const reset = () =>{
    isReset = true;
    play();
    
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
  second.innerHTML = '0:'
  centisecond.innerHTML = '0';
  minute.innerHTML = '0:';
}

const lap = () =>{
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");
    
    li.setAttribute("class","lap-item");
    number.setAttribute("class","number");
    timeStamp.setAttribute("class","time-stamp");

    number.innerText = `#${++lapitem}`;

    timeStamp.innerHTML = `${mincounter} : ${seccounter} : ${centicounter}`;
    
    li.append(number , timeStamp);

    laps.append(li);

    clearButton.classList.remove("hidden");
} 


const clearAll = () => {
    laps.innerHTML='';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
}
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",clearAll);
