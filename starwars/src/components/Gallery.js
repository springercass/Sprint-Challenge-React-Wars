import React from "react";
import "../App.css";
import StarwarsCharacter from "./StarwarsCharacter";

class Gallery extends React.Component {
  render() {
    return (
      <section className="gallery">
        <div className="characters">
          {this.props.galleryImages.map(character => (
            <StarwarsCharacter character={character} />
          ))}
        </div>
      </section>
    );
  }
}

export default Gallery;
