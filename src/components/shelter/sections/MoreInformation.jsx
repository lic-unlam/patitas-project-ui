import React, {useEffect,useState} from "react";
//import { GoogleMap, useLoadScript } from "@react-google-maps/api";

/*const containerStyle = {
    width: '400px',
    height: '400px'
};
  
const center = {
    lat: -34.671840910911236,
    lng: -58.606956563123404
}*/



function MoreInformation(props) {
    const {shelterInfo} = props;

    const [map, setMap] = useState(null);

    useEffect(() => {
        initMap();
    }, []);

    /*const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDidboj4JQHSrr5vCN7ACzWT-KQHYbJhwo"
      })*/

      async function initMap() {
        // The location of Uluru
        const position = { lat: -34.671840910911236, lng: -58.606956563123404 };
        // Request needed libraries.
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
      
        // The map, centered at Uluru
        setMap(new Map(document.getElementById("map"), {
          zoom: 15,
          center: position,
          mapId: "DEMO_MAP_ID",
        }));
      
        // The marker, positioned at Uluru
        const marker = new AdvancedMarkerView({
          map: map,
          position: position,
          title: "Uluru",
        });
      }
    
    return (
        <div className="row">
            <div className="col-6">
                <img className="img-fluid" width={600} src={shelterInfo.map} alt="shelter_map"/>
                {/* isLoaded && <GoogleMap mapContainerClassName="map-container" id="refugio_mapa" center={center} zoom={15}/>*/}
                <div id="map" style={{'height': '100%'}}></div>
            </div>
            <div className="col-6">
                <h4>Dirección:</h4>
                <p>{shelterInfo.address}, {shelterInfo.district}</p>
                <h4>Teléfono:</h4>
                <p>(011) 5555-5555</p>
                <h4>Horario:</h4>
                <p>Lunes a viernes 10 a 20 hs.</p>
                <h4>Descripción:</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    );
}

export default MoreInformation;