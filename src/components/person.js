import React from "react";
import styled from "styled-components";
import { FiUser } from "react-icons/fi";

const Name = styled.div`
  text-align: center;
  line-height: 22px;
  padding: 10px 20px 20px;
  margin-right: 1em;
  a {
    color: #d95b5b;
    font-weight: bold;
  }
`;

const Image = styled.img`
  border-radius: 130px;
  height: 170px;
  width: 170px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
`;

const SVGContainer = styled.div`
  border-radius: 130px;
  height: 170px;
  width: 170px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  svg {
    font-size: 170px;
    background: white;
    padding: 30px 40px 0 40px;
    border-radius: 50px;
    cursor: initial;
  }
`;

const PersonButtonContainer = styled.button`
  margin-bottom: 20px;
  background: white;
  border: white;
  font-size: 18px;
  width: 200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const PersonContainer = styled.div`
  width: 200px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

function Person(props) {
  const { person, onClick } = props;
  const stopPropagation = e => {
    // Do not open modal
    e.stopPropagation();
    return false;
  };

  const isClickable = !!onClick;

  return isClickable ? (
    <PersonButtonContainer
      className="isClickable"
      key={person.name}
      onClick={onClick}
    >
      <Image src={person.img} alt="" />
      <Name>
        <div>{person.name}</div>
        {person.handle && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={stopPropagation}
            href={`https://twitter.com/${person.handle}`}
          >
            @{person.handle}
          </a>
        )}
      </Name>
    </PersonButtonContainer>
  ) : (
    <PersonContainer key={person.name}>
      {person.img ? (
        <Image src={person.img} alt="" />
      ) : (
        <SVGContainer>
          <FiUser />
        </SVGContainer>
      )}
      <Name>
        <div>{person.name}</div>
        {person.handle && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={stopPropagation}
            href={`https://twitter.com/${person.handle}`}
          >
            @{person.handle}
          </a>
        )}
        {person.email && (
          <div>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </div>
        )}
      </Name>
    </PersonContainer>
  );
}

export default Person;
