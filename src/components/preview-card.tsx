import { type Texts } from '@/db/schema';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import Link from 'next/link';
import { env } from '@/env.mjs';

export default function PreviewCard({ text }: { text: Texts }) {
  return (
    <Link href={`${env.NEXT_PUBLIC_APP_URL}/preview/${text.id}/${text.slug}`}>
      <Card>
        <CardHeader>
          <CardTitle>{text.title}</CardTitle>
          <CardDescription>{text.label}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='line-clamp-4'>{text.content}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
