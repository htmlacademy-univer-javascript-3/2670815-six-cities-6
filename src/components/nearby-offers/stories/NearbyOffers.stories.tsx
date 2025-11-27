import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import NearbyOffers from '../nearby-offers';
import { OFFERS } from '../../../mocks/offers';

const meta = {
  title: 'Components/NearbyOffers',
  component: NearbyOffers,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof NearbyOffers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    offers: OFFERS.slice(0, 3),
  },
};

export const SingleOffer: Story = {
  args: {
    offers: [OFFERS[0]],
  },
};

export const AllOffers: Story = {
  args: {
    offers: OFFERS,
  },
};

export const Empty: Story = {
  args: {
    offers: [],
  },
};
