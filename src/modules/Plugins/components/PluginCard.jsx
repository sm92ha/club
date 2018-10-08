import React, { Component } from 'react';
import { withStyles, Card, CardMedia, CardContent, Grid, CardActionArea } from '@material-ui/core'
import styles from '../styles/PluginCard';

class PluginCard extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid md={3} sm={6} xs={12} item>
        <Card className={classes.card}>
          <CardActionArea
            className={classes.cardActionArea}
            onClick={e => console.log('open modal') }
          >
            <CardMedia
              image={require('../../../assets/images/global/logo.jpg')}
              className={classes.pluginImage}
            />
            <CardContent classes={{ root: classes.cardContent }}>
              <Grid container direction="row" alignItems="baseline" spacing={16}>
                <h4 className={classes.pluginLabel}>نام افزونه</h4>
                <span>:</span>
                <span className={classes.pluginName}>ارسال  پیامک به مشتریان</span>
              </Grid>
              <Grid container direction="row" alignItems="baseline" spacing={16}>
                <h4 className={classes.pluginLabel}>قیمت</h4>
                <span>:</span>
                <span className={classes.pluginPrice}>2000</span>
              </Grid>
              <Grid container direction="row" alignItems="baseline" spacing={16}>
                <h4 className={classes.pluginLabel}>تاریخ انقضا</h4>
                <span>:</span>
                <span className={classes.pluginExpireDate}>1397/1/1</span>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>

      </Grid>
    );
  }
}

export default withStyles(styles)(PluginCard);