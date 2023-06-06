import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import type { ButtonProps, ButtonAppearance, Theme } from '@admiral-ds/react-ui';
import { Button, T, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { filterKeysWithUndefinedValues } from '#src/components/common/utils/filterKeysWithUndefinedValues';
import { PaddingForButtonWithIconLeft, PaddingForButtonWithIconRight } from '#src/components/Button/dimensionMixin';
import { ButtonLoaderTemplate, ButtonWithIconTemplate } from './Templates';

// Imports of text sources
import ButtonLoaderRaw from '!!raw-loader!./Templates/ButtonLoader';
import ButtonWithIconRaw from '!!raw-loader!./Templates/ButtonWithIcon';

export default {
  title: 'Admiral-2.1/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19734',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A16209',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    skeleton: {
      control: 'boolean',
    },
    appearance: {
      options: ['primary', 'secondary', 'danger', 'success', 'ghost', 'white'],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },

    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },

    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },

    disabled: {
      control: { type: 'boolean' },
    },

    displayAsSquare: {
      control: { type: 'boolean' },
    },

    displayAsDisabled: {
      control: { type: 'boolean' },
    },

    loading: {
      control: { type: 'boolean' },
    },

    icon: {
      control: false,
    },

    buttonCssMixin: {
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonContainer = styled.div<{ appearance?: ButtonAppearance }>`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  ${(p) => p.appearance === 'white' && 'background-color: #2B313B;'};
`;

const TemplatePlayground = (props: ButtonProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <T font="Body/Body 1 Long" as="div">
        В связи с корректировкой внутренних отступов при наличии иконок рекомендуется их передавать через props "icon" и
        "iconPlace" = "left" | "right".
      </T>
      <ButtonContainer appearance={props.appearance}>
        <Button {...props} displayAsSquare={false}>
          Button 56
        </Button>

        <Button {...props} displayAsSquare={false} icon={<StarSolid />}>
          Button 56
        </Button>

        <Button {...props} displayAsSquare={false} icon={<StarSolid />} iconPlace="right">
          Button 56
        </Button>

        <Button {...props} icon={<StarSolid />} displayAsSquare />
      </ButtonContainer>
      <T font="Body/Body 1 Long" as="div">
        При передаче иконок через children необходимо прокидывать соответствующий css mixin
        (PaddingForButtonWithIconLeft | PaddingForButtonWithIconRight).
      </T>
      <ButtonContainer appearance={props.appearance}>
        <Button {...props} displayAsSquare={false}>
          Button 56
        </Button>

        <Button {...props} buttonCssMixin={PaddingForButtonWithIconLeft} displayAsSquare={false}>
          <StarSolid />
          Button 56
        </Button>

        <Button {...props} buttonCssMixin={PaddingForButtonWithIconRight} displayAsSquare={false}>
          Button 56
          <StarSolid />
        </Button>

        <Button {...props} displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
    </ThemeProvider>
  );
};

const ButtonPlaygroundDemo: ComponentStory<typeof Button> = (args) => {
  return <TemplatePlayground {...filterKeysWithUndefinedValues(args)} />;
};

const TemplateVariants = (props: ButtonProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ButtonContainer>
        <Button dimension={props.dimension}>Button 56</Button>

        <Button dimension={props.dimension} icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} iconPlace="right" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} displayAsSquare icon={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="secondary">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="secondary" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="secondary" iconPlace="right" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="secondary" displayAsSquare icon={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="ghost">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="ghost" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="ghost" iconPlace="right" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="ghost" displayAsSquare icon={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="danger">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="danger" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="danger" iconPlace="right" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="danger" displayAsSquare icon={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="success">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="success" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="success" iconPlace="right" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="success" displayAsSquare icon={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer appearance="white">
        <Button dimension={props.dimension} appearance="white">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="white" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="white" iconPlace="right" icon={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="white" displayAsSquare icon={<StarSolid />} />
      </ButtonContainer>
    </ThemeProvider>
  );
};

const ButtonVariants: ComponentStory<typeof Button> = (args) => {
  return <TemplateVariants {...args} />;
};

export const Playground = ButtonPlaygroundDemo.bind({});
Playground.storyName = 'Button. Playground';
Playground.args = {};
export const PlaygroundVariants = ButtonVariants.bind({});
PlaygroundVariants.storyName = 'Button. Стили';
PlaygroundVariants.args = {};

//<editor-fold desc="Button с иконкой">
const ButtonWithIconStory: ComponentStory<typeof Button> = (args) => {
  return <ButtonWithIconTemplate {...args} />;
};
export const ButtonWithIcon = ButtonWithIconStory.bind({});
ButtonWithIcon.parameters = {
  docs: {
    source: {
      code: ButtonWithIconRaw,
    },
  },
};
ButtonWithIcon.storyName = 'Button с иконкой';
ButtonWithIcon.args = {};
//</editor-fold>

//<editor-fold desc="Button. Загрузка">
const ButtonLoaderStory: ComponentStory<typeof Button> = (args) => {
  return <ButtonLoaderTemplate {...args} />;
};

export const ButtonLoader = ButtonLoaderStory.bind({});
ButtonLoader.parameters = {
  docs: {
    source: {
      code: ButtonLoaderRaw,
    },
  },
};
ButtonLoader.storyName = 'Button. Загрузка';
ButtonLoader.args = {};
//</editor-fold>
