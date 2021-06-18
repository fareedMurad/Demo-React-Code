import React from "react";
import "./styles.scss";

export default function HelperBox({ image,item, title,hoverImage,onSelectSubject,selected,content, id }) {

    const isSelected = () => {
        return selected?.id === item?.id
    }
    return (
        <div className={`d-flex flex-column helper-curriculum-box align-items-center text-center ${isSelected() && 'selected'} ${item?.disabledImg ? 'disabled-helper-curriculum-box':' enabled-helper-curriculum-box'}`} onClick={() =>  !item?.disabledImg &&onSelectSubject(item)}>
            <img src={image} alt="logo" className={`vector2 mx-auto image1`} id={id} />
            <img src={hoverImage} alt="logo" className={`vector2 mx-auto d-none image2`} id={id} />
            <p className={`color-primary-dark w-75 small mt-1  ${item?.disabledImg && 'opacity'}`}>{title}</p>
        </div>
    );
}
