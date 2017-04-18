import React, { PropTypes } from 'react';
import { Button, DatePicker, Switch, Row, Col, message, Collapse} from 'antd';
// import CodeMirror from '../Components/CodeMirror'
import fetch from '../../../core/fetch';
import axios from 'axios'
const Panel = Collapse.Panel;
var CodeMirror = require('react-codemirror')
if(process.env.BROWSER) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class Setting extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props){
    super(props)
    this.state = {
      setting: {}
    }
    this.init()
  }

  async init () {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{ setting{ssr, css, script} }',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();
    this.setState({
      setting: data.setting
    })
  }

  async toggleSSR () {
    this.setState((prevState) => {
      return {
        ...prevState,
        setting: {
          ...prevState.setting,
          ssr: !prevState.setting.ssr
        }
      }
    })
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: 'mutation { updateSetting(ssr: ' + !this.state.setting.ssr + ') { ssr } }',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();
    if(data.updateSetting) {
      message.success('Update successful');
      this.setState((prevState) => {
        return {
          ...prevState,
          setting: {
            ...prevState.setting,
            ssr: data.updateSetting.ssr
          }
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          setting: {
            ...prevState.setting,
            ssr: !prevState.setting.ssr
          }
        }
      })
    }
  }

  updateSetting(setting){
    axios.post('/api/setting/update', setting)
      .then(res => {
        message.success('Cập nhập thành công!')
      })
      .catch(err => {
        message.error('Cập nhập thất bại')
      })
  }

  render() {
    return (
        <div>
          {this.state.setting.ssr !== undefined &&
          <Row className="padding-5">
            <b>SSR: </b>
            <Switch checked={this.state.setting.ssr} onChange={() => this.toggleSSR()} />
          </Row>}

          <Collapse>
            <Panel header={'STYLESHEETS'} key="1">
              {this.state.setting.css !== undefined &&
              <Row className="padding-5">
                <CodeMirror
                  value={this.state.setting.css} onChange={(value) => this.setState(prev => {
                  return {
                    ...prev,
                    setting: {
                      ...prev.setting,
                      css: value
                    }
                  }
                })}
                />

              </Row>}
            </Panel>
            <Panel header={'JAVASCIRPT'} key="2">
              {this.state.setting.script !== undefined &&
              <Row className="padding-5">
                <CodeMirror
                  value={this.state.setting.script} onChange={(value) => this.setState(prev => {
                  return {
                    ...prev,
                    setting: {
                      ...prev.setting,
                      script: value
                    }
                  }
                })}
                />
              </Row>}
            </Panel>

          </Collapse>
          <Row className="padding-5">
            <Button
              size="large"
              type="primary"
              onClick={() => {
                this.updateSetting(this.state.setting)
              }}
            >Cập nhập</Button>
          </Row>
        </div>
    );
  }
}

export default Setting
