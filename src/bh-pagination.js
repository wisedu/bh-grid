import React from 'react';

var Pagination = React.createClass({
    render: function(){
        return (
            <div className="clearfix b-content-paging" >
                    <ul className="bh-pagination bh-pull-left">
                        <li className="bh-disabled">
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li className="bh-active"><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                    <div className="bh-pagination-skip bh-pull-left">
                        <span className="bh-pull-left bh-mv-2">跳转至</span>
                        <input type="text" className="bh-form-control bh-pull-left" /><span className="bh-pull-left bh-mv-2">页</span>
                        <a className="bh-btn bh-btn-default bh-btn-xs">GO</a>
                    </div>
                    <div className="bh-pagination-total bh-pull-right">
                        共9页，88条记录，每页显示
                        <select className="bh-form-control">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>条
                    </div>
                    <div className="bh-clearfix"></div>
                </div>
            );
    }
});

module.exports = Pagination;
