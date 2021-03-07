import React from "react";
import {Router} from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import {createMemoryHistory} from 'history'

import { BooksPagination, BookPaginationClassWithRouter } from './BooksPagination';

test('BooksPagination should update page url on click', () => {
  const history = createMemoryHistory()
  const pushSpy = jest.spyOn(history, 'push')
  render(
      <Router history={history}>
        <BooksPagination pages={5} page={2}/>
      </Router>
  )
  fireEvent.click(screen.getByText('1'))
  expect(pushSpy).toHaveBeenCalledWith("/1")
});

test('BookPaginationClassWithRouter should update page url on click', () => {
  const history = createMemoryHistory()
  const pushSpy = jest.spyOn(history, 'push')
  render(
      <Router history={history}>
        <BookPaginationClassWithRouter pages={5} page={2}/>
      </Router>
  )
  fireEvent.click(screen.getByText('1'))
  expect(pushSpy).toHaveBeenCalledWith("/1")
});
