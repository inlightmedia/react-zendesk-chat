import React from 'react';
import { shallow } from 'enzyme';
import ReactZenDeskChat from 'index';

describe('ReactZenDeskChat should render', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ReactZenDeskChat appID="YOUR_APP_ID_HERE" />);
    expect(wrapper).toHaveLength(1);
  });
});
