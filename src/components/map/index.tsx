import React, { lazy } from "react";
export const LazyMap = lazy(
  () => /* webpackChunkName: "Map" */ import("./Map")
);
