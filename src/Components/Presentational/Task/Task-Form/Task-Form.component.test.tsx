import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TaskForm from './Task-Form.component';

describe('TaskForm component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;
    const taskFormProps = {
        taskListNameCreated: jest.fn()
    }

    beforeEach( () => {
        componentWrapper = shallow(<TaskForm {...taskFormProps}/>);
    });

    it('TaskForm component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});