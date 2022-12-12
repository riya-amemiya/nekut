import { GetServerSidePropsContext } from 'next';
import SitemapGenerator from 'sitemap-generator';
import { read } from 'umt_plugin_node/module/File/read';
const generateSitemapXml = async () => {
    const option = {};
    // create generator
    const generator = SitemapGenerator(
        'https://nekut.oshaburikitchin.com/',
        option,
    );
    // register event listeners
    generator.on('done', () => {
        // sitemaps created
    });
    // start the crawler
    generator.start();
};
export const getServerSideProps = async ({
    res,
}: GetServerSidePropsContext) => {
    await generateSitemapXml();
    const xml = read('../script/sitemap.xml');
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
