import ApplicationAdapter from 'across-the-land/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
  let api = this.get('host');
  let serialized = this.serialize(record, {includeId: true });
  let listId = serialized.list_id;
  let url = `${api}/lists/${listId}/places`;
  let data = { place: serialized };

  return this.ajax(url, 'POST', { data });
}
});
