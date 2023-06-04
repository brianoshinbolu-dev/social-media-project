import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore"; // imported direct from the firebase module
import { db, auth } from "../../config/firebase"; // database that was configure in the config folder
import { useAuthState } from "react-firebase-hooks/auth";

//typescript info for the onCreatePost function
interface CreateFormData {
  title: string;
  description: string;
}

const CreateForm = () => {
  const [user] = useAuthState(auth);


  //Form validation with Yup (post form)
  const schema = yup.object().shape({
    title: yup.string().required("You must add title."),
    description: yup.string().required("you must add a description."),
  });

  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });




  const postRef = collection(db, "post"); //this is used to specify which COLLECTION we are refering too

  //Function to Create pOst ===========================
  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
  };

  return (
    <form action="" onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder="tile..." {...register("title")} />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea placeholder="Description..." {...register("description")} />
      <p style={{ color: "red" }}>{errors.description?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default CreateForm;
