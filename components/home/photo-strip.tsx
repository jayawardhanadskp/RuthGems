import Image from "next/image";
import { StaggerGrid, StaggerItem } from "@/components/motion/reveal";

const photos = [
  "/images/home/photo-1.png",
  "/images/home/photo-2.png",
  "/images/home/photo-3.png",
  "/images/home/photo-4.png",
  "/images/home/photo-5.png",
];

export function PhotoStrip() {
  return (
    <section className="overflow-x-auto py-4">
      <StaggerGrid className="flex w-max gap-4 px-4 sm:gap-6 sm:px-6 lg:container-page lg:w-full lg:gap-[35px] lg:px-20">
        {photos.map((src) => (
          <StaggerItem key={src}>
            <div className="relative h-[280px] w-[220px] overflow-hidden rounded-xl sm:h-[380px] sm:w-[280px] lg:h-[498px] lg:w-[376px]">
              <Image
                src={src}
                alt="Ceylon gem craft"
                fill
                sizes="(max-width: 1024px) 280px, 376px"
                className="object-cover"
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
