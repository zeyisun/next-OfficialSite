import { useEffect } from 'react';
import { useRouter } from 'next/router'
import globalStyle from '../styles/global.css'
import toolStyle from '../styles/tool.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
const setRem = async ()=>{
    await require('lib-flexible')
}

export default function App({ Component, pageProps }) {
    const router = useRouter()
    useEffect(()=>{
        setRem()
        window.addEventListener('resize',setRem)

        // const handleRouteChange = (url, { shallow }) => {
        //     console.log(
        //       `App is changing to ${url} ${
        //         shallow ? 'with' : 'without'
        //       } shallow routing`
        //     )
        //     console.log(11111)
        // }
        // router.events.on('routeChangeStart', handleRouteChange)
        // return () => {
        //     router.events.off('routeChangeStart', handleRouteChange)
        // }
    }, [])
    return <>
        <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
        <style dangerouslySetInnerHTML={{ __html: toolStyle }} />
        <Component {...pageProps} />
    </>
}