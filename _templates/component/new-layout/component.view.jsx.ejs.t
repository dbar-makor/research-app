---
to: src/components/layout/<%= h.changeCase.pascalCase(name.toLowerCase()) %>/<%= h.changeCase.pascalCase(name.toLowerCase()) %>.view.jsx
---
<% name = name.toLowerCase() %>import React from 'react';

import classes from './<%= h.changeCase.pascalCase(name) %>.module.scss';

const <%= h.changeCase.pascalCase(name) %>View = (props) => {

  return <></>;
};

<%= h.changeCase.pascalCase(name) %>View.displayName = '<%= h.changeCase.pascalCase(name) %>View';
<%= h.changeCase.pascalCase(name) %>View.defaultProps = {};

export default React.memo(<%= h.changeCase.pascalCase(name) %>View);
