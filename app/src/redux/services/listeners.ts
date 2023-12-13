import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setOverlayState } from "../stores/overlay";
import { RootState } from "@/app/store";
import { settingsPersistenceService } from "../localStorage/persistence";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(
      setOverlayState
    ),
    effect: (_action, listenerApi) => {
      try {
        settingsPersistenceService.setOverlaySettings(
          (listenerApi.getState() as RootState).overlay
        );
      } catch (error) {
        console.error(error);
      }
    },
  });