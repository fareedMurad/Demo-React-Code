import React from 'react';
import './styles.scss';

export const Arrows = ({wrapperClasses,imageClasses, image,alt}) =>{

    return <div className={`year-vector-box ${wrapperClasses}`}>
    <img
        src={image}
        alt={alt}
        className={imageClasses}
    />
</div>
}