import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta tags for SEO */}
          <meta name="description" content="An efficient flashcard app to enhance your learning experience." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph tags for social media sharing */}
          <meta property="og:title" content="Flashcard App" />
          <meta property="og:description" content="An efficient flashcard app to enhance your learning experience." />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta property="og:url" content="https://your-app-url.com" />
          <meta property="og:type" content="website" />

          {/* Link to a global stylesheet */}
          <link rel="stylesheet" href="/styles/global.css" />

          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

          {/* Add any additional <head> tags here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
