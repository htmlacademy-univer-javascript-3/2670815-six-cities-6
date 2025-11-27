/**
 * MainScreen – компонент главной страницы приложения «6 cities».
 * Временная крупная монолитная версия, созданная на основе разметки из markup/main.html.
 * В дальнейшем будет декомпозирован на подкомпоненты.
 */
import { type FC, useMemo, useState } from 'react';
import OffersList from '../offers-list/offers-list';
import type { Offer } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import type { Point } from '../../components/map/types';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { DEFAULT_SORTING } from '../../components/sorting-options/constants';
import type { SortingOption } from '../../components/sorting-options/types';
import { sortOffers } from '../../components/sorting-options/utils';
import { useSelector, useDispatch } from 'react-redux';
import { setCity } from '../../store/action';
import type { RootState } from '../../store';

type MainScreenProps = {
  offers: Offer[];
};

const MainScreen: FC<MainScreenProps> = ({ offers }) => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const dispatch = useDispatch();
  const [currentSorting, setCurrentSorting] = useState<SortingOption>(DEFAULT_SORTING);

  const filteredOffers = useMemo(() => (
    offers.filter((o) => o.city.name === currentCity)
  ), [offers, currentCity]);

  const sortedOffers = useMemo(() => (
    sortOffers(filteredOffers, currentSorting)
  ), [filteredOffers, currentSorting]);

  const points = useMemo<Point[]>(() => (
    sortedOffers.map((o) => ({
      title: o.title,
      lat: o.location.latitude,
      lng: o.location.longitude,
    }))
  ), [sortedOffers]);

  const city = sortedOffers[0]?.city || offers[0]?.city;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img
                  className="header__logo"
                  src="markup/img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/login">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            cities={['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf']}
            currentCity={currentCity}
            onCityChange={(c) => dispatch(setCity(c))}
          />
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {currentCity}</b>
              <SortingOptions
                currentSorting={currentSorting}
                onSortingChange={setCurrentSorting}
              />
              <OffersList offers={sortedOffers}/>
            </section>
            <div className="cities__right-section">
              {city ? (
                <Map city={city} points={points} selectedPoint={undefined}/>
              ) : (
                <section className="cities__map map"></section>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default MainScreen;
