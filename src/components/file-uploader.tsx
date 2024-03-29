import React from 'react';
import Cropper, { type ReactCropperElement } from 'react-cropper';
import {
  useDropzone,
  type Accept,
  type FileRejection,
  type FileWithPath,
} from 'react-dropzone';
import type {
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
} from 'react-hook-form';
import { toast } from 'sonner';

import 'cropperjs/dist/cropper.css';

import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { formatBytes } from '@/lib/utils';
import { Crop, ListRestart, Upload, X } from 'lucide-react';

export type FileWithPreview = FileWithPath & {
  preview: string;
};

interface FileDialogProps<TFieldValues extends FieldValues>
  extends React.HTMLAttributes<HTMLDivElement> {
  name: Path<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  accept?: Accept;
  maxSize?: number;
  maxFiles?: number;
  files: FileWithPreview[] | null;
  setFiles: React.Dispatch<React.SetStateAction<FileWithPreview[] | null>>;
  isUploading?: boolean;
  disabled?: boolean;
}

export function FileDialog<TFieldValues extends FieldValues>({
  name,
  setValue,
  accept = {
    'image/jpeg, image/png, image/gif, image/tiff': [],
  },
  maxSize = 1024 * 1024 * 2,
  maxFiles = 1,
  files,
  setFiles,
  isUploading = false,
  disabled = false,
  className,
  ...props
}: FileDialogProps<TFieldValues>) {
  const onDrop = React.useCallback(
    (acceptedFiles: FileWithPath[], rejectedFiles: FileRejection[]) => {
      acceptedFiles.forEach((file) => {
        const fileWithPreview = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
        setFiles((prev) => [...(prev ?? []), fileWithPreview]);
      });

      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ errors }) => {
          if (errors[0]?.code === 'file-too-large') {
            toast.error(
              `File is too large. Max size is ${formatBytes(maxSize)}`
            );
            return;
          }
          errors[0]?.message && toast.error(errors[0].message);
        });
      }
    },

    [maxSize, setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    maxFiles,
    multiple: maxFiles > 1,
    disabled,
  });

  React.useEffect(() => {
    function handlePaste(event: ClipboardEvent) {
      const item = event.clipboardData?.items[0];

      if (!item) {
        return;
      }

      if (item.kind === 'file' && item.type.match('image/*')) {
        const file = item.getAsFile();

        if (file) {
          const fileWithPreview = Object.assign(file, {
            preview: URL.createObjectURL(file),
          });

          setFiles((prev) =>
            prev ? [...prev, fileWithPreview] : [fileWithPreview]
          );
        }
      }
    }

    document.addEventListener('paste', handlePaste);

    return () => {
      document.removeEventListener('paste', handlePaste);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Revoke preview url when component unmounts
  React.useEffect(() => {
    return () => {
      if (!files) return;
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        {...getRootProps()}
        className={cn(
          'group relative mt-8 grid h-48 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25',
          'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          isDragActive && 'border-muted-foreground/50',
          disabled && 'pointer-events-none opacity-60',
          className
        )}
        {...props}
      >
        <input {...getInputProps()} />

        {isUploading ? (
          <div className='group grid w-full place-items-center gap-1 sm:px-10'>
            <Upload
              className='size-9 animate-pulse text-muted-foreground'
              aria-hidden='true'
            />
          </div>
        ) : isDragActive ? (
          <div className='grid place-items-center gap-2 text-muted-foreground sm:px-5'>
            <Upload
              className={cn('size-8', isDragActive && 'animate-bounce')}
              aria-hidden='true'
            />
            <p className='text-base font-medium'>Drop the file here</p>
          </div>
        ) : (
          <div className='grid place-items-center gap-1 sm:px-5'>
            <Upload
              className='size-8 text-muted-foreground'
              aria-hidden='true'
            />
            <p className='mt-2 text-base font-medium text-muted-foreground'>
              Drag {`'n'`} drop file here, or click to select file
            </p>
            <p className='text-sm text-slate-500'>
              Please upload file with size less than {formatBytes(maxSize)}
            </p>
          </div>
        )}
      </div>
      <p className='text-center text-sm font-medium text-muted-foreground'>
        You can upload up to {maxFiles} {maxFiles === 1 ? 'file' : 'files'}
      </p>
      {files?.length ? (
        <div className='grid gap-5'>
          {files?.map((file, i) => (
            <FileCard
              key={i}
              i={i}
              name={name}
              setValue={setValue}
              files={files}
              setFiles={setFiles}
              file={file}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

interface FileCardProps<TFieldValues extends FieldValues> {
  i: number;
  file: FileWithPreview;
  name: Path<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  files: FileWithPreview[] | null;
  setFiles: React.Dispatch<React.SetStateAction<FileWithPreview[] | null>>;
}

function FileCard<TFieldValues extends FieldValues>({
  i,
  file,
  name,
  setValue,
  files,
  setFiles,
}: FileCardProps<TFieldValues>) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cropData, setCropData] = React.useState<string | null>(null);
  const cropperRef = React.useRef<ReactCropperElement>(null);

  const onCrop = React.useCallback(() => {
    if (!files || !cropperRef.current) return;

    const croppedCanvas = cropperRef.current?.cropper.getCroppedCanvas();
    setCropData(croppedCanvas.toDataURL());

    croppedCanvas.toBlob((blob) => {
      if (!blob) {
        console.error('Blob creation failed');
        return;
      }
      const croppedImage = new File([blob], file.name, {
        type: file.type,
        lastModified: Date.now(),
      });

      const croppedFileWithPathAndPreview = Object.assign(croppedImage, {
        preview: URL.createObjectURL(croppedImage),
        path: file.name,
      }) satisfies FileWithPreview;

      const newFiles = [...files];
      newFiles.splice(i, 1, croppedFileWithPathAndPreview);
      setValue(name, newFiles as PathValue<TFieldValues, Path<TFieldValues>>);
    });
  }, [file.name, file.type, files, i, name, setValue]);

  React.useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        onCrop();
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [onCrop]);

  return (
    <div className='relative flex items-center justify-between gap-2.5'>
      <div className='flex items-center gap-2'>
        <Image
          src={cropData ? cropData : file.preview}
          alt={file.name}
          className='shrink-0 rounded-base'
          width={100}
          height={100}
          loading='lazy'
        />
        <div className='flex flex-col'>
          <p className='line-clamp-1 text-sm font-medium text-muted-foreground'>
            {file.name}
          </p>
          <p className='text-xs text-slate-500'>
            {(file.size / 1024 / 1024).toFixed(2)}MB
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        {file.type.startsWith('image') && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                type='button'
                variant='outline'
                size='sm'
                className='size-7 p-0'
              >
                <Crop className='size-4 text-white' aria-hidden='true' />
                <span className='sr-only'>Crop image</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <p className='absolute left-5 top-4 text-base font-medium text-muted-foreground'>
                Crop image
              </p>
              <div className='mt-8 grid place-items-center space-y-5'>
                <Cropper
                  ref={cropperRef}
                  className='size-[450px] object-cover'
                  zoomTo={0}
                  initialAspectRatio={1 / 1}
                  preview='.img-preview'
                  src={file.preview}
                  viewMode={1}
                  minCropBoxHeight={10}
                  minCropBoxWidth={10}
                  background={false}
                  responsive={true}
                  autoCropArea={1}
                  checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                  guides={true}
                />
                <div className='flex items-center justify-center space-x-2'>
                  <Button
                    aria-label='Crop image'
                    type='button'
                    size='sm'
                    className='h-8'
                    onClick={() => {
                      onCrop();
                      setIsOpen(false);
                    }}
                  >
                    <Crop className='mr-2 size-3.5' aria-hidden='true' />
                    Crop Image
                  </Button>
                  <Button
                    aria-label='Reset crop'
                    type='button'
                    variant='outline'
                    size='sm'
                    className='h-8'
                    onClick={() => {
                      cropperRef.current?.cropper.reset();
                      setCropData(null);
                    }}
                  >
                    <ListRestart
                      className='mr-2 size-3.5'
                      aria-hidden='true'
                    />
                    Reset Crop
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
        <Button
          type='button'
          variant='outline'
          size='sm'
          className='size-7 p-0'
          onClick={() => {
            if (!files) return;
            setFiles(files.filter((_, j) => j !== i));
            setValue(
              name,
              files.filter((_, j) => j !== i) as PathValue<
                TFieldValues,
                Path<TFieldValues>
              >,
              {
                shouldValidate: true,
              }
            );
          }}
        >
          <X className='size-4 text-white' aria-hidden='true' />
          <span className='sr-only'>Remove file</span>
        </Button>
      </div>
    </div>
  );
}
