mapboxgl.accessToken = 'pk.eyJ1IjoiZGVlcGFrMjUwMjIiLCJhIjoiY2xwNzAzNDZhMjJ4ejJobmxiaTNyZ2xraiJ9._6yLyuGLtd91QoE_BK44Hw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])

}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: center,
        zoom: 16,
    })
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })
    map.addControl(directions, "top-left")
    map.addControl(new mapboxgl.FullscreenControl({ container: document.querySelector('body') }));

    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
    }));

    
}