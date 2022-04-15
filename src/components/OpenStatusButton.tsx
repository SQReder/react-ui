import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import styled from 'styled-components';

export const OpenStatusButton = styled(ChevronDownOutline)<{ $isOpen?: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${(p) => (p.$isOpen ? 180 : 0)}deg);
  & *[fill^='#'] {
    fill: ${(props) => (props.$isOpen ? props.theme.color.basic.press : props.theme.color.text.secondary)};
  }

  &&[data-disabled] {
    pointer-events: none;
    fill: ${(props) => props.theme.color.text.tertiary};
  }

  &:not([data-disabled]):hover {
    cursor: pointer;
  }

  &:not([data-disabled]):hover *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;
