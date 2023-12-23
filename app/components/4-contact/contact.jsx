import "./contact.css";

import { useForm, ValidationError } from '@formspree/react';

import React from "react";

const Contact = () => {
    const [state, handleSubmit] = useForm("xyyrgkba");

    
    return (
        <section className="contact-us">
            <div className="top">
                <h1 className="title">Contact Us</h1>
                <p className="subtitle" >Let&apos;s connect and bring your digital vision to life!</p>
            </div>
            <div className="bottom flex">
                <div className="left">
                    <div class="form-container">
                        <form onSubmit={handleSubmit} class="form">
                            <div class="form-control">
                                <input autoComplete="off" type="value" required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />

                                <label>
                                    <span style={{ transitionDelay: '0ms' }}>E</span>
                                    <span style={{ transitionDelay: '50ms' }}>m</span>
                                    <span style={{ transitionDelay: '100ms' }}>a</span>
                                    <span style={{ transitionDelay: '150ms' }}>i</span>
                                    <span style={{ transitionDelay: '200ms' }}>l</span>
                                    <span style={{ transitionDelay: '250ms' }}></span>
                                    <span style={{ transitionDelay: '300ms' }}>A</span>
                                    <span style={{ transitionDelay: '350ms' }}>d</span>
                                    <span style={{ transitionDelay: '400ms' }}>d</span>
                                    <span style={{ transitionDelay: '450ms' }}>r</span>
                                    <span style={{ transitionDelay: '500ms' }}>e</span>
                                    <span style={{ transitionDelay: '550ms' }}>s</span>
                                    <span style={{ transitionDelay: '600ms' }}>s</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <label for="textarea">Your Message</label>
                                <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="btn" >
                                <button type="submit" disabled={state.submitting} >
                                    {state.submitting ? "Sending..." : "Send"}
                                </button>

                                {state.succeeded && (<p className="sent" >Your message has been sent successfully!</p>)}
                            </div>
                        </form>

                    </div>
                </div>
                <div className="right">
                    <div class="holder">
                        <div class="candle">
                            <div class="blinking-glow"></div>
                            <div class="thread"></div>
                            <div class="glow"></div>
                            <div class="flame"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
