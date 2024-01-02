import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPadding, errorMassage: error } = useFetch('http://localhost:8002/blogs/'+id)
    const navigate = useNavigate();
    
    const handleDelete = () => {
        fetch('http://localhost:8002/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <div className="blog-details">
            {isPadding && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default BlogDetails;