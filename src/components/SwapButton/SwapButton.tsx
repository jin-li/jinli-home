import React from 'react';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import styles from './SwapButton.module.scss';

interface SwapButtonProps {
  swapPanel: () => void;
  currentPanel: 'left' | 'right';
}

const SwapButton: React.FC<SwapButtonProps> = ({ swapPanel, currentPanel }) => {
  return (
    <button 
      onClick={swapPanel}
      className={styles.swap}
    >
      {currentPanel === 'left' ? <FaAnglesRight /> : <FaAnglesLeft />}
    </button>
  );
};

export default SwapButton;