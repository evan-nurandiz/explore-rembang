import React from 'react';
import { FaSearch } from 'react-icons/fa';

type HomePageProps = {
    keyword:string
    image:any
    onSearch: (e:React.SyntheticEvent) => void
    onChangeKeryword: (keyword:string) => void
}

const Banner:React.FC<HomePageProps> = (props) => {
    return (
        <div className='relative'>
            <img src={props.image} alt="" className='w-full h-[600px]'/>
            <div className='absolute left-0 bottom-[50%] md:left-[10%] lg:left-[25%]'>
                <p className='text-center text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-white'>Cari obyek wisata budaya yang ingin anda kunjungi </p>
                <div className="px-[10px] lg:px-0 mt-[32px] relative">
                    <div className='absolute top-[20%] left-[5%] lg:top-[25%] lg:left-[2.5%]'>
                        <FaSearch size={30} color={'716E6E'}/>
                    </div>
                    <form onSubmit={props.onSearch}>
                        <input type="text" id="text" 
                            value={props.keyword}
                            className="bg-gray-50 py-[12px] pl-[40px] border border-gray-300 
                            text-gray-900 text-sm rounded-[40px] focus:ring-blue-500 
                            block w-full md:pl-[60px] lg:pl-[60px] lg:py-[16px]" 
                            placeholder="Cari Objek Wisata Budaya" 
                            onChange={(e) => props.onChangeKeryword(e.target.value)}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Banner;