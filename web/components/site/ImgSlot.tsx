import Image from "next/image";

type Props = {
  /** Cesta k reálné fotce. Když chybí, zobrazí se placeholder s popiskem. */
  src?: string;
  alt?: string;
  /** Popisek placeholderu (co sem patří za fotku). */
  label: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Místo pro fotku. Dokud nejsou reálné fotky, ukáže označený placeholder.
 * Až budou fotky v /public/images, stačí doplnit `src`.
 */
export default function ImgSlot({ src, alt = "", label, priority, sizes }: Props) {
  if (src) {
    return (
      <div className="img-slot" style={{ position: "relative" }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 940px) 100vw, 50vw"}
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }
  return (
    <div className="img-slot" aria-hidden="true">
      {label}
    </div>
  );
}
