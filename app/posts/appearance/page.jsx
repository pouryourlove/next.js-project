import Heading from "@/components/Heading";

export default function Appearance() {
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
      <p>Here we'll talk about what she looks like</p>
    </>
  );
}
