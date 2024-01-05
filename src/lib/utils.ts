import { env } from '@/env.mjs';
import { type ClassValue, clsx } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import * as z from 'zod';
import dayjs from 'dayjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    toast(errors.join('\n'));
  } else if (err instanceof Error) {
    toast(err.message);
  } else if (typeof err === 'string') {
    toast(err);
  } else {
    toast('Something went wrong, please try again later.');
  }
}

export function catchErrorServer(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      throw new Error(issue.message);
    });
    throw new Error(errors.join('\n'));
  } else if (err instanceof Error) {
    throw new Error(err.message);
  } else {
    throw new Error('Something went wrong, please try again later.');
  }
}

export function fileExtension(path: string) {
  return path.slice(((path.lastIndexOf('.') - 1) >>> 0) + 2);
}

export function formatBytes(
  bytes: number,
  decimals = 0,
  sizeType: 'accurate' | 'normal' = 'normal'
) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const accurateSizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === 'accurate' ? accurateSizes[i] ?? 'Bytest' : sizes[i] ?? 'Bytes'
  }`;
}

export function formatDate(date: Date | string) {
  return dayjs(date).format('MMMM D, YYYY');
}

export function getFirstSentence(text: string) {
  const firstSentenceMatch = text.match(/[^.!?]+[.!?]/);
  if (firstSentenceMatch) {
    return firstSentenceMatch[0].trim();
  }
  return text;
}

export function isArrayOfFile(files: unknown): files is File[] {
  const isArray = Array.isArray(files);
  if (!isArray) return false;
  return files.every((file) => file instanceof File);
}

export function isFile(value: unknown): value is File {
  return value instanceof File;
}

export function sanitizeFileName(fileName: string) {
  return fileName.replace(/[^\w\d_]/g, '');
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function getSlug(text: string) {
  const rawSlug = text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/^-+|-+$/g, '');

  if (rawSlug.length > 199) {
    return rawSlug.substring(0, 199).replace(/-+$/g, '');
  }

  return rawSlug;
}
