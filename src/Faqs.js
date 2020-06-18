import React, { Component } from 'react';
import './Faq.css'

class Faqs extends Component {
    render() {
        return (
<>
    {/* ======================================================================================== */}
    <section className="faq-section">
<div className="container">
  <div className="row">
                 
                    <div className="col-md-6 offset-md-3">

                        {/* <div className="faq-title text-center pb-3">
                            <h2>FAQ</h2>
                        </div> */}

{/* ================================================================================================================= */}
                        <div id="shiva" className="faq-title text-center pb-3">
                            <span id="ram-kaka">FAQ</span>
                        </div>
{/* ==================================================================================================================== */}
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className="faq" id="accordion">
                            <div className="card">
                                <div className="card-header" id="faqHeading-1">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                            <span className="badge">1</span>Do you provide towels?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Yes, towels are provided and replaced when needed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-2">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                                            <span className="badge">2</span> should I warm up before exercising?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-2" className="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Yes. Each workout should begin with a warm-up. A warm-up should include 5 to 10 minutes of exercise such as walking, slow jogging, knee lifts, arm circles, and/or trunk rotations. Warming up is important to help prevent injury. It also helps to maximize benefits from exercise..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-3">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                                            <span className="badge">3</span>Can I refer someone to join?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-3" className="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>You earn a gift card for any friend you refer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-4">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                                            <span className="badge">4</span> Can I freeze my account?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-4" className="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Our clients can freeze their account for not more than 1 year. This feature allows you as a member of our gym to preserve all services you have in your account plan. We will notify you via e-mail or SMS when the period of your account freezing comes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-5">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
                                            <span className="badge">5</span> At what age am I allowed to join the gym?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-5" className="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Usually, we accept members aged at 18 and higher, but there are some exceptions for teenagers and children under 13 years old. For these membership categories, we have special group training, aimed at the development of basic physical skills including endurance, muscular power, etc..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-6">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-6" data-aria-expanded="false" data-aria-controls="faqCollapse-6">
                                            <span className="badge">6</span> What training is better for me?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-6" className="collapse" aria-labelledby="faqHeading-6" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>It is a difficult question to answer. If you have no previous experience in training or are trying it for the first time. To achieve the best possible result during your further training, we recommend our new members to take part in the free physical test. Afterward, we will pick the most suitable training course for you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-7">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-7" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                            <span className="badge">7</span> How can I join your group workouts?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-7" className="collapse" aria-labelledby="faqHeading-7" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>You would have to log in or create an account with us, then you can see the sessions that fits your need and simply join them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                </section>


    {/* ======================================================================================== */}

</>
        );
    }
}

export default Faqs;