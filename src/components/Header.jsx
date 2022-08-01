import { ShoppingCart } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                variant="h6"
                component="span"
                sx={{flexGrow: 1}}>
                    Flower Shop
                </Typography>
                <IconButton color="inherit">
                    <ShoppingCart />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header