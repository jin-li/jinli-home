import React from 'react';
import styles from './SwapButton.module.scss';

interface Props {
  onSwap: () => void;
}

const SwapButton: React.FC<Props> = ({ onSwap }) => (
  <button
    onClick={onSwap}
    className={styles.swap}
  >
    切换面板
  </button>
);

export default SwapButton;
