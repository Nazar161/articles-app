import React from "react";



import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem} from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map(item => {
        if(typeof item === 'object' && isEmpty(item)) {
            const {id, ...itemProps} = item;
            return (            
                <ListGroupItem key={id}>
                    <PostListItem 
                    // label={item.label} 
                    // important={item.important}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    />
                </ListGroupItem>
            )
        }
    });

    function isEmpty(obj) {
        for(let key in obj)
        {
            if (key === 'label'){
                return true;
            }
        }
        return false;
    }

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
        
    )
}

export default PostList;