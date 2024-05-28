import type {Meta, StoryObj} from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Shop: Story = {
  args: {
    children: 'Shop Now',
    variant: 'shop',
  },
};

export const MixMatch: Story = {
  args: {
    children: 'MIX & MATCH NOW',
    variant: 'mixMatch',
  },
};

export const Connect: Story = {
  args: {
    children: 'connect with us',
    variant: 'connect',
  },
};

export const Tag: Story = {
  args: {
    children: 'tag us',
    variant: 'tag',
  },
};

export const Buy: Story = {
  args: {
    children: 'buy now',
    variant: 'buy',
  },
};

export const Cart: Story = {
  args: {
    children: 'add to cart',
    variant: 'cart',
  },
};
