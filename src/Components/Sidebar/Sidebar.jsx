import React from 'react'
import Style from "../Sidebar/Sidebar.module.css"
import { categories } from "../../Utilities/Constants"

const Sidebar = ({ selectedCategorie, setselectedCategorie }) => {

    return (
        <div className={Style.sidebar}>
            <div className={Style.sidebar_categorie}>
                {categories.map((categories, idx) =>
                    <button key={idx} style={{ background: categories.name === selectedCategorie && '#3f3f3f', opacity: categories.name === selectedCategorie ? '1' : '0.8' }} onClick={() => { setselectedCategorie(categories.name) }}><span className={Style.sidebar_categorie_icon}>{categories.icon}</span><span className={Style.sidebar_categorie_name} >{categories.name}</span></button>
                )}
            </div>
            <br />
            <p>Copyright @2023 youtube</p>
        </div>
    )
}

export default Sidebar