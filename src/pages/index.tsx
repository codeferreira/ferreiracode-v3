import Header from 'components/header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FerreiraCode</title>
      </Head>
      <section className="h-screen max-w-screen-2xl px-10 m-auto font-Montserrat bg-white flex justify-between">
        <section className="flex-1">
          <Header />
          <main className="mt-32">
            <h2 className="text-3xl font-bold mb-3">
              I&apos;m{' '}
              <span className="text-purple-700 font-bold">José Ferreira</span>
            </h2>
            <h1 className="text-6xl font-bold mb-6">Software Developer</h1>
            <p className="text-xl leading-6 text-purple-400">
              I have 6+ years of experience on Web and Mobile Development.
              <br />
              Passionate about transforming ideas into products through code.
              <br />
              So, how can I bring your idea to life?
            </p>

            <section className="flex gap-8 mt-24">
              <Link href="/get-in-touch">
                <button className="rounded-md bg-purple-700 font-bold text-white py-3 px-5 duration-100 hover:bg-purple-400">
                  Get in touch
                </button>
              </Link>
              <a
                href="/resume-jose-ferreira.pdf"
                download="resume-jose-ferreira.pdf"
                className="font-bold cursor-pointer text-purple-400 py-3 px-5 flex justify-center items-center gap-2 duration-100 hover:text-purple-700"
              >
                My resume <FiDownload size={22} />
              </a>
            </section>
          </main>
        </section>
        <section className="rounded-b-full overflow-hidden relative pt-32 w-[400px] h-[700px] bg-gradient-to-b from-purple-300 via-purple-100 to-purple-300">
          <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px]">
            <Image
              className="object-cover"
              src="/profileArt.png"
              layout="fill"
              alt="José Ferreira face drawing"
            />
          </div>
        </section>
      </section>
    </>
  )
}

export default Home
