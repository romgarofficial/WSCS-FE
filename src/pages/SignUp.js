import { TextField, Button } from "@mui/material"
import { Container, Col, Row, Form } from "react-bootstrap"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function SignUp(){
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
                                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                                <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" />

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Basic date picker" className="w-100"/>
                                </DemoContainer>
                                </LocalizationProvider>
                                
                                <TextField id="outlined-basic" label="Email" variant="outlined" />
                                <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
                                <TextField id="outlined-basic" label="Password" variant="outlined" />
                                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />

                                <Button variant="contained" className="p-3 rounded-3 mt-4">Sign Up</Button>
                            </Container>
                        </Form>

                    </Container>
                </Col>
            </Row>
        </Container>
    )
}