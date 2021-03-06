import EventService from '@/services/EventService';

export const namespaced = true;

export const state = {
    events: [],
    eventsTotal: 0,
    event: {},
}

export const mutations = {
    ADD_EVENT(state, event) {
        state.events.push(event);
    },
    SET_EVENTS(state, events) {
        state.events = events;
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
        state.eventsTotal = eventsTotal;
    },
    SET_EVENT(state, event) {
        state.event = event;
    }
}

export const actions = {
        createEvent({ commit, dispatch }, event) {
            return EventService.postEvent(event).then(() => {
                commit('ADD_EVENT', event);
                const notification = {
                    type: 'success',
                    message: 'Your event has been created!'
                };
                
                dispatch('notification/add', notification, { root: true });
            }).catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem creating your event: ' + error.message
                };
                
                dispatch('notification/add', notification, { root: true });
                throw error;
            });
        },
        fetchEvents({ commit, dispatch }, {perPage, page}) {
            EventService.getEvents(perPage, page)
                .then(res => {
                    commit('SET_EVENTS_TOTAL',
                        parseInt(res.headers['x-total-count']));
                    commit('SET_EVENTS', res.data);
                })
                .catch(error => {
                    const notification = {
                        type: 'error',
                        message: 'There was a problem fetching events: ' + error.message
                    };
                    
                    dispatch('notification/add', notification, { root: true });
                });
        },
        fetchEvent({ commit, getters, dispatch }, id) {
            var event = getters.getEventById(id);

            if (event) {
                commit('SET_EVENT', event);
            } else {
                EventService.getEvent(id)
                    .then(res => {
                        commit('SET_EVENT', res.data);
                    })
                    .catch(error => {
                        const notification = {
                            type: 'error',
                            message: 'There was a problem fetching event: ' + error.message
                        };
                        
                        dispatch('notification/add', notification, { root: true });
                    });
            }
        }
}

export const getters = {
    catLength: state => {
        return state.categories.length;
    },
    doneTodos: state => {
        return state.todos.filter(todo => todo.done);
    },
    activeTodosCount: (state) => {
        return state.todos.filter(todo => !todo.done).length;
    },
    getEventById: state => id => {
        return state.events.find(event => event.id === id);
    }
}