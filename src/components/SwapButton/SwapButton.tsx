import React from 'react';
import { FaAnglesRight, FaAnglesLeft } from 'react-icons/fa6'; // Import the icons
import styles from './SwapButton.module.scss';

interface Props {
  onSwap: () => void;
  showLeft: boolean; // Add showLeft as a prop
}

const SwapButton: React.FC<Props> = ({ onSwap, showLeft }) => (
  <button
    onClick={onSwap}
    className={styles.swap}
  >
    {showLeft ? <FaAnglesRight /> : <FaAnglesLeft />} {/* Conditionally render the icon */}
  </button>
);

export default SwapButton;