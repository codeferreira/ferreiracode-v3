import Header from 'components/header'
import Input from 'components/input'
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
              Get in touch
            </h1>
            <form
              action="https://formsubmit.co/contact@ferreiracode.com"
              method="POST"
            >
              <Input
                label="Your name"
                name="name"
                placeholder="John Doe"
                required
              />
              <Input
                label="Your email"
                name="email"
                type="email"
                placeholder="john@doe.com"
                required
              />
              <label
                htmlFor="message"
                className="text-purple-400 font-semibold mb-2"
              >
                Your message
                <textarea
                  className="block bg-gray-50 py-2 px-4 border border-gray-300 rounded-md w-full max-w-lg mb-6 font-normal h-36 resize-none"
                  name="message"
                  placeholder="What you want to talk about?"
                />
              </label>
              <input
                type="hidden"
                name="_subject"
                value="New submission from website"
              />
              <button
                type="submit"
                className="bg-purple-700 w-full max-w-lg py-3 px-4 font-bold text-white rounded-md"
              >
                Send
              </button>
            </form>
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
