import React, {Component} from 'react';
import '../SearchBar/SearchBar.css'

class SearchBar extends Component {

render(){
    return(
        
        <div className="search-bar-container">
            <p>Find your next event</p>

            <form className='search-form'>
                <input type="text"/>
                <div className='search-bar-text'>With 5km </div>
            </form>
           
        </div>


    )
}

}





export default SearchBar