import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TaskList from './TaskList.component';

describe('TaskList component test suite', () => {
    Enzyme.configure({ adapter: new Adapter() });
    let componentWrapper: any;
    const taskListProps = {
        taskListId: 123,
        name: 'To do',
        taskCard: 1245,
        taskCardCreated: jest.fn(),
        onTaskCardDropped: jest.fn(),
        removeTask: jest.fn(),
        removeTaskCard: jest.fn()
    }

    beforeEach( () => {
        componentWrapper = shallow(<TaskList {...taskListProps}/>);
    });

    it('TaskList component snapshot test', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});