
import BlogList from './BlogList.js';
import useFetch from './useFetch.js';
const Home = () => {

  // const [name, setName] = useState('Mario');
  // const handleClick = () => {
  //   setName('Ayush');
  // }

  

        // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }


  // const deleteBlog = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id!==id);
  //   setBlogs(newBlogs);
  // }

  const {data,isPending,error} = useFetch('http://localhost:8000/blogs');

  return (
    <div>
    <h1>Welcome to HomePage</h1>
    {/* <p>{name}</p>
    <button onClick={handleClick}>Click me!!</button> */}
    { error && <div>{ error }</div> } 
    {isPending && <div>Loading ...</div>}
    {data && <BlogList blogs={data} />}
    </div>
    );
}
 
export default Home;