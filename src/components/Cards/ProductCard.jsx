import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import StarRating from "../StarRating/StarRating";
import { useNavigate } from "react-router-dom";
import { allProductsContext } from "../../contexts/allProducts";
import { useContext } from "react";
export function ProductCard({ id, name, price, image, description, rate }) {
  const navigate = useNavigate();
  function showDetails() {
    navigate(`/product/${id}`);
  }

  return (
    <Card className="w-72 cursor-pointer">
      <CardHeader
        shadow={false}
        floated={false}
        className=" h-[327px] flex justify-center">
        <img
          src={image}
          alt={name}
          onClick={showDetails}
          className="h-auto object-contain"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
          </Typography>
        </div>
        <StarRating rate={rate} id={id} />

        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
