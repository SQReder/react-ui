import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { TabMenu } from '#src/components-ver2/TabMenu';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

export default {
  title: 'Admiral-2.1/TabMenu',
  decorators: [withDesign],
  component: TabMenu,
  parameters: {
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A31118',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A31257',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm'],
      control: { type: 'radio' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof TabMenu>;

const tabs = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 7777777',
  },
  {
    id: '8',
    content: 'Option 88888888',
  },
  {
    id: '9',
    content: 'Option 999999999',
  },
];

const disabledTabs = [
  {
    id: '1',
    content: 'Option 1',
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    disabled: true,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    icon: <MinusCircleOutline />,
    disabled: true,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 77',
    badge: 5,
    disabled: true,
  },
];

const overflowTabs = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 7777777',
  },
  {
    id: '8',
    content: 'Option 88888888',
  },
  {
    id: '9',
    content: 'Option 999999999',
  },
];

const Template1: ComponentStory<typeof TabMenu> = (args) => {
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <div style={{ display: 'flex', width: '800px' }}>
        <TabMenu
          {...args}
          activeTab={selected}
          onChange={(id) => {
            setSelected(id);
          }}
          tabs={tabs}
        />
      </div>
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof TabMenu> = (args) => {
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <div style={{ display: 'flex', width: '800px' }}>
        <TabMenu
          {...args}
          activeTab={selected}
          onChange={(id) => {
            setSelected(id);
          }}
          tabs={tabs}
          underline
        />
      </div>
    </ThemeProvider>
  );
};

const Template3: ComponentStory<typeof TabMenu> = (args) => {
  const [selected, setSelected] = React.useState<string>('2');
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <div style={{ display: 'flex', width: '800px' }}>
        <TabMenu
          {...args}
          activeTab={selected}
          onChange={(id) => {
            setSelected(id);
          }}
          tabs={disabledTabs}
        />
      </div>
    </ThemeProvider>
  );
};

const Template4: ComponentStory<typeof TabMenu> = (args) => {
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <div style={{ display: 'flex', width: '500px' }}>
        <TabMenu
          {...args}
          activeTab={selected}
          onChange={(id) => {
            setSelected(id);
          }}
          tabs={overflowTabs}
        />
      </div>
    </ThemeProvider>
  );
};

export const OverflowMenuBase = Template1.bind({});
OverflowMenuBase.args = {};
OverflowMenuBase.storyName = 'TabMenu. Базовый пример.';

export const OverflowMenuUnderline = Template2.bind({});
OverflowMenuUnderline.args = {};
OverflowMenuUnderline.storyName = 'TabMenu. Пример с нижней серой полосой.';

export const OverflowMenuDisabled = Template3.bind({});
OverflowMenuDisabled.args = {};
OverflowMenuDisabled.storyName = 'TabMenu. Пример с задизейбленными табами.';

export const OverflowMenuTooltip = Template4.bind({});
OverflowMenuTooltip.args = {};
OverflowMenuTooltip.storyName = 'TabMenu. Пример с OverflowMenu.';
