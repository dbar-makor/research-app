import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';

configure({ adapter: new Adapter() });

describe('<Home>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Home></Home>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
