import { SliderRangeField } from '#src/components/form/SliderRangeField';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Form Field Components/SliderRangeField',
  component: SliderRangeField,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A61377',
    },
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    thousand: {
      control: { type: 'text' },
    },
    prefix: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    maxLength: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof SliderRangeField>;

const Template: ComponentStory<typeof SliderRangeField> = (props) => {
  return <SliderRangeField {...props} />;
};

export const InputFieldInput = Template.bind({});

InputFieldInput.args = {
  label: 'Введите диапазон',
};

InputFieldInput.storyName = 'SliderRangeField example';
