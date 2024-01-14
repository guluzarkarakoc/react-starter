import axios from "axios";
import { Post } from "../models/post";

class PostService{
 getAll():Promise<AxiosResponse<Pıost[],any>>{
return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
 }
}
export default new PostService();