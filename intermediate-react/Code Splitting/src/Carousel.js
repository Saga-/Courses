import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: [''],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className={'carousel'}>
        <img src={images[active]} alt={'animal'} />
        <div className={'carousel-smaller'}>
          {images.map((photo, idx) => (
            <img
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={idx}
              alt={'animal thumbnail'}
              className={idx === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
