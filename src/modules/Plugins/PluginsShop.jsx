import React, { Component } from 'react';
import PluginCard from './components/PluginCard.jsx';
import PluginDialog from './components/PluginDialog';
import { Grid, Typography  } from '@material-ui/core'
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

class PluginsShop extends Component {

constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillMount() {
    
    // fetch data
  }

  handlePageClick(data) {

    // call fetch data
  }

  renderPagination() {
    const { total, pageSize } = this.props;
    if (total != 0)
      return (
        <ReactPaginate
          previousLabel={"قبلی"}
          nextLabel={"بعدی"}
          breakLabel={<a className="page-link">...</a>}
          pageCount={Math.ceil(total / pageSize)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeClassName="active"
          containerClassName="pagination"
          nextClassName="page-item"
          previousClassName="page-item"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          breakClassName="page-item"
        />
      );
  }


  render() {
    return (
      <div>
        <Grid container direction="column" alignItems="center">
          <Typography variant="title" align="right" style={{ width: '100%', marginBottom: '20px' }}>فروشگاه افزونه ها</Typography>
          <Grid container direction="row" spacing={8}>
            <PluginCard type="plugins-shop"/>
            <PluginCard type="plugins-shop"/>
            <PluginCard type="plugins-shop"/>
            <PluginCard type="plugins-shop"/>
            <PluginCard type="plugins-shop"/>
            <PluginCard type="plugins-shop"/>
            <PluginCard type="plugins-shop"/>
            <PluginCard type="plugins-shop"/>
            <PluginCard type="plugins-shop"/>
          </Grid>
          { this.renderPagination() }
          <PluginDialog type="plugins-shop"/>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ pluginsPluginsShop }) => {
  return { ...pluginsPluginsShop };
}

export default compose(
  connect(mapStateToProps)
)(PluginsShop);