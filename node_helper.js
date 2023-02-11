const NodeHelper = require("node_helper");
const fetch = await import('node-fetch');

module.exports = NodeHelper.create({
  start: function() {
    console.log("MMM-Traffic-Heatmap helper started...");
  },

  getData: function() {
    var self = this;
    var location = this.config.location;

    // API request to get traffic data for the specified location
    fetch("https://api.traffic-heatmap.com/v1/location?location=" + location)
      .then(res => res.json())
      .then(data => {
        self.sendSocketNotification("MMM_TRAFFIC_HEATMAP_DATA", {data: data});
      })
      .catch(error => {
        console.error("MMM-Traffic-Heatmap: Error in fetching data: " + error);
      });
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "MMM_TRAFFIC_HEATMAP_GET_DATA") {
      this.getData();
    }
  }
});