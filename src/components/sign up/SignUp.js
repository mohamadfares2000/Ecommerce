import React from 'react';
import {Container, FlexBox, FlexColum, StyledImage} from "../../App.Styled";
import img from "../../assets/SignUp.svg"
import {Button, TextField, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import {Field, Formik, Form} from "formik";
import {StyledError, StyledInput, StyledSignInWrapper, StyledWrapper} from "./SignUp.Styled";
import {SigninSchema} from "../../validation";
import SignIn from '../sign in/SignIn';


function SignUp(props) {
    
    return (
        <FlexBox>
            <StyledImage height={"100vh"}  src={img} alt={"sign in"}/>

            <StyledSignInWrapper>
                <StyledWrapper>

                <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>Sign Up</Typography>

                <Typography margin={"20px 0"} variant={"body2"}>
                    Don’t have an accout yet? <Link sx={{textDecoration:"none", color:"black"}} fontWeight={600} href={"/signin"} to="/SingIn">Sign in</Link>
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
                            <StyledInput placeholder={"Your name"} name={"name"} type={"text"} />
                            {/* {isSubmitting && <StyledError name={"name"} component={"small"}/>} */}
                            <StyledError name={"name"} component={"small"} />
                        </FlexColum>

                        <FlexColum margin={"20px 0"}>
                            <StyledInput placeholder={"UserName"} name={"userName"} type={"text"} />
                            {/* {isSubmitting && <StyledError name={"name"} component={"small"}/>} */}
                            <StyledError name={"userName"} component={"small"} />
                        </FlexColum>

                        <FlexColum margin={"20px 0"}>
                            <StyledInput placeholder={"Email Address"} name={"email"} type={"email"} />
                            {/* {isSubmitting && <StyledError name={"name"} component={"small"}/>} */}
                            <StyledError name={"email"} component={"small"} />
                        </FlexColum>
                        
                        <FlexColum margin={"0 0 20px 0"}>
                            <StyledInput placeholder={"Password"} name={"password"} type={"Password"}/>
                            <StyledError name={"password"} component={"small"} />
                        </FlexColum>

                            <Button sx={{ height:"72px" , fontSize:"20px" , fontWeight:"500"}} type={"submit"} variant="contained" fullWidth={true}>
                                Sign Up
                            </Button>
                        </Form>

                    )}
                </Formik>
            </StyledWrapper>
            </StyledSignInWrapper>

        </FlexBox>
    );
}

export default SignUp;