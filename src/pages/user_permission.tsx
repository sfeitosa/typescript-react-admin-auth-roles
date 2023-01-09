import {
  Create,
  Datagrid,
  Edit,
  List,
  SimpleForm,
  TextField,
  TextInput,
  EditButton,
  ShowButton,
  BooleanField,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  ReferenceField,
} from "react-admin";

// const UserPermissionTitle = () => {
//   const record = useRecordContext();
//   return <span>User {record ? `"${record.username}"` : ""}</span>;
// };

export const UserPermissionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="user" reference="user">
        <TextField source="username" />
      </ReferenceField>
      <ReferenceField source="appRoute" reference="app-route">
        <TextField source="route" />
      </ReferenceField>
      <BooleanField source="createAllowed" />
      <BooleanField source="readAllowed" />
      <BooleanField source="updateAllowed" />
      <BooleanField source="deleteAllowed" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserPermissionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="user" reference="user">
        <AutocompleteInput optionText="username" />
      </ReferenceInput>
      <ReferenceInput source="appRoute" reference="app-route">
        <AutocompleteInput optionText="route" />
      </ReferenceInput>
      <BooleanInput source="createAllowed" />
      <BooleanInput source="readAllowed" />
      <BooleanInput source="updateAllowed" />
      <BooleanInput source="deleteAllowed" />
    </SimpleForm>
  </Edit>
);

export const UserPermissionCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="user" reference="user">
        <AutocompleteInput optionText="username" />
      </ReferenceInput>
      <ReferenceInput source="appRoute" reference="app-route">
        <AutocompleteInput optionText="route" />
      </ReferenceInput>
      <BooleanInput source="createAllowed" />
      <BooleanInput source="readAllowed" />
      <BooleanInput source="updateAllowed" />
      <BooleanInput source="deleteAllowed" />
    </SimpleForm>
  </Create>
);
