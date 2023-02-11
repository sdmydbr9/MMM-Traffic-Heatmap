Module.register("MMM-Traffic-Heatmap", {
  defaults: {
    location: "New York, NY",
    updateInterval: 60 * 60 * 1000,
    useCoordinates: false,
    latitude: 40.7128,
    longitude: -74.0060,
    zoomLevel: 12,
    mapHeight: 500,
    mapWidth: "100%",
    gradient: [
      "rgba(0, 255, 255, 0)",
      "rgba(0, 255, 255, 1)",
      "rgba(0, 191, 255, 1)",
      "rgba(0, 127, 255, 1)",
      "rgba(0, 63, 255, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(0, 0, 223, 1)",
      "rgba(0, 0, 191, 1)",
      "rgba(0, 0, 159, 1)",
      "rgba(0, 0, 127, 1)",
      "rgba(63, 0, 91, 1)",
      "rgba(127, 0, 63, 1)",
      "rgba(191, 0, 31, 1)",
      "rgba(255, 0, 0, 1)"
    ]
  },

  start: function() {
    Log.info("Starting module: " + this.name);
    this.updateHeatmap();
  },

  getStyles: function() {
    return ["MMM-Traffic-Heatmap.css"];
  },

  getScripts: function() {
    return ["https://maps.googleapis.com/maps/api/js?key=" + this.config.apiKey];
  },

  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.id = "map";
    wrapper.style.height = this.config.mapHeight + "px";
    wrapper.style.width = this.config.mapWidth;
    return wrapper;
  },

  updateHeatmap: function() {
    var center = {};
    if (this.config.useCoordinates) {
      center = { lat: this.config.latitude, lng: this.config.longitude };
    } else {
      center = this.config.location;
    }

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: this.config.zoomLevel,
      center: center
    });

    var gradient = this.config.gradient;

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: [],
      map: map,
      gradient: gradient
    });
  },

  notificationReceived: function(notification, payload, sender) {
    if (notification === "DOM_OBJECTS_CREATED") {
      this.updateHeatmap();
    }
  }
});
