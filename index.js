// index.js
export async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { Marker } = await google.maps.importLibrary("marker");
  
    const centro = { lat: -8.0022, lng: -34.9786 };
  
    const map = new Map(document.getElementById("map"), {
      center: centro,
      zoom: 15,
    });
  
    new Marker({
      position: centro,
      map,
      title: "Procópio's Açaí",
    });
  }
  