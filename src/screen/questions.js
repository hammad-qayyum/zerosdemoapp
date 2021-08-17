import React, {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'

function Questions() {

    const [formID, setFormID]= useState("")




    return (
        
        <div className='questions' >
            <div className='formid' style={{ width: '20rem' ,padding:'1rem',margin:'12rem auto'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Typeform Form ID</Form.Label>
                        <Form.Control type="id" placeholder="Form ID" value={formID} onChange={event => setFormID(event.target.value)}/>
                        
                    </Form.Group>
                    <Button variant="primary" 
                    onClick={()=>{
                        // setFlag(true)
                    }}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
            
            
            
        </div>
    )
}

export default Questions
