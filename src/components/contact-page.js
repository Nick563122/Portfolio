import React, { Component } from 'react';
import $, { timers } from 'jquery';
import Recaptcha from 'react-recaptcha';
import './contact-page.css';

export default class ContactPage extends Component{
    state = {
        inputEmail: ' ',
        inputMessage: ' ',
        inputName: ' ',
        isCaptchaValid: false,
        isErrorShown: false,
        isFormValid: false,
    }

    // to handle visitors interaction with inputs
    handleInput = event => {
        //test for input and length of the value
        if(event.target.value.length > 0 && event.target.name !== 'inputEmail'){
            this.setState({
                [event.target.name] : event.target.value
            })
        }

    

    //if input is for email address validate it

    if(event.target.name === 'inputEmail'){

        const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        if(reg.test(String(event.target.value).toLowerCase())){
            this.setState({
                [event.target.name]: event.target.value
            })
            }
        }

    }




//show message in console when recaptcha is loaded
onCaptchaLoad = () => {
    console.log('Captcha is loaded')
}

//updates the state after recaptcha validates the visitior 
onCaptchaVerify = (Response) => {
    this.setState({
        isCaptchaValid: true
    })
} 

handleFormSubmit = event => {
    event.preventDefault()

    //Teat
    if(this.state.inputEmail.length > 0 && this.state.inputName.length > 0 && this.state.inputMessage.length > 0 && this.state.isCaptchaValid){
        this.setState({
            isErrorShown: false,
            isFormValid: true
        })

        //send the form with ajax
        $.ajax({
            data: this.state,
            type: 'POST',
            url: 'mailer.php',
            success: function(data){
                console.info(data)
            },
            error: function(xhr , status, err){
                console.error(status, err.toString())
            }
        })
        //reset tate after sending from
        this.setState({
            inputEmail: ' ',
            inputMessage: ' ',
            inputName: ' ',
            isCaptchaValid: false,
            isErrorShown: false,
            isFormValid: false,
        })
    }
        else{
            this.setState({
                isErrorShown: true 
            })
        }
    }
    
    render() {
        return(
            <div className="contact-page">
                <p>Interested in working together? Please use this form with as much detail as 
                    possible and I will get back to you ASAP.
                </p>
                <form id="myForm" action="./mailer.php" method="post">
                    <fieldset>
                        <input onChange={this.handleInput} type="text" placeholder="Name" 
                        name="inputName" id="inputName" required={true}/>
                    </fieldset>

                    <fieldset>
                    <input onChange={this.handleInput} type="email" placeholder="Email" 
                        name="inputEmail" id="inputEmail" required={true}/>
                    </fieldset>

                    <fieldset>
                        <textarea onchange={this.handleInput} name="inputMessage" 
                        placeholder="Type Message Here" id="inputMessage" required={true}/> 
                    </fieldset>

                    <fieldset>
                        <Recaptcha 
                            id="recaptcha"
                            onloadCallback={this.onCapthcaLoad}
                            sitekey="6Ldd0rgZAAAAAKgxOsYk4hP3HbAY8GiKBIMjCl8a"
                            render="explicit"
                            verifyCallback={this.onCaptchaVerify}
                        />
                    </fieldset>
                    {this.state.isFormSubmitted && (
                        <fieldset>
                            <p>Thank you for messaging me, I'll reply soon as possible.</p>
                        </fieldset>
                    )}
                    {this.state.isErrorShown && (
                        <fieldset>
                            <p>Make sure all fields are filled out properly.</p>
                        </fieldset>
                    )}

                    <fieldset>
                        <button onClick={timers.handleFormSubmit} className="btn">
                            Send
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }

}