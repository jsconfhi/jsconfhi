import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Mousetrap from 'mousetrap';
import React from 'react';
import speakerData from '../../data/speakers';
import styled from 'styled-components';
import theme from '../../theme';

const largeProfileSize = 120;
const mediumProfileSize = 90;
const smallProfileSize = 75;

const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: ${theme.spaces.medium};

  @media (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
  }
`;

// NOTE: Is this too complicated? makes it span edge to edge
const ImagesScrollPlaceholder = styled.div`
  height: ${smallProfileSize + 10}px;
  margin-bottom: ${theme.spaces.medium};
  display: none;
  @media (max-width: ${theme.breakpoints.small}) {
    display: block;
  }
`;
const ImagesScrollContainer = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y auto;
  max-height: 100vh;
  margin-right: ${theme.spaces.medium};
  padding-right: -17px;
  @media (max-width: ${theme.breakpoints.small}) {
    overflow-x: auto;
    overflow-y: hidden;
    position: absolute;
    max-width: 100vw;
    left: 0;
    flex-basis: auto;
    flex-grow: 0;
  }
`;
const Images = styled.div`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${largeProfileSize}px, 1fr));
  grid-gap: ${theme.spaces.small};

  @media (max-width: ${theme.breakpoints.small}) {
    display: flex;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  @media (max-width: ${theme.breakpoints.medium}) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${mediumProfileSize}px, 1fr)
    );
  }
`;

const SelectedSpeaker = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 1.5em;
`;

const Info = styled.div`
  background-color: ${theme.colors.textWhite};
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${theme.spaces.large};
  @media (max-width: ${theme.breakpoints.small}) {
    padding: ${theme.spaces.medium};
  }
`;

const InfoLabel = styled.h3`
  font-size: ${theme.fontSizes.xLarge};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${theme.spaces.micro};
  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSizes.large};
  }
`;

const Image = styled.img`
  border-radius: 50%;
  border: 4px solid transparent;
  height: ${largeProfileSize}px;
  width: ${largeProfileSize}px;
  margin-bottom: ${theme.spaces.medium};
  flex-shrink: 0;
  &:hover {
    border: 4px solid ${theme.colors.textYellow};
  }
  ${props =>
    props.focused
      ? `border: 4px solid ${theme.colors.textYellow} !important`
      : undefined};
  @media (max-width: ${theme.breakpoints.medium}) {
    height: ${mediumProfileSize}px;
    width: ${mediumProfileSize}px;
  }
  @media (max-width: ${theme.breakpoints.small}) {
    height: ${smallProfileSize}px;
    width: ${smallProfileSize}px;
    margin-bottom: 0;
  }
`;

const Name = styled.h2`
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  line-height: 1.2em;
  color: ${theme.colors.textYellow};
  margin-bottom: ${theme.spaces.medium};
`;

const Socials = styled.span`
  margin: ${theme.spaces.medium} 0 ${theme.spaces.large};
`;
const SocialLink = styled.a`
  text-decoration: none;
`;
const FAIcon = styled(FontAwesomeIcon)`
  width: 1.3em !important;
`;

class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this._imagesRef = React.createRef();
    this._orderedData = speakerData.sort(
      (a, b) => (a.name === b.name ? 0 : a.name > b.name ? -1 : 1)
    );
    this.state = {
      currentName: this._orderedData[0] && this._orderedData[0].name
    };
  }

  componentDidMount() {
    // Bind mousetrap?
    Mousetrap.bind(['down', 'right'], this._focus(1));
    Mousetrap.bind(['up', 'left'], this._focus(-1));
  }

  componentWillUnmount() {
    Mousetrap.reset();
  }

  render() {
    const { currentName } = this.state;

    const selectedSpeaker = this._orderedData.find(
      item => item.name === currentName
    );

    return (
      <Container>
        <ImagesScrollPlaceholder />
        <ImagesScrollContainer>
          <Images innerRef={this._imagesRef}>
            {this._orderedData.map(item => (
              <Image
                alt={item.name}
                focused={item.name === currentName}
                key={item.name}
                onClick={this._handleImageClick(item.name)}
                src={item.avatar}
              />
            ))}
          </Images>
        </ImagesScrollContainer>
        <SelectedSpeaker>
          <Name>{selectedSpeaker.name}</Name>
          <Info>
            <InfoLabel>Bio</InfoLabel>
            {selectedSpeaker.bio}

            <Socials>
              <FAIcon icon={faTwitter} />{' '}
              <SocialLink
                href={`https://twitter.com/${selectedSpeaker.twitter}`}
                target="_blank"
              >
                @{selectedSpeaker.twitter}
              </SocialLink>
            </Socials>

            <InfoLabel>Presenting</InfoLabel>
            {selectedSpeaker.talk}
          </Info>
        </SelectedSpeaker>
      </Container>
    );
  }

  _setImagesRef = ref => (this._imagesRef = ref);
  _handleImageClick = name => () => this.setState({ currentName: name });
  _focus = amount => e => {
    e.preventDefault();
    const currentIndex = this._orderedData.findIndex(
      item => item.name === this.state.currentName
    );
    const newIndex = Math.min(
      Math.max(0, currentIndex + amount),
      this._orderedData.length - 1
    );
    this.setState({ currentName: this._orderedData[newIndex].name });
    this._imagesRef &&
      this._imagesRef.current.children[newIndex].scrollIntoView({
        block: 'nearest'
      });
  };
}

export default Speakers;
