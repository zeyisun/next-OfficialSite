export default class solution extends React.Component {
    render() {
        return <>
            <style jsx>{`
                .Container {
                    width: 1200px;
                    position: relative;
                    margin: 0 auto;
                    padding: 60px;
                    background: #FFF;
                    box-shadow: 1px 1px 3px 1px rgba(22,22,22,0.3);
                }
                .Content {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 60px;
                    justify-content: space-between;
                }
                .TextArea button {
                    padding: 8px 16px;
                    background: transparent;
                    color: rgb(100,140,213);
                    border: 1px solid rgb(100,140,213);
                    border-radius: 3px;
                }
                .Title>b {
                    color: rgb(53,53,53);
                    font-size: 30px;
                    font-weight: 700;
                }
                .Title>span {
                    color: rgb(222,222,222);
                    font-size: 24px;
                    font-weight: 400;
                }
                .Text {
                    width: 500px;
                    margin: 40px 0;
                }
            `}</style>
            <div className="Container">
                <div className="Content">
                    <div className="TextArea">
                        <div className="Title">
                            <b>区域全民健康 </b>
                            <span>Regional healthcare services</span>
                        </div>
                        <div className="Text">
                            <span>以惠政、惠医、惠民、惠业为设计理念，应用5G、云计算、大数据、物联网等新兴技术，提供“一个基础平台、三大基础数据库、两项信息标准、三类业务应用”的区域卫生多元化、信息化整体解决方案…</span>
                        </div>
                        <button>{'了解更多 >>>'}</button>
                    </div>
                    <div className="Img">
                        <img src="https://20822300.s21i.faiusr.com/4/ABUIABAEGAAg472I8wUozeqAngUw2AQ4lAM!500x500.png.webp" />
                    </div>
                </div>
                <div className="Content" style={{ flexDirection: 'row-reverse' }}>
                    <div className="TextArea">
                        <div className="Title">
                            <b>区域全民健康 </b>
                            <span>Regional healthcare services</span>
                        </div>
                        <div className="Text">
                            <span>以惠政、惠医、惠民、惠业为设计理念，应用5G、云计算、大数据、物联网等新兴技术，提供“一个基础平台、三大基础数据库、两项信息标准、三类业务应用”的区域卫生多元化、信息化整体解决方案…</span>
                        </div>
                        <button>{'了解更多 >>>'}</button>
                    </div>
                    <div className="Img">
                        <img src="https://20822300.s21i.faiusr.com/4/ABUIABAEGAAg_9Cc8wUotJ3gugEw9AM43gI.png.webp" />
                    </div>
                </div>
                <div className="Content">
                    <div className="TextArea">
                        <div className="Title">
                            <b>绽放人性，共创任拓</b>
                            <span>Human nature and Ren Tuo</span>
                        </div>
                        <div className="Text">
                            <span>不知不觉，疫情已经伴随我们一年了，然而，疫情并没有阻碍我们前进的脚步，反而让大家有更多的创意和开拓。2021年2月5日，任拓首次采用了线上直播的形式，打造了极具年味的主会场，同时设置了各分会场，打破空间的限制，能安全顺畅地和所有任拓小伙伴甚至远在日本的同仁们共襄盛举，绽放人性，共创任拓。…</span>
                        </div>
                        <button>{'了解更多 >>>'}</button>
                    </div>
                    <div className="Img">
                        <img src="https://20822300.s21i.faiusr.com/2/ABUIABACGAAgiYmI8wUovOjHYDCTFDiCDg!500x500.jpg.webp" />
                    </div>
                </div>
            </div>
        </>
    }
}