import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'Features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [
  StoreDecorator({ login: { username: 'admin', password: '123' } }),
];

export const WithError: Story = {
  args: {},
};

WithError.decorators = [
  StoreDecorator({
    login: { username: 'admin', password: '123', error: ' Some error' },
  }),
];

export const WithLoadin: Story = {
  args: {},
};

WithLoadin.decorators = [
  StoreDecorator({
    login: { username: 'admin', password: '123', isLoading: true },
  }),
];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [
  StoreDecorator({ login: { username: 'admin', password: '123' } }),
  ThemeDecorator(Theme.DARK),
];
