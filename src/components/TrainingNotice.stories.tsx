import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TrainingNotice } from './TrainingNotice';

const meta = {
  title: 'Training/TrainingNotice',
  component: TrainingNotice,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TrainingNotice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
