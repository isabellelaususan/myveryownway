import type {Meta, StoryObj} from '@storybook/react';
import Slider from './Slider';
import {myVeryLogo} from './constants';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MySlider: Story = {
  args: {
    mySlider: myVeryLogo,
  },
};
