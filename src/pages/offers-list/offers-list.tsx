import type { FC } from 'react';
import type { Offer } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
};

const OffersList: FC<OffersListProps> = ({ offers, className = 'cities__places-list places__list tabs__content', imageWidth = 260, imageHeight = 200 }) => (
  <div className={className}>
    {offers.map((offer) => (
      <PlaceCard
        key={offer.id}
        offer={offer}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    ))}
  </div>
);

export default OffersList;
