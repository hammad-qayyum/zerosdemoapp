import React, {useEffect,useState} from 'react'
import "survey-react/survey.css"
import * as Survey from "survey-react"

function CreateForm() {

    const [editForm , setEditForm ] = useState(false)
    const [newQuestion, setNewQuestion] = useState('')
    const [newQuestionType, setNewQuestionType] = useState('')
    const [options , setOptions] = useState([])
    const [newOption , setNewOption] = useState('')  
    const [formJson, setFormJson] = useState(
        {
           questions:[
           ]
        }
    )

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name")
         setOptions(options.filter(item => item !== name));
       };

    function jsonAdd(newname, newtype, newchoices){
        return(
            {
                name : newname,
                type: newtype,
                choices : newchoices
            }
        );
    }

    return (
        <div>
        <main>

            <Survey.Survey json = {formJson}/>
        </main>
            <div className='createformbutton' style={{display:editForm?'none':'',}}>
                <button onClick={()=>{
                    setEditForm(true)
                }}>Add element in form</button>
            </div>
            <div className='createForm'  style={{display:!editForm?'none':'',margin: '1rem',padding:'1rem' , border:'1px solid black'}}>
                <h1>EDIT FORM</h1>
                {/* <div>
                    <span>Title</span>
                    <input></input>
                    <br></br>
                </div>
                <div>
                    <span>Description:</span>
                    <input></input>
                    <br></br>
                </div> */}
                <div>
                    <span>Question:</span>
                    <input value={newQuestion} onChange={event=>setNewQuestion(event.target.value)}></input>
                    <br></br>
                </div> 
                <div>
                Question type: 
                <select name="type" onChange={event=>setNewQuestionType(event.target.value)}>
                    <option value='None' selected disabled>Select</option>
                    <option value='checkbox'>CheckBox</option>
                    <option value='radiogroup'>Multiple Choice</option>
                    <option value='dropdown'>Dropdown</option>
                    </select>
                </div>
                <div>
                    Add Options: 
                    {
                        options.map((content, index)=>{
                            return(
                                <div>{content}   <button name={content} onClick={handleRemoveItem}>-</button></div>
                            )
                        })
                    }
                                        
                </div>
                <div>
                    <input value={newOption} onChange={event=>setNewOption(event.target.value)}></input>
                    <button onClick={()=>{
                        if(newOption!=''){
                            setOptions([...options,newOption])
                            setNewOption('')
                        }
                    }}>Add</button>
                </div>
                <div>
                    <button onClick={()=>{
                        setFormJson({
                            questions : [...(formJson.questions), jsonAdd(newQuestion,newQuestionType,options)]
                        })
                        setEditForm(false)
                        setNewQuestion('')
                        setNewQuestionType('')
                        setOptions([])


                    }}>Add this Question to form</button>
                </div>

                

            </div>
            <button onClick={()=>{console.log(formJson)}}>Display json</button>
        </div>
    )
}

export default CreateForm
