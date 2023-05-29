const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cacheExpirationTime = 3600000;

search.addEventListener('click', () => {
    const APIKey = 'd19ba4a86db9e4e7c192b49e88493eff';
    const cityInput = document.querySelector('.search-box input');
    const city = cityInput.value;
    const cacheKey = city.toLowerCase();

    if (city === '') {
        displayErrorMessage('Por favor, ingresa una ciudad válida');
        return;
    }


    if (!/^[A-Za-z\s]+$/.test(city)) {
        displayErrorMessage('Por favor, ingresa solo letras y espacios en el nombre de la ciudad');
        return;
    }

    if (city.length < 3 || city.length > 50) {
        displayErrorMessage('Por favor, ingresa un nombre de ciudad válido (entre 3 y 50 caracteres)');
        return;
    }

    const currentTime = Date.now();
    const cachedData = getCachedWeatherData(cacheKey, currentTime);
    if (cachedData) {
        // Usar datos en caché
        displayWeatherData(cachedData);
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${APIKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status);
                }
                return response.json();
            })
            .then(json => {
                if (json.cod === '404') {
                    handleCityNotFound();
                    return;
                }


                error404.style.display = 'none';
                error404.classList.remove('fadeIn');

                // Actualizar datos en caché
                updateCachedWeatherData(cacheKey, currentTime, json);

                displayWeatherData(json);
            })
            .catch(error => {
                displayErrorMessage('Error al obtener datos del clima. Por favor, intenta nuevamente más tarde.');
                console.error('Error en la solicitud:', error);
            });
    }
});

function getCachedWeatherData(cacheKey, currentTime) {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        const { timestamp, data } = JSON.parse(cachedData);
        if (currentTime - timestamp < cacheExpirationTime) {
            return data;
        } else {
            // Eliminar datos caducados del caché
            localStorage.removeItem(cacheKey);
        }
    }
    return null;
}

function updateCachedWeatherData(cacheKey, currentTime, data) {
    const cacheData = {
        timestamp: currentTime,
        data: data
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
}

function displayWeatherData(data) {
    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    switch (data.weather[0].main) {
        case 'Clear':
            image.src = './images/clear.png';
            break;
        case 'Rain':
            image.src = './images/rain.png';
            break;
        case 'Snow':
            image.src = './images/snow.png';
            break;
        case 'Clouds':
            image.src = './images/cloud.png';
            break;
        case 'Haze':
            image.src = './images/mist.png';
            break;
        default:
            image.src = '';
    }

    temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;

    weatherBox.style.display = '';
    weatherDetails.style.display = '';
    weatherBox.classList.add('fadeIn');
    weatherDetails.classList.add('fadeIn');
    container.style.height = '590px';
}

function displayErrorMessage(message) {
    error404.style.display = 'block';
    error404.textContent = message;
    error404.classList.add('fadeIn');
    container.style.height = '400px';
    weatherBox.style.display = 'none';
    weatherDetails.style.display = 'none';
}

function handleCityNotFound() {
    container.style.height = '400px';
    weatherBox.style.display = 'none';
    weatherDetails.style.display = 'none';
    error404.style.display = 'block';
    error404.classList.add('fadeIn');
    displayErrorMessage('La ciudad no fue encontrada. Por favor, ingresa otra ciudad.');
}
