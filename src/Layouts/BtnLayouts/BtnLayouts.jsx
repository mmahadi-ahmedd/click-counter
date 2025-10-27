import axios from 'axios';
import React from 'react';


const BtnLayouts = () => {


    const handleRedirect = async (site) => {
        try {
            
            const res = await axios.get(`https://btn-counter-server.vercel.app/redirect/${site}`)
            
            window.location.href = res.data.redirectUrl
        } catch (err) {
            console.error('Error redirecting:', err)
        }
    }


    return (
        <div className='h-full w-full mx-auto border-2 text-center py-10' >
            <h1 className='text-4xl font-bold mb-8' >The Buttons</h1>
            <div>
                <button onClick={() => handleRedirect('amazon')} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl m-4">Go to Amazon</button>
                <button onClick={() => handleRedirect('walmart')} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl m-4">Go to Walmart</button>
            </div>
        </div>
    );
};

export default BtnLayouts;