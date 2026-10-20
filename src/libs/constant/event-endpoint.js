export const EVENT_ENDPOINTS = {
  LIST_EVENTS_ENDPOINT: (name) => `/events?name=${name}`,
  CREATE_EVENT_ENDPOINT: '/events',
  MY_EVENTS_ENDPOINT: '/events/my-events',
  EVENT_DETAILS_ENDPOINT: id => `/events/${id}`,
  UPDATE_EVENT_ENDPOINT: id => `/events/${id}`,
  DELETE_EVENT_ENDPOINT: id => `/events/${id}`,
}