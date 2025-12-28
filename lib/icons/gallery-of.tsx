import type { IconProps } from '@solar-icons/react';
import { IconGallery, IconItem } from '@storybook/addon-docs/blocks';

export function GalleryOf({ Icon, name }: { Icon: React.ComponentType<IconProps>; name: string }) {
  return (
    <>
      <h3>{name}</h3>
      <IconGallery>
        <IconItem name="BoldDuotone" children={<Icon weight="BoldDuotone" />} />
        <IconItem name="Bold" children={<Icon weight="Bold" />} />
        <IconItem name="LineDuotone" children={<Icon weight="LineDuotone" />} />
        <IconItem name="Linear" children={<Icon weight="Linear" />} />
        <IconItem name="Outline" children={<Icon weight="Outline" />} />
        <IconItem name="Broken" children={<Icon weight="Broken" />} />
      </IconGallery>
    </>
  );
}
