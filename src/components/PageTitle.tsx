export default function PageTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='grid gap-12 py-8'>
      <h1 className='text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl'>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
