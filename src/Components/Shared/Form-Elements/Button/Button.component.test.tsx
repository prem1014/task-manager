import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button.component';

describe('Button component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;
    const inputProps = {
        children: 'Save',
        clicked: jest.fn(),
        type: 'button'
    }

    beforeEach( () => {
        componentWrapper = shallow(<Button {...inputProps}/>);
    });

    it('Button component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});