import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom'

library.add(faSearch)

export default class Header extends React.Component {
    render() {
        return(
            <div className="main-head">
                {/* onClick */}
                {/* onSubmit */}
                <div className="head-tb">
                    <span className="span-f"><Link to="/">Business</Link></span>
                    <span className="span-t"><Link>Cars</Link></span>
                    <span className="span-fo"><Link>Write a review</Link></span>
                </div>
                <div className="div-sea">
                    <form>
                        <input type="text" placeholder={"Look for a car..."} />
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                </div>
            </div>
        )
    }
}
