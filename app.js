// WEATHER CROSSING API KEY VGSVU45QFY7FQ3T557YS85XR6
// MAPS API KEY AIzaSyB2RrRBsMP2YXKOav-FhbI1utuoIpMgzjQ
// resort info

/* let map;

async function initMap() {
    const position = { lat: 39.642335, lng: -105.872056 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    map = new Map(document.getElementById("test"), {
        zoom: 8,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Keystone",
    });
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}

initMap(); */



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
        map: 'map1'
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
        map: 'map2'
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
        map: 'map3'
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
        map: 'map4'
    },
];

const container = document.querySelector('.container');

function fetchWeatherData(obj) {
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

            let map;

            async function initMap() {
                const position = { lat: obj[i].latitude, lng: obj[i].longitude };
                const { Map } = await google.maps.importLibrary("maps");
                const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
                map = new Map(document.getElementById(obj[i].map), {
                    zoom: 8,
                    center: position,
                    mapId: "DEMO_MAP_ID",
                });

                const marker = new AdvancedMarkerElement({
                    map: map,
                    position: position,
                    title: obj[i].marker,
                });
                const trafficLayer = new google.maps.TrafficLayer();
                trafficLayer.setMap(obj[i].map);
            }

            initMap();

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
                        <h4>Weather Report<br><br>Max Temperature: ${obj[i].maxtemp}<br>Min Temperature: ${obj[i].mintemp}<br>Conditions: ${obj[i].conditions}</h4>
                    </div>
                    <div class="snow">
                        <h4>Snow Report<br><br>${obj[i].snow} inches</h4>
                    </div>
                    <div class="traffic">
                        <div id=${obj[i].map} class="test"></div>
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

fetchWeatherData(resorts);
