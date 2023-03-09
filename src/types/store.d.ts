interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: function;
}

type RootState = ReturnType<typeof import('@/store').getState>;