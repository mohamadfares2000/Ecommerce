import React from 'react';
import {Container, FlexBox, FlexColum, StyledImage} from "../../App.Styled";
import img from "../../assets/signin.png"
import Typography from '@mui/material/Typography';

import {Field, Formik, Form} from "formik";
import {StyledError, StyledInput, StyledSignInWrapper, StyledWrapper} from "./SignIn.Styled";
import {SigninSchema} from "../../validation";
import { Button, Link } from '@mui/material';
import SignUp from '../sign up/SignUp';



function SignIn(props) {
    return (
        <FlexBox>
            <StyledImage height={"100vh"} width={"48%"} src={img} alt={"sign in"}/>

            <StyledSignInWrapper>
                <StyledWrapper>

                <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>Sign In</Typography>
                <Typography margin={"20px 0"} variant={"body2"}>
                    Don’t have an accout yet? <Link sx={{textDecoration:"none", color:"black"}} fontWeight={600} to={<SignUp/>} href={"/signUp"}>Sign up</Link>
                </Typography>

                <Formik
                    initialValues={{
                        name: "",
                        password: "",
                    }}
                    onSubmit={() => console.log("test")}
                    validationSchema={SigninSchema}
                >

                    {({errors, handleSubmit, isSubmitting, setSubmitting , touched}) => (
                        <Form  onSubmit={handleSubmit}>
                            
                        <FlexColum margin={"20px 0"}>
                            <StyledInput placeholder={"Your username or email"} name={"name"} type={"email"} />
                            {/* {isSubmitting && <StyledError name={"name"} component={"small"}/>} */}
                            <StyledError name={"name"} component={"small"} />
                        </FlexColum>
                        
                        <FlexColum margin={"0 0 20px 0"}>
                            <StyledInput placeholder={"Password"} name={"password"} type={"Password"}/>
                            <StyledError name={"password"} component={"small"} />
                        </FlexColum>

                            <Button type={"submit"} variant="contained" fullWidth={true}>
                                Sign in
                            </Button>
                        </Form>

                    )}
                </Formik>
            </StyledWrapper>
            </StyledSignInWrapper>

        </FlexBox>
    );
}

export default SignIn;