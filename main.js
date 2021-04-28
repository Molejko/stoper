const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const time = document.querySelector('.time');
const modalShadow = document.querySelector('.modal-shadow')
const stopwatch = document.querySelector('.stopwatch');
const closeModalBtn = document.querySelector('.close');
const timeList = document.querySelector('.time-list');
const infoBtn = document.querySelector('.info .fa-question');
const colorBtn = document.querySelector('.info .fa-palette');
const colorsPalette = document.querySelector('.colors');

const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');

let root = document.querySelector(':root');

let countTime;
let minutes = 0;
let seconds = 0;
let timesArr = [];

const handleStart = () =>{
    clearInterval(countTime);
    
    countTime = setInterval(() => {
        if (seconds < 9){
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`;
        } else if (seconds >= 9 && seconds < 59){
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`;
        } else {
            seconds = 0;
            minutes++;
            stopwatch.textContent = `${minutes}:00`;
        }
       
    }, 50);

}

const handlePause = () => {
    clearInterval(countTime);
}

const handleStop = () => {
    
    time.textContent = `Ostatni czas: ${stopwatch.textContent}`;

    if(stopwatch.textContent !== "0:00"){
        time.style.visibility = "visible";
        timesArr.push(stopwatch.textContent);
    }
    
   
    clearStuff();

}

const handleReset = () => {

    time.style.visibility = "hidden";
    timesArr = [];
    clearStuff();
    
}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = "0:00"
    seconds = 0;
    minutes = 0;
    timeList.textContent = '';
}

const showHistory = () => {
    timeList.textContent = '';
    let num =1;
    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;

        timeList.appendChild(newTime);
        num++;
    })
}

const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    }
   
    modalShadow.classList.toggle('modal-animation');
    
}

const showColor = () =>{
    colorsPalette.classList.toggle('show-colors')
}


startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => { e.target === modalShadow ? showModal() : false })
colorBtn.addEventListener('click', showColor);

colorOne.addEventListener('click', ()=>{
    root.style.setProperty('--first-color', 'green')
    root.style.setProperty('--hover-color', 'rgb(3, 114, 3)')
})

colorTwo.addEventListener('click', ()=>{
    root.style.setProperty('--first-color', 'rgb(247, 75, 161)')
    root.style.setProperty('--hover-color', 'rgb(245, 63, 154)')
})

colorThree.addEventListener('click', ()=>{
    root.style.setProperty('--first-color', 'rgb(241, 168, 31)')
    root.style.setProperty('--hover-color', 'rgb(240, 159, 10)')
})

colorFour.addEventListener('click', ()=>{
    root.style.setProperty('--first-color', 'rgb(55, 146, 231)')
    root.style.setProperty('--hover-color', 'rgb(23, 132, 233)')
})

