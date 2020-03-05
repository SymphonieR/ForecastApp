const initialState = { cities: new Set()};

export default function toggleFavorite(state = initialState, action: { type: string; value: string; }) {
    let nextState = {...initialState};
    
    switch(action.type) {
        case 'TOGGLE_FAVORITE':
            if (nextState.cities.has(action.value)) {
                nextState.cities.delete(action.value);
            } else {
                nextState.cities.add(action.value);
            }
            
            return nextState;
    }

    return state;
}
