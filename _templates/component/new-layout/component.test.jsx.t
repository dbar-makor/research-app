---
to: src/components/layout/<%= h.changeCase.pascalCase(name.toLowerCase()) %>/<%= h.changeCase.pascalCase(name.toLowerCase()) %>.test.jsx
---
<% name = name.toLowerCase() %>import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>';

configure({ adapter: new Adapter() });

describe('<<%= h.changeCase.pascalCase(name) %>>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<<%= h.changeCase.pascalCase(name) %>></<%= h.changeCase.pascalCase(name) %>>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
