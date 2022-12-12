import { GetServerSidePropsContext } from 'next';
import { read } from 'umt_plugin_node/module/File/read';

export const getServerSideProps = async ({
    res,
}: GetServerSidePropsContext) => {
    const xml = read( './sitemap.xml' );
    res.statusCode = 200;
    res.setHeader(
        'Cache-Control',
        's-maxage=86400, stale-while-revalidate',
    );
    res.setHeader('Content-Type', 'text/xml');
    res.end(xml);
    return {
        props: {},
    };
};

const Page = () => null;
export default Page;
