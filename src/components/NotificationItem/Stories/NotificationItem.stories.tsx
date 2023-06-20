import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { NotificationItem, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { StaticNotificationItemBaseTemplate, StaticNotificationItemStatusTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import StaticNotificationItemBaseRaw from '!!raw-loader!./Templates/StaticNotificationItemBase';
import StaticNotificationItemStatusRaw from '!!raw-loader!./Templates/StaticNotificationItemStatus';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент служит для демонстрации статических нотификаций. Существует в четырех типа нотификаций: Информационное
    сообщение, предупреждение, ошибка и положительные действия. Применяется как самостоятельный элемент.
  </Desc>
);

export default {
  title: 'Admiral-2.1/NotificationItem',
  decorators: undefined,
  component: NotificationItem,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27484',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27651',
      },
    ],
  },
  argTypes: {
    displayStatusIcon: {
      type: 'boolean',
    },
    isClosable: {
      type: 'boolean',
    },
    onClose: {
      action: 'clicked',
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof NotificationItem>;

//<editor-fold desc="Статическая нотификация. Базовый пример.">
const StaticNotificationItemBaseStory: StoryFn<typeof NotificationItem> = (props) => {
  return <StaticNotificationItemBaseTemplate {...cleanUpProps(props)} />;
};

export const StaticNotificationItemBase = {
  render: StaticNotificationItemBaseStory,

  parameters: {
    docs: {
      source: {
        code: StaticNotificationItemBaseRaw,
      },
    },
  },

  name: 'Статическая нотификация. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="Статусы статических нотификаций">
const StaticNotificationItemStatusStory: StoryFn<typeof NotificationItem> = (props) => {
  return <StaticNotificationItemStatusTemplate {...cleanUpProps(props)} />;
};

export const StaticNotificationItemStatus = {
  render: StaticNotificationItemStatusStory,

  parameters: {
    docs: {
      source: {
        code: StaticNotificationItemStatusRaw,
      },
    },
  },

  name: 'Статусы статических нотификаций',
};
