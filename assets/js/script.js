const displayData = $('#display');
const formEl = $("#search-item");
const date = new Date();
const recentCities = $('#recently-viewed');


function getCity(city) {
  //  console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=212f5d2ff2f54bf5ee82f7eba807380e`)
        .then(function (reponse) {
            if (reponse.ok) {
               // console.log(reponse)
                reponse.json()
                    .then(function (data) {
                     //   console.log(data.coord);
                        displayWeather(data);
                        getFiveDay(data)
                    })
            } else {
                alert("Please enter a City name")
            }
        })
        // add  catch for error handling
}

function getFiveDay(geoCode){
    const latt = geoCode.coord.lat;
    const long = geoCode.coord.lon;
    console.log(latt);
    console.log(long);

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latt}&lon=${long}&units=imperial&appid=212f5d2ff2f54bf5ee82f7eba807380e`)
        .then(function (response){
            console.log(response);
            response.json()
                .then(function(data){
               //     console.log(data)
                    displayFiveDay(data);
                    displayUv(data);
                })
        })
};

function clearFiveDay(){
    $('#fiveDayForcast').remove();
    $('#dayOne').remove();
    $('#dayTwo').remove();
    $('#dayThree').remove();
    $('#dayFour').remove();
    $('#dayFive').remove();
};

function displayFiveDay(locationData) {
    console.log(locationData)
    clearFiveDay();

    // 5 Day Forcast Label 
    const fiveDayForcast = $('<h3>');
    $(fiveDayForcast).text('5-Day Forcast');
    $(fiveDayForcast).addClass('mt-2');
    $(fiveDayForcast).attr('id', 'fiveDayForcast')
    // append label to div
    $('#display-border').append(fiveDayForcast);


    // create dayone div
    const dayOne = $('<div>');
    $(dayOne).attr('id', 'dayOne');
    $(dayOne).addClass('col-2 bg-secondary text-white mt-3 daily');

    // dayone date
    const dayOneDate = $('<p>');
    $(dayOneDate).text([date.getMonth() + 1, date.getDate() + 1, date.getFullYear()]);
    $(dayOneDate).addClass('five-date')
    // append date to div
    $(dayOne).append(dayOneDate);

    // create date stamp
    const dayOneImg = $('<img>');
    const oneImgSrc = locationData.daily[1].weather[0].icon;
    console.log(oneImgSrc)
    $(dayOneImg).attr('src', 'http://openweathermap.org/img/wn/' + oneImgSrc + '.png')
    //append img to dayone div 
    $(dayOne).append(dayOneImg);

    // create dayone temp
    const dayOneTemp = $('<p>');
    $(dayOneTemp).text('Max Temp: ' + locationData.daily[1].temp.max);
    //append temp to dayone div
    $(dayOne).append(dayOneTemp);

    // create dayone windspeed
    const dayOneWind = $('<p>');
    $(dayOneWind).text('Wind: ' + locationData.daily[1].wind_speed + ' MPH');
    //append wind to dayone 
    $(dayOne).append(dayOneWind);

    // create dayone humidity 
    const dayOneHumid = $('<p>');
    $(dayOneHumid).text('Humidity: ' + locationData.daily[1].humidity + '%');
    // append humidity to dayone
    $(dayOne).append(dayOneHumid);

    // display dayone on HTML 
    $('#display-border').append(dayOne);


    //create dayTwo div
    const dayTwo = $('<div>');
    $(dayTwo).attr('id', 'dayTwo')
    $(dayTwo).addClass('col-2 bg-secondary text-white mt-3 daily');
    
    // daytwo date
    const dayTwoDate = $('<p>');
    $(dayTwoDate).text([date.getMonth() + 1, date.getDate() + 2, date.getFullYear()]);
    $(dayTwoDate).addClass('five-date');
    // append date to div
    $(dayTwo).append(dayTwoDate);

    // create date stamp
    const dayTwoImg = $('<img>');
    const twoImgSrc = locationData.daily[2].weather[0].icon;
    $(dayTwoImg).attr('src', 'http://openweathermap.org/img/wn/' + twoImgSrc + '.png')
    //append img to daytwo div 
    $(dayTwo).append(dayTwoImg);

    // create daytwo temp
    const dayTwoTemp = $('<p>');
    $(dayTwoTemp).text('Max Temp: ' + locationData.daily[2].temp.max);
    //append temp to daytwo div
    $(dayTwo).append(dayTwoTemp);

    // create daytwo windspeed
    const dayTwoWind = $('<p>');
    $(dayTwoWind).text('Wind: ' + locationData.daily[2].wind_speed + ' MPH');
    //append wind to dayTwo 
    $(dayTwo).append(dayTwoWind);

    // create dayTwo humidity 
    const dayTwoHumid = $('<p>');
    $(dayTwoHumid).text('Humidity: ' + locationData.daily[2].humidity + '%');
    // append humidity to dayTwo
    $(dayTwo).append(dayTwoHumid);

    // display dayTwo on HTML 
    $('#display-border').append(dayTwo);


    //create dayThree div
    const dayThree = $('<div>');
    $(dayThree).attr('id', 'dayThree')
    $(dayThree).addClass('col-2 bg-secondary text-white mt-3 daily');
    
    // daythree date
    const dayThreeDate = $('<p>');
    $(dayThreeDate).text([date.getMonth() + 1, date.getDate() + 3, date.getFullYear()]);
    $(dayThreeDate).addClass('five-date');
    // append date to div
    $(dayThree).append(dayThreeDate);

    // create date stamp
    const dayThreeImg = $('<img>');
    const threeImgSrc = locationData.daily[3].weather[0].icon;
    $(dayThreeImg).attr('src', 'http://openweathermap.org/img/wn/' + threeImgSrc + '.png')
    //append img to daythree div 
    $(dayThree).append(dayThreeImg);

    // create daythree temp
    const dayThreeTemp = $('<p>');
    $(dayThreeTemp).text('Max Temp: ' + locationData.daily[3].temp.max);
    //append temp to daythree div
    $(dayThree).append(dayThreeTemp);

    // create daythree windspeed
    const dayThreeWind = $('<p>');
    $(dayThreeWind).text('Wind: ' + locationData.daily[3].wind_speed + ' MPH');
    //append wind to dayThree 
    $(dayThree).append(dayThreeWind);

    // create dayThree humidity 
    const dayThreeHumid = $('<p>');
    $(dayThreeHumid).text('Humidity: ' + locationData.daily[3].humidity + '%');
    // append humidity to dayThree
    $(dayThree).append(dayThreeHumid);

    // display dayThree on HTML 
    $('#display-border').append(dayThree);

    //create dayFour div
    const dayFour = $('<div>');
    $(dayFour).attr('id', 'dayFour')
    $(dayFour).addClass('col-2 bg-secondary text-white mt-3 daily');
    
    // dayFour date
    const dayFourDate = $('<p>');
    $(dayFourDate).text([date.getMonth() + 1, date.getDate() + 4, date.getFullYear()]);
    $(dayFourDate).addClass('five-date');
    // append date to div
    $(dayFour).append(dayFourDate);

    // create date stamp
    const dayFourImg = $('<img>');
    const fourImgSrc = locationData.daily[4].weather[0].icon;
    $(dayFourImg).attr('src', 'http://openweathermap.org/img/wn/' + fourImgSrc + '.png')
    //append img to dayFour div 
    $(dayFour).append(dayFourImg);

    // create dayFour temp
    const dayFourTemp = $('<p>');
    $(dayFourTemp).text('Max Temp: ' + locationData.daily[4].temp.max);
    //append temp to dayFour div
    $(dayFour).append(dayFourTemp);

    // create dayFour windspeed
    const dayFourWind = $('<p>');
    $(dayFourWind).text('Wind: ' + locationData.daily[4].wind_speed + ' MPH');
    //append wind to dayFour 
    $(dayFour).append(dayFourWind);

    // create dayFour humidity 
    const dayFourHumid = $('<p>');
    $(dayFourHumid).text('Humidity: ' + locationData.daily[4].humidity + '%');
    // append humidity to dayFour
    $(dayFour).append(dayFourHumid);

    // display dayFour on HTML 
    $('#display-border').append(dayFour);


    //create dayFive div
    const dayFive = $('<div>');
    $(dayFive).attr('id', 'dayFive')
    $(dayFive).addClass('col-2 bg-secondary text-white mt-3 daily');
    
    // dayFive date
    const dayFiveDate = $('<p>');
    $(dayFiveDate).text([date.getMonth() + 1, date.getDate() + 5, date.getFullYear()]);
    $(dayFiveDate).addClass('five-date');
    // append date to div
    $(dayFive).append(dayFiveDate);

    // create date stamp
    const dayFiveImg = $('<img>');
    const fiveImgSrc = locationData.daily[5].weather[0].icon;
    $(dayFiveImg).attr('src', 'http://openweathermap.org/img/wn/' + fiveImgSrc + '.png')
    //append img to dayFive div 
    $(dayFive).append(dayFiveImg);

    // create dayFive temp
    const dayFiveTemp = $('<p>');
    $(dayFiveTemp).text('Max Temp: ' + locationData.daily[5].temp.max);
    //append temp to dayFive div
    $(dayFive).append(dayFiveTemp);

    // create dayFive windspeed
    const dayFiveWind = $('<p>');
    $(dayFiveWind).text('Wind: ' + locationData.daily[5].wind_speed + ' MPH');
    //append wind to dayFive 
    $(dayFive).append(dayFiveWind);

    // create dayFive humidity 
    const dayFiveHumid = $('<p>');
    $(dayFiveHumid).text('Humidity: ' + locationData.daily[5].humidity + '%');
    // append humidity to dayFive
    $(dayFive).append(dayFiveHumid);

    // display dayFive on HTML 
    $('#display-border').append(dayFive);
};

function displayUv(uvData){
    // get uv data 
    const uvIndex = $('<span>');
    $(uvIndex).addClass('badge bg-success');
    $(uvIndex).text(uvData.current.uvi);

    const uvIndexText = $('<span>');
    uvIndexText.text('UV Index: ');

    $(uvIndexText).append(uvIndex);
    // append uv to display data
    $('#data-list').append(uvIndexText);
}

// click and enter event handlers 

$(formEl).keyup(function (event) {
    if (event.originalEvent.key === 'Enter') {
        event.preventDefault();
        $('#search-btn').click();
    }
});

$('#search-btn').click(function () {
    const city = $('#search-item').val();
    getCity(city);
    saveSearch(city);

    $(formEl).empty()
})

// save search data
function saveSearch(recentCity){
    // get data from input
    const newData = {
        location: recentCity
    };
    // get old data and add it to the new data || if there is nothing saved at the start, then create an empty array
    let oldData = JSON.parse(localStorage.getItem('recent')) || [];
    oldData.push(newData); 
    // set new submission to local storage
    localStorage.setItem('recent' , JSON.stringify(oldData));
};

function displayRecent() {
    const recentList = $('<ol>')
    $(recentList).attr('id', 'recent-cities')

    let history = JSON.parse(localStorage.getItem('recent'));

    console.log(history);
    
    for (let i = 0; i < history.length; i++) {
       
        let recentBtn = $('<button>');
        $(recentBtn).attr('class', 'recent-btn btn btn-primary col-12 mb-2');
        $(recentBtn).attr('id', 'recent-btn');
        $(recentBtn).text(history[i].location);

        $(recentCities).prepend(recentBtn);
    };

    // add displayWeather data to recently viewed click
    $('.recent-btn').click(function(){
        
        let history = $(this).text()
        console.log(history)

        getCity(history);
    })
};
displayRecent();


function displayWeather(data) {
    displayData.empty();
    // get weather icon
    const iconSrc = data.weather[0].icon;
    const weatherIcon = $('<img>');
    $(weatherIcon).attr("src", 'http://openweathermap.org/img/wn/' + iconSrc + '.png')

    // display city name, date, & weather icon
    const cityDate = $('<h1>');
    $(cityDate).text(data.name + " " + [date.getMonth() + 1, date.getDate(), date.getFullYear()]);

    // append weather icon to cityDate
    $(cityDate).append(weatherIcon);

    // append cityDate to display on window 
    $(displayData).append(cityDate);

    // create ol to display temp, wind, humidity, and feels like [in place of uvi]
    const weather = $("<ol>");
    $(weather).addClass('data-list')
    $(weather).attr('id', 'data-list')

    // get temperature 
    const temp = $('<p>');
    $(temp).text("Temp: " + data.main.temp + "°F");
    $(temp).addClass('data-list')
    // get wind speed 
    const wind = $('<p>');
    $(wind).text('Wind: ' + data.wind.speed + " MPH")
    $(wind).addClass('data-list')
    // get humidity 
    const humidity = $('<p>');
    $(humidity).text('Humidity: ' + data.main.humidity + "%")
    $(humidity).addClass('data-list')

    // append list items to ol 
    $(weather).append(temp, wind, humidity);

    // display ol on page
    $(displayData).append(weather)

    $(recentCities).empty();
    displayRecent();
};

