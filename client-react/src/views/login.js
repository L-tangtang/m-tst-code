import React, { Component } from 'react';

export default class componentName extends Component {
    state = {
        username: '',
        password: '',
    };
    render() {
        const { username, password } = this.state;
        return (
            <div>
                <p>
                    <input
                        type="text"
                        placeholder="账号"
                        value={username}
                        onChange={e => {
                            this.setState({
                                username: e.target.value.trim(),
                            });
                        }}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="密码"
                        value={password}
                        onChange={e => {
                            this.setState({
                                password: e.target.value.trim(),
                            });
                        }}
                    />
                </p>
                <p>
                    <button onClick={this.headleLogin.bind(this)}>登陆</button>
                </p>
            </div>
        );
    }
    async headleLogin() {
        const { username, password } = this.state;
        if (username === '') {
            alert('账号是空的');
            return;
        }
        if (password === '') {
            alert('密码是空的');
            return;
        }
        let res = await this.http('post', '/login', { username, password });
        const { code, msg } = res.data;
        alert(msg);
        if (code === 1) {
            this.props.history.push('/home');
        }
    }
}
