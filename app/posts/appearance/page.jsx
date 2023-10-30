import Heading from "@/components/Heading";
import {readFile} from 'node:fs/promises'
import  {marked}  from "marked";

export default async function Appearance() {
  const text = await readFile('./content/posts/appearance.md','utf8')
  const html= marked(text)
  
  return (
    <>
      <Heading>Her appearance</Heading>
      <img
        src="/images/doggie.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article dangerouslySetInnerHTML={{__html:html}} className="max-w-screen-sm prose prose-slate"/>
    </>
  );
}

