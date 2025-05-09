import { TextField, Button } from "@mui/material"
import { Container, Col, Row, Form } from "react-bootstrap"


export default function SignIn(){
    return(
        <Container fluid className="">
            <Row>
                <Col lg={8} sm={12} className="bg-primary vh-100">

                </Col>
                <Col lg={4} sm={12} className="vh-100 d-flex flex-column justify-content-center align-items-center">
                    <Container fluid className="p-3 m-5">
                        <h1 className="dispay-4 fw-bold">Sign In</h1>

                        <Form>
                            <Container fluid className="d-flex flex-column gap-3 mt-5">
                               
                                <TextField id="outlined-basic" label="Email" variant="outlined" />

                                <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>

                                <Button variant="contained" className="p-3 rounded-3 mt-4">Sign In</Button>
                            </Container>
                        </Form>

                    </Container>
                </Col>
            </Row>
        </Container>
    )
}