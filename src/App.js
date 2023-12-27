
import './App.css';
import { useEffect, useState } from 'react';
//import PostCard from './components/PostCard/PostCard';
import PostService from './services/postService';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePages/HomePage';
import Posts from './pages/Posts/Posts';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';


function App() {
const [posts, setPosts] = useState([])
useEffect(()=>{
  fetchItems();
},[])
const fetchItems =async()=>{
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{console.log(response)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{console.log("işlem bitti.")});

//setTimeout(()=>{console.log("merhaba")},5000)
try{
//let response=await axios.get("https://jsonplaceholder.typicode.com/posts")

let response=await PostService.getAll()

setPosts(response.data)
}catch(e){
  console.log(e);
}
}
const removePost = (id) => {
  setPosts(posts.filter(i=>i.id !== id))
}

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<HomePage></HomePage>}/>
      <Route path="/homepages" />
      <Route path="posts" element={<Posts></Posts>}/>
      <Route path="*" element={<NotFound></NotFound>}/>
      
    </Routes>
    </BrowserRouter>
    <p>1</p>
    </>
  //   <div className="App">
  //  {posts.map((post)=><PostCard onDelete={removePost} post={post}></PostCard>)}
  
  //   </div>
  );
}

export default App;
