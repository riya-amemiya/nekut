import Link from 'next/link';
import { useRouter } from 'next/router';

export const GetCodeLink = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const path = router.pathname.replace('chapters', 'data');
    return (
        <Link
            className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
            href={`${path}/SourceCode.zip`}
            target="_blank"
            rel="noreferrer">
            {children}
        </Link>
    );
};
