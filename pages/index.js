import Head from 'next/head'

// components
import HomeIndex from '../components/views/Home/HomeIndex';

export default function Home() {
  return (
    <div className="h-screen w-full smooth-scroll">
      <Head>
      {/* <!-- Meta --> */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="X-UA-Compatible" content="IE-Edge" />
        <meta name="keywords" content="ratings, reviews, howwasit" />
        <meta name="description" content="The #1 rating metaverse" />
        <meta name="author" content="Precious Adeyinka" />
        <meta name="theme-color" content="#000" />

        {/* <!-- Open Graph --> */}
        <meta property="og:title" content="How Was It | Home" />
        <meta property="og:site_name" content="howwasit" />
        <meta property="og:url" content="tydplatform.com" />
        <meta property="og:description" content="The #1 rating metaverse" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />

        {/* <!-- Twitter Cards --> */}
        {/* <!-- Instagram Cards --> */}
        {/* <!-- Linkedin Cards --> */}


        <title>How Was It | Home</title>

        {/* <!-- Icons --> */}
        {/* <!-- Line Awesome --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css" integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        {/* <!-- Fonts --> */}
        {/* <!-- Poppins --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

        {/* Fredoka One */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
                          
        {/* <!-- Favico --> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-auto w-full overflow-x-hidden">
        <HomeIndex />
      </main>
    </div>
  )
}
