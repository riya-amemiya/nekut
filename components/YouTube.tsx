import YouTube, { YouTubeProps } from 'react-youtube';

const YouTubeCompote = ({
    videoId,
    onReady,
    onPlay,
    onPause,
    onEnd,
    onError,
    onStateChange,
    id,
    className,
    iframeClassName,
    style,
    onPlaybackRateChange,
    onPlaybackQualityChange,
}: YouTubeProps) => {
    return (
        <YouTube
            videoId={videoId}
            onReady={onReady}
            onPlay={onPlay}
            onPause={onPause}
            onEnd={onEnd}
            onError={onError}
            onStateChange={onStateChange}
            id={id}
            className={className}
            iframeClassName={iframeClassName}
            style={style}
            onPlaybackRateChange={onPlaybackRateChange}
            onPlaybackQualityChange={onPlaybackQualityChange}
        />
    );
};

export default YouTubeCompote;
