import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div><img src="https://4blf1emx.cdn.imgeng.in/wp-content/uploads/2022/04/c294e2aa-3c2f-d291-62d3-d487b4bd5309.png" sizes="300px"/></div>
      </main>

      <Footer />
    </div>
  )
}
