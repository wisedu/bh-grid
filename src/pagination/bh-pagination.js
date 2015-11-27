import React from 'react';
import Pagination from 'rc-pagination';
import Select from 'rc-select';
require('rc-select/assets/index.css');
require('./bh-pagination.scss');

const prefixCls = 'bhr-pagination';
export default React.createClass({
  render: function() {
    let className = this.props.className;
    if (this.props.size === 'small') {
      className += ' mini';
    }
    return <Pagination selectComponentClass={Select} 
        {...this.props} prefixCls={prefixCls} className={className}/>;
  }
});
