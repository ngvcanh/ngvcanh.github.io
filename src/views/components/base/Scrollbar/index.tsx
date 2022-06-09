import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import { positionValues, Scrollbars } from "react-custom-scrollbars-2";
import { ScrollbarComponent, ScrollbarElementRenderProps } from "./types";
import { ScrollbarView, Thumb, Track } from "./styled";
import clsx from 'clsx';

const Scrollbar: ScrollbarComponent = (props, ref) => {

  const { 
    children, 
    className, 
    style = {}, 
    width = '100%', 
    height = '100%',
    autoHide,
    onStop,
    onUpdate
  } = props;

  const scrollbarRef = useRef<Scrollbars>(null);
  const hTractRef = useRef<HTMLDivElement>(null);
  const hThumbRef = useRef<HTMLDivElement>(null);
  const vTractRef = useRef<HTMLDivElement>(null);
  const vThumbRef = useRef<HTMLDivElement>(null);

  const [ vEnabled, setVEnabled ] = useState(false);
  const [ hEnabled, setHEnabled ] = useState(false);
  const [ CurrentValues, setCurrentValues ] = useState<positionValues>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!scrollbarRef.current) return;

    const values = scrollbarRef.current.getValues();
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = values;

    CurrentValues || setCurrentValues(values);
    setVEnabled(scrollHeight > clientHeight);
    setHEnabled(scrollWidth > clientWidth);
  });


  useImperativeHandle(ref, () => ({
    container: scrollbarRef.current,
    horizontalThumb: hThumbRef.current,
    horizontalTrack: hTractRef.current,
    verticalThumb: vThumbRef.current,
    verticalTrack: vTractRef.current
  }));

  const onScrollStop = () => {
    scrollbarRef.current && onStop && onStop(scrollbarRef.current.getValues());
  }

  const View = ({ style }: ScrollbarElementRenderProps) => (
    <ScrollbarView renderStyle={ style } className="scrollbar-view" />
  )

  const TrackHorizontal = ({ style }: ScrollbarElementRenderProps) => (
    <Track 
      className="scrollbar-horizontal-track"
      renderStyle={ style } 
      variant="horizontal"
      enabled={ hEnabled }
      autoHide={ !!autoHide }
      ref={ hTractRef }
    />
  );

  const TrackVertical = ({ style }: ScrollbarElementRenderProps) => (
    <Track 
      className="scrollbar-vertical-track"
      renderStyle={ style } 
      variant="vertical"
      enabled={ vEnabled }
      autoHide={ !!autoHide }
      ref={ vTractRef }
    />
  );

  const ThumbVertical = ({ style }: ScrollbarElementRenderProps) => (
    <Thumb
      renderStyle={ style }
      variant="vertical"
      className="scrollbar-vertical-thumb"
      ref={ vThumbRef }
    />
  );

  const ThumbHorizontal = ({ style }: ScrollbarElementRenderProps) => (
    <Thumb
      renderStyle={ style }
      variant="horizontal"
      className="scrollbar-horizontal-thumb"
      ref={ hThumbRef }
    />
  );

  return <Scrollbars 
    ref={ scrollbarRef }
    className={ clsx('scrolbar-container', className) }
    style={{ ...style, width, height, minHeight: height }}
    onScrollStop={ onScrollStop }
    autoHide={ autoHide }
    renderTrackVertical={ TrackVertical }
    renderThumbVertical={ ThumbVertical }
    renderTrackHorizontal={ TrackHorizontal }
    renderThumbHorizontal={ ThumbHorizontal }
    renderView={ View }
    onUpdate={ onUpdate }
  >
    { children }
  </Scrollbars>

}

export default forwardRef(Scrollbar);