import { SidebarState, initialSidebarState } from './state';
import { Action, createReducer, on } from "@ngrx/store";
import * as SidebarActionsType from './actions';

const sidebarReducerCreator = createReducer(
  initialSidebarState,
  on(SidebarActionsType.toggleSidebar, (state: SidebarState) => ({
    ...state, active: !state.active
  })),
)

export const sidebarReducer = (state: SidebarState = initialSidebarState, action: Action) => {
    return sidebarReducerCreator(state, action)
}
