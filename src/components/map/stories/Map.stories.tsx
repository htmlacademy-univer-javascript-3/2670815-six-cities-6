import type { Meta, StoryObj } from '@storybook/react-vite';
import Map from '../map';
import { OFFERS } from '../../../mocks/offers';
import type { Points } from '../types';

const meta = {
  title: 'Components/Map',
  component: Map,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '500px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

const amsterdamCity = OFFERS[0].city;

const points: Points = OFFERS.map((offer) => ({
  title: offer.title,
  lat: offer.location.latitude,
  lng: offer.location.longitude,
}));

export const Default: Story = {
  args: {
    city: amsterdamCity,
    points: points,
    selectedPoint: undefined,
  },
};

export const WithSelectedPoint: Story = {
  args: {
    city: amsterdamCity,
    points: points,
    selectedPoint: points[0],
  },
};

export const SinglePoint: Story = {
  args: {
    city: amsterdamCity,
    points: [points[0]],
    selectedPoint: points[0],
  },
};
