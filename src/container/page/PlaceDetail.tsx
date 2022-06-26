import React, { useEffect, useState } from 'react';
import Destionations from '../../json/destinaton.json';
import { useParams } from 'react-router-dom';
import { DestinationType } from '../../types/destination';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

type PlaceDetailProps = {}

const PlaceDetailPage:React.FC<PlaceDetailProps> = () => {
    const [destination,setDestination] = useState<DestinationType>();
    let { id } = useParams();

    useEffect(() => {
        setDestination(Destionations.find((data:DestinationType) => data.id === parseInt(id!)))
    },[id])

    return (
        <div className='px-[16px] mx-auto lg:px-0 lg:w-9/12 lg:py-[92px]'>
            <div className='mb-[48px]'>
                <p className='mb-[12px] text-[24px] text-[#E51B23] lg:text-[50px] lg:font-semibold'>{destination?.name}</p>
                <div className='border-b-8 border-[#E51B23] mb-[24px]'/>
                <img src={destination?.image} alt="" className='w-full'/>
            </div>
            <div className='mb-[24px]'>
                <p className='mb-[12px] text-[18px] lg:text-[36px] lg:font-semibold'>Deskripsi</p>
                <p className='text-[16px] lg:text-[24px] lg:font-normal'>{destination?.description}</p>
            </div>
            <div className='grid grid-cols-2 gap-[24px]'>
                <div className="col-span-2 lg:col-span-1 bg-[#E51B23] py-3 px-[16px]">
                    <div className='mb-[48px]'>
                        <p className='text-[24px] lg:text-[40px] font-semibold text-white'>Alamat</p>
                        <p className='text-[18px] lg:text-[28px] font-normal text-white'>{destination?.address}</p>
                    </div>
                    <div>
                        <p className='text-[24px] lg:text-[40px] font-semibold text-white'>Jam Operasional</p>
                        <p className='text-[18px] lg:text-[28px] font-normal text-white'>Senin - Minggu (09.00 - 20.00)</p>
                    </div>
                </div>
                <div className="col-span-1">
                    {/* {
                        destination &&
                        <div className='w-[400px] h-[400px]'>
                            <p>Lokasi</p>
                            <MapContainer center={[-6.7094, 111.3413]} zoom={13} scrollWheelZoom={false} 
                            style={{width:500, height:500}}>
                                <Marker position={[destination.langtitude, destination.longtitude]}>
                                    <Popup minWidth={350}>
                                        <p className='text-[19px] text-center font-bold'>{destination.name}</p>
                                        <img 
                                            className=''
                                            src={destination.image} 
                                            alt="" 
                                        />
                                        <p className='text-[14px] text-center'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At vitae saepe optio labore dolorem neque cupiditate dolor delectus adipisci aspernatur? Ea temporibus nobis eligendi error iure explicabo facere inventore amet!
                                        </p>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    } */}
                </div>
            </div>
        </div>
    );
}

export default PlaceDetailPage;
