import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="map"
export default class extends Controller {
  static values = { apiKey: String }
  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
    container: this.element,
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 1 // starting zoom

    });

    this.map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
      );

      this.map.on('click', (e) => {
        const marker = new mapboxgl.Marker({
          color: "#F76E11",
          draggable: true
        }).setLngLat([JSON.stringify(e.lngLat.wrap().lng), JSON.stringify(e.lngLat.wrap().lat)]).addTo(this.map);
        // console.log(JSON.stringify(e.lngLat.wrap().lng));
        console.log()
      });



  }
}
