'use client';
import { Checkbox } from '@/components/ui/Checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from './DataTableColumnHeader';
import { DataTableRowActions } from './DataTableRowActions';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

export const columns: ColumnDef<{
  id: number;
  userId: string;
  title: string;
  content: string;
  label: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  fileId: bigint | null;
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
        <Link href={`/dashboard/${row.original.id}`}>
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
  // {
  //   accessorKey: 'label',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title='Label' />
  //   ),
  //   cell: ({ row }) => {
  //     const label = row.original.label;
  //     return (
  //       <div className='flex w-full justify-center items-center'>
  //         <Badge variant='outline' className='whitespace-nowrap'>{label}</Badge>
  //       </div>
  //     );
  //   },
  // },
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
                href={row.original.files?.url!}
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
