function attachEventsListeners() {
  let days = document.getElementById('days');
  let hours = document.getElementById('hours');
  let minutes=document.getElementById ('minutes');
  let seconds=document.getElementById ('seconds');
  let daysBtn=document.getElementById ('daysBtn');
  let hoursBtn=document.getElementById ('hoursBtn');
  let minutesBtn=document.getElementById ('minutesBtn');
  let secondsBtn=document.getElementById ('secondsBtn');
    daysBtn.addEventListener('click',onclick);
    hoursBtn.addEventListener('click',onclick);
    minutesBtn.addEventListener('click',onclick);
    secondsBtn.addEventListener('click',onclick);
    function onclick(event){
        if(event.target.id=='daysBtn'){
            hours.value=days.value*24;
            minutes.value=days.value*1440;
            seconds.value=days.value*86400;
        }else if(event.target.id=='hoursBtn'){
            days.value=hours.value/24;
            minutes.value=hours.value*60;
            seconds.value=hours.value*3600;
        }else if(event.target.id=='minutesBtn'){
            days.value=minutes.value/1440;
            hours.value=minutes.value/60;
            seconds.value=minutes.value*60;
        }else if(event.target.id=='secondsBtn'){
            days.value=seconds.value/86400;
            hours.value=seconds.value/3600;
            minutes.value=seconds.value/60;
        }
    }
    

}