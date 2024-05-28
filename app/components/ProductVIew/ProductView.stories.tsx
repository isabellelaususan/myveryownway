import type {Meta, StoryObj} from '@storybook/react';
import ProductView from './ProductView';

const meta = {
  title: 'Components/ProductView',
  component: ProductView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProductView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Shop: Story = {
  args: {
    img: '/assets/Shop/irisBag.png',
    bagName: 'Iris Bag',
    price: 'THB 1190.00',
    icon: '/assets/icons/shop.svg',
  },
};
