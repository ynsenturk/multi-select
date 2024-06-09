import { View, Image, StyleSheet } from "react-native";
import { ICharacterListItem } from "./CharacterLıstItem";
import { ThemedText } from "../ThemedText";
import * as S from "./styled";

type CharacterListItem = {
  character: ICharacterListItem.Character;
  value?: string;
};

export const CharacterListItem: React.FC<CharacterListItem> = ({
  character,
  value,
}) => {
  const valueLower = value?.toLowerCase() ?? "";
  const startIndex = character.name.toLowerCase().indexOf(valueLower);
  const endIndex = startIndex !== -1 ? startIndex + valueLower.length : -1;

  return (
    <S.Container>
      <View>
        <Image source={{ uri: character.image }} style={styles.image} />
      </View>
      <S.Info>
        <ThemedText style={styles.name}>
          {startIndex > 0 && character.name.substring(0, startIndex)}
          {startIndex !== -1 && (
            <ThemedText style={{ fontWeight: "bold" }}>
              {character.name.substring(startIndex, endIndex)}
            </ThemedText>
          )}
          {endIndex !== -1 && character.name.substring(endIndex)}
          {startIndex === -1 && character.name}
        </ThemedText>
        <ThemedText
          style={styles.episode}
        >{`${character.episode.length} Episodes`}</ThemedText>
      </S.Info>
    </S.Container>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#48566a",
  },
  episode: {
    fontSize: 16,
    fontWeight: "500",
    color: "#64758b",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
});
