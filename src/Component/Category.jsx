import React from "react";

const Category = ({ bagCategory }) => {
    return (
        <div className="categories">
            <ul>
                {bagCategory.map((category, index) => {
                    return <li key={index}>{category}</li>;
                })}
            </ul>
        </div>
    );
};

export default Category;
