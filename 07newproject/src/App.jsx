import { useState } from "react";
import {useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PostComponent from "./Post";
import "./App.css";

function App() {
  // const [posts, setPosts] = useState([]);

  // const postComponents = posts.map(post => <PostComponent
  //   name = {post.name}
  //   followers ={post.followers}
  //   time={post.time}
  //   image={post.image}
  //   description={post.description}
  //   />)

  // function addPost(){
  //   setPosts([...posts,{
  //       name :"Khushi Singh",
  //       followers : "12k followers ",
  //       time : "2m",
  //       image:"https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg",
  //       description : "This is my react project to practice. I am still in my learning phase."
  //   }])
  // }
  const [count,setCount] = useState(1)
  function increaseCount(){
    setCount(currentValue => currentValue + 1);
  }
  useEffect(function(){
    console.log("called" + count);
     setInterval(increaseCount,1000);
  },[]) // this effect will run on mount , because the array is empty
  //  /setInterval(increaseCount,1000)/is line se kya ho raha hai ki count jo hai wo kai bar ban jaa raha hai hr ek sec mein
  return (
    <div>
      <div style={{backgroundColor:"red",height:25,width:20,paddingLeft:10,paddingTop:5,borderRadius:20}}>
        {count}
      </div>
    </div>
    // <div style={{ backgroundColor: "gray", height: "100vh" }}>
    //   <button onClick = {addPost}>Add Post</button>
    //   <div style={{ display: "flex", justifyContent: "center" }}>
    //     <div>
    //       {postComponents}
    //     </div>
    //   </div>
    // </div>
  );
}
// function ToggleMessage () {
//   const[isVisible, setIsVisisble] = useState(false);

//   return(
//     <div>
//       <button onClick = {() => setIsVisisble(!isVisible)}>
//         Toggle Message
//       </button>
//       {isVisible && <p>This message is conditionally rendered! </p>}
//     </div>
//   );
// }
// const style2 = {
//   widht: 250,
//   backgroundColor: "white",
//   marginLeft: 0,
//   marginRight: 20,
//   borderRadius: 10,
// };
// function ProfileComponent() {
//   return (
//     <div>
//       <div style={style2}>
//         <div style={{ display: "flex" }}>
//           <img
//             src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
//             style={{
//               height: 30,
//               widht: 30,
//               borderRadius: 200,
//               marginLeft: 10,
//               marginRight: 10,
//             }}
//           />
//           <div>
//             <div style={{ marginRight: 10 }}>
//               <b>ANUJ RAWAT</b>
//             </div>
//             <div style={{ fontSize: 12 }}>
//               Software Developer
//               <br /> Frontend
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             marginLeft: 40,
//             marginTop: 20,
//             fontSize: 8,
//             display: "flex",
//           }}
//         >
//           250 connections
//           <button
//             style={{
//               marginLeft: 5,
//               fontSize: 7,
//             }}
//           >
//             Edit Profile
//           </button>
//         </div>
//         <div style={{ display: "flex", gap: 10, fontSize: 12, marginLeft: 24, marginTop: 10}}>
//           <div>Profile viewers</div>
//           <div style={{}}>41,504</div>
//         </div>
//         <div style={{ display: "flex", gap: 10, fontSize: 12, marginLeft: 24 }}>
//           <div>Post impression</div>
//           <div>1,312</div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default App;
