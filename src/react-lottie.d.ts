declare module 'react-lottie' {
    import { Component } from 'react';
  
    interface LottieOptions {
      loop?: boolean;
      autoplay?: boolean;
      animationData: any;
      rendererSettings?: {
        preserveAspectRatio?: string;
      };
    }
  
    interface LottieProps {
      options: LottieOptions;
      height?: number | string;
      width?: number | string;
      isStopped?: boolean;
      isPaused?: boolean;
      eventListeners?: Array<{
        eventName: string;
        callback: () => void;
      }>;
      segments?: [number, number] | boolean;
      speed?: number;
      direction?: number;
      ariaRole?: string;
      ariaLabel?: string;
      isClickToPauseDisabled?: boolean;
      title?: string;
    }
  
    export default class Lottie extends Component<LottieProps> {}
  }
  