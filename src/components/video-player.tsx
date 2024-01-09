type PropsVideoPlayer = {
  src: string;
  muted: boolean;
  width: string;
  height: string;
  poster: string;
  autoplay: boolean;
}

export function VideoPlayer(props: PropsVideoPlayer) {
  return (
    <video
      src={props.src}
      controls
      muted={props.muted}
      width={props.width}
      height={props.height}
      autoPlay={props.autoplay}
      poster={props.poster}
    />
  );
}
