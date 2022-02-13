import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './Login';

configure({ adapter: new Adapter() });

describe('<Login>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Login></Login>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
