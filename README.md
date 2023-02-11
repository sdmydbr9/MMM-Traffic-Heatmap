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
    "config": {
        "location": "New York",
        "updateInterval": 60 * 60 * 1000,
        "useCoordinates": false,
        "latitude": 40.7128,
        "longitude": 74.0060,
        "mapWidth": "100%",
        "mapHeight": "500px",
        "zoom": 12,
        "gradient": true
    }
}

```
