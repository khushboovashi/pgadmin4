/////////////////////////////////////////////////////////////
//
// pgAdmin 4 - PostgreSQL Tools
//
// Copyright (C) 2013 - 2024, The pgAdmin Development Team
// This software is released under the PostgreSQL Licence
//
//////////////////////////////////////////////////////////////

import { SchemaState } from '../../../pgadmin/static/js/SchemaView/useSchemaState';

export function initializeSchemaWithData(schema, data) {
  const state = schema.state = new SchemaState(
    schema, null, null, 'create', false, null
  );
  state.initData = data;
  state.data = data;
}

