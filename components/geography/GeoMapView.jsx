import MapView, { Polyline } from "react-native-maps";

export default function GeoMapView({ rivers }) {
  return (
    <MapView
      style={{ width: "100%", height: 250, borderRadius: 10 }}
      initialRegion={{
        latitude: 30,
        longitude: 70,
        latitudeDelta: 10,
        longitudeDelta: 10,
      }}
    >
      {rivers.map((river, index) => (
        <Polyline
          key={index}
          coordinates={river.coords}
          strokeColor={river.color}
          strokeWidth={4}
        />
      ))}
    </MapView>
  );
}
