import { ActivityIndicator, FlatList, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome6, Entypo, Feather } from "@expo/vector-icons";

import { IMultiSelect } from "./MultiSelect";
import * as S from "./styled";
import { CharacterListItem } from "../characterListItem";
import { ThemedText } from "../ThemedText";

export const MultiSelect: React.FC<IMultiSelect.Props> = ({
  items,
  loading,
  value,
  setValue,
}) => {
  const [checkedItems, setCheckedItems] = useState<IMultiSelect.Item[]>([]);

  const renderItem = ({ item }: { item: IMultiSelect.Item }) => {
    const isChecked = checkedItems.some(
      (checkedItem) => checkedItem.id === item.id
    );

    return (
      <S.Selectable
        onPress={() => {
          setCheckedItems((prevItems) => {
            if (prevItems.some((checkedItem) => checkedItem.id === item.id)) {
              return prevItems.filter(
                (checkedItem) => checkedItem.id !== item.id
              );
            } else {
              return [...prevItems, item];
            }
          });
        }}
      >
        <S.Check checked={isChecked}>
          {isChecked && <Entypo name="check" size={22} color="white" />}
        </S.Check>
        <CharacterListItem character={item} value={value} />
      </S.Selectable>
    );
  };

  return (
    <S.Container>
      <S.Input>
        <View
          style={{
            maxWidth: 150,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {checkedItems.map((item) => (
            <S.CheckedItem>
              <ThemedText>{item.name}</ThemedText>
              <S.RemoveItem
                onPress={() => {
                  setCheckedItems((prevItems) =>
                    prevItems.filter((i) => i !== item)
                  );
                }}
              >
                <Feather name="x" size={22} color="white" />
              </S.RemoveItem>
            </S.CheckedItem>
          ))}
        </View>
        <TextInput
          style={{ fontSize: 16, flex: 12, marginTop: 5 }}
          value={value}
          onChangeText={(text: string) => setValue?.(text)}
        />
        <S.OpenButton>
          <FontAwesome6
            name="caret-down"
            size={24}
            color="#475569"
            style={{ flex: 1 }}
          />
        </S.OpenButton>
      </S.Input>
      <FlatList
        style={{ width: "100%" }}
        data={items}
        renderItem={renderItem}
        contentContainerStyle={{
          borderWidth: 1,
          borderColor: "#94a3b8",
          borderRadius: 15,
        }}
        ListFooterComponent={() => loading && <ActivityIndicator />}
        initialNumToRender={3}
      />
    </S.Container>
  );
};
