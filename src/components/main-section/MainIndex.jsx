import { Col, Container, Row } from "reactstrap";
import PetCreate from "./PetCreate";
import PetFeed from "./PetFeed";
import { API_PET_VIEW_ALL } from "../../constants/endpoints";

// imrse
import React, { useState, useEffect } from "react";

function MainIndex(props) {
  const [petFeedItems, setPetFeedItems] = useState([]);
  async function fetchPetFeed() {
    try {
      // Headers
      const myHeaders = new Headers();
      myHeaders.append("Authorization", props.token);
      // Request Options
      let requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      // Send Request
      const response = await fetch(API_PET_VIEW_ALL, requestOptions);
      //  Get A Response
      const data = await response.json();
      console.log(data);
      // Set State
      setPetFeedItems(data.pets.reverse());
    } catch (error) {
      console.error(error);
    }
  }

  // uef
  useEffect(() => {
    fetchPetFeed();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="4">
            <PetCreate token={props.token} fetchPetFeed={fetchPetFeed} />
          </Col>
          <Col md="8">
            <PetFeed petFeedItems={petFeedItems} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainIndex;
