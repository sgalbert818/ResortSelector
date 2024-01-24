// WEATHER CROSSING API KEY VGSVU45QFY7FQ3T557YS85XR6
// MAPS API KEY AIzaSyB2RrRBsMP2YXKOav-FhbI1utuoIpMgzjQ
// resort info

const resorts = [
    {
        id: 1,
        title: 'Keystone - Dillon, CO',
        img: 'images/keystone.jpg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/100%20Dercum%20Square%2C%20Keystone%2C%20CO%2080435?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 39.5815,
        longitude: -105.94370,
        marker: 'Keystone',
        pass: 'epic',
        icon:'',
    },
    {
        id: 2,
        title: 'Breckenridge - Breckenridge, CO',
        img: 'images/breckenridge.jpg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/4%20Grandview%20Dr%2C%20Breckenridge%2C%20CO%2080424?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 39.48005,
        longitude: -106.07187,
        marker: 'Breckenridge',
        pass: 'epic',
        icon:'',
    },
    {
        id: 3,
        title: 'Winter Park - Winter Park, CO',
        img: 'images/winterpark.jpeg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/110-148%20Fir%20Dr%2C%20Winter%20Park%2C%20CO%2080482?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 39.86293,
        longitude: -105.77874,
        marker: 'Winter Park',
        pass: 'ikon',
        icon:'',
    },
    {
        id: 4,
        title: 'Copper Mountain - Frisco, CO',
        img: 'images/copper.jpg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/509%20Copper%20Rd%2C%20Frisco%2C%20CO%2080443?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 39.50089,
        longitude: -106.15563,
        marker: 'Copper',
        pass: 'ikon',
        icon:'',
    },
    {
        id: 5,
        title: 'Arapahoe Basin - Dillon, CO',
        img: 'images/abasin.jpg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/arapahoe%20basin%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 39.63425,
        longitude: -105.87144,
        marker: 'Arapahoe Basin',
        pass: 'ikon',
        icon:'',
    },
    {
        id: 6,
        title: 'Eldora - Eldora, CO',
        img: 'images/eldora.jpeg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/eldora%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 39.93734,
        longitude: -105.58270,
        marker: 'Eldora',
        pass: 'ikon',
        icon:'',
    },
    {
        id: 7,
        title: 'Telluride - Telluride, CO',
        img: 'images/telluride.png',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/telluride%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 37.91950,
        longitude: -107.83673,
        marker: 'Telluride',
        pass: 'epic',
        icon:'',
    },
    {
        id: 8,
        title: 'Crested Butte - Crested Butte, CO',
        img: 'images/crestedbutte.jpeg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/crested%20butte%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 38.89925,
        longitude: -106.96576,
        marker: 'Crested Butte',
        pass: 'epic',
        icon:'',
    },
    {
        id: 9,
        title: 'Steamboat - Steamboat Springs, CO',
        img: 'images/steamboat.jpg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/steamboat%20springs%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 40.45399,
        longitude: -106.77087,
        marker: 'Steamboat',
        pass: 'ikon',
        icon:'',
    },
    {
        id: 10,
        title: 'Aspen Snowmass - Aspen, CO',
        img: 'images/aspen.jpeg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/aspen%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 39.19225,
        longitude: -106.94957,
        marker: 'Aspen',
        pass: 'ikon',
        icon:'',
    },
    {
        id: 11,
        title: 'Beaver Creek - Avon, CO',
        img: 'images/beavercreek.jpeg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/beaver%20creek%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 39.60184,
        longitude: -106.53159,
        marker: 'Beaver Creek',
        pass: 'epic',
        icon:'',
    },
    {
        id: 12,
        title: 'Vail - Vail, CO',
        img: 'images/vail.jpg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vail%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        feelslike: '',
        conditions: '',
        snow: '',
        latitude: 39.60629,
        longitude: -106.35496,
        marker: 'Vail',
        pass: 'epic',
        icon:'',
    },
];

const container = document.querySelector('.container');
const itemContainer = document.querySelector('.item-container');
const allBtn = document.querySelector('.allbtn');
const epicBtn = document.querySelector('.epicbtn');
const ikonBtn = document.querySelector('.ikonbtn');
const filterBtns = document.querySelector('.filter-buttons');

let epicResorts = [];
let ikonResorts = [];
let autocomplete;
let origin;

// set up filter buttons

filterResorts(resorts);

