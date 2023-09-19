import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout';
import { useRouter } from 'next/router';
import Darklayout from '../components/layouts/Darklayout';



export default function About() {

  const { asPath } = useRouter();


  return (
    <>
      <div className={'description'}>
        <h2>About page</h2>

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
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element[]) {

  return (
    <MainLayout>
      <Darklayout>
        {page}
      </Darklayout>
    </MainLayout>
  )
}