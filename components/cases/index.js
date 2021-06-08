import Link from 'next/link'

export default class cases extends React.Component {
    render() {
        return <>
            <style jsx>{`
                .Container {
                    width: 100%;
                    height: 640px;
                    margin: 60px 0;
                    position: relative;
                    background: url(https://19865635.s61i.faiusr.com/2/AD0Io8C8CRACGAAgp83M6AUowJGbzgMwgA847gU.jpg) repeat top ,transparent;
                }
                .Title {
                    width: 100%;
                    text-align: center;
                    color: rgba(255,255,255,1)
                }
                .TitleName {
                    font-size: 30px;
                }
                .TitleDescription {
                    font-size: 14px;
                }
                .Content {
                    display: flex;
                    margin-top: 40px;
                    justify-content: space-around;
                    padding: 0 100px;
                }
                .Item {
                    display: flex;
                    width: 375px;
                    border-radius: 6px;
                    background: #FFF;
                    flex-direction: column;
                    overflow: hidden;
                }
                .ItemImg {
                    width: 100%;
                    height: 160px;
                }
                .ItemImg a {
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 50%;
                }
                .ItemInfo {
                    padding: 15px;
                }
                .InfoTitle {
                    font-size: 16px;
                }
                .InfoDescription {
                    line-height: 26px;
                    color: #878787;
                    white-space: normal;
                    margin-top: 14px;
                    font-size: 14px;
                    -webkit-line-clamp: 2;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                }
                .GetButton {
                    margin-top: 80px;
                    text-align: center;
                    color: rgba(0,160,233,1);
                }
                .GetButton button {
                    padding: 10px 20px;
                    background: transparent;
                    border: 1px solid rgba(0,160,233,1);
                }
            `}</style>
            <div className="Container">
                <div className="Title">
                    <div className="TitleName">
                        典型案例
                    </div>
                    <div className="TitleDescription">
                        CASES
                    </div>
                </div>
                <div className="Content">
                    <div className="Item">
                        <div className="ItemImg">
                            <Link href="/About">
                                <a style={{ backgroundImage: 'url(https://www.nint.com/img/pro/pro_right_bg_02.jpg)' }} />
                            </Link>
                        </div>
                        <div className="ItemInfo">
                            <div className="InfoTitle">
                                情报通
                            </div>
                            <div className="InfoDescription">
                                情报通于2008年上线，是最早的电商分析产品之一，累计为超过3万多家店铺和品牌商提供电商大数据服务，是品牌商、经销商、研究机构的电商运营必备工具之一。数据库覆盖阿里、淘宝、京东、苏宁、国美、网易考拉等电商平台，其中阿里旗下包括天猫、天猫国际、天猫超市、淘宝、全球购，京东更可细分为：京东自营、京东POP、京东海外...
                            </div>
                        </div>
                    </div>
                    <div className="Item">
                        <div className="ItemImg">
                            <Link href="/About">
                                <a style={{ backgroundImage: 'url(https://www.nint.com/img/pro/pro_right_bg_01.jpg)' }} />
                            </Link>
                        </div>
                        <div className="ItemInfo">
                            <div className="InfoTitle">
                                大客户定制
                            </div>
                            <div className="InfoDescription">
                            产品基于标准化数据查看的基础上，在品类划分与定义，数据清洗，跨平台数据分析，市场机会洞察等方面，根据客户的需求，产出定制化的报告，为客户特定场景下的数据使用服务，提供更为精准有效的数据服务。产品适合市场、电商等部门管理者，或公司管理层使用，以对经营决策形成有力支持...
                            </div>
                        </div>
                    </div>
                    <div className="Item">
                        <div className="ItemImg">
                            <Link href="/About">
                                <a style={{ backgroundImage: 'url(https://www.nint.com/img/pro/pro_right_bg_04.jpg)' }} />
                            </Link>
                        </div>
                        <div className="ItemInfo">
                            <div className="InfoTitle">
                                市场洞察
                            </div>
                            <div className="InfoDescription">
                            产品根据沉淀多年的行业研究经验，品牌电商服务经验，将数据分析思路标准化，利用智能数据抓取系统和数据可视化系统，快速地从行业/厂商/品类/品牌各个维度了解行业趋势、明确产品定位、熟悉竞品优势，在市场部制订和调整商业策略时，提供了强有力的数据支撑，是划时代的集自动化、智能化、专业化与一身的数据分析工具...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="GetButton">
                    <button>{'了解更多 >>>'}</button>
                </div>
            </div>
        </>
    }
}