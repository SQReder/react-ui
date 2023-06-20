import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { EditModeField, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  EditModeFieldErrorStateTemplate,
  EditModeFieldExtraTextTemplate,
  EditModeFieldPlaygroundTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import EditModeFieldPlaygroundRaw from '!!raw-loader!./Templates/EditModeFieldPlayground';
import EditModeFieldErrorStateRaw from '!!raw-loader!./Templates/EditModeFieldErrorState';
import EditModeFieldExtraTextRaw from '!!raw-loader!./Templates/EditModeFieldExtraText';

export default {
  title: 'Admiral-2.1/Form Field/EditModeField',
  component: EditModeField,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <DataAttributesDescription />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10602',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10901',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xxl', 'xl', 'm', 's'],
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    bold: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    multilineView: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    containerCssMixin: {
      control: false,
    },
    extraText: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    icons: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof EditModeField>;

//<editor-fold desc="Playground">
const EditModeFieldPlaygroundStory: StoryFn<typeof EditModeField> = (props) => (
  <EditModeFieldPlaygroundTemplate value={''} onChange={() => undefined} {...cleanUpProps(props)} />
);

export const EditModeFieldPlayground = {
  render: EditModeFieldPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: EditModeFieldPlaygroundRaw,
      },
    },
  },

  name: 'EditModeField. Playground',
};

//</editor-fold>

//<editor-fold desc="Пример с поясняющим текстом">
const EditModeFieldExtraTextStory: StoryFn<typeof EditModeField> = (props) => (
  <EditModeFieldExtraTextTemplate value={''} onChange={() => undefined} {...cleanUpProps(props)} />
);

export const EditModeFieldExtraText = {
  render: EditModeFieldExtraTextStory,
  name: 'Пример с поясняющим текстом',

  parameters: {
    docs: {
      source: {
        code: EditModeFieldExtraTextRaw,
      },
      description: {
        story: `В режиме редактирования допускается использование поясняющего текста для инпута.`,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Пример с состоянием ошибки">
const EditModeFieldErrorStateStory: StoryFn<typeof EditModeField> = (props) => (
  <EditModeFieldErrorStateTemplate value={''} onChange={() => undefined} {...cleanUpProps(props)} />
);

export const EditModeFieldErrorState = {
  render: EditModeFieldErrorStateStory,

  parameters: {
    docs: {
      source: {
        code: EditModeFieldErrorStateRaw,
      },
    },
  },

  name: 'Пример с состоянием ошибки',
};
