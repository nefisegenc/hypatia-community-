"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import type { Project } from "@/data/projects";

type GalleryImage = NonNullable<Project["detail"]["gallery"]>[number];

type ProjectGalleryProps = {
    images: NonNullable<Project["detail"]["gallery"]>;
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeModal = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    useEffect(() => {
        if (selectedIndex === null) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [closeModal, selectedIndex]);

    const openModal = (index: number) => {
        setSelectedIndex(index);
    };

    const selectedImage: GalleryImage | null =
        selectedIndex !== null ? images[selectedIndex] : null;

    return (
        <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {images.map((image, index) => (
                    <button
                        type="button"
                        key={`${image.src}-${index}`}
                        onClick={() => openModal(index)}
                        className="flex flex-col text-left transition-transform duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-hypatia-magenta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={1200}
                                height={900}
                                className="aspect-[4/3] w-full object-cover"
                                style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                                sizes="(min-width: 768px) 50vw, 100vw"
                                priority={index === 0}
                            />
                        </div>
                        {image.caption.trim() && (
                            <p className="mt-4 text-sm text-muted-foreground">{image.caption}</p>
                        )}
                    </button>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedImage.alt}
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-4xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/20"
                            aria-label="Kapat"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="relative overflow-hidden rounded-3xl bg-black">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={1600}
                                height={1200}
                                className="h-auto w-full object-contain"
                                sizes="(min-width: 1024px) 60vw, 90vw"
                                priority
                            />
                        </div>

                        {selectedImage.caption.trim() && (
                            <p className="mt-4 text-center text-sm text-white/80">
                                {selectedImage.caption}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
