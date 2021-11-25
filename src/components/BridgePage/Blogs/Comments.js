import React,{useState} from 'react';
import Comment from './Comment';

const Comments = ({handleComments}) => {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([])


    const addTask =  (task) => {      
        
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {id, ...task};
        setTasks([...tasks, newTask]);
        console.log(id, task.text)
      } 

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please Add a Task');
            return
        }

        addTask({ text })

        setText('')
       
    }
   
    return (
        <div className="mx-2">
             <div className=''> 
                {
                    tasks.map((task) =><Comment task={task}/>)
                }
            </div>
        
            <form onSubmit={onSubmit}>
            <div class="form-group d-flex" >
            

                 <textarea  class="form-control mx-2" value={text} onChange={(e) => setText(e.target.value)} id="exampleFormControlTextarea1" placeholder="Write a Comment" rows="1" style={{borderRadius:'8px'}}></textarea> <br  />

                
                
                <input type="submit" style={{backgroundColor:'#2E374E', color:'white',borderRadius:'8px'}} class=" " />
            </div>
            
            </form>
           
        </div>
    );
};

export default Comments;