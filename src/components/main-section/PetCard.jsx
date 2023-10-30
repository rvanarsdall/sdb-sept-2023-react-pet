import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function PetCard(props) {
  const { title, imageURL, description } = props.pet;
  return (
    <>
      <Card
        className="mb-3"
        style={{
          width: "100%",
        }}
      >
        <img
          alt="Sample"
          src={imageURL}
          onError={({ currentTarget }) => {
            currentTarget.src = "https://via.placeholder.com/500";
          }}
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.pet?.ownerId?.firstname} {props.pet?.ownerId?.lastname[0]}.
          </CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Click Me</Button>
        </CardBody>
      </Card>
    </>
  );
}

export default PetCard;
