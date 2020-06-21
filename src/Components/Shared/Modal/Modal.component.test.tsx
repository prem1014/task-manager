import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AppModal from './Modal.component';

describe('AppModal component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;
    const modalProps = {
        title: 'remove',
        children: 'children',
        close: jest.fn()
    }

    beforeEach( () => {
        componentWrapper = shallow(<AppModal {...modalProps}/>);
    });

    it('AppModal component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});