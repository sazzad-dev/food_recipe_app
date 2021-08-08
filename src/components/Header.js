import React from "react";
import "./Header.css";

const Header = (props) => {
    const {search, handleChange, onSearchClick} = props;
    return(
        <div className="jumbotron">
            <h1 className="display-1">
            <i class="material-icons brand-icon">fastfood</i>Food Recipe
            </h1>
            <div class="input-group w-50 mx-auto">
                <input type="text" class="form-control" placeholder="Search Your Recipe..." value={search} onChange={handleChange} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
                </div>
            </div>
            
        </div>
        
    );
}
export default Header;