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

export const GroupPermissionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="group" reference="group">
        <TextField source="descr" />
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

export const GroupPermissionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="group" reference="group">
        <AutocompleteInput optionText="descr" />
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

export const GroupPermissionCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="group" reference="group">
        <AutocompleteInput optionText="descr" />
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
