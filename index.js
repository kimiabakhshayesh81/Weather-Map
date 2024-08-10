let inputElem = document.querySelector('.search-box')
let cityName = document.querySelector('.city')
let dataValue = document.querySelector('.date')
let tempElem = document.querySelector('.temp')
let weatherElem = document.querySelector('.weather')
let tempsElem = document.querySelector('.hi-low')
let dateElem = document.querySelector('.date')

let apiData ={
    url : 'https://api.openweathermap.org/data/2.5/weather?q=',
    key : '26c4d8ad14b57209671494df9bd9fcb9'
}

function fetchData(){
    let contryname = inputElem.value

    fetch(`${apiData.url}${contryname}&&appid=${apiData.key}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)

            showData(data)
        })   
}

function showData(data){
    cityName.innerHTML = `${data.name},${data.sys.country}`
    tempElem.innerHTML = `${Math.floor(data.main.temp -290)}°C`
    weatherElem.innerHTML = `${data.weather[0].main}`
    tempsElem.innerHTML = `${Math.floor(data.main.temp_min - 290)}°C , ${Math.floor(data.main.temp_max - 290)}°C `
    dateElem.innerHTML = showDate()
}

function showDate(){

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()

    return `${day} ${date} ${month} ${year}`
    
}

inputElem.addEventListener('keypress' , (event) => {
    if(event.key === 'Enter'){
        fetchData()
    }
})




