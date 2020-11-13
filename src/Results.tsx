import React, { FunctionComponent } from "react";
import { Animal } from "@frontendmasters/pet";
import Pet from "./Pet";

interface IProps {
  pets: Animal[];
}

const Results: FunctionComponent<IProps> = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(({ type, id, name, breeds, photos, contact }) => (
          <Pet
            animal={type}
            key={id}
            name={name}
            breed={breeds.primary}
            media={photos}
            location={`${contact.address.city}, ${contact.address.state}`}
            id={id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
