import type {Meta, StoryObj} from '@storybook/react';
import Header from './Header';
import {headerMenu} from './constants';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavMenu: Story = {
  args: {
    navMenu: headerMenu,
  },
};
