export default function ({ dispatch }) {

    return next => action => {

        // If the action does not have a payload or the payload doesn't have a .then property, we don't care about it. Send it to the next.
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        // Make sure the action's promise resolves
        action.payload
            .then(response => {
                const newAction = {...action, payload: response};
                dispatch(newAction);
            });
        //
    }
};
