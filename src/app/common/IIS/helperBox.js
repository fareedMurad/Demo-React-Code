import React from "react";
import "./styles.scss";

export default function HelperBox({ title, list }) {
    const renderList = () => {
        return list.map((item) => (
            <li className="custom-list">
                <p className="mb-0">{item}</p>
            </li>
        ));
    };
    return (
        <div className="d-flex flex-column">
            {title && <h4 className="color-primary-dark pl-4">{title}</h4>}
            <ul className="un-ordered-list">{renderList()}</ul>
        </div>
    );
}
