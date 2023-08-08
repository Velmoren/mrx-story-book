import { sidebarReducer } from './header/reducers';
import { ActionReducerMap } from '@ngrx/store';
import { SidebarState } from './header/state';

export interface State {
  SIDEBAR: SidebarState
}

export const reducers: ActionReducerMap<State> = {
  SIDEBAR: sidebarReducer
}
