import Head from 'next/head'
import * as React from 'react';
import Header from '../header'
import Footer from '../footer'
import stylesheet from 'antd/dist/antd.min.css'

import { Layout } from 'antd';

export default function LayoutComponent(props) {
    const pathname = props.pathname
    return <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <Layout>
            <Header pathname={ pathname } />
            {props.children}
            <Footer />
        </Layout>
    </>
}