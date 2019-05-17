import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import countriesList from '../../../demo/data/countries';
import Button from '../button';
import MultiActionButton from '../multi-action-button';
import TextArea from '../../__experimental__/components/textarea';
import {
  Table, TableCell, TableHeader, TableRow
} from '.';
import TextBox from '../../__experimental__/components/textbox';
import NumberInput from '../../__experimental__/components/number';
import Decimal from '../../__experimental__/components/decimal';
import DateInput from '../../__experimental__/components/date';
import { Select } from '../../__experimental__/components/select';
import classic from '../../style/themes/classic';
import OptionsHelper from '../../utils/helpers/options-helper';
import { notes, info } from './documentation';

const store = new Store({
  sortOrder: 'asc',
  sortedColumn: '',
  currentPage: '1',
  children: undefined
});

const handleChange = (e, tableOptions) => {
  const { sortOrder, sortedColumn, currentPage } = tableOptions;

  store.set({ sortOrder, sortedColumn, currentPage });
  action('change')(e, tableOptions);
};

const buildRows = (pageSizeFromKnobs) => {
  const pageSize = pageSizeFromKnobs;
  const currentPage = store.get('currentPage');

  const endIndex = pageSize * currentPage;
  const startIndex = endIndex - pageSize;
  const rowsCountries = countriesList.slice(startIndex, endIndex).toJS();

  if (store.get('sortOrder') === 'desc') {
    rowsCountries.reverse();
  }

  return (
    <>
      <TableRow
        key='header'
        as='header'
      >
        <TableHeader
          sortable
          name='name'
          scope='col'
        >
        Country
        </TableHeader>
        <TableHeader scope='col'>Code</TableHeader>
      </TableRow>
      {rowsCountries.map(row => (
        <TableRow
          key={ row.id }
          uniqueID={ row.id }
        >
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.value}</TableCell>
        </TableRow>
      ))}
  </>
  );
};

const pickInput = (name, props) => {
  switch (name) {
    case 'TextArea':
      return <TextArea { ...props } />;
    case 'DateInput':
      return <DateInput />;
    case 'NumberInput':
      return <NumberInput { ...props } />;
    case 'Decimal':
      return <Decimal { ...props } />;
    case 'Select':
      return <Select { ...props } />;
    default:
      return <TextBox { ...props } />;
  }
};
const buildRowsWithInputs = (pageSizeFromKnobs, input) => {
  const pageSize = pageSizeFromKnobs;
  const currentPage = store.get('currentPage');

  const endIndex = pageSize * currentPage;
  const startIndex = endIndex - pageSize;
  const rowsCountries = countriesList.slice(startIndex, endIndex).toJS();

  if (store.get('sortOrder') === 'desc') {
    rowsCountries.reverse();
  }

  return (
    <>
      <TableRow
        key='header'
        as='header'
      >
        <TableHeader
          sortable
          name='name'
          scope='col'
        >
        Country
        </TableHeader>
        <TableHeader scope='col'>Code</TableHeader>
      </TableRow>
      {rowsCountries.map((row) => {
        return (
          <TableRow
            key={ row.id }
            uniqueID={ row.id }
          >
            <TableCell>{pickInput(input, { value: row.name })}</TableCell>
            <TableCell>{row.value}</TableCell>
          </TableRow>
        );
      })}
  </>
  );
};

