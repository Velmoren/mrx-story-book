import { SidebarState } from './state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const sidebarFuture = createFeatureSelector<SidebarState>('SIDEBAR')

export const selectSidebarActive = createSelector(
  sidebarFuture,
    (state: SidebarState) => {
      console.log(state)
      return state.active
    }
)
