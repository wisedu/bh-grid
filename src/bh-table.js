import React from 'react'; //es6模块引入方式
var Table = React.createClass({
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

export default Table;