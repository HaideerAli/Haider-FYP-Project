# TODO

## Frontend: fix 404 NOT_FOUND
- [x] Inspect how app is served (Vite preview vs other server) and where 404 comes from (API vs frontend route).
  - 404 is React Router fallback (`NotFoundPage`) rather than backend API (checked by matching your app’s NotFoundPage content).
- [ ] Confirm whether 404 happens on deep links/refresh to `/diagnose` (server needs SPA fallback)
- [ ] Verify frontend routes: confirm React Router `basename` (if any) and that `NotFoundPage` is only used for unknown client routes.
- [ ] Inspect backend endpoints and confirm frontend hits the correct ones (especially `/api/health`, `/api/symptoms`, `/api/predict`).
- [ ] Fix Docker/preview serving so SPA fallback works for deep links (e.g., configure preview server or add static hosting rewrite rules).
- [ ] Rebuild and verify via browser: `/`, `/diagnose`, `/diseases`, `/history`, `/about`, and unknown route.
- [ ] Update any missing Vite/React config (e.g., `vite.config.js` base/publicDir) if paths are wrong.

