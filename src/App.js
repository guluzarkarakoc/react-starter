
import './App.css';
import { useEffect, useState } from 'react';
//import PostCard from './components/PostCard/PostCard';
import PostService from './services/postService';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePages/HomePage';
import Posts from './pages/Posts/Posts';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login'

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
  setPosts(posts.filter(i=>i.id !== id));
}

  return (
    <>
   
    <Navbar/>
    <Routes>
      <Route  path="/"/>
      <Route path="/homepages" element={<HomePage></HomePage>}/>
      <Route path="/posts" element={<Posts></Posts>}/>
      <Route path="*" element={<NotFound></NotFound>}/>
      <Route path="/login" elemnet={<Login/>}></Route>
    </Routes>
   
    <p>1</p>
    </>
  //   <div className="App">
  //  {posts.map((post)=><PostCard onDelete={removePost} post={post}></PostCard>)}
  
  //   </div>
  );
}

export default App;
