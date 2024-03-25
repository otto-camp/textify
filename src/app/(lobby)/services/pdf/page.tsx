import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { BentoGrid } from '@/components/ui/bento-grid';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const pdfTools = [
  {
    title: 'PDF To Word',
    description: 'Convert PDF to Word',
    href: 'services/pdf/word',
  },
  {
    title: 'PDF To Word',
    description: 'Convert PDF to Word',
    href: 'services/pdf/word',
  },
  {
    title: 'PDF To Word',
    description: 'Convert PDF to Word',
    href: 'services/pdf/word',
  },
  {
    title: 'PDF To Word',
    description: 'Convert PDF to Word',
    href: 'services/pdf/word',
  },
  {
    title: 'PDF To Word',
    description: 'Convert PDF to Word',
    href: 'services/pdf/word',
  },
  {
    title: 'PDF To Word',
    description: 'Convert PDF to Word',
    href: 'services/pdf/word',
  },
];

export default function PdfPage() {
  return (
    <Shell>
      <PageHeader
        as='header'
        className='justify-items-center text-balance py-16 text-center'
      >
        <PageHeaderHeading size='lg' className='font-black lg:text-6xl'>
          PDF Tools Out of the Box
        </PageHeaderHeading>
        <PageHeaderDescription size='lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, alias!
        </PageHeaderDescription>
      </PageHeader>
      <BentoGrid>
        {pdfTools.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Card>
              <CardHeader>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </BentoGrid>
    </Shell>
  );
}
