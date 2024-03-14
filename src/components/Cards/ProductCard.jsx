import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import StarRating from '../StarRating/StarRating';

export function ProductCard({ name, price, image, description, rate }) {
  return (
    <Card className="w-72">
      <CardHeader
        shadow={false}
        floated={false}
        className=" h-[327px] flex justify-center"
      >
        <img src={image} alt={name} className="h-auto  object-contain" />
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
        <StarRating rate={rate} />
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}

export default ProductCard;
