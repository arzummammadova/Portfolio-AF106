import React, { useReducer, useState } from 'react'
import './System.css'
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteSweep, MdModeEdit } from 'react-icons/md';


// Əlavə etmək (CREATE)+
// Redaktə etmək (UPDATE)(Modal ile Olacaq)
// Silmək (DELETE)
// Bütün istifadəçiləri sıfırlamaq (RESET) 
const reducer = (state, action) => {
    switch (action.type) {
        case "ADDINFO":
            if(action.name!=="" || action.surname!==""){
                return {
                    ...state,
                    users: [
                        ...state.users, {
                            id: uuidv4(),
                            name: action.name,
                            surname: action.surname,
                        }
                    ]
    
    
                }
            }
            else{
             alert("Ad soy ad bos ola bilmez");
             return state;
            }
           

        case "DELETEINFO":{
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        }

        case "RESET":{
             return {
                ...state,
                users:[]

             }
        }
        
        case "UPDATE":{
            return {
               ...state,
                users: state.users.map(user=>user.id===action.id?{...user,name:action.name,surname:action.surname}:user)
            }
        }

        default:
            return state;
    }
}


const System = () => {


    const [state, dispatch] = useReducer(reducer, {
        users: []

    })

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [id,setId]=useState('');
    const [showModal,setShowModal]=useState('');

    const addInfo = () => {
        dispatch({ type: "ADDINFO", name, surname });
        setName('');
        setSurname('');
    }
    const deleteInfo = (id) => {
        dispatch({ type: "DELETEINFO", id });
    };

    const reset=()=>{
        dispatch({type:"RESET",reset})
    }
    const editInfo=(user)=>{
        setName(user.name);
        setSurname(user.surname);
        setId(user.id);
        setShowModal(true);
    }

    const update=()=>{
        dispatch({type:"UPDATE",id,name,surname})
        setShowModal(false);
        setName('');
        setSurname('');
    }
    return (
        <div >
            <div className="user">
            <input type="text" value={name} placeholder='Adınızı daxil edin' onChange={(e) => {
                setName(e.target.value)
            }} />
            <input type="text" placeholder='Soy adınızı daxil edin ' value={surname} onChange={(e) => {
                setSurname(e.target.value)
            }} />
            <button type='submit' onClick={addInfo} style={{background:"green"}}>Əlavə et</button>
            <ol>
                {
                    state.users.map((user) => (
                        <li key={user.id} style={{ textTransform: "Capitalize" }}>{user.name} {user.surname}
                        <div className="actions">
                            <button className='delete' onClick={()=>{
                                deleteInfo(user.id)
                            }}>delete <MdDeleteSweep /></button>
                            <button className='edit'  onClick={()=>{
                                editInfo(user)
                            }}>edit <MdModeEdit />
                                 
                            </button>  
                        </div>
                          
                        </li>
                    ))
                }

            </ol>
            <button style={{background:"red"}}  onClick={()=>{
                reset()
            }}>reset</button>



            {
               showModal &&(
                <div className="modal">

                    <input type="text" placeholder='adinizi deyis' value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} />
                    <input type="text" placeholder='soyadiniz deyis' value={surname} onChange={(e)=>
                        setSurname(e.target.value)
                    } />
                    <button onClick={update} >save</button>

                </div>
               )
            }
            </div>
           
        </div>
    )
}

export default System
