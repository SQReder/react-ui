import styled from 'styled-components';
import { Chips } from '#src/components/Chips';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const HiddenContainer = styled.div`
  visibility: hidden;
  position: absolute;
  display: inline-flex;
  flex-wrap: nowrap;
  gap: 8px;
  align-items: center;
  pointer-events: none;
  white-space: nowrap;
`;

export const VisibleContainer = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  gap: 8px;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const OverflowChip = styled(Chips)`
  flex-shrink: 0;
  cursor: pointer;
`;
