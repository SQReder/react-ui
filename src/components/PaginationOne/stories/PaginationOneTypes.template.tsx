import * as React from 'react';
import { PaginationOne, Field } from '@admiral-ds/react-ui';
import type { PaginationOneProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div`
  width: 100%;
  height: 40px;
`;

export const PaginationOneTypesTemplate = (props: PaginationOneProps & { themeBorderKind?: BorderRadiusType }) => {
  const [pageSize1, setPageSize1] = React.useState(8);
  const [page1, setPage1] = React.useState(1);
  const [pageSize2, setPageSize2] = React.useState(8);
  const [page2, setPage2] = React.useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(props.themeBorderKind)}>
      <Field label="Pagination One Complex">
        <PaginationOne
          onChange={({ page, pageSize }) => {
            setPage1(page);
            setPageSize1(pageSize);
          }}
          page={page1}
          pageSize={pageSize1}
          totalItems={totalElements}
          pageSizes={pageSizes}
          pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
          pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
        />
      </Field>
      <Separator />
      <Field label="Pagination One Complex. Minimal size">
        <PaginationOne
          style={{ width: 'fit-content' }}
          onChange={({ page, pageSize }) => {
            setPage1(page);
            setPageSize1(pageSize);
          }}
          page={page1}
          pageSize={pageSize1}
          totalItems={totalElements}
          pageSizes={pageSizes}
          pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
          pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
        />
      </Field>
      <Separator />
      <Field label="Pagination One Simple">
        <PaginationOne
          onChange={({ page, pageSize }) => {
            setPage2(page);
            setPageSize2(pageSize);
          }}
          page={page2}
          pageSize={pageSize2}
          totalItems={totalElements}
          pageSizes={pageSizes}
          simple
        />
      </Field>
      <Separator />
      <Field label="Pagination One Simple. Minimal size">
        <PaginationOne
          style={{ width: 'fit-content' }}
          onChange={({ page, pageSize }) => {
            setPage2(page);
            setPageSize2(pageSize);
          }}
          page={page2}
          pageSize={pageSize2}
          totalItems={totalElements}
          pageSizes={pageSizes}
          simple
        />
      </Field>
    </ThemeProvider>
  );
};
