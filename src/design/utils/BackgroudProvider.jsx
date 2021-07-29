import { makeStore } from "./makestrore";

const {
    Provider: BackgroundProvider,
    useContextDispatch: useBackgroundDispatch,
    useContextStore: useBackgroundState,
    useStoreAndDispatch: useBackground
} = makeStore("Background", (state) => (state));


export {
    BackgroundProvider,
    useBackground,
    useBackgroundState,
    useBackgroundDispatch
}