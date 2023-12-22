<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<style>
.mycluster {
  width: 40px;
  height: 40px;
  background-color: royalblue;
  text-align: center;
  font-size: 24px;
}

#spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#mapCreate {
  height: calc(100vh - 250px);
  min-height: 50vh;
}

#map {
  height: calc(100vh - 250px);
  min-height: 50vh;
}

.custom-popup .leaflet-popup-content-wrapper {
  background: #2c3e50;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
}

.custom-popup .leaflet-popup-content-wrapper a {
  color: rgba(255, 255, 255, 0.5);
}

.custom-popup .leaflet-popup-tip-container {
  width: 30px;
  height: 15px;
}

.custom-popup .leaflet-popup-tip {
  background: #2c3e50;
  margin-left: 12px;
}

.info {
  padding: 6px 8px;
  font: 14px/16px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  line-height: 24px;
}

.info h4 {
  margin: 0 0 5px;
  color: #777;
}

.legend {
  text-align: left;
  line-height: 18px;
  color: #555;
}

.legend i {
  width: 18px;
  height: 18px;
  float: left;
  margin-right: 8px;
  opacity: 0.7;
}
</style>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet/dist/leaflet.js";
import "leaflet.markercluster/dist/leaflet.markercluster.js";

export default {
  name: "TestMap",
  props: {
    mapData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      map: null,
      markersGroup: L.markerClusterGroup(),
    };
  },
  mounted() {
    // Initialize the map and set its view
    var mapCenter = [44.5, 16];

    // Postavljanje slojeva
    var atrML = 'Powered by <a href="http://www.microlink.hr" > Micro-Link</a>';
    var OpenStreetMap = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: atrML,
        maxZoom: 19,
      }
    );

    var googleStreets = L.tileLayer(
      "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      {
        attribution: atrML,
        maxZoom: 21,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    );

    var mapbox = L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution: atrML,
        maxZoom: 23,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoianVrYTk3IiwiYSI6ImNrdTZxcng5eTN2c2IycHF0cnE1Zno5cHcifQ.gfrbRhNsX6XJOZywD-kSSw",
      }
    );

    var Stadia_AlidadeSmoothDark = L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      {
        attribution: atrML,
        maxZoom: 20,
      }
    );

    var OpenTopoMap = L.tileLayer(
      "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      {
        attribution: atrML,
        maxZoom: 20,
      }
    );

    var CyclOSM = L.tileLayer(
      "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
      {
        attribution: atrML,
        maxZoom: 20,
      }
    );

    var baseMaps = {
      "Open Street Map": OpenStreetMap,
      "Google streets": googleStreets,
      "Map Box": mapbox,
      "Stadia Dark": Stadia_AlidadeSmoothDark,
      OpenTopoMap: OpenTopoMap,
      CyclOSM: CyclOSM,
    };

    // Dodavanje sloja na mapu
    this.map = L.map("map", {
      center: mapCenter,
      zoom: 6,
      layers: baseMaps["Open Street Map"],
    });

    // Dodavanje kontrole za slojeve, dolje lijevo
    L.control.layers(baseMaps).addTo(this.map).setPosition("bottomleft");

    // Legenda alarma, gore desno
    this.legend = L.control({
      position: "topright",
    });
    // Create a marker cluster group
    this.markersGroup = L.markerClusterGroup({
      // iconCreateFunction: function (cluster) {
      //   return L.divIcon({
      //     html: "<b>" + cluster.getChildCount() + "<b>",
      //     iconSize: L.point(40, 40),
      //     className: "marker-cluster mycluster",
      //   });
      // },
      //iconCreateFunction: function(cluster) {
      //    return greenIcon;
      //},
      //icon = (el.cntAlarm > 0 ? redIcon : greenIcon),
      spiderfyOnMaxZoom: false, // onemogućuje prikazivanje uređaja u obliku mreže kod maksimalnog zumiranja
      disableClusteringAtZoom: 16, // onemogućuje klasteriranje na zumiranju razine 16
    });
    this.mapData.forEach((location) => {
      let marker = L.marker([location.lat, location.long], {
        title: location.name,
        id: location.id,
      }).on(
        "click",
        this.markerOnClick(location.id, location.lat, location.long)
      );
      marker.bindPopup(location.name);
      this.markersGroup.addLayer(marker);
    });

    this.map.addLayer(this.markersGroup);
  },

  methods: {
    openPopupa(id) {
      var m = this.markersGroup.getLayers();
      for (var i in m) {
        if (m[i].options.title == id) {
          m[i].openPopup();
        }
      }
    },

    // Funkcija za zumiranje na određeni marker s parametrima id, lat, lng
    sasa(id, lat, lng) {
      this.map.flyTo([lat, lng], 17, {
        duration: 2.25, // Animation duration in seconds
        easeLinearity: 0.75, // Animation smoothness
      });
      setTimeout(() => {
        this.openPopupa(id);
      }, 2250);
    },
    markerOnClick(id, lat, long) {
      this.sasa(id, lat, long);
      this.$emit("marker-click");
    },

    loadData(mapData) {
      this.mapData.forEach((location) => {
        let marker = L.marker([location.lat, location.long], {
          title: location.name,
          id: location.id,
        }).on("click", this.markerOnClick);
        marker.bindPopup(location.name);
        this.markersGroup.addLayer(marker);
      });

      this.map.addLayer(this.markersGroup);
    },
  },
};
</script>
