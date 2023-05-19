import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Test() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>imgix client hints</h1>
        <p>This image should be 50px wide</p>
        <div><img src="https://bryansandbox.imgix.net/_static/images/img02.jpg?ch=Width,DPR" sizes="50px"/></div>
      </main>

      <Footer />
    </div>
  )
}
