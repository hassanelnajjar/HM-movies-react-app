import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/index';
import './style.css';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }

  handleKeyDown() {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }

  render() {
    const { open } = this.state;
    const {
      styleType,
      imgUrl,
      imgTitle,
      title,
      description,
      likes,
      watched,
      released,
    } = this.props;
    return (
      <div className="MovieCard">
        {open && <Backdrop onClick={this.handleClick} />}
        <div
          className={`${
            styleType === 'style1' ? 'card-header' : 'card-header-style2'
          }`}
        >
          <img src={imgUrl} alt={imgTitle} role="presentation" />
          {styleType === 'style2' && (
            <div className="card-footer-style2">
              <div className="title">
                <h2>{title}</h2>
              </div>
              <div className="card-menu">
                <i
                  className="fas fa-ellipsis-v"
                  onClick={this.handleClick}
                  role="button"
                  tabIndex={0}
                  aria-label="menu"
                  onKeyDown={this.handleKeyDown}
                />
                {open && (
                  <div className="card-menu_list">
                    <ul>
                      <li>
                        <i className="fas fa-edit" />
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                      </li>
                      <li>
                        <i className="fas fa-trash" />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {styleType === 'style1' && (
          <div className="card-main-content">
            <div className="card-main-content__title">
              <h2>{title}</h2>
            </div>
            <div className="card-main-content__description">
              <p>{description}</p>
            </div>
          </div>
        )}
        {styleType === 'style1' && (
          <div className="card-footer">
            <div className="card-footer__content">
              <i className="fas fa-star" />
              <p className="starts">{likes}</p>
            </div>
            <div className="card-footer__content">
              <i className="fas fa-eye" />
              <p className="starts">{watched}</p>
            </div>
            <div className="card-footer__content">
              <i className="fas fa-calendar-alt" />
              <p className="starts">{released}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MovieCard.propTypes = {
  styleType: PropTypes.string,
  imgUrl: PropTypes.string,
  imgTitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  watched: PropTypes.number,
  likes: PropTypes.number,
  released: PropTypes.string,
};

MovieCard.defaultProps = {
  styleType: 'style1',
  imgUrl: 'https://via.placeholder.com/150',
  imgTitle: 'movie poster',
  title: 'Movie Title',
  description: '',
  watched: 0,
  likes: 0,
  released: '20/2/2020',
};

export default MovieCard;
