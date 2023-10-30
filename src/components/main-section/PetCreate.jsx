import { Form, FormGroup, Input, Label } from "reactstrap";
import PetButton from "../../ui/PetButton";
import React, { useState } from "react";
import { API_PET_CREATE } from "../../constants/endpoints";

function PetCreate(props) {
  const [title, setTitle] = useState("Fido bites the mailman");
  const [description, setDescription] = useState("He was a naughty dog");
  const [imageURL, setImageURL] = useState("https://via.placeholder.com/500");

  async function handleSubmit() {
    console.log("Create Pet Clicked");
    // Try Catch
    try {
      // Headers
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", props.token);

      // Body
      let body = {
        title: title,
        description: description,
        imageURL: imageURL,
      };

      // Request Options
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      };
      // Send Request
      const response = await fetch(API_PET_CREATE, requestOptions);
      //  Get A Response
      const data = await response.json();
      //  Refresh the Pet Feed
      props.fetchPetFeed();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="d-flex neutral-background rounded p-5 flex-column">
        <h2 className="font-primary text-center">Create a Pet Post</h2>
        <Form>
          {/* Title, Description, ImageURL */}
          {/* Form Group Title */}
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Enter a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          {/* Form Group Title End */}
          {/* Form Group Description */}
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          {/* Form Group Description End */}
          {/* Form Group ImageURL */}
          <FormGroup>
            <Label for="imageURL">Image URL</Label>
            <Input
              type="text"
              name="imageURL"
              id="imageURL"
              placeholder="Enter an image URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </FormGroup>
          {/* Form Group ImageURL End */}
          <PetButton title="Create Pet Post" onClick={handleSubmit} />
        </Form>
      </div>
    </>
  );
}

export default PetCreate;
