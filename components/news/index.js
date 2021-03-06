import newsStyle from './news.module.css'

export default class news extends React.Component {
    render() {
        return <>
            <style dangerouslySetInnerHTML={{ __html: newsStyle }} />
            <div className="container">
                <div className="content">
                    <p className="title">
                        <span>新闻</span>
                        <span style={{verticalAlign: 'top'}}>|</span>
                        <span>1949.10.01</span>
                    </p>
                    <div>
                        <img src="http://newpaper.dahe.cn/jrab/res/1/20110627/95391309116877734.jpg" />
                    </div>
                    <div className="item">
                        <h3>中国成立了！</h3>
                        <p className="hidden-xs">一年前，面对来势凶猛的疫情，社会各界迅速构建起抗疫共同体，逆行驰援，共克时艰。 一年后，山河已无恙，江城樱如雪。国家“十四五”规划将保障人民健康提升到优先发展的战略新高...</p>
                    </div>
                </div>
                <div className="content">
                    <p className="title">
                        <span>新闻</span>
                        <span style={{verticalAlign: 'top'}}>|</span>
                        <span>2021.06.01</span>
                    </p>
                    <div>
                        <img src="https://www.united-imaging.com/media/4941/e086c2833f2ec25ebfaf4093a04e8fc.jpg?anchor=center&mode=crop&width=720&height=450&rnd=132654866680000000" />
                    </div>
                    <div className="item">
                        <h3>“十四五”开局医院如何打造高峰高地？政产学研医融合创新成为院长共识！</h3>
                        <p className="hidden-xs">一年前，面对来势凶猛的疫情，社会各界迅速构建起抗疫共同体，逆行驰援，共克时艰。 一年后，山河已无恙，江城樱如雪。国家“十四五”规划将保障人民健康提升到优先发展的战略新高...</p>
                    </div>
                </div>
                <div className="content">
                    <p className="title">
                        <span>新闻</span>
                        <span style={{verticalAlign: 'top'}}>|</span>
                        <span>2020.12.25</span>
                    </p>
                    <div>
                        <img src="https://www.nint.com/uploads/news/100/fd565d4b07-20201224111258.jpg" />
                    </div>
                    <div className="item">
                        <h3>【节日祝福】圣诞老人发糖了！</h3>
                        <p className="hidden-xs">Nint CEO苏总亲自上阵化身圣诞老人给大家发糖果,其实，公司处处早已弥漫了圣诞的气息任拓，不仅有梦想，还有爱,愿每个任拓人都能被爱包围，热爱生活，实现自己的梦想。...</p>
                    </div>
                </div>
            </div>
        </>
    }
}