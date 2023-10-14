import { db } from '@/db';
import { Files, files } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Image from 'next/image';
import Link from 'next/link';

export default async function OcrFilePreview({ id }: { id: number }) {
  const response = (await db.select().from(files).where(eq(files.id, id))).at(
    0
  ) as Files;

  return (
    <div>
      <h2>Image Preview</h2>
      <div className='flex items-center justify-between'>
        <p>Click image to open in new tab</p>
        {/* Add download button */}
      </div>
      <Link href={response.url} target='_blank'>
        <Image
          src={response.url}
          alt='Ocr image preview'
          width={1024}
          height={1024}
        />
      </Link>
    </div>
  );
}
