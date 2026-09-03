import 'foremanJSTestSetup';

jest.mock('foremanReact/redux/API/APISelectors', () =>
  jest.requireActual('foremanReact/redux/API/APISelectors')
);
