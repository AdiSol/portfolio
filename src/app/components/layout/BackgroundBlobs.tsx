import Image from "next/image";

export function BackgroundBlobs() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
            <Image
                src="/images/bg-blobs-mobile.png"
                alt=""
                width={750}
                height={3600}
                priority
                sizes="100vw"
                className="block w-full h-auto sm:hidden"
            />
            <Image
                src="/images/bg-blobs.png"
                alt=""
                width={1920}
                height={2296}
                priority
                sizes="100vw"
                className="hidden w-full h-auto sm:block"
            />
        </div>
    );
}
