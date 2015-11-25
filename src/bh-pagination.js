import React from 'react';
import Pagination from 'rc-pagination';
import Select from 'rc-select';
require('rc-pagination/assets/index.css');
require('rc-select/assets/index.css')

export default class BHPagination extends React.Component {
  render() {
    return <Pagination selectComponentClass={Select} {...this.props} />;
  }
}
