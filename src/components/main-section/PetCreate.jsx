import { Form, FormGroup, Input, Label } from "reactstrap";

function PetCreate(props) {
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
            />
          </FormGroup>
          {/* Form Group ImageURL End */}
        </Form>
      </div>
    </>
  );
}

export default PetCreate;