function filterResorts(obj) {
    for (i = 0; i < obj.length; i++) {
        let values = (Object.values(obj[i]));
        if (values.includes('epic') == true) {
            epicResorts.push(obj[i]);
        } if (values.includes('ikon') == true) {
            ikonResorts.push(obj[i]);
        }
    }
}

// set up autocomplete address search

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            componentRestrictions: { 'country': ['US'] },
            fields: ['place_id', 'name']
        }
    );
    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    filterBtns.style.display = 'flex';
}

// resort filter button functionality

allBtn.addEventListener('click', function () {
    container.style.display = 'block';
    container.innerHTML = '';
    origin = autocomplete.getPlace().place_id;
    fetchWeatherData(resorts, origin);
})
epicBtn.addEventListener('click', function () {
    container.style.display = 'block';
    container.innerHTML = '';
    origin = autocomplete.getPlace().place_id;
    fetchWeatherData(epicResorts, origin);
})
ikonBtn.addEventListener('click', function () {
    container.style.display = 'block';
    container.innerHTML = '';
    origin = autocomplete.getPlace().place_id;
    fetchWeatherData(ikonResorts, origin);
})

// HTML mapping functionality

function fetchWeatherData(obj, startLocation) {
    for (let i = 0; i < obj.length; i++) {

        fetch(obj[i].fetchLink, {
            method: 'GET',
            headers: {},

        }).then(response => {
            if (!response.ok) {
                throw response;
            }
            return response.json();

        }).then(response => {
            let test;
            obj[i].maxtemp = response.days[0].tempmax;
            obj[i].mintemp = response.days[0].tempmin;
            obj[i].conditions = response.days[0].description;
            obj[i].feelslike = response.days[0].feelslike;
            
            obj[i].icon = response.days[0].icon;
            if (obj[i].icon = 'partly-cloudy-day') {
                obj[i].icon = 'images/partlycloudy.png';
            } else if (obj[i].icon = 'clear-day') {
                obj[i].icon = 'images/sun.png';
            } else if (obj[i].icon = 'snow') {
                obj[i].icon = 'images/snow.png';
            } else if (obj[i].icon = 'rain') {
                obj[i].icon = 'images/rain.png';
            } else {
                obj[i].icon = 'images/cloud.png';
            }

            obj[i].snow = response.days[0].snow;
            if (Math.round(obj[i].snow / 2.54) == 1) {
                obj[i].snow = (Math.round(obj[i].snow / 2.54) + ' inch')
            } else {
                obj[i].snow = (Math.round(obj[i].snow / 2.54) + ' inches')
            }

            container.innerHTML +=
                (`<div class="item-container">
                <div class="img-container">
                <img src=${obj[i].img}>
            </div>
            <div class="section-top">
                <h2>${obj[i].title}</h2>
            </div>
            <div class="section-bottom">
                <div class="weather">
                    <div class="outlook">
                        <div class="left">
                            <div class="text-top">
                                <h4>outlook</h4>
                            </div>
                            <div class="text-bottom">
                                <p>${obj[i].conditions}</p>
                            </div>
                        </div>
                        <div class="right">
                            <img src=${obj[i].icon}>
                        </div>
                    </div>
                    <div class="temperature">
                        <div class="left">
                            <div class="text-top">
                                <h4>Temperature</h4>
                            </div>
                            <div class="text-bottom">
                                <p>High of ${Math.round(obj[i].maxtemp * (9 / 5) + 32)}°F. Low of ${Math.round(obj[i].mintemp * (9 / 5) + 32)}°F. Feels like ${Math.round(obj[i].feelslike * (9 / 5) + 32)}°F.</p>
                            </div>
                        </div>
                    </div>
                    <div class="snow">
                        <div class="left">
                            <div class="text-top">
                                <h4>snow</h4>
                            </div>
                            <div class="text-bottom">
                                <p>24 hour snow report: ${obj[i].snow}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="traffic">
                    <div id=${obj[i].marker} class="map-box">
                        <iframe loading="lazy" zoom='5' allowfullscreen src="https://www.google.com/maps/embed/v1/directions?origin=place_id:${startLocation}&destination=${obj[i].latitude},${obj[i].longitude}&key=AIzaSyB2RrRBsMP2YXKOav-FhbI1utuoIpMgzjQ"></iframe>
                    </div>
                </div>
            </div>
        </div>`);

        }).catch((errorResponse) => {
            if (errorResponse.text) {
                errorResponse.text().then(errorMessage => {
                })
            } else { }
        });
    }
}