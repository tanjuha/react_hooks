import React from "react";
import {Form} from "../components/Form"
import {Note} from "../components/Note"
import { Alert } from "../components/Alert";

export const Home = () => {
  const notes = new Array (3).fill(" ").map((_,i)=>({id: i, title: `title ${i + 1}`}))
  return (
    <>
    <Alert/>
    <Form/>
    <Note notes={notes} />
    </>
  )
} 