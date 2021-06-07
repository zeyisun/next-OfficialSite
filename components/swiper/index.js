import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import swiperStyle from './swiper.module.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default class swiper extends React.Component {
    static async getInitialProps(props){
        const {
            pathname
        } = props
        return{ pathname }
    }
    render() {
        return <>
            <style dangerouslySetInnerHTML={{ __html: swiperStyle }} />
            <Swiper
                spaceBetween={50}
                effect="fade"
                navigation
                loop
                autoplay={{ delay: 1000, stopOnLastSlide: false, disableOnInteraction: true, }}
                cssMode
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{ height: 610 }}
            >
                <SwiperSlide><img src="http://www.united-imaging.com/media/5033/banner%E5%9B%BE%E7%89%87.png" /></SwiperSlide>
                <SwiperSlide><img src="http://www.united-imaging.com/media/4925/%E5%B0%81%E9%9D%A2.png" /></SwiperSlide>
                <SwiperSlide><img src="http://www.united-imaging.com/media/5058/cover.jpg" /></SwiperSlide>
                <SwiperSlide><img src="http://www.united-imaging.com/media/2355/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png" /></SwiperSlide>
            </Swiper>
        </>
    }
}