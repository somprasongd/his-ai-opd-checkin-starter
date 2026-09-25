# US-001 — OPD Patient Check-in (Lite)

> A Thai companion translation is available at `US-001-opd-checkin-th.md`. This English document is authoritative if the two versions ever disagree.

## User Story

As an OPD staff member, I want to find an existing patient and check the patient in to a clinic so that the patient can enter the clinic queue.

## Context

OPD staff need to find an existing patient, select a clinic, review the information before confirmation, and complete Check-in.

This User Story uses synthetic/mock data only. It does not connect to a real HIS or queue system.

## In Scope

- Search for an existing patient by HN or patient name.
- Display matching patient results.
- Select one patient.
- Select a Clinic.
- Enter an optional Chief Complaint.
- Preview the information before confirmation.
- Go back and edit the information before confirmation.
- Show a Success state after Check-in.
- Support Loading, Empty, Error, and Validation states.
- Support keyboard use and narrow mobile viewports for the primary flow.

## Acceptance Criteria

### Search

**AC1 — Search patient**

The user can search for an existing patient by HN or patient name.

For the defined mock data:

- Searching HN `65000123` finds **Somchai Jaidee**.
- Searching `Jaidee` returns more than one matching patient.

An empty query is not considered a patient search.

---

**AC2 — Loading state**

While waiting for search results, the application must show a visible Loading state.

---

**AC3 — Empty state**

When a search completes with no matching patient, the application must show an Empty state that clearly communicates that no result was found.

---

**AC4 — Error state**

When the search fails, the application must show an Error state and provide a way for the user to retry.

---

### Patient Selection

**AC5 — Multiple results**

When more than one patient matches the query, the application must show the matching patients so the user can choose one.

---

**AC6 — Select patient**

The user can select one patient at a time.

---

**AC7 — Selected patient details**

After a patient is selected, the application must show at least:

- HN
- Full name
- Date of birth
- Gender

The displayed values must come directly from the mock patient record.

---

### Check-in Form

**AC8 — Clinic required**

A Clinic must be selected before the user can continue to Preview.

If no Clinic is selected, the application must show a clear Validation state.

---

**AC9 — Chief Complaint optional**

Chief Complaint is optional and may be left blank.

---

### Preview and Confirmation

**AC10 — Preview before confirmation**

Before Check-in is completed, the application must provide a Preview step showing at least:

- Selected patient
- Clinic
- Chief Complaint, when entered

The user must confirm from the Preview step before Check-in is considered complete.

---

**AC11 — Back and edit**

From Preview, the user can go back and edit the information.

When returning to the Check-in form:

- The selected patient remains selected.
- The selected Clinic remains selected.
- The entered Chief Complaint remains unchanged.

---

### Success

**AC12 — Successful check-in**

After the user confirms the Check-in successfully, the application must show a Success state with the synthetic queue number:

`A012`

When the user starts another Check-in, the previous form state must be reset.

---

### Accessibility and Responsive Behaviour

**AC13 — Keyboard accessibility**

The primary flow controls, including:

- Search
- Patient selection
- Clinic selection
- Back
- Confirm

must have understandable labels, a visible focus state, and be operable using a keyboard.

---

**AC14 — Mobile usability**

The primary flow must remain usable on a narrow mobile viewport:

- The page must not require horizontal scrolling.
- Primary actions must remain visible and accessible.

## Data Rules

Use only synthetic/mock data supplied by the repository or synthetic data created specifically for this User Story.

Never use real patient information.

The mock data must support at least:

- HN `65000123` → Somchai Jaidee
- Searching `Jaidee` → more than one patient
- Empty search result
- Search failure
- Delayed response for demonstrating the Loading state

## Out of Scope

This User Story does not include:

- Backend implementation
- Database or SQL
- HIS integration
- Real queue allocation or queue management
- Authentication / Authorization
- FHIR integration
- Writing data to a real clinical system
- Production deployment
