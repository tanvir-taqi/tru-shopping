import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className='flex justify-center items-center w-full min-h-screen'>
                <div className="w-12 h-12  my-20 rounded-full animate-spin border-8 border-solid border-[#fd6a5367] border-t-transparent"></div>
            </div>
        </div>
    );
};

export default Spinner;