import React from 'react'
import { Card, Image,Button } from 'semantic-ui-react'

function PostCard(props:any) {
  return (
    <div><Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.post.title}</Card.Header>
      <Card.Meta>
        <span className='date'>UserId : {props.post.userId}</span>
      </Card.Meta>
      <Card.Description>
       {props.post.body}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <Button onClick={()=>{props.onDelete(props.post.id)
    }} basic color="red">Kaldır</Button>
    </Card.Content>
  </Card></div>
  )
}

export default PostCard