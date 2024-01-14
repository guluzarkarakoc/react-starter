
import './App.css';
import { useEffect, useState } from 'react';
//import PostCard from './components/PostCard/PostCard';
import PostService from './services/postService';
import { Route,Routes } from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login'

function App() {
const [posts, setPosts] = useState<any>([])
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
const removePost = (id:any) => {
  setPosts(posts.filter((i:any)=>i.id !== id));
}

return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
);
  //   <div className="App">
  //  {posts.map((post)=><PostCard onDelete={removePost} post={post}></PostCard>)}
  
  //   </div>
  
}

export default App;
