import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from './Home';

const mapDispatchToProps = () => ({

});

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
export { mapDispatchToProps };
