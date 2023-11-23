import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `TitleBlock`.
 */
export type TitleBlockProps = SliceComponentProps<Content.TitleBlockSlice>;

/**
 * Component for "TitleBlock" Slices.
 */
const TitleBlock = ({ slice }: TitleBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.text_field} />
    </section>
  );
};

export default TitleBlock;
