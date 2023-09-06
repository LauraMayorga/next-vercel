import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function PricingPage() {
    return (
        <MainLayout>
            <h1>Pricing Page</h1>
                    <h1 className="title">
                        {/* Ir a <a href="/">Home</a> */}
                        Ir a <Link href="/">Home</Link>
                    </h1>
                    <p>
                        Get started by editing&nbsp;
                        <code className="code">pages/pricing/index.tsx</code>
                    </p>
        </MainLayout>
    )
}
