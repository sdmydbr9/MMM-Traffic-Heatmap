# MMM-Traffic-Heatmap
Uses google maps api to display the traffic heatmap for a given location 

Clone this repo
Run npm install in the clone directory 
Add the config
Config structure 
``` 
    {
    "module": "MMM-Traffic-Heatmap",
    "position": "bottom_center",
    "config":{
  location: "New York, NY",
  updateInterval: 60 * 60 * 1000,
  useCoordinates: false,
  latitude: 40.7128,
  longitude: -74.0060,
  zoomLevel: 12,
  mapHeight: 500,
  mapWidth: "100%",
  apiKey: "YOUR_API_KEY",
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
}

}

```
