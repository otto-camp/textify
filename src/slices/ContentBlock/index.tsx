import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ContentSlice`.
 */
export type ContentSliceProps = SliceComponentProps<Content.ContentSliceSlice>;

/**
 * Component for "ContentSlice" Slices.
 */
const ContentSlice = ({ slice }: ContentSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.content_field} />
    </section>
  );
};

export default ContentSlice;
