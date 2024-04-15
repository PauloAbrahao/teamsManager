import React, {useCallback} from "react";
import {Container} from "./styles";
import {Header} from "@components/Header";
import {Highlight} from "@components/Highlight";
import {GroupCard} from "@components/GroupCard";
import {FlatList} from "react-native";
import {ListEmpty} from "@components/ListEmpty";
import {Button} from "@components/Button";

import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {groupsGetAll} from "@storage/group/groupsGetAll";

export function Groups() {
  const navigation = useNavigation();
  const [groups, setGroups] = React.useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (err) {}
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

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
