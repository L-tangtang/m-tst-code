import React, { Component } from 'react';
import { connect } from 'react-redux';

class componentName extends Component {
    state = {
        currIndex: 0,
        callback: i => true,
        navList: [
            {
                name: '全部',
                callback: i => true,
            },
            {
                name: '正在进行',
                callback: i => i.dateTime > new Date().getTime(),
            },
            {
                name: '已结束',
                callback: i => i.dateTime <= new Date().getTime(),
            },
        ],
    };
    render() {
        let { list } = this.props;
        const { callback, currIndex, navList } = this.state;
        return (
            <div>
                <h3 onClick={() => this.props.history.push('/add')}>标题：发起投票</h3>
                <li>
                    {navList.map((item, index) => (
                        <span
                            key={index}
                            className={currIndex === index ? 'active' : ''}
                            onClick={this.headleInd.bind(this, index, item.callback)}
                        >
                            {item.name}
                        </span>
                    ))}
                </li>
                <div>
                    {list.filter(callback).map(item => (
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <p>{this.headleTime(item.dateTime)}</p>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.initData(this);
    }
    headleInd(index, callback) {
        this.setState({
            currIndex: index,
            callback,
        });
    }
    headleTime(time) {
        let str = JSON.stringify(new Date(JSON.parse(time)));
        let newStr = str.slice(1, 11) + '——' + str.slice(12, 20);
        return newStr;
    }
}
let a = store => {
    let { list } = store;
    return {
        list,
    };
};
let b = dispatch => {
    return {
        async initData(that) {
            let res = await that.http('get', '/list');
            const { code, msg, data } = res.data;
            if (code === 1) {
                dispatch({ type: 'CHANGE_LIST', list: data });
                return;
            }
            alert(msg);
        },
    };
};
export default connect(a, b)(componentName);
