import React from 'react';
import otters from './otterImageList.json';

const imageStyles = {
  objectFit: 'contain',
  objectPosition: 'center',
  width: '100vw',
  height: '100vh',
};

const containerStyles = {
  backgroundColor: '#000000',
  width: '100vw',
  height: '100vh',
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      otterImageUrl: '',
    }
  }

  componentDidMount() {
    const thirtySeconds = 30000;
    this.getMeANewOtter();
    this.newOtterInterval = setInterval(this.getMeANewOtter, thirtySeconds);
  }

  componentWillUnmount() {
    clearInterval(this.newOtterInterval);
  }

  getMeANewOtter = () => {
    const otterIndex = Math.floor(Math.random() * otters.length);
    this.setState({
      otterImageUrl: otters[otterIndex],
    });

    console.log(`displaying otter #${otterIndex}`);
  }
  

  render() {
    return (
      <div style={containerStyles}>
        <img src={`${process.env.PUBLIC_URL}/otters/${this.state.otterImageUrl}`} alt="awesome random otter innit" style={imageStyles} />
      </div>
    );
  }
}

export default App;
