import * as React from 'react';
import styled from 'styled-components';

import { ChipsRow } from '@admiral-ds/react-ui';
import type { ChipsRowProps, ChipItemProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  width: 600px;
  padding: 20px;
  border: 1px dashed #8a96a8;
  border-radius: 4px;
`;

const Description = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: #626f84;
`;

const chipsData: ChipItemProps[] = [
  { id: '1', content: 'Москва' },
  { id: '2', content: 'Санкт-Петербург' },
  { id: '3', content: 'Новосибирск' },
  { id: '4', content: 'Екатеринбург' },
  { id: '5', content: 'Казань' },
  { id: '6', content: 'Нижний Новгород' },
  { id: '7', content: 'Челябинск' },
  { id: '8', content: 'Самара' },
  { id: '9', content: 'Омск' },
  { id: '10', content: 'Ростов-на-Дону' },
];

export const ChipsRowOverflowTemplate = (props: ChipsRowProps) => {
  const [items, setItems] = React.useState<ChipItemProps[]>(chipsData);

  const handleChipClose = (chipId: string) => {
    setItems(items.filter((item) => item.id !== chipId));
  };

  return (
    <div>
      <Description>
        Контейнер ограничен по ширине (600px). Чипсы, не помещающиеся в контейнер, скрываются, и отображается счетчик
        +X. Клик по счетчику открывает dropdown со скрытыми чипсами.
      </Description>
      <Wrapper>
        <ChipsRow {...props} items={items} onChipClose={handleChipClose} />
      </Wrapper>
    </div>
  );
};
