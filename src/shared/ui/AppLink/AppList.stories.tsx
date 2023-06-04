import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'UI/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    to: '/',
    children: 'text',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryLight: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
