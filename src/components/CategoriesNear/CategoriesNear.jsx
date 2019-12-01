import React from 'react'
import '../CategoriesNear/CategoriesNear.css'
import {NavLink} from 'react-router-dom';

const CategoriesNear = () => {

    return(
        <div className="categories-near">
            <NavLink to='/categories' lsclassName="links"><h3>Categories</h3></NavLink>
            <p>Browse the groups by topics you're interested in.</p>
            <div className="categories-grid-container">
                <p>Categories1</p>
                <p>Categories2</p>
                <p>Categories3</p>
                <p>Categories4</p>
                <p>Categories5</p>
                <p>Categories6</p>
            </div>
        </div>
    )
}


export default CategoriesNear