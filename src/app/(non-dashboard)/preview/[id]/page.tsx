import { env } from '@/env.mjs';
import { getText } from '@/lib/fetchFromServer';
import { redirect } from 'next/navigation';

export default async function IdPage({ params }: { params: { id: string } }) {
  const text = await getText(Number(params.id));

  return redirect(`${env.NEXT_PUBLIC_APP_URL}/preview/${text.id}/${text.slug}`);
}
