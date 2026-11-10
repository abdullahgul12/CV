import { AnimatePresence, MotionConfig } from 'motion/react';
import VideoModal, { type ModalVideo } from './VideoModal';

type Props = { video: ModalVideo | null; onClose: () => void };

/** Loaded on demand so the animation library is not part of the initial page load. */
export default function VideoModalHost({ video, onClose }: Props) {
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{video && <VideoModal video={video} onClose={onClose} />}</AnimatePresence>
    </MotionConfig>
  );
}
