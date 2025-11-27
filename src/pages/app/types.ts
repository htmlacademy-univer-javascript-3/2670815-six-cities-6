import type { Offer } from '../../mocks/offers';
import type { AppStore } from '../../store';

export type AppProps = {
  store: AppStore;
  offersCount: number;
  offers: Offer[];
};
