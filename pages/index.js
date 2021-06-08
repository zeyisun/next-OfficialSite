import * as React from 'react';
import LayoutComponent from '../components/layout'
import SwiperComponent from '../components/swiper'
import NewsComponent from '../components/news'
import SolutionComponent from '../components/solution'
import CasesComponent from '../components/cases'
import WithDva from '../utils/store';

import { Layout } from 'antd';

const { Content } = Layout;

class HomePage extends React.Component {
    static async getInitialProps(props){
        const {
            pathname, query, isServer, store, req
        } = props;
        await props.store.dispatch({ type: 'index/init' });
        const userAgent = req ? req.headers['user-agent']: navigator.userAgent
        return{ pathname, query, isServer, dvaStore: store, userAgent }
        // const {
        //     pathname
        // } = props;
        // return{ pathname }
    }
    print() {
        console.log(this.props);
    }
    render() {
        const { pathname } = this.props;
        return <>
            <LayoutComponent pathname={ pathname }>
                <Layout style={{ marginTop: 64 }}>
                {/* <Layout style={{ padding: '0 24px 24px', marginTop: 64 }}> */}
                    {/* <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item onClick={this.print.bind(this)}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        <SwiperComponent />
                        <NewsComponent />
                        <CasesComponent />
                        <SolutionComponent />
                    </Content>
                </Layout>
            </LayoutComponent>
        </>
    }
}

export default WithDva((state) => { return { index: state.index }; })(HomePage);