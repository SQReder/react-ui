import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { Chips, MultiInputField, typography } from '@admiral-ds/react-ui';
import type { InputExFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { uid } from '#src/components/common/uid';

const disabledChipStyle = css`
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
`;

const hoverChipStyle = css`
  &:hover {
    background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  }
`;

export const StyledChip = styled(Chips)`
  display: flex;

  min-width: 35px;
  @media (max-width: 768px) {
    max-width: 80px;
  }

  ${({ disabled }) => (disabled ? disabledChipStyle : hoverChipStyle)}

  ${typography['Caption/Caption 1']};
`;

export const MultiInputFieldPlaygroundTemplate = ({
  label = 'Label',
  extraText = 'extraText',
  themeBorderKind,
  displayClearIcon = true,
  CSSCustomProps,
  ...props
}: InputExFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [value, setValue] = useState('');
  const [listValue, setListValue] = useState<React.ComponentProps<typeof StyledChip>[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;

    setValue(currentValue);
  };

  const handleDeleteChip = (id?: string) => {
    setListValue((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };

  const handleKeyDown = () => {
    setListValue((prevState) => {
      return [...prevState, { id: uid(), children: value }];
    });
    setValue('');
  };

  const handleClearListValue = () => {
    setListValue([]);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <MultiInputField
        data-container-id="MultiInputFieldId"
        {...props}
        label={label}
        extraText={extraText}
        value={value}
        onInputComplete={handleKeyDown}
        onClearOptions={handleClearListValue}
        onChange={handleChange}
        displayClearIcon={displayClearIcon && listValue.length !== 0}
      >
        {listValue.map((item, index) => (
          <StyledChip
            {...item}
            key={index}
            onClose={handleDeleteChip}
            tabIndex={-1}
            dimension="s"
            appearance="filled"
            disabled={props.disabled || props.disableCopying || props.readOnly}
          />
        ))}
      </MultiInputField>
    </ThemeProvider>
  );
};
