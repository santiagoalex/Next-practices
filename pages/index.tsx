import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router';
import MainLayout from '@/components/layouts/MainLayout';
import Darklayout from '../components/layouts/Darklayout';


export default function Home() {

  const { asPath } = useRouter();

  return (
    <MainLayout>
      <Darklayout>
        <div className={'description'}>

          <h2>Home page</h2>

          <h1 className={'title'}>ir a
            <Link href="/about">About</Link>
          </h1>
          <h1 className={'title'}>ir a
            <Link href="/">home</Link>
          </h1>
          <h1 className={'title'}>ir a
            <Link href="/pricing">pricing</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages{asPath}</code>
          </p>
        </div>
      </Darklayout>
    </MainLayout>
  )
}
