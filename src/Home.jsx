import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const {data : blogs ,isPadding,errorMassage} = useFetch('http://localhost:8002/blogs')

    return (
        <div className="home">
            {errorMassage && <div>{errorMassage}</div>}
            {isPadding && <div>Loading.....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;