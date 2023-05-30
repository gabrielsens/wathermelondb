import React, { useRef, useState } from "react";
import { FlatList } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";



import { Container, Title, Input, Form, FormTitle } from "./styles";
import { Menu, MenuTypeProps } from "../../components/components/Menu";
import { Skill } from "../../components/components/Skill";
import { Button } from "../../components/components/Button";

import { database } from "../../databases";
import { SkillModel } from "../../databases/model/skillModel";

export function Home() {
  const [type, setType] = useState<MenuTypeProps>("soft");
  const [name, setName] = useState("");

  const bottomSheetRef = useRef<BottomSheet>(null);

  async function handleSave() {
    await database.write(async () => {
      await database.get<SkillModel>('skills').create(data => {
        data.name = name,
        data.type = type
      })
    })
  }

  return (
    <Container>
      <Title>About me</Title>
      <Menu type={type} setType={setType} />

      <FlatList
        data={[]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Skill data={item} onEdit={() => {}} onRemove={() => {}} />
        )}
      />

      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={["10%", "35%"]}>
        <Form>
          <FormTitle>New</FormTitle>

          <Input
            placeholder="New skill..."
            onChangeText={setName}
            value={name}
          />

          <Button title="Save" onPress={handleSave} />
        </Form>
      </BottomSheet>
    </Container>
  );
}
