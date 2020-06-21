import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './NavBar.component';

describe('Navbar component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;

    beforeEach( () => {
        componentWrapper = shallow(<NavBar />);
    });

    it('Navbar component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});