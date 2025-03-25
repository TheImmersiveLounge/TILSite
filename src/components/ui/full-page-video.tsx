import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      playing={true}  
      muted={true}    
      loop={true}     
      playsinline={true} 
      width="100%"   
      height="100%"
      className="absolute inset-0 w-full h-full object-cover"
      config={{
        youtube: {
          playerVars: {
            modestbranding: 1, // Remove YouTube branding
            controls: 0,       // Hide controls
            showinfo: 0,       // Hide title and video info
            rel: 0,            // Prevent related videos from showing after playback
            iv_load_policy: 3, // Disables annotations
            fs: 0,             // Disables fullscreen button
            cc_load_policy: 0  // Disables closed captions
          },
        },
      }}
      onReady={() => {
        // Additional custom CSS to hide title/profile pic and other unwanted UI elements
        const playerIframe = document.querySelector('iframe');
        if (playerIframe) {
          const player = playerIframe.contentWindow;
          if (player) {
            player.postMessage(
              '{"event":"command","func":"hideControls","args":""}',
              '*'
            );
          }
        }
      }}
    />
  );
};

export default VideoPlayer;