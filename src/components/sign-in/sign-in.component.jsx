import React from 'react';
import './sign-in.component.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
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

                    <CustomButton type="submit" value="LOG IN">login</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;