import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';

import { ChipsRow } from '@admiral-ds/react-ui';

import { ChipsRowBasicTemplate } from './ChipsRowBasic.template';
import { ChipsRowOverflowTemplate } from './ChipsRowOverflow.template';
import { ChipsRowCustomClickTemplate } from './ChipsRowCustomClick.template';

// Imports of text sources
import ChipsRowBasicRaw from './ChipsRowBasic.template?raw';
import ChipsRowOverflowRaw from './ChipsRowOverflow.template?raw';
import ChipsRowCustomClickRaw from './ChipsRowCustomClick.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    ChipsRow - компонент для отображения горизонтального ряда чипсов с автоматической обработкой переполнения. Когда
    чипсы не помещаются в доступное пространство, компонент автоматически скрывает лишние чипсы и отображает счетчик
    (+X), показывающий количество скрытых элементов.
    <br />
    <br />
    При клике на счетчик (+X) поведение определяется наличием prop onMoreClick:
    <ul>
      <li>Если onMoreClick не указан - автоматически показывается dropdown со скрытыми чипсами</li>
      <li>Если onMoreClick указан - обработка клика делегируется пользователю компонента</li>
    </ul>
  </Desc>
);

export default {
  title: 'Admiral-2.1/ChipsRow',
  component: ChipsRow,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  args: {
    dimension: 'm',
    appearance: 'outlined',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
    },
    items: {
      control: false,
    },
    onChipClose: {
      control: false,
    },
    onChipClick: {
      control: false,
    },
    onMoreClick: {
      control: false,
    },
    chipProps: {
      control: false,
    },
  },
} as Meta<typeof ChipsRow>;

//<editor-fold desc="ChipsRow базовый пример">
const ChipsRowBasicStory: StoryFn<typeof ChipsRow> = (props) => <ChipsRowBasicTemplate {...props} />;

export const ChipsRowBasic = {
  render: ChipsRowBasicStory,

  parameters: {
    docs: {
      source: {
        code: ChipsRowBasicRaw,
      },
    },
  },

  name: 'ChipsRow. Базовый пример',
};

//</editor-fold>

//<editor-fold desc="ChipsRow с overflow">
const ChipsRowOverflowStory: StoryFn<typeof ChipsRow> = (props) => <ChipsRowOverflowTemplate {...props} />;

export const ChipsRowOverflow = {
  render: ChipsRowOverflowStory,
  name: 'ChipsRow. С автоматическим overflow и dropdown',

  parameters: {
    docs: {
      source: {
        code: ChipsRowOverflowRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="ChipsRow с кастомным onMoreClick">
const ChipsRowCustomClickStory: StoryFn<typeof ChipsRow> = (props) => <ChipsRowCustomClickTemplate {...props} />;

export const ChipsRowCustomClick = {
  render: ChipsRowCustomClickStory,
  name: 'ChipsRow. С кастомным обработчиком onMoreClick',

  parameters: {
    docs: {
      source: {
        code: ChipsRowCustomClickRaw,
      },
    },
  },
};

//</editor-fold>
