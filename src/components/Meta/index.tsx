import Head from "next/head";

export default function Meta(props) {

    const { title, keywords, description, type, url, children, image } = props;

    return (
        <Head>
            <title>
                {title}
            </title>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-X1QJJSL5RK" />
            <script 
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
        
                    gtag('config', 'G-X1QJJSL5RK');
                    `
                }}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
                property="og:description"
                content={description}
            />
            <meta
                property="description"
                content={description}
            />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:title" content={title} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta name="keywords" content={keywords} />
            <meta property="og:image" content={image || "https://deathnote.com.br/logo512.png"} />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="icon" href="/favicon.ico" />
            {children}
        </Head>
    )

}