import React from 'react';
import { Media, ButtonToolbar, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class CarsContent extends React.Component {
    // state = {
    //     clickCar: false
    // }
    // onClickCar = () => {
    //     this.setState({
    //         clickCar: !this.state.clickCar
    //     })
    // }
    reDirectToCarForm = () => {
        this.props.onClickedCar(this.props.car)
        this.props.history.push('/form')
    }
    render() {
        console.log(this.props.clickedCar)
        return(
            <div className="div-cnt">
                {/* <span className="sub-ves">
                    <img src="https://www.foleon.com/hubfs/Images/Team%20Images/sean-filidis.png" alt="plc" />
                </span> */}
                <form className="sub-cfrm">
                    {/* <span className="cfrm-img">  */}
                        <img src={this.props.car.img_url} alt="plc" />    
                    {/* </span> */}
                    <hr></hr>
                    <h3>{this.props.car.year} {this.props.car.make} {this.props.car.model}</h3>
                    <span className="cfrm-p2">Miles:  {this.props.car.miles}</span> 
                    <span className="cfrm-p">Price:  ${this.props.car.price}</span>
                    <span className="cfrm-btn">
                        <ButtonToolbar>
                            <Button variant="primary" onClick={this.reDirectToCarForm}>Book</Button>
                        </ButtonToolbar>
                    </span> 
                    {/* <h5>test</h5> */}
                    {/* <h6>test2</h6> */}
                    {/* <span className="cfrm-div2"></span> */}
                </form>
                {/* <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://image.shutterstock.com/image-photo/boy-praying-god-stock-image-260nw-1064089271.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>{this.props.car.make} </p>
                        <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                        </p>
                    </Media.Body>
                </Media> */}
                {/* <div>
                    <span>
                        <img src="https://www.foleon.com/hubfs/Images/Team%20Images/sean-filidis.png" alt="plc" />
                    </span>
                </div> */}
            </div>
        )
    }
}

export default withRouter(CarsContent)