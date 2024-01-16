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
        conditions: '',
        snow: '',
        latitude: 39.6046192,
        longitude: -105.9538216,
        marker: 'Keystone',
        pass: 'epic',
    },
    {
        id: 2,
        title: 'Breckenridge - Breckenridge, CO',
        img: 'images/breckenridge.jpg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/4%20Grandview%20Dr%2C%20Breckenridge%2C%20CO%2080424?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        conditions: '',
        snow: '',
        latitude: 39.48018264770508,
        longitude: -106.0665512084961,
        marker: 'Breckenridge',
        pass: 'epic',
    },
    {
        id: 3,
        title: 'Winter Park - Winter Park, CO',
        img: 'images/winterpark.jpeg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/110-148%20Fir%20Dr%2C%20Winter%20Park%2C%20CO%2080482?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        conditions: '',
        snow: '',
        latitude: 39.8716143,
        longitude: -105.7827088,
        marker: 'Winter Park',
        pass: 'ikon',
    },
    {
        id: 4,
        title: 'Copper Mountain - Frisco, CO',
        img: 'images/copper.jpg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/509%20Copper%20Rd%2C%20Frisco%2C%20CO%2080443?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        conditions: '',
        snow: '',
        latitude: 39.50162887573242,
        longitude: -106.15153503417969,
        marker: 'Copper',
        pass: 'ikon',
    },
    {
        id: 5,
        title: 'Arapahoe Basin - Dillon, CO',
        img: 'images/abasin.jpg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/arapahoe%20basin%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        conditions: '',
        snow: '',
        latitude: 39.642312,
        longitude: -105.871685,
        marker: 'Arapahoe Basin',
        pass: 'ikon',
    },
    {
        id: 6,
        title: 'Eldora - Eldora, CO',
        img: 'images/eldora.jpeg',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/eldora%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        conditions: '',
        snow: '',
        latitude: 39.9372203,
        longitude: -105.58267,
        marker: 'Eldora',
        pass: 'ikon',
    },
    {
        id: 7,
        title: 'Telluride - Telluride, CO',
        img: 'images/telluride.png',
        fetchLink: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/telluride%20colorado?unitGroup=metric&key=VGSVU45QFY7FQ3T557YS85XR6&contentType=json",
        maxtemp: '',
        mintemp: '',
        conditions: '',
        snow: '',
        latitude: 37.937,
        longitude: -107.8123,
        marker: 'Telluride',
        pass: 'epic',
    },
];

const container = document.querySelector('.container');
const allBtn = document.querySelector('.allbtn');
const epicBtn = document.querySelector('.epicbtn');
const ikonBtn = document.querySelector('.ikonbtn');
const submit = document.querySelector('#address-submit');

let epicResorts = [];
let ikonResorts = [];

filterResorts(resorts);
let autocomplete;
let origin;

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

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            componentRestrictions: { 'country': ['US'] },
            fields: ['place_id', 'name']
        }
    );
}

submit.addEventListener('click', submitClick);

function submitClick() {
    origin = autocomplete.getPlace().place_id;
    fetchWeatherData(resorts, origin);
}

allBtn.addEventListener('click', function () {
    container.innerHTML = '';
    origin = autocomplete.getPlace().place_id;
    fetchWeatherData(resorts, origin);
})
epicBtn.addEventListener('click', function () {
    container.innerHTML = '';
    origin = autocomplete.getPlace().place_id;
    fetchWeatherData(epicResorts, origin);
})
ikonBtn.addEventListener('click', function () {
    container.innerHTML = '';
    origin = autocomplete.getPlace().place_id;
    fetchWeatherData(ikonResorts, origin);
})


function fetchWeatherData(obj, startLocation) {
    console.log(startLocation);
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
            obj[i].maxtemp = response.days[0].tempmax;
            obj[i].mintemp = response.days[0].tempmin;
            obj[i].conditions = response.days[0].conditions;
            obj[i].snow = response.days[0].snow;

            container.innerHTML += (`<div class="item-container">
            <div class="resort-img">
                <img src=${obj[i].img}>
            </div>
            <div class="info">
                <div class="name">
                    <h2>${obj[i].title}</h2>
                </div>
                <div class="report">
                    <div class="temperature">
                        <h4>Weather Report<br><br>Max Temperature: ${Math.round(obj[i].maxtemp * (9 / 5) + 32)}°F<br>Min Temperature: ${Math.round(obj[i].mintemp * (9 / 5) + 32)}°F<br>Conditions: ${obj[i].conditions}</h4>
                    </div>
                    <div class="snow">
                        <h4>24 hour Snow Report<br><br>${Math.round(obj[i].snow / 2.54)} inches</h4>
                    </div>
                    <div class="traffic">
                        <div id=${obj[i].marker} class="map-box">
                        <iframe loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/directions?origin=place_id:${startLocation}&destination=${obj[i].latitude},${obj[i].longitude}&key=AIzaSyB2RrRBsMP2YXKOav-FhbI1utuoIpMgzjQ"></iframe>
                        </div>
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