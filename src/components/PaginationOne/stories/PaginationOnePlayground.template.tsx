import * as React from 'react';
import { PaginationOne } from '@admiral-ds/react-ui';
import type { PaginationOneProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const PaginationOnePlaygroundTemplate = ({
  themeBorderKind,
  ...props
}: PaginationOneProps & { themeBorderKind?: BorderRadiusType }) => {
  const [pageSize, setPageSize] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = props.totalItems || 100;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <PaginationOne
        {...props}
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        page={page}
        pageSize={pageSize}
        totalItems={totalElements}
        pageSizes={pageSizes}
        data-dropdown-container-id="pagination-with-dropdown"
        data-dropdown-container-test-id="pagination-test-id-with-dropdown"
        className="pagination-class-name"
        pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
        pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
      />
    </ThemeProvider>
  );
};
