import React from 'react';
import './Contact.css'

class ContactUs extends React.Component {
    render() {
        return (
 <>
<div id="for-contact">

<div id = "contact-us">
        <h1 id = "contact-us-header"><strong>Contact Us</strong></h1>
        {/* <p id="doodoo groo" contenteditable>Gradient Heading</p> */}
            <div className="container">
                <div className="contact-parent">
                    <div className="contact-child child1">
                        <p>
                            <i className="fas fa-map-marker-alt"></i> Address <br />
                            <span> 1400 14th Street
                                <br />
                                Washington, USA
                            </span>
                        </p>

                        <p>
                            <i className="fas fa-phone-alt"></i> Let's Talk <br />
                            <span> 202-000-0000</span>
                        </p>

                        <p>
                            <i className=" far fa-envelope"></i> General Support <br />
                            <span>Example.mod5@gmail.com</span>
                        </p>
                    </div>

                    <div className="contact-child child2">
                        <div className="inside-contact">

                                    <div id="map-container" className="z-depth-1-half map-container" style={{height: "500px"}}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.6589796228945!2d-77.03447618471928!3d38.90891305387051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7ea66699db1%3A0x5d8d68a037f85754!2s1400%2014th%20St%20NW%2C%20Washington%2C%20DC%2020005!5e0!3m2!1sen!2sus!4v1592337044984!5m2!1sen!2sus" width="550" height="500" title="Gym location" frameborder="0" 
                                                style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
 
</div>



                
</>
        );
    }
}

export default ContactUs;