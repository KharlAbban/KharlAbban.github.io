// Remove Skeleton On load
window.addEventListener("load", () => {
  document.querySelectorAll(".skeleton").forEach(skeleton => {
    skeleton.classList.remove("skeleton");
  });
});

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var circle = L.circle([51.508, -0.11], {
  color: 'green',
  fillColor: '#2892D7',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

DecoupledEditor
        .create( document.querySelector( '#editor' ) )
        .then( editor => {
            const toolbarContainer = document.querySelector( '#toolbar-container' );

            toolbarContainer.appendChild( editor.ui.view.toolbar.element );
        } )
        .catch( error => {
            console.error( error );
        } );
