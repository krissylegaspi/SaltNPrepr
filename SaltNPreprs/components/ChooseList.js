import React, { Component } from 'react';
import { View } from 'react-native';
import {
    SectionedMultiSelect
} from 'react-native-sectioned-multi-select';

const items = [
  // this is the parent or 'item'
  {
    name: 'Fruits',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],
  },
  {
    // next parent item
//    ...
  },

];

console.log(items)

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      selectedItems2: [],
      selectedItemsObjects: [],
      currentItems: [],
      
    }
    this.termId = 100
  }

  omponentWillMount() {
    // this.fetchCategories()
    this.pretendToLoad()
  }
  componentDidMount() {
    // programatically opening the select
    // this.SectionedMultiSelect._toggleSelector();
  }
  
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    return (
      <View>
        <SectionedMultiSelect
          items={items}
          uniqueKey="id"
          subKey="children"
          selectText="Choose some things..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </View>
    );
  }
}