storiesOf('Table', module)
  .addParameters({
    info: {
      propTablesExclude: [State]
    }
  })
  .add('classic', () => {
    const pageSize = text('pageSize', '5');
    const selectable = boolean('selectable', false);
    const highlightable = boolean('highlightable', false);
    const shrink = boolean('shrink', false);
    const caption = text('Caption', 'Country and Country Codes');
    const totalRecords = text('totalRecords', '50');
    const paginate = boolean('paginate', false);
    const showPageSizeSelection = paginate && boolean('showPageSizeSelection', false);
    const theme = select(
      'theme',
      [
        OptionsHelper.tableThemes[0],
        OptionsHelper.tableThemes[1],
        OptionsHelper.tableThemes[2]
      ],
      Table.defaultProps.theme
    );

    return (
      <ThemeProvider theme={ classic }>
        <State store={ store } parseState={ state => ({ ...state, children: buildRows(pageSize) }) }>

          <Table
            actionToolbarChildren={ (context) => {
              return [
                <Button disabled={ context.disabled } key='single-action'>
                    Test Action
                </Button>,
                <MultiActionButton
                  text='Actions' disabled={ context.disabled }
                  key='multi-actions'
                >
                  <Button>foo</Button>
                  <Button>bar</Button>
                  <Button>qux</Button>
                </MultiActionButton>
              ];
            } }
            path='/countries'
            caption={ caption }
            shrink={ shrink }
            highlightable={ highlightable }
            pageSize={ pageSize }
            selectable={ selectable }
            paginate={ paginate }
            actions={ { delete: { icon: 'bin' }, settings: { icon: 'settings' } } }
            totalRecords={ totalRecords }
            showPageSizeSelection={ showPageSizeSelection }
            onChange={ handleChange }
            theme={ theme }
          />

        </State>
      </ThemeProvider>
    );
  }, {
    info: { text: info },
    notes: { markdown: notes }
  })
  .add(
    'default',
    () => {
      const pageSize = text('pageSize', '5');
      const selectable = boolean('selectable', false);
      const highlightable = boolean('highlightable', false);
      const shrink = boolean('shrink', false);
      const caption = text('Caption', 'Country and Country Codes');
      const totalRecords = text('totalRecords', '50');
      const paginate = boolean('paginate', false);
      const showPageSizeSelection = paginate && boolean('showPageSizeSelection', false);
      const theme = select('theme', OptionsHelper.tableThemes, Table.defaultProps.theme);
      const size = select('size', OptionsHelper.tableSizes, Table.defaultProps.size);
      const isZebra = boolean('zebra striping', false);

      return (
        <State store={ store } parseState={ state => ({ ...state, children: buildRows(pageSize) }) }>

          <Table
            actionToolbarChildren={ (context) => {
              return [
                <Button disabled={ context.disabled } key='single-action'>
                    Test Action
                </Button>,
                <MultiActionButton
                  text='Actions' disabled={ context.disabled }
                  key='multi-actions'
                >
                  <Button>foo</Button>
                  <Button>bar</Button>
                  <Button>qux</Button>
                </MultiActionButton>
              ];
            } }
            path='/countries'
            caption={ caption }
            shrink={ shrink }
            highlightable={ highlightable }
            pageSize={ pageSize }
            selectable={ selectable }
            paginate={ paginate }
            actions={ { delete: { icon: 'bin' }, settings: { icon: 'settings' } } }
            totalRecords={ totalRecords }
            showPageSizeSelection={ showPageSizeSelection }
            onChange={ handleChange }
            theme={ theme }
            size={ size }
            isZebra={ isZebra }
          />

        </State>
      );
    },
    {
      info: { text: info },
      notes: { markdown: notes }
    },
  )
  .add(
    'with inputs',
    () => {
      const pageSize = text('pageSize', '5');
      const selectable = boolean('selectable', false);
      const highlightable = boolean('highlightable', false);
      const shrink = boolean('shrink', false);
      const caption = text('Caption', 'Country and Country Codes');
      const totalRecords = text('totalRecords', '50');
      const paginate = boolean('paginate', false);
      const showPageSizeSelection = paginate && boolean('showPageSizeSelection', false);
      const theme = select('theme', OptionsHelper.tableThemes, Table.defaultProps.theme);
      const size = select('size', OptionsHelper.tableSizes, Table.defaultProps.size);
      const isZebra = boolean('zebra striping', false);
      const inputType = select(
        'input type',
        [
          'TextBox', 'TextArea', 'DateInput', 'NumberInput', 'Decimal', 'Select'
        ],
        'TextBox'
      );

      return (
        <State
          store={ store }
          parseState={ state => ({ ...state, children: buildRowsWithInputs(pageSize, inputType) }) }
        >

          <Table
            actionToolbarChildren={ (context) => {
              return [
                <Button disabled={ context.disabled } key='single-action'>
                    Test Action
                </Button>,
                <MultiActionButton
                  text='Actions' disabled={ context.disabled }
                  key='multi-actions'
                >
                  <Button>foo</Button>
                  <Button>bar</Button>
                  <Button>qux</Button>
                </MultiActionButton>
              ];
            } }
            path='/countries'
            caption={ caption }
            shrink={ shrink }
            highlightable={ highlightable }
            pageSize={ pageSize }
            selectable={ selectable }
            paginate={ paginate }
            actions={ { delete: { icon: 'bin' }, settings: { icon: 'settings' } } }
            totalRecords={ totalRecords }
            showPageSizeSelection={ showPageSizeSelection }
            onChange={ handleChange }
            theme={ theme }
            size={ size }
            isZebra={ isZebra }
          />

        </State>
      );
    },
    {
      info: { text: info },
      notes: { markdown: notes }
    },
  );
