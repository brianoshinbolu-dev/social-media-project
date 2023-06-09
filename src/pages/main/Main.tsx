import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import Post from "./Post";

 export interface Posts {
  id: string;
  userId: string;
  username: string;
  title: string;
  description: string;
}

const Main = () => {
  const [postsList, setPostList] = useState<Posts[] | null>(null);

  const postRef = collection(db, "post"); //this is used to specify which COLLECTION we are refering too

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Posts[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsList?.map((post) => (
        <Post post={post}/>
      ))}
    </div>
  );
};

export default Main;
