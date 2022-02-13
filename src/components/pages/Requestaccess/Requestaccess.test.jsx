import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Requestaccess from './Requestaccess';

configure({ adapter: new Adapter() });

describe('<Requestaccess>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Requestaccess></Requestaccess>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
