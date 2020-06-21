import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Task from './Task.component';

describe('Task component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;

    beforeEach( () => {
        componentWrapper = shallow(<Task />);
    });

    it('Task component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});