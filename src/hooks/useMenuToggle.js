import {useState} from "react";

export const useMenuToggle = (initialValue = null) => {
    const [anchorEl, setAnchorEl] = useState(initialValue);
    const open = Boolean(anchorEl);
    const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
    const handleMenuClose = (e) => setAnchorEl(null);

    return { anchorEl, setAnchorEl, open, handleMenuOpen, handleMenuClose };
};