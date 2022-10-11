import Header from 'components/header'
import Head from 'next/head'
import Image from 'next/image'

const GetInTouch = () => {
  return (
    <>
      <Head>
        <title>FerreiraCode</title>
      </Head>
      <section className="h-screen max-w-screen-2xl px-10 m-auto font-Montserrat bg-white flex justify-between">
        <section className="flex-1">
          <Header />
          <main className="mt-32">
            <h1 className="text-3xl font-bold text-purple-700 mb-3">
              Coming soon...
            </h1>
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

export default GetInTouch
