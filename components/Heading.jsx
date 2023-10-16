import {roboto_slab} from "@/app/fonts"

function Heading({ children }) {
  return <h1 className={`font-bold pb-3 text-2xl ${roboto_slab.className}`}>{children}</h1>;
}

export default Heading;
