import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MenuItem, RadioButton, FieldSet } from '@admiral-ds/react-ui';
import type { BorderRadiusType, RenderOptionProps, MenuModelItemProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import type {
  TabDimension,
  TabProps,
  VerticalTabProps,
  VerticalUnderlinePosition,
} from '#src/components/TabMenuComponent/types';
import { VerticalTab } from '#src/components/TabMenuComponent//tabs/VerticalTab';
import { TabIcon } from '#src/components/TabMenuComponent/tabs/TabIcon';
import { VerticalTabBadge } from '#src/components/TabMenuComponent/tabs/TabBadge';
import { VerticalTabMenuContainer } from '#src/components/TabMenuComponent/containers/VerticalTabMenuContainer';
import { ActiveVerticalTabUnderline } from '#src/components/TabMenuComponent/containers/ActiveVerticalTabUnderline';
import { TabText } from '#src/components/TabMenuComponent/tabs/TabText';
import { BASE_TAB_HEIGHT_L, BASE_TAB_HEIGHT_M, VERTICAL_TABS_GAP } from '#src/components/TabMenuComponent/constants';
import { VerticalTabOverflowMenu } from '#src/components/TabMenuComponent/containers/VerticalTabOverflowMenu';
import * as React from 'react';

const TAB_MENU_WIDTH = '260px';

interface TabContentProps extends TabProps {
  text: string;
  id?: string;
}

interface CustomVerticalTabProps extends TabContentProps, VerticalTabProps {}
const CustomVerticalTab = forwardRef<HTMLButtonElement, CustomVerticalTabProps>(
  ({ dimension = 'l', disabled, selected, text, id, ...props }: CustomVerticalTabProps, ref) => {
    return (
      <VerticalTab {...props} id={id} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
        <TabIcon $dimension={dimension} $disabled={disabled}>
          <MinusCircleOutline />
        </TabIcon>
        <TabText>{text}</TabText>
        <VerticalTabBadge disabled={disabled} selected={selected}>
          5
        </VerticalTabBadge>
      </VerticalTab>
    );
  },
);

const tabs = [
  { text: 'Text1', id: '1' },
  { text: 'Text22', id: '2' },
  { text: 'Text333', id: '3' },
  { text: 'Text4444', id: '4' },
  { text: 'Text55555', id: '5' },
  { text: 'Text66666', id: '6' },
  { text: 'Text7777 is very very very very long', id: '7' },
  { text: 'Text888', id: '8', disabled: true },
  { text: 'Text99', id: '9' },
];

const PropsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 450px;
  overflow: hidden;
  align-items: center;
`;
const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const VerticalTabMenuWithOverflowTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  //<editor-fold desc="Параметры">
  const [dimension, setDimension] = useState<TabDimension>('l');
  const [showUnderline, setShowUnderline] = useState<boolean>(true);
  const [underlinePosition, setUnderlinePosition] = useState<VerticalUnderlinePosition>('right');
  //</editor-fold>

  const containerRef = useRef<HTMLDivElement>(null);
  const [maxTabs, setMaxTabs] = useState(0);
  useEffect(() => {
    if (containerRef.current) {
      setMaxTabs(
        Math.floor(
          (containerRef.current.clientHeight + VERTICAL_TABS_GAP) /
            ((dimension === 'l' ? BASE_TAB_HEIGHT_L : BASE_TAB_HEIGHT_M) + VERTICAL_TABS_GAP),
        ),
      );
    }
  }, [containerRef, dimension]);

  //<editor-fold desc="Создание табов для отрисовки">
  const [activeTabL, setActiveTabL] = useState<string | undefined>('3');
  const handleTabLClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setActiveTabL(e.currentTarget.id);
  };
  const renderVisibleTab = (text: string, id: string, disabled?: boolean) => {
    return (
      <CustomVerticalTab
        dimension={dimension}
        text={text}
        id={id}
        key={id}
        selected={id === activeTabL}
        disabled={disabled}
        width={TAB_MENU_WIDTH}
        onClick={handleTabLClick}
      />
    );
  };

  const [visibleTabs, setVisibleTabs] = useState<string[]>([]);
  const [hiddenTabs, setHiddenTabs] = useState<string[]>([]);
  useEffect(() => {
    const allTabsVisible = tabs.length <= maxTabs;
    const tabsVisible: string[] = [];
    const tabsHidden: string[] = [];
    const addToVisible = (id: string) => tabsVisible.push(id);
    const addToHidden = (id: string) => tabsHidden.push(id);

    let activeTabIsVisible = false;
    tabs.forEach((tab, index) => {
      const tabIsActive = tab.id === activeTabL;
      if (
        allTabsVisible ||
        index < maxTabs - 2 ||
        (index === maxTabs - 2 && (activeTabIsVisible || tabIsActive)) ||
        (index > maxTabs - 2 && tab.id === activeTabL)
      ) {
        addToVisible(tab.id);
        if (tabIsActive) activeTabIsVisible = true;
      }
      if (!allTabsVisible && (index > maxTabs - 2 || (index === maxTabs - 2 && !activeTabIsVisible && !tabIsActive))) {
        addToHidden(tab.id);
      }
    });
    setVisibleTabs(tabsVisible);
    setHiddenTabs(tabsHidden);
  }, [maxTabs, activeTabL]);
  const visibleTabsItems = useMemo(() => {
    if (visibleTabs.length === 0) return [];
    return visibleTabs.map((id) => {
      const currentTab = tabs.findIndex((tab) => tab.id === id);
      return renderVisibleTab(tabs[currentTab].text, id, tabs[currentTab].disabled);
    });
  }, [visibleTabs, dimension]);
  const overflowMenuItems: MenuModelItemProps[] = useMemo(() => {
    if (hiddenTabs.length === 0) return [];
    return hiddenTabs.map((id) => {
      const currentTab = tabs.findIndex((tab) => tab.id === id);
      return {
        id: id,
        render: (options: RenderOptionProps) => (
          <MenuItem dimension={dimension} {...options} key={id}>
            <MenuItemWrapper>{tabs[currentTab].text}</MenuItemWrapper>
          </MenuItem>
        ),
        disabled: tabs[currentTab].disabled,
      };
    });
  }, [hiddenTabs, dimension]);
  //</editor-fold>

  //<editor-fold desc="Параметры для корректной отрисовки TabActiveUnderline">
  const [underlineTopL, setUnderlineTopL] = useState(0);
  const [underlineHeightL, setUnderlineHeightL] = useState(0);
  const [underlineTransitionL, setUnderlineTransitionL] = useState(false);
  const getUnderlinePosition = () => {
    const index = visibleTabs.findIndex((tab) => tab === activeTabL);
    if (index < 0) return { top: 0, height: 0 };
    const height = dimension === 'l' ? BASE_TAB_HEIGHT_L : BASE_TAB_HEIGHT_M;
    const top = index * (height + VERTICAL_TABS_GAP);
    return { top: top, height: height };
  };
  const styleUnderlineL = (enableTransition: boolean) => {
    const { top, height } = getUnderlinePosition();
    setUnderlineTransitionL(enableTransition);
    setUnderlineHeightL(height);
    setUnderlineTopL(top);
  };
  useEffect(() => {
    styleUnderlineL(true);
  }, [activeTabL, visibleTabsItems]);
  //</editor-fold>

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <PropsWrapper>
          <FieldSet
            onChange={(e) => {
              setDimension((e.target as HTMLInputElement).value === 'l' ? 'l' : 'm');
            }}
            legend="Dimension"
            dimension="s"
          >
            <RadioButton value="m" name="M" checked={dimension === 'm'} onChange={() => undefined}>
              M
            </RadioButton>
            <RadioButton value="l" name="L" checked={dimension === 'l'} onChange={() => undefined}>
              L
            </RadioButton>
          </FieldSet>
          <FieldSet
            onChange={(e) => {
              setShowUnderline((e.target as HTMLInputElement).value === 'true');
            }}
            legend="Show underline"
            dimension="s"
          >
            <RadioButton value="true" checked={showUnderline} onChange={() => undefined}>
              true
            </RadioButton>
            <RadioButton value="false" checked={!showUnderline} onChange={() => undefined}>
              false
            </RadioButton>
          </FieldSet>
          <FieldSet
            onChange={(e) => {
              setUnderlinePosition((e.target as HTMLInputElement).value === 'left' ? 'left' : 'right');
            }}
            legend="Underline position"
            dimension="s"
          >
            <RadioButton value="right" checked={underlinePosition === 'right'} onChange={() => undefined}>
              Right
            </RadioButton>
            <RadioButton value="left" checked={underlinePosition === 'left'} onChange={() => undefined}>
              Left
            </RadioButton>
          </FieldSet>
        </PropsWrapper>
        <Divider />
        <VerticalTabMenuContainer
          ref={containerRef}
          $underlinePosition={underlinePosition}
          $showUnderline={showUnderline}
        >
          {visibleTabsItems}
          {hiddenTabs.length > 0 && (
            <VerticalTabOverflowMenu
              items={overflowMenuItems}
              alignSelf="flex-start"
              onSelectItem={(id) => setActiveTabL(id)}
              selected={activeTabL}
              dimension={dimension}
            />
          )}
          <ActiveVerticalTabUnderline
            $top={`${underlineTopL}px`}
            $height={`${underlineHeightL}px`}
            $transition={underlineTransitionL}
            $underlinePosition={underlinePosition}
          />
        </VerticalTabMenuContainer>
      </Wrapper>
    </ThemeProvider>
  );
};
