import * as React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import App from '../../pages';


describe('testes da tela inicial', () => {
  test('renderiza a tela inicial', async () => {
    await act(() => {
      const index = mount(<App />);
      expect(index).toBeDefined();
    })

  });
});
