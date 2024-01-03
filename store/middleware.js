


export const APIServiceMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {

        default: {
            return next(action)
        }
    }
}
