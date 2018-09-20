import React from 'react';

export default (props) =>  {
    console.log('Scrapbook Props: ',props);
    const {src,style} = props.about;
    return(
        <img src={src} className="scrapbook-image" style={style} />
    )
};
