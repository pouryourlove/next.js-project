import Heading from "@/components/Heading";
import {readFile} from 'node:fs/promises'

export default async function Appearance() {
  const text = await readFile('./content/posts/appearance.md','utf8')
  
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
      <p>{text}</p>
    </>
  );
}
