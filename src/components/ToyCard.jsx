import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.toy.likes
  }

  updateLikes = () => {
    this.props.patchLikes(this.props.toy)
    this.setState({
      likes: this.state.likes + 1
    })
  }

  handleDelete = e => {
    this.props.deleteToy(this.props.toy.id, e.target.parentNode)
  }

  render() {
    
    const { name, image } = this.props.toy

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button className="like-btn" onClick={this.updateLikes} >Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete} >Donate to GoodWill</button>
      </div>
    )
  }

}

export default ToyCard;
