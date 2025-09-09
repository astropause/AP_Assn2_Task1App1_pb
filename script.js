/* add the webmap to the portal */

require([
  "esri/views/MapView",
  "esri/WebMap",
], function(MapView, WebMap) {
  const webmap = new WebMap({
    portalItem: {
      id: "8d14d6257294403db0f45e9ea298a16b"
    }
  });

 /************************************************************
       * Set the WebMap instance to the map property in a MapView. Use St. Louis coordinates for center of portal. 
       ************************************************************/
const view = new MapView({
    map: webmap,
    container: "viewDiv",
    center: [-90.1994, 38.6270], // St. Louis coordinates
    zoom: 10 // Zoom level
  });
});