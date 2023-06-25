import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'Text',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {},
};

export const ClearInverted: Story = {
  args: {
    theme: ThemeButton.CLEAR_INVERTED,
  },
};

export const DarkClearInverted: Story = {
  args: {
    theme: ThemeButton.CLEAR_INVERTED,
  },
};

DarkClearInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background: Story = {
  args: {
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundDark: Story = {
  args: {
    theme: ThemeButton.BACKGROUND,
  },
};

BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareL: Story = {
  args: {
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: SizeButton.L,
  },
};

export const SquareM: Story = {
  args: {
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: SizeButton.M,
  },
};

export const SquareXL: Story = {
  args: {
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: SizeButton.XL,
  },
};

export const OutlineSizeL: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
  },
};

export const OutlineSizeM: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    size: SizeButton.M,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
  },
};

export const Disabled: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    disabled: true,
  },
};
