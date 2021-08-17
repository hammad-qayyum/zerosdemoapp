import React, {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import './mappingvideos.css'
import Select from 'react-select'


function MappingVideos(){

  const [questionSelected, setQuestionSelected] = useState('')
  const [answerSelected, setAnswerSelected] = useState('')
  const [placeSelected, setPlaceSelected] = useState('')
  const [videoSelected, setVideoSelected] = useState('')

  const [selectAns, setSelectAns] = useState(false)
  const [plusButton, setPlusButton] = useState(false)

  const [newMap, setNewMap] = useState({
    questions:[],
    answers:[],
    place:'',
    video:''
  })

  const [showNewMap, setShowNewMap] = useState(false)
  
  const [formJson, setFormJson] = useState({
    questions : [
      {
        choices: ["Hammad", "Ali", "Mursal"],
        name: "What is your name?",
        type: "checkbox",
      },
      {
        choices: ["12", "22", "32"],
        name: "What is your age?",
        type: "radiogroup",
      },
      {
        choices: ["Student", "Employee", "Business"],
        name: "What do you do?",
        type: "dropdown",
      }
  
  
    ]	
  })
  const [mappingList, setMappingList] = useState(
    [
      {
        questions: ['question 1','question 2', 'question 3'],
        answers: ['ans1', 'ans2' , 'ans3'],
        place: '2',
        video: 'Video Title 1'
      },
      {
        questions: ['this is the ques 1','this is the ques 2'],
        answers: ['this is ans1', 'this is ans2' ],
        place: '1',
        video: 'Video Title 3'
      }
    ]
    )
  const [videoList, setVideoList] = useState(['Video Title 1', 'Video Title 2' , 'Video Title 3' , 'Video Title 4'])



  return(
    <div className='mappingvideos'>
      <div className='heading'>
        <h2>Mapping</h2>
      </div>
      <div className='mappingcontentarea'>
        Mapping Conditions
        <div className='mappingcontent'>
          {
            mappingList.map((content,index)=>{
              return(
                <div>
                  <h5>{index+1}.</h5>
                  <div>
                   
                    {
                      content.questions.map((con, ind)=>{
                        return(
                          <div>
                            <span style={{display:ind==0?'':'none'}}>if </span> <span style={{fontWeight: 'bold' , textDecoration:'underline'}}>{con}</span> is answered <span style={{fontWeight: 'bold' , textDecoration:'underline'}}>{mappingList[index].answers[ind]}</span> {con==mappingList[index].questions[mappingList[index].questions.length-1]?'':'AND'}
                          </div>
                        )
                      })
                    }
                  </div>
                  <div>
                   then recommend  <span style={{ textDecoration:'underline'}}>{mappingList[index].video} </span> at place <span style={{textDecoration:'underline'}}>{mappingList[index].place}</span>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className='addmapbutton' >
      <div className='newmap' style={{display: showNewMap?'':'none'}}>
      <h3>New Conditions</h3>
      <div>
          {
            newMap.questions.map((c1,i1)=>{
              return(
                <div>
                <div>
                          
                  if <span style={{fontWeight: 'bold' , textDecoration:'underline'}}>{c1}</span> is answered <span style={{fontWeight: 'bold' , textDecoration:'underline'}}>{newMap.answers[i1]}</span> 
                   
                  </div>
                
                </div>
              )
            })
          }
      </div>
      <div>
        then recommend  <span>
          <select onChange={(event)=>{
          setNewMap({
            questions:newMap.questions,
            answers:newMap.answers,
            place: newMap.place,
            video:event.target.value
          })}}
          >
            <option selected disabled></option>
            {
              videoList.map((cont,ind)=>{
                return(
                  <option>{cont}</option>
                )
              })
            }
          </select>
        </span> at place <span >
        <select onChange={(event)=>{
          setNewMap({
            questions:newMap.questions,
            answers:newMap.answers,
            place: event.target.value,
            video:newMap.video
          })}}
        >
            <option selected disabled></option>
            {
              videoList.map((cont,ind)=>{
                return(
                  <option>{ind+1}</option>
                )
              })
            }
          </select>
        </span>
      </div>
      <div>
      <div className='selectnewquestion'>
        Select Question
        <select  onChange={(event)=>{
          setSelectAns(true)
          setQuestionSelected(event.target.value)
          
        }}>
        <option disabled selected></option>
        {/* <option disabled >fdkj</option> */}
          {
            formJson.questions.map((cont,ind)=>{
              return(
                <option>{cont.name}</option>
              )
            })
          }
        </select>
        </div>
        <div className='questionanswer' style={{display: selectAns?'':'none'}}>
        
          {
            formJson.questions.map((content, index)=>{
              if(content.name==questionSelected){
                return(
                  <div>
                    Select Answer
                    <select onChange={(event)=>{
                      setPlusButton(true)
                      setAnswerSelected(event.target.value)
                      console.log(event.target.value)
                    }}>
                    <option disabled selected></option>
                  {
                  formJson.questions[index].choices.map((content1,index1)=>{
                    return(
                      
                      <option><input placeholder={content.type} ></input>{content1}</option>
                    )
                  })
                  }
                  </select>
                  </div>
                  
                );
              }
            })
          }
        
        <br></br>
        <button style={{display: plusButton?'':'none'}} onClick={()=>{
          setNewMap({
            questions:[...newMap.questions,questionSelected],
            answers:[...newMap.answers,answerSelected],
            place: newMap.place,
            video:newMap.video
          })
          setQuestionSelected('')
          setAnswerSelected('')
          setPlusButton(false)
          setSelectAns(false)
        }}>+</button>
        </div>

      </div>
      <button onClick={()=>{
          setShowNewMap(false)
          setMappingList([...mappingList, newMap])
          setNewMap({
            questions:[],
            answers:[],
            place:'',
            video:''
  })
        }}>Add this to mapping list</button>
      </div>
        <button style={{display: !showNewMap?'':'none'}} onClick={()=>{
          setShowNewMap(true)
                     
        }}>Add a new Mapping Condition</button>
      </div>
      <div className='savebutton' style={{display: showNewMap?'none':''}}>
        <button >Save </button>
      </div>
      

    </div>
  );
  
}


export default MappingVideos

// class MappingVideos extends React.Component{


//   state={
//     loading: false,
//     data: {
//       questions : [
//         {
//           choices: ["Hammad", "Ali", "Mursal"],
//           name: "What is your name?",
//           type: "checkbox",
//         },
//         {
//           choices: ["12", "22", "32"],
//           name: "What is your age?",
//           type: "radiogroup",
//         },
//         {
//           choices: ["Student", "Employee", "Business"],
//           name: "What do you do?",
//           type: "dropdown",
//         }
    
    
//       ]	
//     }
//   };

//   // async componentDidMount(){
//   //   const url = 'http://localhost:9000/masterkeyapi'
//   //   const response = await fetch(url)
//   //   const jsondata = await response.json()
//   //   this.setState({data: jsondata, loading:false})
//   //   console.log(jsondata)

//   // }




// render() {

//   const [mappingList, setMappingList] = useState([])
  
//   return (
//     <div className="mappingvideos">
//     <h2>Mapping</h2>


// {/*     
//         <div>
//           {this.state.loading || !this.state.data ? (
//             <h1>LOADING...</h1>
//           ):(
//             <div>

//               <div>QUESTIONS:</div>
//               <br></br>
//               <br></br>
//               <br></br>
//               {this.state.data.questions.map((context,index)=>{
//                 return(
//                   <div className='questionarea'>
//                     <div className='question'>{index+1}. {context}</div>
//                     <div className='answers'>
//                     {
//                       this.state.data.choices[index].map((con,ind)=>{
//                         return(
//                           <div className='choices'>
//                           <div>{con}</div>
//                           <div>
//                             <input></input>
//                           </div>
//                         </div>
//                         );
//                       })
//                     }

//                     </div>
//                   </div>
//                 );
//             })}

//                     <button>Submit</button>
//             </div>


            
//           )}
//         </div>

//         <p>{this.state.apiResponse}</p> */}
      
//     </div>
//   );
// }


// }

// export default MappingVideos