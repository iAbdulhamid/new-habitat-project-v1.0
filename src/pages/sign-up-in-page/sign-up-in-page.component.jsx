import React from 'react';
import './sign-up-in-page.component.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInAndUpPage = (props) => (

    <div className="sign-in-up">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>

);

export default SignInAndUpPage;