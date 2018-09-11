import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from "react";
import speakerData from '../../data/speakers';
import styled from "styled-components";
import theme from "../../theme";

const largeProfileSize = 125;
const mediumProfileSize = 100;
const smallProfileSize = 80;

const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: ${theme.spaces.medium};

  @media (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
  }
`

// NOTE: Is this too complicated? makes it span edge to edge
const ImagesScrollPlaceholder = styled.div`
  height: ${smallProfileSize}px;
  margin-bottom: ${theme.spaces.medium};
  display: none;
  @media (max-width: ${theme.breakpoints.small}) {
    display: block;
  }
`;
const ImagesScrollContainer = styled.div`
  flex: 1;
  overflow-x: hidden;
  @media (max-width: ${theme.breakpoints.small}) {
    position: absolute;
    left: 0;
    flex-basis: auto;
    flex-grow: 0;
  }
`
const Images = styled.div`

  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${largeProfileSize + 15}px, 1fr));
  grid-gap: ${theme.spaces.small};

  @media (max-width: ${theme.breakpoints.small}) {
    display: flex;
    flex-wrap: nowrap;
  }
  @media (max-width: ${theme.breakpoints.medium}) {
    grid-template-columns: repeat(auto-fill, minmax(${mediumProfileSize + 10}px, 1fr));
  }
`

const SelectedSpeaker = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Info = styled.div`
  background-color: ${theme.colors.textWhite};
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${theme.spaces.large};
  @media (max-width: ${theme.breakpoints.small}) {
    padding: ${theme.spaces.medium};
  }
`

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
  &:hover {
    border: 4px solid ${ theme.colors.background90 };
  }
  ${props => props.focused ? `border: 4px solid ${theme.colors.textYellow} !important` : undefined};
  @media (max-width: ${theme.breakpoints.medium}) {
    height: ${mediumProfileSize}px;
    width: ${mediumProfileSize}px;
  }
  @media (max-width: ${theme.breakpoints.small}) {
    height: ${smallProfileSize}px;
    width: ${smallProfileSize}px;
  }
`

const Name = styled.h2`
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  color: ${theme.colors.textYellow};
  margin-bottom: ${theme.spaces.medium};
`

const Socials = styled.span` margin: ${theme.spaces.medium} 0 ${theme.spaces.large};`
const SocialLink = styled.a`
  text-decoration: none;
`
const FAIcon = styled(FontAwesomeIcon)`
  width: 1.3em !important;
`

class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this._orderedData = speakerData.sort((a, b) => a.name == b.name ? 0 : (a.name > b.name ? -1 : 1 ));
    this.state = {
      currentName: this._orderedData[0] && this._orderedData[0].name
    };
  }

  componentDidMount() {
    // Bind mousetrap?
  }

  componentWillUnmount() {
    // Unbind Mousetrap?
  }

  render() {
    const { currentName } = this.state;

    const selectedSpeaker = this._orderedData.find(item => item.name === currentName);

    return (
      <Container>
        <ImagesScrollPlaceholder />
        <ImagesScrollContainer>
          <Images>
            {this._orderedData.map(item => <Image alt={item.name} focused={item.name === currentName} onClick={this._handleImageClick(item.name)} src={item.avatar} />)}
          </Images>
        </ImagesScrollContainer>
        <SelectedSpeaker>
          <Name>{selectedSpeaker.name}</Name>
          <Info>
            <InfoLabel>Bio</InfoLabel>
            {selectedSpeaker.bio}

            <Socials>
              <FAIcon icon={faTwitter} />{' '}
              <SocialLink href={`https://twitter.com/${selectedSpeaker.twitter}`} target="_blank">
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

  _handleImageClick = (name) => () => this.setState({ currentName: name });
}

export default Speakers;