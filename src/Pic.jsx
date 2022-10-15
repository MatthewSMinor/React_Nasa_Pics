import React from 'react';

const Pic = ({pic: {copyright, date, explanation, hdurl, media_type, service_version, title, url}}) => {
    console.log(title);

    return (
        <>
            <div className='fullPic'>
                <div className='pic'>
                    <p2>{title}</p2>
                </div>
                <div className='pic'>
                    <img src={url} alt='heres a pic'/>
                </div>
                <div className='explanation'>
                    <p>{explanation}</p>
                </div>
            </div>
        </>
    )
}

export default Pic;