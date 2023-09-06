import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'


export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
            <h1 className="title">
                {/* Ir a <a href="/">Home</a> */}
                Ir a <Link href="/">Home</Link>
            </h1>
            <p>
                Get started by editing&nbsp;
                <code className="code">pages/about.tsx</code>
            </p>

        </>
    )
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
