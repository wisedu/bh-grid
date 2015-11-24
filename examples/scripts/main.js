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

import React from 'react';
var ReactDOM = require('react-dom');
var Pagination = require('../../src/bh-pagination');
import Table from '../../src/bh-table';

ReactDOM.render(
    <Pagination></Pagination>, 
    document.getElementById('paging-wrapper')
);

ReactDOM.render(
    <Table></Table>, 
    document.getElementById('tab_lv2_1')
);
