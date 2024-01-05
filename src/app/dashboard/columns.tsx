'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { type ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export const columns: ColumnDef<{
  id: number;
  userId: string;
  title: string;
  content: string;
  label: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  fileId: bigint | null;
  slug: string | null;
  files: {
    id: number;
    userId: string;
    url: string;
    createdAt: Date | null;
    updatedAt: Date | null;
  } | null;
}>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='ID' />
    ),
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => {
      const label = row.original.label;

      return (
        <Link
          href={`/preview/${row.original.id}/${
            row.original.slug ? row.original.slug : ''
          }`}
        >
          <div className='flex flex-col gap-2'>
            <Badge className='w-fit' variant='outline'>
              {label}
            </Badge>
            <span className='font-medium'>{row.getValue('title')}</span>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: 'fileId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='File' noFilter />
    ),
    cell: ({ row }) => {
      return (
        <div className='w-full min-w-[80px]'>
          <span>
            {row.getValue('fileId') ? (
              <Link
                href={new URL(row.original.files?.url ?? '')}
                target='_blank'
                className='text-sm hover:underline'
              >
                View File
              </Link>
            ) : (
              'No File'
            )}
          </span>
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
