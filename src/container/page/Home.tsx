import React, { useState } from 'react';
import Banner from '../../components/banner';
import {BannerImage} from '../../assets/image';
import Destionations from '../../json/destinaton.json';
import {DestinationType} from '../../types/destination';
import { Link, useNavigate } from 'react-router-dom';

type HomePageProps = {}

const HomePage:React.FC<HomePageProps> = () => {
    let navigate = useNavigate();
    const [keyword,setKeyword] = useState<string>('');

    const onChangeKeryword = (text:string) => {
        setKeyword(text)
    }

    const handleSearch = (event:React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        navigate(`/place?q=${keyword}`)
    }

    return (
        <div>
            <div className='mb-[60px]'>
                <Banner 
                    onSearch={handleSearch}
                    keyword={keyword}
                    onChangeKeryword={onChangeKeryword} 
                    image={BannerImage}
                />
            </div>
            <div className='grid grid-cols-7 items-center mb-[60px]'>
                <div className="col-span-4 bg-[#E51B23] px-4">
                    <p className='text-[16px] py-[48px] md:text-[24px] lg:text-[60px] font-bold text-white lg:py-[120px]'>
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sapiente quia laudantium unde excepturi magnam animi 
                        facilis pariatur velit deleniti reiciendis.
                    </p>
                </div>
                <div className="col-span-3 bg-white px-4">
                    <p className='text-[24px] md:text-[24px] lg:text-[60px] font-bold text-[#E51B23] lg:py-[120px]'>Welcome to Rembang</p>
                </div>
            </div>
            <div className='w-10/12 md:w-11/12 lg:w-10/12 mx-auto'>
                <p className='text-[24px] md:text-[32px] lg:text-[70px] justify-center flex gap-4 font-normal text-[#716E6E] mb-[24px]'>Destinasi 
                    <p className='text-[#E51B23]'>Wisata Budaya</p>
                </p>
                <p className='text-[16px] md:text-[24px] lg:text-[32px] justify-center font-light text-center mb-[24px]'>
                    Berikut destinasi wisata budaya Rembang yang siap menemani aktivitas liburan anda
                </p>
                <div className="grid grid-cols-2 gap-8">
                    {
                        Destionations.map((data:DestinationType,i:number) => 
                            <div className='col-span-2 md:col-span-1 lg:cols-span-1' key={i}>
                                <Link to={`/place/${data.id}`}>
                                    <img src={data.image} className="w-full h-[300px] mb-[12px]" alt="" />
                                    <p className='p-2 text-center text-[16px] bg-[#E51B23] text-white lg:text-[24px] font-semibold'>{data.name}</p>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;