import { useParams } from "react-router-dom";
import classNames from "classnames";
import GirdComponent from "@/components/GirdComponent/GirdComponent";


const Category = () => {

  let {slug} = useParams()

  return (
    <div>
      <GirdComponent>
        category
      </GirdComponent>
    </div>
  )
}

export default Category