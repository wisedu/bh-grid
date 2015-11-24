$("table").on("click","input[type=checkbox]", function(){
    var $item = $(this);
    if($item.hasClass("allCheckboxFlag")){
        if ($item.attr('data-select')=='ture') {
            $("table").find("input[name='oper']").removeAttr("checked");
            $item.attr('data-select','false');
        }else{
            $("table").find("input[name='oper']").attr("checked", 'checked');
            $item.attr('data-select','ture');
        }
    }else if ($item.attr('checked')) {
        $item.removeAttr("checked");
        $('.allCheckboxFlag').attr('data-select','false').removeAttr("checked");
    }       
});

import React from 'react';//es6 模块引入方式
var ReactDOM = require('react-dom');//或者使用webpack提供的 commonJS模块引入方式
import Pagination from '../../src/bh-pagination';
import Table from '../../src/bh-table';

ReactDOM.render(
    <Pagination></Pagination>, 
    document.getElementById('paging-wrapper')
);

ReactDOM.render(
    <Table></Table>, 
    document.getElementById('tab_lv2_1')
);


