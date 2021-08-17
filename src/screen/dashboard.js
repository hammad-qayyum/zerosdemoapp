import React, {useEffect,useState} from 'react'
import CreateForm from './createform'
import './dashboard.css'
import MappingVideos from './mappingvideos'
import Questions from './questions'
import UploadingVideos from './uploadingvideos'





function Dashboard() {

    const [features, setFeatures] = useState(['Questionnaire', 'Videos' , 'Mapping' , 'Responses', 'Analytics' ])
    const [currentView, setCurrentView] = useState('')

    function handleClick (e){
        setCurrentView(e.target.id)
    }

    function loadView(){
        if(currentView=='Questionnaire'){
            return <CreateForm/>
        }else if(currentView=='Videos'){
            return <UploadingVideos/>
        }else if(currentView=='Mapping'){
            return <MappingVideos/>
        }
    }


    return (
        <div className='dashboard'>
            <div className='leftpanel' >
            <div className='heading'>
                <h1>ZEROS</h1>
                <h6>DISCOVER</h6>
            </div>

                <div className='featuresarea' >
                    {
                        features.map((content, index)=>{
                            return(
                                <div className='features' onClick={handleClick} id={content}>{content}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='rightpanel' >
                {loadView()}
            </div>
        </div>
    )
}

export default Dashboard
