import { useState, useEffect } from 'react'
import '../App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { validSSN } from '../regex.js';
import { Button } from "@mui/material";
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import DMV from '../Components/DMV.js';
import DOS from '../Components/DOS.js';
import SS from '../Components/SS.js';
import Match from '../Components/Match.js';
import {SSNbox} from "../Components/SSNbox"

const Home = () => {
    const[num,setNum] = useState("");
    const[ssn,setSSN] = useState("");
    const [errSSN, setErrSSN] = useState(false);
    //declaring states

    const validate = () => {
        if (!validSSN.test(num)) {
           setErrSSN(true);
        }
        else if(validSSN.test(num)) {
            setErrSSN(false);
        }
    };
     //returns an error message if SSN is entered incorrectly

    const stop = (event) => {
        event.preventDefault();
    }
    //prevent page from refreshing on form submit
    const set = () => {
        setSSN(num)
    }
    return(
        <div className='home'>
                <div className='content'>
                    <Container>
                        <Row>
                            <Col>
                            <form className='ssn-form' onSubmit={stop}>
                                <SSNbox values={num} setValues={setNum}/>                                
                                <Button 
                                    disableElevation
                                    id='submit-btn' 
                                    variant='contained'
                                    color='success'
                                    size='large'
                                    style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                                        textTransform: "capitalize"}}
                                    onClick={() => {validate(); set()}} 
                                    type='submit'>Search
                                <PersonSearchRoundedIcon/>
                                </Button>
                                
                                {errSSN && <p>SSN is invalid. Please try again.</p>}
                            </form>
                            </Col>
                        </Row>
                    </Container>
                    <div className='data'>
                    <Match num = {ssn}/>
                        <Container>
                            <Row>
                                <Col md = "4" xs = "12">
                                    <DMV num = {ssn}/>
                                </Col>
                                <Col md = "4" xs = "12"> 
                                    <SS num = {ssn}/>
                                </Col>
                                <Col md = "4" xs = "12"> 
                                    <DOS num = {ssn}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </div> 

        </div>
    )
}
export default Home