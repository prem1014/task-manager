import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RemoveIcon from './Remove-Icon.component';

describe('RemoveIcon component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;
    const removeProps = {
        title: 'remove',
        remove: jest.fn()
    }

    beforeEach( () => {
        componentWrapper = shallow(<RemoveIcon {...removeProps}/>);
    });

    it('RemoveIcon component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});