import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './charts/chart';
import Card from './charts/card';

class Dashboard extends Component {
  
    render() { 
        const {classes, fixedHeightPaper } = this.props;
        return ( <div>
             <div className={classes.appBarSpacer}  />
             <div className={classes.homeCompo}>Dashboard</div>
            <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={5}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={8}>
              <Paper className={fixedHeightPaper}> 
              <Chart classes={classes}/>
            </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <Card i={2}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <Paper className={fixedHeightPaper}>
              <Card i={3}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <Paper className={fixedHeightPaper}>
              <Card i={4}/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        </div>);
    }
}

export default Dashboard;