import './style.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass)

const Header = () => {
  return (
    <div className="page-header py-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 header-logo">
            <h5 className='text-white'>Travel Advisor</h5>
          </div>
            <div className="col-lg-10 search-places-aria d-flex justify-content-end align-center">
              <span className='text-white'>Explore new places</span>
              <div className="d-flex ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" className='search-input' placeholder='Search...' autoComplete="true" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
