import React from 'react';
import renderer from 'react-test-renderer';
import Sent from './App';

describe('Тестирование рендринга', () => {
  test('renders correctly', () => {
    const renderedApp = renderer.create(<Sent />);
    expect(renderedApp.toJSON()).toMatchSnapshot();
  });
});
