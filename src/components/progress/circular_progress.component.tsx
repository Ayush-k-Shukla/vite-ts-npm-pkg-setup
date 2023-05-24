import { CircularProgress } from '@mui/material';
import styles from './circular_progress.module.scss';

interface PropTypes {
    center?: 'center_x' | 'center_y';
    size?: number;
    color?:
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | 'inherit'
        | undefined;
}

function CustomCircularProgress({
    center,
    size = 20,
    color = 'primary',
}: PropTypes) {
    return (
        <CircularProgress
            size={size}
            className={`${styles.container} ${center}`}
            color={color}
        />
    );
}

export default CustomCircularProgress;
