import { Button } from "antd";

export default class solution extends React.Component {
    render() {
        return <>
            <style jsx>{`
                .Container {
                    width: 1200px;
                    position: relative;
                    margin: 0 auto;
                    padding: 20px;
                    background: #FFF;
                }
                .Content {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 40px;
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
            </div>
        </>
    }
}