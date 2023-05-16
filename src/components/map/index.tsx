import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./map.css";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

function initializeMap(container: HTMLElement, isInteractive: boolean) {
  return new mapboxgl.Map({
    container,
    style: "mapbox://styles/spendesk/cjpmiia6b00ng2sqj1h0r74nm",
    center: [-74.5, 40],
    zoom: 9,
    interactive: isInteractive,
    attributionControl: false,
  });
}

export function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();
  const [layerId, setLayerId] = useState<string>();

  useEffect(() => {
    if (mapContainer.current) {
      const instance = initializeMap(mapContainer.current, true);
      setMap(instance);
    }
  }, [mapContainer]);

  useEffect(() => {
    return () => {
      map?.remove();
    };
  }, [map]);

  return <div className="map" ref={mapContainer} />;
}
