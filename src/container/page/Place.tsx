import React, { useEffect, useState } from 'react';
import Destionations from '../../json/destinaton.json';
import {DestinationType} from '../../types/destination';
import { FaSearch } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

type PlacePageProps = {}

const PlacePage:React.FC<PlacePageProps> = () => {
    const [searchParams] = useSearchParams()
    let navigate = useNavigate();
    const [place,setPlace] = useState<Array<DestinationType>>([]);
    const [keyword,setKeyword] = useState<string>('');

    useEffect(() => {
        if (searchParams.get('q')) {
            setKeyword(searchParams.get('q')!);
            setPlace(Destionations.filter((data:DestinationType) => data.name.includes(searchParams.get('q')!)))
        } else {
            setPlace(Destionations)
        }
    },[searchParams])

    const handleSearch = (event:React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        navigate(`/place?q=${keyword}`)
    }

    return (
        <div>
            <div className='px-4 lg:w-2/4 mb-[64px]'>
                <div className="px-[10px] lg:px-0 mt-[32px] relative">
                    <div className='absolute top-[20%] left-[5%] lg:top-[25%] lg:left-[2.5%]'>
                        <FaSearch size={30} color={'716E6E'}/>
                    </div>
                    <form onSubmit={handleSearch}>
                        <input type="text" 
                            className="bg-gray-50 py-[12px] pl-[40px] border border-gray-300 
                            text-gray-900 text-sm rounded-[40px] focus:ring-blue-500 
                            block w-full md:pl-[60px] lg:pl-[60px] lg:py-[16px]" 
                            placeholder="Cari Objek Wisata Budaya"
                            onChange={(e) => setKeyword(e.target.value)} 
                            value={keyword}
                        />
                    </form>
                </div>
            </div>
            <div className='w-11/12 md:w-11/12 lg:w-10/12 mx-auto'>
                <p className='text-[24px] md:text-[32px] lg:text-[70px] justify-center flex gap-4 font-normal text-[#716E6E] mb-[24px]'>Destinasi 
                    <p className='text-[#E51B23]'>Wisata Budaya</p>
                </p>
                <p className='text-[16px] md:text-[24px] lg:text-[32px] justify-center font-light text-center mb-[24px]'>
                    Berikut destinasi wisata budaya Rembang yang siap menemani aktivitas liburan anda
                </p>
                <div className="grid grid-cols-2 gap-8">
                    {
                        place.map((data:DestinationType,i:number) => 
                            <Link className='col-span-2 md:col-span-1 lg:cols-span-1' to={`/place/${data.id}`}>
                                <div key={i}>
                                    <img src={data.image} className="w-full h-[300px] mb-[12px]" alt="" />
                                    <p className='p-2 text-center text-[16px] bg-[#E51B23] text-white lg:text-[24px] font-semibold'>{data.name}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default PlacePage;