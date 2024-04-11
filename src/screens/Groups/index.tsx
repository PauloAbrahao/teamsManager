import React from "react";
import {Container} from "./styles";
import {Header} from "@components/Header";
import {Highlight} from "@components/Highlight";
import {GroupCard} from "@components/GroupCard";
import {FlatList} from "react-native";
import {ListEmpty} from "@components/ListEmpty";
import {Button} from "@components/Button";

import {useNavigation} from "@react-navigation/native";

export function Groups() {
  const navigation = useNavigation();
  const [groups, setGroups] = React.useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate("new");
  }
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({item}) => <GroupCard title={item} />}
        contentContainerStyle={
          groups.length === 0 && {
            flex: 1,
          }
        }
        ListEmptyComponent={() => (
          <ListEmpty message="Cadastre sua primeira turma" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
