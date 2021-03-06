import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { ReactComponent as Search } from './search.svg';

export default class SearchBox extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            searchField: '',
            isSearching: true,
        }; 
    }

    _searchFieldChange = event => {
        const { name, value } = event.target;
        this.setState({ [name] : value});
        // const { searchFieldChange } = this.props;   // empty function atm. 
        // searchFieldChange(value);
    }

    render() {
        const { searchField, isSearching } = this.state;
        // const { isSearching } = this.props; // to add in the future 

        return (
            // SVG is a language for describing 2D graphics in XML ！
            <div className="searchBox">
                <Search className="icon"></Search>
                <input
                    type="text"
                    name="searchField"
                    value={isSearching ? searchField : ''}
                    placeholder="Search"
                    onChange={this._searchFieldChange}
                />
            </div>
        )
    }
    
}

SearchBox.propTypes = {
    searchFieldChange: PropTypes.func,
    isSearching: PropTypes.bool,
  };
  
  SearchBox.defaultProps = {
    searchFieldChange: undefined,
    isSearching: false,
  };