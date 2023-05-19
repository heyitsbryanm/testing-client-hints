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
        <h1>image engine client hints</h1>
        <p>This image should be 50px wide</p>
        <div><img src="https://4blf1emx.cdn.imgeng.in/wp-content/uploads/2022/04/c294e2aa-3c2f-d291-62d3-d487b4bd5309.png" sizes="50px"/></div>
      </main>

      <Footer />
    </div>
  )
}
