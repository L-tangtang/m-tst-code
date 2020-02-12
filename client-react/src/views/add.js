import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';

export default class componentName extends Component {
    state = {
        title: '',
        description: '',
        isRadio: 1,
        anonymous: 2,
        dateTime: null,
        searchVal: '',
        qqnumber: '',
        name: '',
        option: [],
    };
    render() {
        const {
            anonymous,
            isRadio,
            title,
            description,
            option,
            searchVal,
            qqnumber,
            name,
        } = this.state;
        return (
            <div>
                <li>
                    QQ:
                    <input
                        type="text"
                        placeholder="请输入qq"
                        value={qqnumber}
                        onChange={e => this.setState({ qqnumber: e.target.value })}
                    />
                </li>
                <li>
                    发布人:
                    <input
                        type="text"
                        placeholder="请输入名称"
                        value={name}
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                </li>
                <li>
                    标题：
                    <input
                        type="text"
                        placeholder="请输入标题"
                        value={title}
                        onChange={e => this.setState({ title: e.target.value })}
                    />
                </li>
                <li>
                    描述：
                    <input
                        type="text"
                        placeholder="请输入描述"
                        value={description}
                        onChange={e => this.setState({ description: e.target.value })}
                    />
                </li>
                <li>
                    是否匿名：
                    <select
                        value={anonymous}
                        onChange={e => this.setState({ anonymous: e.target.value })}
                    >
                        <option value="1">匿名</option>
                        <option value="0">署名</option>
                    </select>
                </li>
                <li>
                    单/多选：
                    <select
                        value={isRadio}
                        onChange={e => this.setState({ isRadio: e.target.value })}
                    >
                        <option value="1">单选</option>
                        <option value="0">多选</option>
                    </select>
                </li>
                <li>
                    截止日期：
                    <DatePicker
                        onChange={dateString =>
                            this.setState({
                                dateTime: new Date(dateString).getTime(),
                            })
                        }
                        showTime={true}
                    />
                </li>
                <li>
                    选项：
                    <div>
                        {option.map(item => {
                            return (
                                <p key={item.id}>
                                    {item.name}
                                    <span onClick={this.headleDel.bind(this, item.id)}>-</span>
                                </p>
                            );
                        })}
                    </div>
                    <p>
                        <input
                            type="text"
                            value={searchVal}
                            onChange={e => this.setState({ searchVal: e.target.value })}
                        />
                        <span onClick={this.headleAdd.bind(this)}>+</span>
                    </p>
                </li>
                <li>
                    <Button onClick={this.headleAddMouth.bind(this)}>提交</Button>
                </li>
            </div>
        );
    }
    // 添加选项
    headleAdd() {
        let { searchVal, option } = this.state;
        option.push({
            id: new Date().getTime() + option.length,
            name: searchVal,
        });
        this.setState({
            option: [...option],
        });
    }
    // 删除选项
    headleDel(id) {
        let { option } = this.state;
        let index = option.findIndex(item => item.id === id);
        option.splice(index, 1);
        this.setState({
            option: [...option],
        });
    }
    // 往数据库里追加数据
    async headleAddMouth() {
        let { anonymous, isRadio, title, description, dateTime, name, qqnumber } = this.state;
        // 署名  0   多选   0
        let res = await this.http('post', '/add', {
            anonymous,
            isRadio,
            title,
            description,
            dateTime,
            name,
            qqnumber,
        });
        let { code, msg } = res.data;
        alert(msg);
        if (code === 1) {
            this.props.history.push('/home');
        }
    }
}
