import React, { Component } from 'react'
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Whether extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        const response = await axios.get('http://api.weatherstack.com/current?access_key=cc4d37ded5d706e23d86647a0ed4f816&query=' + this.props.location.state.Image, {

        })

        console.log(response)
        this.setState({ data: response.data.current })
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.main}>
                <Typography className={classes.text}>Check Wheather</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Weather_icons</TableCell>
                                <TableCell align="right">Temperature</TableCell>
                                <TableCell align="right">Wind_speed</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableCell><img alt='thumbnail' src={this.state.data.weather_icons} /></TableCell>
                            <TableCell align="right">{this.state.data.temperature}</TableCell>
                            <TableCell align="right">{this.state.data.wind_speed}</TableCell>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}
export default withStyles({
    main: {
        marginLeft: '25%',
        width: '50%',
        marginTop: '8%'
    },
    text: {
        marginLeft: '7%',
    },
    cardText: {
        width: '40ch'

    }
})
    (Whether);