import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import {InputAdornment, InputBase} from "@material-ui/core";

const SearchInput = (props) => {
    return(
        <InputBase
            placeholder="Buscar o empezar nuevo chat"
            fullWidth
            {...props}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            } />
    );
};

export default SearchInput;