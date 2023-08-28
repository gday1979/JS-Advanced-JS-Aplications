function timeToWalk(steps,footprint,speed){
    const distance = steps * footprint;
    const breaks = Math.floor(distance / 500);
    const time = distance / speed / 1000 * 60;
    const totalTime = Math.ceil((time + breaks) * 60);
    const result = new Date(null, null, null, null, null, totalTime);
    console.log(result.toTimeString().split(' ')[0]);
}
timeToWalk(4000, 0.60, 5);