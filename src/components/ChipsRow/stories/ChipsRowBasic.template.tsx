import * as React from 'react';
import styled from 'styled-components';

import { ChipsRow } from '@admiral-ds/react-ui';
import type { ChipsRowProps, ChipItemProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const chipsData: ChipItemProps[] = [
  { id: '1', content: 'Москва' },
  { id: '2', content: 'Санкт-Петербург' },
  { id: '3', content: 'Новосибирск' },
  { id: '4', content: 'Екатеринбург' },
  { id: '5', content: 'Казань' },
];

export const ChipsRowBasicTemplate = (props: ChipsRowProps) => {
  const [items, setItems] = React.useState<ChipItemProps[]>(chipsData);

  const handleChipClose = (chipId: string) => {
    setItems(items.filter((item) => item.id !== chipId));
  };

  return (
    <Wrapper>
      <ChipsRow {...props} items={items} onChipClose={handleChipClose} />
    </Wrapper>
  );
};
