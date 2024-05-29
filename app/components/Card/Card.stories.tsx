import type {Meta, StoryObj} from '@storybook/react';
import Card from './Card';
import Bag from '/Shop/greenBag.png';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Shop: Story = {
  args: {
    children: <img src={Bag} alt="hello" />,
  },
};
