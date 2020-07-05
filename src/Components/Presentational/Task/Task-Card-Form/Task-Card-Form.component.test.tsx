import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TaskCardForm from './Task-Card-Form.component';

describe('TaskCardForm component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;
    const taskCardFormProps = {
        taskCardCreated: jest.fn(),
        taskCardUpdated: jest.fn()
    }

    beforeEach( () => {
        componentWrapper = shallow(<TaskCardForm {...taskCardFormProps}/>);
    });

    it('TaskCardForm component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});