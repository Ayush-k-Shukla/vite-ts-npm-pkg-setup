import { IconButton } from '@mui/material';
import { MouseEventHandler } from 'react';
import CustomCircularProgress from '../progress/circular_progress.component';
import styles from './styles.module.scss';
interface PropsInterface {
    variant:
        | 'filled'
        | 'tonal'
        | 'elevated'
        | 'outline'
        | 'fab'
        | 'inverse-primary';
    label: string;
    disabled?: boolean;
    onButtonClick: MouseEventHandler<HTMLButtonElement>;
    prependIcon?: JSX.Element;
    appendIcon?: JSX.Element;
    size?: 'small' | 'medium' | 'large';
    borderless?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
}

function CustomButton({
    variant,
    label,
    disabled = false,
    onButtonClick,
    prependIcon,
    appendIcon,
    size = 'medium',
    borderless = false,
    loading = false,
    fullWidth = false,
}: PropsInterface) {
    const getLoaderColorByButtonVariant = () => {
        switch (variant) {
            case 'inverse-primary':
            case 'filled': {
                return 'inherit';
            }
            case 'tonal':
            case 'elevated':
            case 'outline': {
                return 'primary';
            }

            default:
                return 'primary';
        }
    };
    return (
        <IconButton
            size={size}
            onClick={onButtonClick}
            style={{
                padding: 0,
                cursor: disabled ? 'not-allowed' : '',
                pointerEvents: disabled ? 'none' : 'all',
            }}
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
        >
            <button
                className={`btn-${variant}-${
                    disabled ? 'disabled' : 'default'
                } ${borderless ? 'btn-borderless' : ``}
                ${size ? `btn-${size}` : ''}

                `}
                disabled={disabled}
            >
                <span
                    className={`${styles.btnBody} ${
                        loading ? styles.btnLoading : ''
                    }`}
                >
                    <span className={styles.btnLoader}>
                        <CustomCircularProgress
                            center="center_y"
                            color={getLoaderColorByButtonVariant()}
                        />
                    </span>
                    <span className={styles.label}>
                        {!disabled && prependIcon}
                        {label}
                        {!disabled && appendIcon}
                    </span>
                </span>
            </button>
        </IconButton>
    );
}

export default CustomButton;
