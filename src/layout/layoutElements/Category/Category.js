import { useParams } from "react-router-dom";


const Category = () => {

  let {slug} = useParams()

  return (
    <div>
      {slug}
    </div>
  )
}

export default Category