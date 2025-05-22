import React, { useState, useEffect } from 'react';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import useOrientation from '../../hooks/useOrientation';
import { useSwipeable } from 'react-swipeable';
import styles from './PanelContainer.module.scss';
import SwapButton from '../../components/SwapButton/SwapButton';

const PanelContainer: React.FC = () => {
  const orientation = useOrientation();
  const [isDoublePanel, setIsDoublePanel] = useState<boolean>(
    orientation === 'landscape'
  );
  const [activePanel, setActivePanel] = useState<'left' | 'right'>('left');

  useEffect(() => {
    setIsDoublePanel(orientation === 'landscape');
  }, [orientation]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isDoublePanel && activePanel === 'left') {
        setActivePanel('right');
      }
    },
    onSwipedRight: () => {
      if (!isDoublePanel && activePanel === 'right') {
        setActivePanel('left');
      }
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  const swapPanel = () => {
    setActivePanel((prev) => (prev === 'left' ? 'right' : 'left'));
  };

  return (
    <div className={styles.container}>
      {isDoublePanel ? (
        <>
          <div className={styles.panel}>
            <LeftPanel />
          </div>
          <div className={styles.panel}>
            <RightPanel />
          </div>
        </>
      ) : (
        <div {...handlers} className={styles.panel}>
          {activePanel === 'left' ?
            <>
              <LeftPanel />
              <SwapButton swapPanel={swapPanel} currentPanel={activePanel} />
            </> :
            <>
              <RightPanel />
              <SwapButton swapPanel={swapPanel} currentPanel={activePanel} />
            </>}
        </div>
      )}
    </div>
  );
};

export default PanelContainer;
