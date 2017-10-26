import {connect} from 'react-redux';
import Comment from './Comment';
import {
  thumbUpComment,
  thumbDownComment,
  editComment,
  removeComment
} from './actions';


const mapDispatchToProps = dispatch => ({
  thumbUpComment(id) {
    dispatch(thumbUpComment(id));
  },
  thumbDownComment(id) {
    dispatch(thumbDownComment(id));
  },
  editComment(id) {
    dispatch(editComment(id));
  },
  removeComment(id) {
    dispatch(removeComment(id));
  }
});

export default connect(null, mapDispatchToProps)(Comment);