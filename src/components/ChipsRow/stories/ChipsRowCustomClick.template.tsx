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

const Message = styled.div`
  margin-top: 16px;
  padding: 12px;
  background-color: #f5f6f7;
  border-radius: 4px;
  font-size: 14px;
  color: #626f84;
`;

const chipsData: ChipItemProps[] = [
  { id: '1', content: 'JavaScript' },
  { id: '2', content: 'TypeScript' },
  { id: '3', content: 'React' },
  { id: '4', content: 'Angular' },
  { id: '5', content: 'Vue' },
  { id: '6', content: 'Node.js' },
  { id: '7', content: 'Python' },
  { id: '8', content: 'Java' },
  { id: '9', content: 'Go' },
  { id: '10', content: 'Rust' },
];

export const ChipsRowCustomClickTemplate = (props: ChipsRowProps) => {
  const [items, setItems] = React.useState<ChipItemProps[]>(chipsData);
  const [message, setMessage] = React.useState<string>('');

  const handleChipClose = (chipId: string) => {
    const chip = items.find((item) => item.id === chipId);
    setItems(items.filter((item) => item.id !== chipId));
    setMessage(`Удален чипс: ${chip?.content}`);
  };

  const handleMoreClick = () => {
    const hiddenCount = items.length - 3; // примерно 3 чипса видны
    setMessage(`Клик по счетчику! Скрыто элементов: ~${hiddenCount}. Реализация показа скрытых элементов - на усмотрение пользователя.`);
  };

  return (
    <div>
      <Description>
        С помощью props onMoreClick можно контролировать поведение при клике на счетчик +X. В этом примере вместо
        dropdown показывается кастомное сообщение.
      </Description>
      <Wrapper>
        <ChipsRow {...props} items={items} onChipClose={handleChipClose} onMoreClick={handleMoreClick} />
      </Wrapper>
      {message && <Message>{message}</Message>}
    </div>
  );
};
