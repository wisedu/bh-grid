import React from 'react';
import Table from 'rc-table';
import reqwest from 'reqwest';
import Pagination from './bh-pagination';
import {Spin, Icon, Checkbox} from 'antd';
require('./bh-table.scss');

function noop(){
}

function defaultResolve(data){
    return data || [];
}

class DataSource {
    init(config){
        this.config = config;
        this.url = config.url || '';
        this.resolve = config.resolve || defaultResolve;
        this.getParams = config.getParams || noop;
        this.getPagination = config.getPagination || noop;
        this.headers = config.headers || {};
        this.data = config.data || {};
    }
    constructor(config){
        if(config){
            this.init(config);
        }
    }
    clone(config = {}){
        return new DataSource(Object.assign({}, this.config, config));
    }
}

let BHTable = React.createClass({
    getInitialState: function() {
        return {
            selectedRowKeys: [],
            data: [],
            dataSource: this.props.dataSource,
            loading: this.props.loading
        };
    },
    render: function(){
        return (
            <table className="bh-table bh-table-cross-highlight">
                <thead>
                    <tr>
                        <th className="b-checked">
                            <div className="bh-checkbox">
                                <label>
                                    <input type="checkbox" className="allCheckboxFlag" />
                                    <i className="bh-choice-helper"></i>
                                </label>
                            </div>
                        </th>
                        <th className='b-operate'>操作</th>
                        <th>姓名</th>
                        <th>学号</th>
                        <th>性别</th>
                        <th>院系</th>
                        <th>专业</th>
                        <th>培养层次</th>
                        <th>联系电话</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="b-checked">
                            <div className="bh-checkbox">
                                <label>
                                    <input type="checkbox" name="oper" value="" />
                                    <i className="bh-choice-helper"></i>
                                </label>
                            </div>
                        </td>
                        <td className='b-operate'><i className="md  md-assignment b-icon-font"></i><i className="md  md-insert-drive-file b-icon-font b-icon-sec"></i></td>
                        <td>王秋实</td>
                        <td>B091106062</td>
                        <td>男</td>
                        <td>传媒专业数字媒体艺术系</td>
                        <td>网络与互动媒体专业</td>
                        <td>本科</td>
                        <td>1831101100</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="bh-checkbox">
                                <label>
                                    <input type="checkbox" name="oper" value="" />
                                    <i className="bh-choice-helper"></i>
                                </label>
                            </div>
                        </td>
                        <td className='b-operate'><i className="md  md-assignment b-icon-font"></i><i className="md  md-insert-drive-file b-icon-font b-icon-sec"></i></td>
                        <td>王秋实</td>
                        <td>B091106062</td>
                        <td>男</td>
                        <td>传媒专业数字媒体艺术系</td>
                        <td>网络与互动媒体专业</td>
                        <td>本科</td>
                        <td>1831101100</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="bh-checkbox">
                                <label>
                                    <input type="checkbox" name="oper" value="" />
                                    <i className="bh-choice-helper"></i>
                                </label>
                            </div>
                        </td>
                        <td className='b-operate'><i className="md  md-assignment b-icon-font"></i><i className="md  md-insert-drive-file b-icon-font b-icon-sec"></i></td>
                        <td>王秋实</td>
                        <td>B091106062</td>
                        <td>男</td>
                        <td>传媒专业数字媒体艺术系</td>
                        <td>网络与互动媒体专业</td>
                        <td>本科</td>
                        <td>1831101100</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="bh-checkbox">
                                <label>
                                    <input type="checkbox" name="oper" value="" />
                                    <i className="bh-choice-helper"></i>
                                </label>
                            </div>
                        </td>
                        <td className='b-operate'><i className="md  md-assignment b-icon-font"></i><i className="md  md-insert-drive-file b-icon-font b-icon-sec"></i></td>
                        <td>王秋实</td>
                        <td>B091106062</td>
                        <td>男</td>
                        <td>传媒专业数字媒体艺术系</td>
                        <td>网络与互动媒体专业</td>
                        <td>本科</td>
                        <td>1831101100</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="bh-checkbox">
                                <label>
                                    <input type="checkbox" name="oper" value="" />
                                    <i className="bh-choice-helper"></i>
                                </label>
                            </div>
                        </td>
                        <td className='b-operate'><i className="md  md-assignment b-icon-font"></i><i className="md  md-insert-drive-file b-icon-font b-icon-sec"></i></td>
                        <td>王秋实</td>
                        <td>B091106062</td>
                        <td>男</td>
                        <td>传媒专业数字媒体艺术系</td>
                        <td>网络与互动媒体专业</td>
                        <td>本科</td>
                        <td>1831101100</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="bh-checkbox">
                                <label>
                                    <input type="checkbox" name="oper" value="" />
                                    <i className="bh-choice-helper"></i>
                                </label>
                            </div>
                        </td>
                        <td className='b-operate'><i className="md  md-assignment b-icon-font"></i><i className="md  md-insert-drive-file b-icon-font b-icon-sec"></i></td>
                        <td>王秋实</td>
                        <td>B091106062</td>
                        <td>男</td>
                        <td>传媒专业数字媒体艺术系</td>
                        <td>网络与互动媒体专业</td>
                        <td>本科</td>
                        <td>1831101100</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="bh-checkbox">
                                <label>
                                    <input type="checkbox" name="oper" value="" />
                                    <i className="bh-choice-helper"></i>
                                </label>
                            </div>
                        </td>
                        <td className='b-operate'><i className="md  md-assignment b-icon-font"></i><i className="md  md-insert-drive-file b-icon-font b-icon-sec"></i></td>
                        <td>王秋实</td>
                        <td>B091106062</td>
                        <td>男</td>
                        <td>传媒专业数字媒体艺术系</td>
                        <td>网络与互动媒体专业</td>
                        <td>本科</td>
                        <td>1831101100</td>
                    </tr>
                </tbody>
            </table>
        );
    }
});

export default BHTable;