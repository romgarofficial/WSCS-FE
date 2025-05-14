import { TextField, Button } from "@mui/material"
import { Container, Col, Row, Form } from "react-bootstrap"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useState} from 'react';

export default function SignUp(){

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState(null);
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    console.log(firstName);
    console.log(dob)

    return(
        <Container fluid className="">
            <Row>
                <Col lg={8} sm={12} className="bg-primary vh-100">

                </Col>
                <Col lg={4} sm={12} className="vh-100 d-flex flex-column justify-content-center align-items-center">
                    <Container fluid className="p-3 m-5">
                        <h1 className="dispay-4 fw-bold">Sign Up</h1>

                        <Form>
                            <Container fluid className="d-flex flex-column gap-3 mt-5">

                                <TextField id="outlined-basic" label="First Name" 
                                variant="outlined" 
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                />

                                <TextField id="outlined-basic" label="Middle Name" variant="outlined" 
                                onChange={e => setMiddleName(e.target.value)}
                                value={middleName}
                                />

                                <TextField id="outlined-basic" label="Last Name" variant="outlined" 
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                />

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Date of Birth" className="w-100"
                                        onChange={e => setDob(e)}
                                        value={dob}
                                    />
                                </DemoContainer>
                                </LocalizationProvider>
                                
                                <TextField id="outlined-basic" label="Email" variant="outlined" 
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />

                                <TextField id="outlined-basic" label="Mobile Number" variant="outlined" 
                                    onChange={e => setMobile(e.target.value)}
                                    value={mobile}
                                />

                                <TextField id="outlined-basic" label="Password" variant="outlined" 
                                    onChange={e => setPassword1(e.target.value)}
                                    value={password1}
                                    type="password"
                                />
                                
                                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" 
                                    onChange={e => setPassword2(e.target.value)}
                                    value={password2}
                                    type="password"
                                />

                                {
                                    password1 === ""
                                    ?
                                    <p className="text-success d-none">
                                    </p>
                                    :
                                    password1 !== password2
                                    ?
                                    <p className="text-danger">
                                    Password do not match.</p>
                                    :
                                    <p className="text-success">
                                    Password confirmed!</p>
                                }

                                <Button variant="contained" className="p-3 rounded-3 mt-4">Sign Up</Button>

                            </Container>
                        </Form>

                    </Container>
                </Col>
            </Row>
        </Container>
    )
}