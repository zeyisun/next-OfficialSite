import * as React from 'react';
import LayoutComponent from '../../components/layout'
import AbooutStyle from './about.module.css'

import { Layout } from 'antd';

const { Content } = Layout;

export default class About extends React.Component {
    static async getInitialProps(props){
        const {
            pathname
        } = props;
        return{ pathname }
    }
    render() {
        console.log(this.props, 33333333)
        const { pathname } = this.props;
        return <>
            <style dangerouslySetInnerHTML={{ __html: AbooutStyle }} />
            <LayoutComponent pathname={ pathname }>
                <Layout style={{ marginTop: 64 }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        <div className="Container">
                            <div className="Content">
                                <div className="BG">
                                    VISION
                                </div>
                                <div className="Item">
                                    <h1 className="Title">VISION</h1>
                                    <div className="Line"></div>
                                    <h4 className="TitleText">愿景</h4>
                                    <p className="Text">数尽其用， 人尽其才</p>
                                </div>
                            </div>
                            <div className="Content" style={{ textAlign: 'right' }}>
                                <div className="BG">
                                    MISSION
                                </div>
                                <div className="Item">
                                    <h1 className="Title">MISSION</h1>
                                    <div className="Line"></div>
                                    <h4 className="TitleText">使命</h4>
                                    <p className="Text">数据，让世界自由<br /></p>
                                    {/* <p>立足自主创新，变｢中国制造｣为｢中国创造</p> */}
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </LayoutComponent>
        </>
    }
}