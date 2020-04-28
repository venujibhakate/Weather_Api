import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';


class Info extends Component {
    render() {
        const { Image, classes } = this.props
        return (
            <div className={classes.mainDiv}>
                {Image.map((Image, index) => (

                    <Box my={2} style={{ minWidth: 500, background: "#F8F8FF" }}>
                        <Grid container xs={12} style={{ padding: 10 }} component="main" maxWidth="xs">
                            <Grid item xs={4}>
                                <Typography >{Image.name}</Typography>
                                <img className={classes.Flagimage} alt='thumbnail' src={Image.flag} />
                                <Typography >Capital:-{Image.capital}</Typography>
                                <Typography >Population:-{Image.population}</Typography>

                                <div>
                                    <Link
                                        to={{
                                            pathname: "/Whether",
                                            state: {
                                                Image: Image.capital,
                                            },
                                        }}
                                    >
                                        <Button variant="contained" color="primary">
                                            Check the Whether
                            </Button>
                                    </Link>
                                </div>
                            </Grid>

                        </Grid>
                    </Box>

                ))}
            </div>
        )
    }
}
export default withStyles({
    mainDiv: {
        // display:'flex',
        marginRight: '50%',

    },
    Flagimage: {
        width: '30ch',
    },
})
    (Info);