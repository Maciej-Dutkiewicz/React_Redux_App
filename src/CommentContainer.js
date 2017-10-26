import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './index' //to jest chyba żle powinien być import z akcji???


const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);