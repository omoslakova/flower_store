import { ShoppingBasket } from "@mui/icons-material"
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"

function Header({handleCart, orderLen}) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                variant="h5"
                component="span"
                align="center"
                sx={{flexGrow: 1}}>
                    Flower Shop
                </Typography>
                <IconButton 
                color="inherit"
                onClick={handleCart}>
                    <Badge
                    color="secondary"
                    badgeContent={orderLen}>
                    <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header