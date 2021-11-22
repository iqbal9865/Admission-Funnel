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
        <div className="mx-4">
            <form onSubmit={onSubmit}>
            <div class="form-group" >
                
                 <textarea  class="form-control" value={text} onChange={(e) => setText(e.target.value)} id="exampleFormControlTextarea1" placeholder="Write a Comment" rows="2"></textarea> <br  />

                
                
                <input type="submit" style={{backgroundColor:'#2E374E', color:'white'}} class="form-control " />
            </div>
            
            </form>
            <div className='py-3'> {
                tasks.map((task) =><Comment task={task}/>)
            }</div>
        </div>
    );
};

export default Comments;