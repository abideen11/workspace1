import React from 'react';

export default class Header extends React.Component {
    render() {
        return(
            <div className="main-head">
                {/* onClick */}
                {/* onSubmit */}
                <div className="head-tb">
                    <span className="span-f">Business</span>
                    <span className="span-s">Home</span>
                    <span className="span-t">Cars</span>
                    <span className="span-fo">Write a review</span>
                </div>
                <div className="div-sea">
                    <form>
                        <input type="text" placeholder={"Look for a car..."} />
                    </form>
                </div>
            </div>
        )
    }
}
