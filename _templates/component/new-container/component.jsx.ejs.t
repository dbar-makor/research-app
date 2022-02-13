---
to: src/components/pages/<%= h.changeCase.pascalCase(pageName.toLowerCase()) %>/containers/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>.jsx
---
<% name = containerName.toLowerCase() %>import React from 'react';

import <%= h.changeCase.pascalCase(name) %>View from './<%= h.changeCase.pascalCase(name) %>.view';

const <%= h.changeCase.pascalCase(name) %> = (props) => {
  return <<%= h.changeCase.pascalCase(name) %>View>{props.children}</<%= h.changeCase.pascalCase(name) %>View>;
};

<%= h.changeCase.pascalCase(name) %>.displayName = '<%= h.changeCase.pascalCase(name) %>';
<%= h.changeCase.pascalCase(name) %>.defaultProps = {};

export default React.memo(<%= h.changeCase.pascalCase(name) %>);
