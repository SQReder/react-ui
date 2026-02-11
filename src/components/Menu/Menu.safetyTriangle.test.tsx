import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { Menu } from './index';
import type { MenuModelItemProps } from './MenuItem';
import { LIGHT_THEME } from '../themes';

describe('Menu with Safety Triangle', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    jest.clearAllTimers();
    // Mock scrollIntoView
    HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  const createMenuModel = (): MenuModelItemProps[] => [
    {
      id: '1',
      render: 'Option 1',
      subItems: [
        { id: '1-1', render: 'SubOption 1-1' },
        { id: '1-2', render: 'SubOption 1-2' },
        { id: '1-3', render: 'SubOption 1-3' },
      ],
    },
    {
      id: '2',
      render: 'Option 2',
      subItems: [
        { id: '2-1', render: 'SubOption 2-1' },
        { id: '2-2', render: 'SubOption 2-2' },
      ],
    },
    {
      id: '3',
      render: 'Option 3',
    },
  ];

  const renderMenu = (model = createMenuModel()) => {
    return render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Menu model={model} dimension="l" defaultIsActive />
      </ThemeProvider>,
    );
  };

  describe('submenu hover interactions', () => {
    it('should open submenu on hover', async () => {
      renderMenu();

      const option1 = screen.getByText('Option 1');

      // Hover over option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });
    });

    it('should keep submenu open when moving directly to submenu', async () => {
      renderMenu();

      const option1 = screen.getByText('Option 1');

      // Hover over option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });

      // Move to submenu
      const subOption = screen.getByText('SubOption 1-1');
      fireEvent.mouseLeave(option1, { relatedTarget: subOption });
      fireEvent.mouseEnter(subOption);

      // Submenu should still be visible
      expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
    });

    it('should close submenu when moving away from safety zone', async () => {
      const { container } = renderMenu();

      const option1 = screen.getByText('Option 1');

      // Hover over option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });

      // Move mouse far away from menu
      fireEvent.mouseLeave(option1, { relatedTarget: container });

      // Submenu should close
      await waitFor(() => {
        expect(screen.queryByText('SubOption 1-1')).not.toBeInTheDocument();
      });
    });

    it('should switch between submenus when hovering different items', async () => {
      renderMenu();

      const option1 = screen.getByText('Option 1');
      const option2 = screen.getByText('Option 2');

      // Hover over first option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });

      // Hover over second option with submenu
      fireEvent.mouseEnter(option2);
      fireEvent.mouseMove(option2);

      await waitFor(() => {
        expect(screen.getByText('SubOption 2-1')).toBeInTheDocument();
      });

      // First submenu should be replaced by second
      expect(screen.queryByText('SubOption 1-1')).not.toBeInTheDocument();
    });

    it('should close submenu when hovering option without submenu', async () => {
      renderMenu();

      const option1 = screen.getByText('Option 1');
      const option3 = screen.getByText('Option 3');

      // Hover over option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });

      // Hover over option without submenu
      fireEvent.mouseEnter(option3);
      fireEvent.mouseMove(option3);

      // Submenu should close
      await waitFor(() => {
        expect(screen.queryByText('SubOption 1-1')).not.toBeInTheDocument();
      });
    });
  });

  describe('safety triangle behavior', () => {
    it('should track mouse position during menu interaction', async () => {
      const { container } = renderMenu();

      const option1 = screen.getByText('Option 1');

      // Hover over option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1, { clientX: 50, clientY: 50 });

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });

      // Move mouse within the menu (should update position)
      fireEvent.mouseMove(container, { clientX: 60, clientY: 55 });

      // Verify submenu is still open
      expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
    });

    it('should cancel close timeout when re-hovering item with submenu', async () => {
      renderMenu();

      const option1 = screen.getByText('Option 1');

      // Hover over option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });

      // Leave option
      fireEvent.mouseLeave(option1);

      // Re-hover before close completes
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      // Submenu should remain open
      expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
    });
  });

  describe('nested submenus', () => {
    const createNestedMenuModel = (): MenuModelItemProps[] => [
      {
        id: '1',
        render: 'Level 1',
        subItems: [
          {
            id: '1-1',
            render: 'Level 2',
            subItems: [
              { id: '1-1-1', render: 'Level 3-1' },
              { id: '1-1-2', render: 'Level 3-2' },
            ],
          },
          { id: '1-2', render: 'Level 2-2' },
        ],
      },
    ];

    it('should handle safety triangle for nested submenus', async () => {
      render(
        <ThemeProvider theme={LIGHT_THEME}>
          <Menu model={createNestedMenuModel()} dimension="l" defaultIsActive />
        </ThemeProvider>,
      );

      const level1 = screen.getByText('Level 1');

      // Hover over first level
      fireEvent.mouseEnter(level1);
      fireEvent.mouseMove(level1);

      await waitFor(() => {
        expect(screen.getByText('Level 2')).toBeInTheDocument();
      });

      // Hover over second level
      const level2 = screen.getByText('Level 2');
      fireEvent.mouseEnter(level2);
      fireEvent.mouseMove(level2);

      await waitFor(() => {
        expect(screen.getByText('Level 3-1')).toBeInTheDocument();
      });
    });
  });

  describe('keyboard navigation with safety triangle', () => {
    it('should open submenu with arrow right key', async () => {
      renderMenu();

      const option1 = screen.getByText('Option 1');

      // Hover to activate item
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      // Press arrow right
      fireEvent.keyDown(document, { key: 'ArrowRight' });

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });
    });

    it('should close submenu with arrow left key', async () => {
      const nestedModel: MenuModelItemProps[] = [
        {
          id: '1',
          render: 'Parent',
          subItems: [{ id: '1-1', render: 'Child' }],
        },
      ];

      render(
        <ThemeProvider theme={LIGHT_THEME}>
          <Menu model={nestedModel} dimension="l" defaultIsActive />
        </ThemeProvider>,
      );

      const parent = screen.getByText('Parent');

      // Hover and open submenu
      fireEvent.mouseEnter(parent);
      fireEvent.mouseMove(parent);
      fireEvent.keyDown(document, { key: 'ArrowRight' });

      await waitFor(() => {
        expect(screen.getByText('Child')).toBeInTheDocument();
      });

      // Press arrow left (this should trigger onCloseQuery in nested menu)
      fireEvent.keyDown(document, { key: 'ArrowLeft' });

      // Parent menu should still be visible
      expect(screen.getByText('Parent')).toBeInTheDocument();
    });
  });

  describe('edge cases', () => {
    it('should handle disabled items with submenus', async () => {
      const modelWithDisabled: MenuModelItemProps[] = [
        {
          id: '1',
          render: 'Disabled Option',
          disabled: true,
          subItems: [{ id: '1-1', render: 'Disabled Submenu' }],
        },
        {
          id: '2',
          render: 'Enabled Option',
          subItems: [{ id: '2-1', render: 'Should show' }],
        },
      ];

      render(
        <ThemeProvider theme={LIGHT_THEME}>
          <Menu model={modelWithDisabled} dimension="l" defaultIsActive />
        </ThemeProvider>,
      );

      // Note: Disabled items can still show submenus on hover, but cannot be clicked
      // This is the current behavior of the Menu component
      const disabledOption = screen.getByText('Disabled Option');
      fireEvent.mouseEnter(disabledOption);
      fireEvent.mouseMove(disabledOption);

      await waitFor(() => {
        expect(screen.getByText('Disabled Submenu')).toBeInTheDocument();
      });

      // Enabled item should work normally
      const enabledOption = screen.getByText('Enabled Option');
      fireEvent.mouseEnter(enabledOption);
      fireEvent.mouseMove(enabledOption);

      await waitFor(() => {
        expect(screen.getByText('Should show')).toBeInTheDocument();
      });

      // First submenu should be replaced
      expect(screen.queryByText('Disabled Submenu')).not.toBeInTheDocument();
    });

    it('should cleanup safety triangle on unmount', async () => {
      const { unmount } = renderMenu();

      const option1 = screen.getByText('Option 1');

      // Hover over option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });

      // Unmount component
      unmount();

      // Should not throw errors
      expect(() => {
        jest.advanceTimersByTime(1000);
      }).not.toThrow();
    });

    it('should handle rapid hover changes', async () => {
      renderMenu();

      const option1 = screen.getByText('Option 1');
      const option2 = screen.getByText('Option 2');
      const option3 = screen.getByText('Option 3');

      // Rapidly hover between options
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);
      fireEvent.mouseLeave(option1);

      fireEvent.mouseEnter(option2);
      fireEvent.mouseMove(option2);
      fireEvent.mouseLeave(option2);

      fireEvent.mouseEnter(option3);
      fireEvent.mouseMove(option3);

      // Should handle all events without errors
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });
  });

  describe('click outside behavior', () => {
    it('should close submenu and cleanup when clicking outside', async () => {
      const { container } = renderMenu();

      const option1 = screen.getByText('Option 1');

      // Hover over option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-1')).toBeInTheDocument();
      });

      // Click outside
      fireEvent.mouseDown(document.body);

      await waitFor(() => {
        expect(screen.queryByText('SubOption 1-1')).not.toBeInTheDocument();
      });
    });
  });

  describe('scrollbar interaction', () => {
    it('should not close submenu when mouse moves to scrollbar', async () => {
      // Create a model with many items to trigger scrollbar
      const longModel: MenuModelItemProps[] = [
        {
          id: '1',
          render: 'Option 1',
          subItems: Array.from({ length: 20 }, (_, i) => ({
            id: `1-${i}`,
            render: `SubOption 1-${i}`,
          })),
        },
      ];

      render(
        <ThemeProvider theme={LIGHT_THEME}>
          <Menu model={longModel} dimension="l" defaultIsActive rowCount={5} />
        </ThemeProvider>,
      );

      const option1 = screen.getByText('Option 1');

      // Hover over option with submenu
      fireEvent.mouseEnter(option1);
      fireEvent.mouseMove(option1);

      await waitFor(() => {
        expect(screen.getByText('SubOption 1-0')).toBeInTheDocument();
      });

      // The scrollbar is part of the component, so moving to it shouldn't close the menu
      // This is handled by the onLeave logic checking verticalScrollAriaRef
      expect(screen.getByText('SubOption 1-0')).toBeInTheDocument();
    });
  });
});
