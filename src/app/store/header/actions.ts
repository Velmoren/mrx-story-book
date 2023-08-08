import { createAction, props } from '@ngrx/store';

export enum SidebarActionsType {
  ToggleSidebar = '[SIDEBAR] Toggle'
}

export const toggleSidebar = createAction(SidebarActionsType.ToggleSidebar)
