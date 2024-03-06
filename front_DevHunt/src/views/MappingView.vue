<template>
    <div>
        <h1>Position Géographique Actuelle</h1>
        <p v-if="loading">Récupération de la position en cours...</p>
        <p v-if="error">{{ error }}</p>
        <p v-if="position">
            Latitude: {{ position.latitude }}<br>
            Longitude: {{ position.longitude }}
        </p>
        <div id="map"></div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script>
// import L from 'leaflet';
export default{
    data(){
        return {
            loading: true,
            error: null,
            position: null
        }
    },
    mounted(){
        this.getPosition(),
        this.position()
        // this.initMap()
    },
    methods : {
        getPosition(){
            // Vérifier si le navigateur prend en charge la géolocalisation
            if (navigator.geolocation) {
                // Demander la position actuelle de l'utilisateur
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // Récupérer les coordonnées de la position
                        this.position = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        };
                        this.loading = false;
                    },
                    (error) => {
                        // En cas d'erreur lors de la récupération de la position
                        this.error = "Erreur de géolocalisation : " + error.message;
                        this.loading = false;
                    }
                );
            } else {
                // Le navigateur ne prend pas en charge la géolocalisation
                this.error = "La géolocalisation n'est pas prise en charge par ce navigateur.";
                this.loading = false;
            }
        },
        // initMap() {
        //   // Créer la carte Leaflet avec une vue centrée sur votre position
        //   const map = L.map('map').setView([0, 0], 13);
            
        //   // Ajouter une couche de carte (par exemple, OpenStreetMap)
        //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     attribution: '© OpenStreetMap contributors',
        //   }).addTo(map);
      
        //   // Récupérer la position actuelle de l'utilisateur
        //   navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //       const { latitude, longitude } = position.coords;
            
        //       // Créer un marqueur pour la position actuelle
        //       const marker = L.marker([latitude, longitude]).addTo(map);
            
        //       // Ajouter un popup au marqueur pour afficher des informations supplémentaires
        //       marker.bindPopup('Votre position actuelle').openPopup();
            
        //       // Centrer la carte sur la position de l'utilisateur
        //       map.setView([latitude, longitude], 13);
        //     },
        //     (error) => {
        //       console.error('Erreur de géolocalisation : ', error.message);
        //     }
        //   );
        // },

        Position(){
            var mapView = new ol.View({
                center: ol.proj.fromLonLat([ this.position.latitude,  this.position.longitude]),
                zoom: 20
            })
            var map = new ol.Map({
                target: 'map',
                view: mapView
            })
            var osmTile = new ol.layer.Tile({
                title: 'OpenStreetMap',
                visible: true,
                source: new ol.source.OSM()
            })
            
            map.addLayer(osmTile);
            
            var AmericaStTile = new ol.layer.Tile({
                title: "Madagascar",
                source: new ol.source.TileWMS({
                    url: 'http://localhost:8080/geoserver/carte/wms',
                    params: { 'LAYERS': 'carte:Madagascar', 'TILED': true },
                    serverType: 'geoserver',
                    visible: true
                })
            })
            map.addLayer(AmericaStTile)

            var layerSwitcher = new ol.control.LayerSwitcher({
                activationMode: 'click',
                startActive: false,
                groupSelectStyle: 'children'
            });
            map.addControl(layerSwitcher);
        }
        
    }
}
</script>

<style scoped>

</style>