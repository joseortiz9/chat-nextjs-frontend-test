import React, {useState} from "react";
import {IconButton, InputAdornment, TextField} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const changeShowPassword = (e) => setShowPassword(!showPassword);
    return(
        <TextField
            label="Contraseña"
            placeholder="**************"
            type={showPassword ? 'text' : 'password'}
            {...props}
            InputProps={{
                endAdornment:
                    (<InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={changeShowPassword}
                            onMouseDown={changeShowPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>)
            }}
        />
    );
};

export default PasswordInput;