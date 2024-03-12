import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [opponent, setOpponent] = useState(null)
  const [result, setResult] = useState(null)
  const hands = {
    pedra: "✊",
    papel: "🖐",
    tesoura: "✌"
  };
  const choices = Object.keys(hands);

  function move (choice){
    const index = Math.floor(Math.random() * choices.length)

    const pc =choices[index];

    const win1 = choice == 'pedra' && pc == 'tesoura'
    const win2 = choice == 'papel' && pc == 'pedra'
    const win3 = choice == 'tesoura' && pc == 'papel'

    if (choice == pc) {
      setResult("Empate!");
    } else if (win1 || win2 || win3) {
      setResult("Vitoria!");
    } else {
      setResult("Derrota!");
    }

    setOpponent(pc);

  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jokenpo</Text>
      <View style={styles.content}>
        <View>
          <Text style={styles.player}>Oponente</Text>
          <Text style={styles.emoji}>{opponent == null ? '?': hands[opponent]}</Text>
        </View>

        <Text style={[styles.text, styles.bold]}>X</Text>
        <View>
        <Text style={styles.player}>Você</Text>
        <View style={styles.emojibox}>
          {choices.map((item) => (
          <TouchableOpacity key={item} onPress={() => move(item)}>
            <Text style={styles.emoji}>{hands[item]}</Text>
          </TouchableOpacity>
          ))}
        </View>
        </View>
      </View>
      <Text style={styles.text}>Resultado: <Text style={styles.bold}>{result}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal:"20",
    backgroundColor: "#87CEFA"
   
  },
  titulo: {
    fontSize:24,
    fontWeight:"700",
    textAlign:'center'
  },
  content: {
  flex: 1,
  justifyContent: 'space-around', // Isso centralizará os itens horizontalmente
  paddingVertical: 100,
},
player: {
  fontSize: 20,
  textAlign:"center"
},
emoji:{
  fontSize: 32,
  textAlign:"center"
},
emojibox:{
  flexDirection: 'row',
  justifyContent:'space-between',
  fontSize: 32,
},
text:{
  fontSize: 18,
  textAlign:"center"
},
bold:{
  fontWeight: "800",
}

});
