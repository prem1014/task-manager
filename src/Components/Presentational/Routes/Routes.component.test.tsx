import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AppRoutes from './Routes.component';

describe('AppRoutes component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;

    beforeEach( () => {
        componentWrapper = shallow(<AppRoutes />);
    });

    it('AppRoutes component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});