
const date=new Date();
let second=date.getSeconds();
let minutes=date.getMinutes();
let hour=date.getHours();
const myInterval=setInterval(()=>{
    ++second;
   
    if(second===60){
        convertSecondToMinutes()
        second=0;
    }
},1000)

const convertSecondToMinutes=()=>{
    ++minutes;
   
    if(minutes===60){
        // convertMinutesToHour();
        minutes=0;
    }
}
const convertMinutesToHour=()=>{
    ++hour;
   
    if(hour===24){
        hour=0;
    }  
}


const hourField=document.getElementById('hour');
const setHourFieldValue=()=>{
    if(hour<10){
        hourField.innerText=`0${hour}`
    }
    else{
        hourField.innerText=`${hour}`
    }
   
}
const minutesField=document.getElementById('minute')
const setMinuteFieldValue=()=>{
    if(minutes<10){
        minutesField.innerText=`0${minutes}`
    }
    else{
        minutesField.innerText=`${minutes}`
    }
    
}
const secondField=document.getElementById('second');
const setSecondFieldValue=()=>{
    if(second<10){
        secondField.innerText=`0${second}`
    }
    else{
        secondField.innerText=`${second}`
    }
   
}
const mySecondInterval=setInterval(()=>{
    setSecondFieldValue();
    setMinuteFieldValue();
    setHourFieldValue();
},1000)
