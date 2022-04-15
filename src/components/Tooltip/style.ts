import styled from 'styled-components';
import { PositionInPortal } from '#src/components/PositionInPortal';
import type { PositionInPortalProps } from '#src/components/PositionInPortal';
import { typography } from '#src/components/Typography';

const TOOLTIP_PADDING = '4px 8px';
const TOOLTIP_BORDER_RADIUS = '4px';

export const TooltipWrapper = styled.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`;

export const TooltipContainer = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.background.primary};
  ${typography['Body/Body 2 Short']}
  border-radius: ${TOOLTIP_BORDER_RADIUS};
  ${(props) => props.theme.shadow.ClickableDefault}
  padding: ${TOOLTIP_PADDING};
  max-width: min(488px, calc(100vw - 16px));
`;

export const FakeTarget = styled.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`;

export const Portal = styled(PositionInPortal)<
  PositionInPortalProps & { flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' }
>`
  display: flex;
  flex-wrap: nowrap;
  ${({ flexDirection }) => (flexDirection ? `flex-direction: ${flexDirection};` : '')}
`;

export const AnchorWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;
