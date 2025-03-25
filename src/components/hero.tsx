const link: string = "/Contact";

// Adjust these variables to change your content
const mainText: string = "The Immersive Lounge";
const secondaryText: string = "[do we want a tagline here?]";
const img: string = "/logo-imgs/white_text/Main Logo White Text.PNG";

import VideoPlayer from "./ui/full-page-video";

export default function Hero({ videoUrl }: { videoUrl: string }) {
  return (
    <>
      <head>
        <link rel="preload" href={img} as="image" />
      </head>
      
      <section className="relative flex h-screen w-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10"> 
          <VideoPlayer url={videoUrl} />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-logo bg-[#0000004f]">
          <img src={img} className="z-10 w-2/5 filter drop-shadow-2xl" alt="Main Logo" />
        </div>
        
      </section>
    </>
  );
}