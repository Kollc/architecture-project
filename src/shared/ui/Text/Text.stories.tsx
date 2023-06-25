import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    className: '',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Text',
    title: 'Title',
  },
};

export const Error: Story = {
  args: {
    text: 'Text',
    title: 'Title',
    theme: TextTheme.ERROR,
  },
};

export const DarkPrimary: Story = {
  args: { text: 'Text', title: 'Title' },
};

DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText: Story = {
  args: {
    text: 'Text',
  },
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Text',
  },
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
