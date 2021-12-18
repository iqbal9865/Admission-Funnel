import React,{useState, useEffect} from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import {useForm} from 'react-hook-form';
import ArticleList from './ArticleList'
const btnColor = {
    backgroundColor:'#23303F',
    color:'white'
}
const ManageArticle = () => {
    const {register, handleSubmit, error} = useForm();
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setArticles(data))
    },[])

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            title: data.title,
            body: data.body
        }

       console.log(eventData)
       fetch('http://localhost:5000/addBlogs', {
           method: 'POST',
           headers : {'content-type': 'application/json'},
           body : JSON.stringify(eventData)
       })
       .then(res => res.json())
       .then(data => console.log(data))
       alert('Article Updated!')
    }

    const deleteArticle = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/deleteArticle/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        setArticles(articles.filter(article => article._id !== id))
    }

    
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5 ">
                <h2 className="p-2" style={{textAlign: 'left'}}>Add Article</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input {...register("name", { required: true })}  type="text" placeholder="Enter Author Name" className="form-control"  /> <br />

                        <input {...register("title", { required: true })}  type="text"  placeholder="Blog Title" className="form-control" /> <br />

                        <textarea {...register("body", { required: true })}  placeholder="Write Here..."  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> <br />

                        <input type="submit" value="SUBMIT" className="form-control" style={{backgroundColor:'#23303F',color:'white'}}/>
                    </div>
                </form>

                <div className="article-container pt-5" style={{textAlign:'justify'}}>
                    <h2>All Articles</h2>

                    {articles.length ?
                        <ArticleList articles={articles} deleteArticle={deleteArticle} />
                    :
                    'No Articles Write Yet'
                    }
                  
                </div>
            </div>
            
        </div>
    );
};

export default ManageArticle;