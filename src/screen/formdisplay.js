import axios from 'axios'
import React, {useState} from 'react'

function FormDisplay() {

    const [sent, setSent] = useState(false)
    const [text, setText] = useState("THIS THE EMAIL DATA TO BE SENT")

    const handleSend = async()=>{
        setSent(true)

        try {
            await axios.post("http://localhost:9000/send_email")
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className='formdisplay'>
            {/* <ReactTypeformEmbed url="https://form.typeform.com/to/NEOVpLNI" onSubmit={()=>{
          {console.log("form completed") }
         }} /> */}
            
         <button>Send Email</button>
        </div>
    )
}

export default FormDisplay
