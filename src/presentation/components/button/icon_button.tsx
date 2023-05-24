import { IconButton, SxProps } from '@mui/material';
import { ReactNode } from 'react';
interface PropTypes {
    children: ReactNode;
    size?: 'small' | 'medium' | 'large';
    handleClick?: (event: any) => any;
    style?: SxProps;
    disabled?: boolean;
}
function CustomIconButton({
    children,
    size,
    handleClick,
    style,
    disabled = false,
}: PropTypes) {
    return (
        <IconButton
            disabled={disabled}
            onClick={handleClick}
            size={size ?? 'small'}
            sx={style}
        >
            {children}
        </IconButton>
    );
}
export default CustomIconButton;
