import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input.component';

describe('Input component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;
    const inputProps = {
        type: 'text',
        changed: jest.fn(),
        value: 'name'
    }

    beforeEach( () => {
        componentWrapper = shallow(<Input {...inputProps}/>);
    });

    it('Input component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});