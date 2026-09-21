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
