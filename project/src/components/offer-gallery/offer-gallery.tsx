type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  const sixImages = images.slice(0, 6);

  return (
    <div className="property__gallery">
      {
        sixImages.map((image, id) => (
          <div key={`${id * 10}`} className="property__image-wrapper">
            <img className="property__image" src={image} alt={`OfferPhoto-${id}`} />
          </div>
        ))
      }
    </div>
  );
}

export default OfferGallery;
