import React, { Component } from 'react';
import Header from '../Headers/index';
import MovieCard from '../MoviCard';
import SideNav from '../SideNav/index';
import './style.css';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    const { show } = this.state;
    const testingdata = {
      styleType: 'style1',
      title: 'Toy Story',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum,temporibus doloribus autem tenetur quidem? Beatae.',
      imgUrl: 'https://via.placeholder.com/150',
      imgTitle: 'Toy Story Image',
      likes: 1542563,
      watched: 15422,
      released: '12/5/1995',
    };
    const {
      styleType,
      title,
      description,
      imgUrl,
      imgTitle,
      likes,
      watched,
      released,
    } = testingdata;

    return (
      <div className="Layout">
        <Header />
        <div className="main-content">
          <SideNav />
          <div className="MovieContainer">
            <MovieCard
              styleType="style2"
              imgUrl={imgUrl}
              watched={watched}
              title={title}
              description={description}
              imgTitle={imgTitle}
              likes={likes}
              released={released}
            />
            <MovieCard
              styleType={styleType}
              imgUrl={imgUrl}
              watched={watched}
              title={title}
              description={description}
              imgTitle={imgTitle}
              likes={likes}
              released={released}
            />
            <MovieCard
              styleType="style1"
              imgUrl={imgUrl}
              watched={watched}
              title={title}
              description={description}
              imgTitle={imgTitle}
              likes={likes}
              released={released}
            />
          </div>
        </div>
        <div>{show}</div>
      </div>
    );
  }
}
