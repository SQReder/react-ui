import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { ALL_BORDER_RADIUS_VALUES, TabMenuHorizontalMobile } from '@admiral-ds/react-ui';

import { MobileHorizontalTabMenuTemplate } from './MobileHorizontalTabMenuTemplate';

// Imports of text sources
import MobileHorizontalTabMenuRaw from './MobileHorizontalTabMenuTemplate?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент настроен таким образом, что если закладки не помещаются в ширину экрана, то они “выходят” за область
    экрана и их можно прокручивать свайпом, в остальном, поведение такое же, как и у настольной версии.
  </Desc>
);

export default {
  title: 'Admiral-2.1/TabMenuComponent/TabMenuHorizontalMobile',
  decorators: undefined,
  component: TabMenuHorizontalMobile,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
  },
  argTypes: {
    dimension: {
      options: ['l', 'm'],
      control: { type: 'radio' },
    },
    showUnderline: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    defaultSelectedTabId: {
      control: false,
    },
    renderTab: {
      control: false,
    },
    tabIsDisabled: {
      control: false,
    },
    tabsId: {
      control: false,
    },
    onSelectTab: {
      control: false,
    },
    selectedTabId: {
      control: false,
    },
  },
} as Meta<typeof TabMenuHorizontalMobile>;

//<editor-fold desc="MobileHorizontalTabMenu.">
const MobileHorizontalTabMenuStory: StoryFn<typeof TabMenuHorizontalMobile> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MobileHorizontalTabMenuTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MobileHorizontalTabMenuExample = {
  render: MobileHorizontalTabMenuStory,

  parameters: {
    docs: {
      source: {
        code: MobileHorizontalTabMenuRaw,
      },
    },
  },

  name: 'MobileHorizontalTabMenu.',
};
//</editor-fold>
