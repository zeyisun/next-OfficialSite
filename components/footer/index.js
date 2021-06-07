import footerStyle from './footer.module.css'

export default class HeadComponent extends React.Component {
    render() {
        return <>
            <style dangerouslySetInnerHTML={{ __html: footerStyle }} />
            <div className="Footer">
                <div className="Container">
                    <div className="Description">
                        <div className="Categories">
                            <h6>产品</h6>
                            <div className="Line"></div>
                            <ul>
                                <li><a href="/cn/product/product-index/#Diagnostics">诊断</a></li>
                                <li><a href="/cn/product/urtlinac-506c/">放疗</a></li>
                                <li><a href="/cn/product/ucloud/">uCloud 联影智慧医疗云</a></li>
                                <li><a href="https://www.uii-ai.com/zh/">uAI 联影智能</a></li>
                            </ul>
                        </div>
                        <div className="Categories">
                            <h6>公司 <span className="visible-xs zhankai"></span></h6>
                            <div className="Line"></div>
                            <ul>
                                <li><a href="/cn/about-us/">关于</a></li>
                                <li><a href="/cn/other/service/">服务和培训</a></li>
                                <li><a href="/cn/news/">新闻</a></li>
                                <li><a href="/cn/join-us/">招贤纳士</a></li>
                            </ul>
                        </div>
                        <div className="Categories">
                            <h6>法律 <span className="visible-xs zhankai"></span></h6>
                            <div className="Line"></div>
                            <ul>
                                <li><a href="/cn/other/law/privacy-policy/">隐私政策</a></li>
                                <li><a href="/cn/other/law/service-regulation/">使用条款</a></li>
                                <li><a href="/cn/other/law/accessibility-statement/">访问声明</a></li>
                                <li><a href="/media/4757/供应商道德与合规承诺-2020-9月发布.pdf" target="_blank">合规政策</a></li>
                            </ul>
                        </div>
                        <div className="Categories">
                            <h6>联系 <span className="visible-xs zhankai"></span></h6>
                            <div className="Line"></div>
                            <ul className="contact">
                                <li>上海市黄浦区延安东路618号远洋商业大厦二期12楼</li>
                                <li>400-166-9698</li>
                                <li>CN: +86 (21) 51036785</li>
                                <li>JPN: +81-0120-17-0474</li>
                                <li>email: ecdataway_mkt@nint.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Message">
                        <div style={{ textAlign: 'right' }}>
                            <a href="/cn" style={{ display: 'inline-block', marginRight: '5%' }}><img className="LOGO" src="https://www.nint.com/img/logo_2.png" alt="" /></a>
                        </div>
                        <div className="Line"></div>
                        <div className="MessageItem">
                            <span className="M30_R">Copyright © 2015</span>
                            <span className="M30_R">ADWAYS TECHNOLOGY LIMITED.All Rights Reserved | <a target="_blank" href="http://beian.miit.gov.cn" className="ReportMessage">沪 ICP 备 14010700 号-3</a></span>
                            {/* <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011402003653" className="ReportMessage">
                                <img src="//www.united-imaging.com/assets/image/icon/beian.png" className="ReportImg" />
                                <span> 沪公网安备 31011402003653 号</span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}