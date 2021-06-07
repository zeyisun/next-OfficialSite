import { Layout, Menu } from 'antd';
import Link from 'next/link'

const { Header } = Layout;

export default class HeadComponent extends React.Component {
    static async getInitialProps(props){
        const {
            pathname
        } = props
        return{ pathname }
    }
    menuselect = ({ key }) => {
        console.log(key)
    }
    print() {
        console.log(window.location);
    }
    render() {
        const { pathname } = this.props
        return <>
            <Header className="header" style={{ position: 'fixed', zIndex: 2000, width: '100%' }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[pathname]}
                    style={{ lineHeight: '64px' }}
                    onSelect={this.menuselect}
                >
                    <Menu.Item key="/"><Link href="/"><a>Home</a></Link></Menu.Item>
                    <Menu.Item key="/About"><Link href="/About"><a>About</a></Link></Menu.Item>
                    <Menu.Item key="3" onClick={this.print.bind(this)}>nav 3</Menu.Item>
                </Menu>
            </Header>
        </>
    }
}