import React from 'react';
import './sign-in.component.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle} from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
        
            // clear the form again:
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.error(error);
        }
    }
    handelChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value }); // Ex: {email: iks@gmail.com}
    }

    render () {
        return (

            <div className="sign-in">
                <h2>Already have an account ?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
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

                    <div className="form-buttons">
                        <CustomButton type="submit" value="LOG IN">login</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> login with google</CustomButton>
                    </div>

                </form>

            </div>
        )
    }
}

export default SignIn;