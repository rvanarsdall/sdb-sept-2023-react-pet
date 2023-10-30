import PetCard from "./PetCard";

function PetFeed(props) {
  return (
    <>
      {props.petFeedItems.map((pet, index) => (
        <PetCard key={index} pet={pet} />
      ))}
    </>
  );
}

export default PetFeed;
