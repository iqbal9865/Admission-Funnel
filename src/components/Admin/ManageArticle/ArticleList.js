import React from 'react';

const ArticleList = ({articles,deleteArticle}) => {

    return (
        <div>
             <table class="table">
                {/* <thead>
                    <tr>
                        <th scope="col">Title</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        articles.map(article => 
                            <tr>
                                <td className="my-1">{article.title}</td>

                                <button style={{color:'white',backgroundColor:'#23303F'}} className="btn btn-primary m-2 ">Edit</button>
                              
                                <button style={{color:'black'}} className="btn btn-danger m-2" onClick={() => deleteArticle(article._id)}>Delete</button>
                             </tr>   
                        )
                    }
                </tbody>
                </table>
        </div>
    )
}
export default ArticleList;