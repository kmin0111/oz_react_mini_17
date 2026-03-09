import { useParams } from "react-router-dom";
import { DetailCard } from "../components/DetailCard";


export const Detail = () => {
  const { id } = useParams();
  return (
    <>
      <DetailCard movieId={id} />
    </>
  )
}