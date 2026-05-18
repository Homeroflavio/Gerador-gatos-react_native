import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Vibration, Dimensions, SafeAreaView } from 'react-native';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;

export default function App() {
  const [cats, setCats] = useState([]);
  const [contador, setContador] = useState(0);

  const gerarGato = () => {
    const newCat = { id: new Date().getTime().toString(), url: "https://cataas.com/cat?" + new Date().getTime() };
    setCats(prevCats => [...prevCats, newCat]);
    setContador(prev => prev + 1);
    
    // Vibrate device
    Vibration.vibrate(100);
  };

  const limparGatos = () => {
    setCats([]);
    setContador(0);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.catContainer}>
        <Image source={{ uri: item.url }} style={styles.catImage} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>GERADOR DE GATINHOS</Text>
        <Text style={styles.counter}>Gatinhos gerados: {contador}</Text>
      </View>

      {/* Main Content */}
      <FlatList
        data={cats}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={numColumns}
        contentContainerStyle={styles.gallery}
      />

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={gerarGato}>
          <Text style={styles.buttonText}>Gerar Gatinho</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={limparGatos}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19a7b5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  counter: {
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  gallery: {
    padding: 10,
  },
  catContainer: {
    flex: 1,
    margin: 10,
    maxWidth: (screenWidth / numColumns) - 20,
  },
  catImage: {
    width: '100%',
    aspectRatio: 1, // Keep it square or adjust as needed
    borderRadius: 10,
    // Add shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    // Add elevation for Android
    elevation: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#19a7b5',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
