// import type { NextComponentType, NextPage } from "next";
import type { ReactNode } from 'react';
import Head from "next/head";

const Layout = ({ head, pageTitle, description, className, children }: { head?: boolean; pageTitle?: string; className?: string; description?: string, children: ReactNode }) => {
    return (
        <>
            {head &&
                <Head>
                    <title>{pageTitle? `${pageTitle} | Alluvium University` : 'Alluvium University'}</title>
                    <meta name="description" content={description || "Alluvium University (AU) was set up to offer an opportunity for young promising Africans to pursue a career in the tech industry as engineers or consultants. AU gives a pathway to young people with the drive to be part of the growing diversity and inclusion journey in the tech industry."} />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest"></link>
                </Head>}

            <main className={`container-fluid m-0 p-0 ${className}`}>
                {children}
            </main>
        </>
    );
};

export default Layout;
