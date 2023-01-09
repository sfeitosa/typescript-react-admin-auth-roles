import {
  ArrayField,
  ChipField,
  Create,
  Datagrid,
  Edit,
  EmailField,
  List,
  PasswordInput,
  SimpleForm,
  SingleFieldList,
  TextField,
  TextInput,
  useRecordContext,
  EditButton,
  ShowButton,
  ReferenceArrayInput,
  CheckboxGroupInput,
  BooleanField,
  BooleanInput,
} from "react-admin";

const UserTitle = () => {
  const record = useRecordContext();
  return <span>User {record ? `"${record.username}"` : ""}</span>;
};

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="fullname" />
      <EmailField source="email" />
      <BooleanField source="isSuperuser" />
      <ArrayField source="groups">
        <SingleFieldList>
          <ChipField source="descr" />
        </SingleFieldList>
      </ArrayField>
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = () => (
  <Edit title={<UserTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="username" />
      <TextInput source="fullname" />
      <TextInput source="email" />
      <BooleanInput source="isSuperuser" />
      <ReferenceArrayInput source="groupIds" reference="group">
        <CheckboxGroupInput optionText="descr" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="username" />
      <PasswordInput source="password" />
      <TextInput source="fullname" />
      <TextInput source="email" />
      <BooleanInput source="isSuperuser" />
      <ReferenceArrayInput source="groupIds" reference="group">
        <CheckboxGroupInput optionText="descr" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
