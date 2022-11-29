import React, { Component } from "react";

class Result extends Component {
  state = {};
  render() {
    let { name, img, actorname, nickname, birthday, status } = this.props;
    return (
      <>
        <div class='flip-card'>
          <div class='flip-card-inner'>
            <div class='flip-card-front'>
              <img className='aboutmain' src={img} alt='Avatar' />
            </div>
            <div class='flip-card-back'>
              <h1>{name}</h1>
              <ul>
                <li>
                  <strong>Actor Name : </strong> {actorname}
                </li>
                <li>
                  <strong>Nickname : </strong>
                  {nickname}
                </li>
                <li>
                  <strong>Birthday : </strong>
                  {birthday}
                </li>
                <li>
                  <strong>Status : </strong>
                  {status}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
