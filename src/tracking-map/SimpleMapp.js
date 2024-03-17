import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { TextField, Button } from "@mui/material";

const SimpleMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null); // Reference to the marker

  useEffect(() => {
    if (mapInstanceRef.current) {
      return; // Skip initialization if the map is already initialized
    }

    const map = L.map(mapRef.current).setView([13.0827, 80.2707], 11); // Chennai coordinates
    const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: "Leaflet &copy; " + mapLink + ", contribution",
      maxZoom: 18,
    }).addTo(map);

    const userIcon = L.icon({
      iconUrl: "img/user.svg",
      iconSize: [30, 30],
    });

    const marker = L.marker([13.0827, 80.2707], { icon: userIcon }).addTo(map);
    markerRef.current = marker; // Store the marker reference

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const trackRoute = () => {
    const destination = document.getElementById("destinationInput").value;
    if (destination.trim() === "") {
      alert("Please enter a destination.");
      return;
    }

    const geocodeUrl =
      "https://nominatim.openstreetmap.org/search?format=json&q=" + destination;

    fetch(geocodeUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const lat = data[0].lat;
          const lon = data[0].lon;
          const destinationLatLng = L.latLng(lat, lon);

          L.Routing.control({
            waypoints: [
              L.latLng(13.0827, 80.2707), // Chennai coordinates
              destinationLatLng,
            ],
          })
            .on("routesfound", function(e) {
              const routes = e.routes;
              console.log(routes);

              e.routes[0].coordinates.forEach(function(coord, index) {
                setTimeout(function() {
                  markerRef.current.setLatLng([coord.lat, coord.lng]);
                }, 100 * index);
              });
            })
            .addTo(mapInstanceRef.current);
        } else {
          alert("Destination not found. Please enter a valid destination.");
        }
      })
      .catch((error) => {
        console.error("Error fetching geocode:", error);
        alert("Error fetching geocode. Please try again later.");
      });
  };

  return (
    <div>
      <div
        id="map"
        style={{ width: "100%", height: "90vh" }}
        ref={mapRef}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          id="destinationInput"
          label="Enter destination"
          variant="outlined"
          size="small"
          style={{ width: "200px", marginBottom: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={trackRoute}
          style={{
            padding: "5px 10px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "3px",
          }}
        >
          Track Route
        </Button>
      </div>
    </div>
  );
};

export default SimpleMap;
