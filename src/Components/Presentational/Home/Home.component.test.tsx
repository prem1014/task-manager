import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home.component';

describe('Home component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;

    beforeEach( () => {
        componentWrapper = shallow(<Home />);
    });

    it('home component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});