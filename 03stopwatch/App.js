import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';

function Timer({ interval }) {
  const pad = n => (n < 10 ? '0' + n : n);
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timer}>{pad(duration.minutes())}:</Text>
      <Text style={styles.timer}>{pad(duration.seconds())}:</Text>
      <Text style={styles.timer}>{pad(centiseconds)}</Text>
    </View>
  );
}

function RoundButton({ title, color, background, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: background }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

function ButtonsRow({ children }) {
  return <View style={styles.buttonsRow}>{children}</View>;
}

function Lap({ number, interval }) {
  return (
    <View style={styles.lap}>
      <Text style={styles.lapText}>Lap {number}</Text>
      <Timer style={styles.lapInterval} interval={interval} />
    </View>
  );
}

function LapsTable({ laps, timer }) {
  return (
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <Lap
          key={index}
          number={laps.length - index}
          interval={index === 0 ? timer + lap : lap}
        />
      ))}
    </ScrollView>
  );
}

export default class App extends React.Component {
  state = {
    start: 0,
    now: 0,
    laps: []
  };

  start = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
      laps: [0]
    });

    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime() });
    }, 100);
  };

  lap = () => {
    const timestamp = new Date().getTime();

    const { laps, now, start } = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp
    });
  };

  stop = () => {
    clearInterval(this.timer);

    const { laps, now, start } = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0
    });
  };

  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0
    });
  };

  resume = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now
    });
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime() });
    }, 100);
  };

  render() {
    const { start, now, laps } = this.state;
    const timer = now - start;

    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>StopWatch</Text>
        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
        />
        {laps.length === 0 && (
          <ButtonsRow>
            <RoundButton
              title="Reset"
              color="#c0c0c0"
              background="#fff"
              onPress={this.reset}
            />
            <RoundButton
              title="Start"
              color="#50D617"
              background="#fff"
              onPress={this.start}
            />
          </ButtonsRow>
        )}
        {start > 0 && (
          <ButtonsRow>
            <RoundButton
              title="Lap"
              color="#c0c0c0"
              background="#fff"
              onPress={this.lap}
            />
            <RoundButton
              title="Stop"
              color="red"
              background="#fff"
              onPress={this.stop}
            />
          </ButtonsRow>
        )}
        {laps.length > 0 &&
          start === 0 && (
            <ButtonsRow>
              <RoundButton
                title="Reset"
                color="#c0c0c0"
                background="#fff"
                onPress={this.reset}
              />
              <RoundButton
                title="Start"
                color="#50D617"
                background="#fff"
                onPress={this.resume}
              />
            </ButtonsRow>
          )}

        <LapsTable laps={laps} timer={timer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  appTitle: {
    fontSize: 24,
    fontWeight: '300',
    paddingTop: 50
  },
  timerContainer: {
    flexDirection: 'row'
  },
  timer: {
    fontSize: 36,
    marginTop: 10,
    width: 60
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 10
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 24
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderColor: '#a1A1A1',
    borderTopWidth: 1
  },
  lapText: {
    fontSize: 18,
    width: 30
  },
  lapInterval: {
    fontSize: 20
  },
  scrollView: {
    alignSelf: 'stretch',
    marginTop: 40
  }
});
