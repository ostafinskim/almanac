import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <section className='h-screen mt-28 lg:mt-0 p-8 lg:p-12 lg:max-w-7xl mx-auto flex flex-col items-center'>
        <Image src='/gm.svg' width={1200} height={800} alt='' />
        <div className='flex flex-col gap-4'>
          <h1 className='capitalize mt-8 text-center text-4xl lg:text-8xl font-bold'>
            Speedway Almanac
          </h1>
          <p className='mt-8 text-center text-lg lg:text-2xl'>
            The Speedway Almanac is a comprehensive database of speedways and racing events, providing detailed information and statistics for enthusiasts and professionals alike.
          </p>
          <Button asChild className='mt-8 self-center'>
            <Link href='/riders'>Browse details here</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}