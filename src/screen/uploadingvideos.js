import React, {useEffect,useState} from 'react'
import './uploadingvideos.css'
// import getThumb from 'video-thumbnail-url';
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import VideoThumbnail from 'react-video-thumbnail';
import Modal from './Modal'

function UploadingVideos() {


    const [isOpen, setIsOpen]= useState(false)
    const [title, setTitle]= useState(false)
    const [url, setUrl]= useState(false)

    const [urlList, setUrlList] = useState(['https://www.youtube.com/watch?v=ueMwVGBwqRo'])
    // const url = 'https://www.youtube.com/watch?v=l0jYLDB7LWc'
    const [titleList, setTitleList]=useState(['VIDEO 1']);
    
    function getThumbnail(link){
        var split_link = link.toString().split('=')
        var newlink = "http://img.youtube.com/vi/"+split_link[1]+"/0.jpg"
        return newlink
    }


    return (
        <div className='uploadingvideos'>
            <div className='uploadingvideosheader'>
                <div className='companyname'>
                    <h1>ZEROS VIDEOS</h1>
                </div>
                <div className='uploadbutton'>
                    <button onClick={()=>setIsOpen(true)}>Upload Videos</button>
                    <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="id" placeholder="Form ID" onChange={event=>setTitle(event.target.value)} />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>URL</Form.Label>
                        <Form.Control type="id" placeholder="Form ID" onChange={e=>setUrl(e.target.value)} />
                        
                    </Form.Group>
                    <Button variant="primary" 
                    onClick={()=>{
                        if(url=="" || title==""){

                        }else{
                            setUrlList(state=>[...state, url])
                            setTitleList(state=>[...state, title])
                            setUrl("")
                            setTitle("")
                        }
                        
                        
                        // titleList.append(title)

                        // setFlag(true)
                    }}
                    >
                        Submit
                    </Button>
                </Form>
                    </Modal>
                </div>
                <div className='videolist'>
                    {
                        urlList.map((data, index)=>{
                           return <div className='videolistitem'>
                            
                            <div className='thumbnail'>
                            <img src={getThumbnail(data)} width='250'></img>
                            </div>
                            <div className='videodetails'>
                                <h1>{titleList[index]}</h1>
                                <div className='analytics'>
                                    <p>THIS IS ALL THE ANALYTICS AREA</p>
                                </div>
                            </div>
                        </div>
                        })
                    }
                </div>
                
            </div>
            
        </div>
    )
}

export default UploadingVideos
