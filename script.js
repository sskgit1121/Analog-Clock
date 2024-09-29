const hrEle = document.querySelector(".hr")
const minEle = document.querySelector(".min")
const secEle = document.querySelector(".sec")

setInterval( ()=>{
    let date = new Date()

    hr = date.getHours()*30 /*360deg/12hrs*/
    min = date.getMinutes()*6 /*360deg/(12*5min) = 60min*/
    sec = date.getSeconds()*6 /*360deg/60sec*/

    // hrEle.style.transform = `rotateZ(120deg)`
    // minEle.style.transform = `rotateZ( 10deg)`
    // secEle.style.transform = `rotateZ( 50deg)`
    hrEle.style.transform = `rotateZ(${hr + min / 12}deg)`
    minEle.style.transform = `rotateZ(${min}deg)`
    secEle.style.transform = `rotateZ(${sec}deg)`

})