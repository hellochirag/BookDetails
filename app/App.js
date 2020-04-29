import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {fetchBook, fetchAuthor} from './utils/utils';
import {Header, Empty, List, SearchBar} from './component';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: [],
      data: [],
      selected: [],
      author: [],
      search: '',
      find: true,
    };
  }
  componentDidMount() {
    fetchBook().then((res) => {
      this.setState({mainData: res, data: res});
    });
    fetchAuthor().then((res) => {
      this.setState({author: res});
    });
  }
  list(index) {
    var data = [...this.state.data];
    data[index] = {...this.state.data[index], selected: true};

    this.setState({
      data: data,
    });
  }
  selectedList(index) {
    var data = [...this.state.data];
    data[index] = {...this.state.data[index], selected: false};
    this.setState({
      data: data,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab Screen</Text>
        <SearchBar
          data={this.state.data}
          onChangeText={(text) => {
            const {mainData, data} = this.state;
            if(text?.length)
            {
               const filterArray = data.filter((item, index) => {
                  return item?.Title.toLowerCase().match(text.toLowerCase())
               })
               this.setState({data: filterArray});
            } else {
              this.setState({data: mainData});
            }
          }}
        />
        <View style={styles.flatlist1}>
          <Header value={'Data'} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            renderItem={({item, index}) => (
              <List
                item={item}
                author={this.state.author[index]}
                selected={item.selected}
                data={this.state.data}
                onPress={() => this.list(index)}
              />
            )}
            ListEmptyComponent={() => (
              <Empty value={'There is no data to show check internet'} />
            )}
          />
        </View>
        <View style={styles.flatlist2}>
          <Header value={'Selected Data'} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            renderItem={({item, index}) =>
              item.selected === true ? (
                <List
                  item={item}
                  author={this.state.author[index]}
                  selected={item.selected}
                  onPress={() => this.selectedList(index)}
                />
              ) : null
            }
            ListEmptyComponent={() => (
              <Empty value={'Select any data to add in selected'} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  flatlist1: {
    width: '100%',
    marginHorizontal: 5,
    marginBottom: 24,
    marginTop: 24,
    flex: 0.5,
  },
  flatlist2: {
    width: '100%',
    margin: 5,
    flex: 0.5,
    borderTopWidth: 2,
    borderTopColor: 'red',
  },
});
