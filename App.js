import { StyleSheet, Text, View, FlatList, SafeAreaView  } from 'react-native';
import React from 'react';
import LanguageItem from './components/LanguageItem';

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={langs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <LanguageItem logo={item.logo} lang={item.lang} experience={item.experience} />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const langs = [
  { id: '1', lang: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', experience: 3 },
  { id: '2', lang: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Java_logo.svg/468px-Java_logo.svg.png?20230113103550', experience: 2 },
  { id: '3', lang: 'Swift', logo: 'https://cdn.worldvectorlogo.com/logos/swift-15.svg', experience: 2}
]
