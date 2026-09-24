# US-001 — OPD Patient Check-in Lite

## User Story

As an OPD staff member, I want to find an existing patient and check the patient in so that the patient can enter the clinic queue.

## Acceptance Criteria

1. Search an existing patient by HN or patient name.
2. Show a Loading state while searching.
3. Show an Empty state when no patient is found.
4. Show an Error state when the search fails.
5. Show multiple matching patients when applicable.
6. Allow the user to select one patient.
7. Show selected-patient details: HN, name, date of birth, gender.
8. Clinic is required before Check-in can continue.
9. Chief Complaint is optional.
10. Show a Preview / Confirmation step before final Check-in.
11. Allow the user to go back and edit before confirming.
12. Final confirmation shows a Success state with a synthetic queue number such as `A012`.
13. Search, patient selection, clinic, Back, and Confirm have visible labels/focus and work with a keyboard.
14. The page remains usable at a narrow mobile viewport without horizontal scrolling or hidden primary actions.

## Checkable training examples

- Entering HN `65000123` finds synthetic patient **Somchai Jaidee**. Searching `Jaidee` returns multiple synthetic patients; the user must choose one before continuing.
- Empty text is not a patient search. A query with no match shows Empty; a simulated service failure shows Error with a way to retry. Loading is visible for a deliberately slow mock response.
- After selecting a patient, show HN, full name, date of birth, and gender from `src/mocks/patients.ts`. Do not derive age from the reference screenshot.
- A clinic must be selected before the user can move to Preview. Chief Complaint can be blank. Preview shows the selected patient, clinic, and complaint (if entered).
- Back from Preview preserves the selected patient and entered values. Final confirmation produces a synthetic success receipt with queue `A012`; starting another check-in resets the form.
- The application and Storybook must demonstrate these states with deterministic mock data. No real patient lookup, queue allocation, or clinical system write occurs.

The visual reference under `docs/design/` guides layout and visual hierarchy. It omits the confirmation screen and is not a behavior specification. Where it disagrees with this document or the versioned mock records, use this document for behavior and the mock records for acceptance data.

## Suggested Product Components

Do not treat this list as an implementation order. The learner and AI agent should review whether each boundary is useful.

- `PatientSearch`
- `PatientSearchResult`
- `PatientCard`
- `SelectedPatient`
- `CheckInForm`
- `CheckInConfirmation`
- `CheckInSuccess`

## Meaningful UI States

### PatientSearch
- Default
- Loading
- Empty
- WithResults
- Error

### PatientCard / Result
- Default
- Selected
- Long name / optional-data edge case

### CheckInForm
- Default
- ValidationError
- ReadyToSubmit

### Confirmation
- Default
- Submitting
- Error (if simulated)

### Success
- Success

## Data Rule

Use only mock/synthetic data supplied by this repository or invented synthetic data. Never use real patient information.

## Out of Scope

- Backend implementation
- Database schema or SQL
- Real HIS integration
- Authentication / authorization implementation
- FHIR integration
- Production deployment
