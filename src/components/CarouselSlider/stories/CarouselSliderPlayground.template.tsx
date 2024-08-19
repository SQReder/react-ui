import { useState } from 'react';
import styled from 'styled-components';

import type { CarouselSliderAppearance, CarouselSliderProps } from '@admiral-ds/react-ui';
import {
  CarouselSlider,
  CarouselSliderItem,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CarouselSliderPlaygroundTemplate = ({
  appearance,
  ...props
}: CarouselSliderProps & { appearance: CarouselSliderAppearance }) => {
  const [current, setCurrent] = useState(0);
  const handleCurrentChange = (newValue: number) => {
    setCurrent(newValue);
  };

  return (
    <Wrapper>
      <CarouselSlider {...props}>
        {[...Array(5).keys()].map((item) => {
          return (
            <CarouselSliderItem
              aria-label={`Item ${item}`}
              key={item}
              appearance={appearance}
              isCurrent={item === current}
              onClick={() => handleCurrentChange(item)}
            />
          );
        })}
      </CarouselSlider>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>CarouselSlider</NotificationItemTitle>
        <NotificationItemContent>
          Компонент Carousel Slider может использоваться отдельно и применяться в произвольных сценариях.
          <Separator height={8} />
          Вариация Default применяется в составе компонента Carousel только при работе с изображениями. Находится над
          картинкой и имеет внешнюю обводку толщиной 0,5px для видимости на светлом фоне.
          <Separator height={8} />
          Вариация Primary применяется и как отдельный компонент, и в составе компонента Carousel, в таком случае
          слайдер располагается вне контента, снизу от него.
          <Separator height={8} />
          Более длинный сегмент слайдера обозначает текущее место прогресса.
          <Separator height={8} />
          Анимация. При переключении сегмента слайдера в состояние Active, сегмент удлиняется, параллельно активный
          сегмент сокращается, переходя в состояние Default. Таким образом ширина компонента всегда постоянна и не
          изменяется при переключении сегментов.
          <Separator height={8} />
          Переключение сегментов может быть автоматическим через заданный пользователем интервал. Дефолтное значение
          интервала равно 3 секундам. Так же можно переключать контент кликами по не активным сегментам.
          <Separator height={8} />
          Размер активной площади клика 18х16px.
          <Separator height={8} />
          Количество сегментов в слайдере регулируется пользователем. Минимальное количество — два сегмента.
        </NotificationItemContent>
      </NotificationItem>
    </Wrapper>
  );
};
