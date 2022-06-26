import React,{ useEffect } from 'react';
import { useMap, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Destionations from '../../json/destinaton.json';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import L from 'leaflet';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

const Search = (props) => {
    const map = useMap() // access to leaflet map
    const { provider } = props

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
        })

        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props])

    return null // don't want anything to show up from this comp
}

const MapPage = () => {
    const { height, width } = getWindowDimensions();

    const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        iconSize: [25, 30]
    });

    return (
        <div>
            <MapContainer center={[-6.7094, 111.3413]} zoom={13} scrollWheelZoom={false}
            style={{width:width, height:height}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    Destionations.map((data,i) => 
                    <Marker position={[data.langtitude, data.longtitude]} icon={icon}>
                        <Popup minWidth={350}>
                            <p className='text-[19px] text-center font-bold'>{data.name}</p>
                            <img 
                                className=''
                                src={data.image} 
                                alt="" 
                            />
                            <p className='text-[14px] text-center'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At vitae saepe optio labore dolorem neque cupiditate dolor delectus adipisci aspernatur? Ea temporibus nobis eligendi error iure explicabo facere inventore amet!
                            </p>
                        </Popup>
                    </Marker>
                    )
                }
                <Search provider={new OpenStreetMapProvider()} />
            </MapContainer>
        </div>
    );
}

export default MapPage;