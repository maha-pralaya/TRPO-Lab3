import React from 'react';
import Sent from './App';
import renderer from 'react-test-renderer';

describe('Тестирование рендринга', () => {
    test('renders correctly', () => {
    const renderedApp = renderer.create(<Sent />);
    expect(renderedApp.toJSON()).toMatchSnapshot();
    });
});