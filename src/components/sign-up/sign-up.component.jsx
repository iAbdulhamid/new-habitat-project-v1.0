import React from 'react';
import './sign-up.component.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(confirmPassword !== password) {
            alert(`Passwords don't match!`);
            return;
        }
        
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            // clear the form again:
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    }
    
    handelChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value }); // Ex: {email: iks@gmail.com}
    }

    render() {
        return (
            <div className="sign-up">
                <h2>Don't have an account ?</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text"
                            name="displayName" 
                            value={this.state.displayName} 
                            handleChange={this.handelChange}
                            label = 'Display Name'
                            required/>

                    <FormInput type="email"
                            name="email" 
                            value={this.state.email} 
                            handleChange={this.handelChange}
                            label = 'Email'
                            required/>

                    <FormInput type="password"
                            name="password" 
                            value={this.state.password} 
                            handleChange={this.handelChange}
                            label="Password"
                            required/>

                    <FormInput type="password"
                            name="confirmPassword" 
                            value={this.state.confirmPassword} 
                            handleChange={this.handelChange}
                            label="Confirm Password"
                            required/>

                    <CustomButton type="submit" value="SIGNUP">SIGNUP</CustomButton>

                </form>

            </div>
        )
    }
}

export default SignUp;