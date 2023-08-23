export default function PageTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='py-4'>
      <h1 className='text-lg font-semibold sm:text-xl md:text-2xl'>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
