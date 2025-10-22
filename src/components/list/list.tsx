import type { FC, MouseEvent } from 'react';

// Local types consistent with Map component
export type Point = {
  title: string;
  lat: number;
  lng: number;
};
export type Points = Point[];

export type ListProps = {
  points: Points;
  onListItemHover: (listItemName: string) => void;
};

const List: FC<ListProps> = (props) => {
  const { points, onListItemHover } = props;

  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };

  return (
    <ul className="list">
      {points.map((point, index) => {
        const keyValue = `${index}-${point.title}`;
        return (
          <li
            className="list__item"
            key={keyValue}
            onMouseEnter={handleListItemHover}
          >
            {point.title}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
