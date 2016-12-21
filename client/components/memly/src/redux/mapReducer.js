// Default state for reducer as called in 'mapReducer()'
const mapInitialState = {
  currentUserLocation : {
    lat: 0,
    lng: 0,
  }
}

export function updateUserLocation (currentUserLocation) {
  console.log('updating User location with action')
  return {
    type: 'UPDATE_USER_LOCATION',
    currentUserLocation,
  }
}

export default function mapReducer(state = mapInitialState, action) {
  switch(action.type) {

    case 'UPDATE_USER_LOCATION' : {
      console.log('updating userlocation in state tree')
      return {
        ...state,
        currentUserLocation: action.currentUserLocation
      }
    }
    default : return state
  }
}