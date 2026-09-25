# US-001 — OPD Patient Check-in (Lite)

> เอกสารฉบับภาษาอังกฤษอยู่ที่ `US-001-opd-checkin.md` และถือเป็นฉบับอ้างอิงหลัก หากเนื้อหาระหว่างสองเวอร์ชันไม่ตรงกัน ให้ยึดฉบับภาษาอังกฤษ

## User Story

ในฐานะเจ้าหน้าที่ OPD ฉันต้องการค้นหาผู้ป่วยเดิมและทำ Check-in เข้าคลินิก เพื่อให้ผู้ป่วยสามารถเข้าสู่ Clinic Queue ได้

## Context

เจ้าหน้าที่ OPD ต้องสามารถค้นหาผู้ป่วยเดิม เลือก Clinic ตรวจสอบข้อมูลก่อน Confirm และทำ Check-in ให้เสร็จสมบูรณ์

User Story นี้ใช้เฉพาะ synthetic/mock data เท่านั้น และไม่มีการเชื่อมต่อกับ HIS หรือ Queue System จริง

## In Scope

- ค้นหาผู้ป่วยเดิมด้วย HN หรือชื่อผู้ป่วย
- แสดง Patient Result ที่ตรงกับคำค้นหา
- เลือกผู้ป่วยได้หนึ่งคน
- เลือก Clinic
- กรอก Chief Complaint ได้ โดยเป็นข้อมูล optional
- แสดง Preview ก่อน Confirm
- สามารถ Back กลับไปแก้ไขข้อมูลก่อน Confirm
- แสดง Success state หลัง Check-in สำเร็จ
- รองรับ Loading, Empty, Error และ Validation states
- รองรับการใช้งานด้วย Keyboard และ Narrow Mobile Viewport สำหรับ Primary Flow

## Acceptance Criteria

### Search

**AC1 — Search patient**

ผู้ใช้สามารถค้นหาผู้ป่วยเดิมด้วย HN หรือชื่อผู้ป่วยได้

สำหรับ mock data ที่กำหนด:

- ค้นหา HN `65000123` ต้องพบ **Somchai Jaidee**
- ค้นหา `Jaidee` ต้องพบผู้ป่วยที่ตรงกับคำค้นหามากกว่าหนึ่งคน

Empty query ไม่ถือเป็นการค้นหาผู้ป่วย

---

**AC2 — Loading state**

ระหว่างรอ Search Result ระบบต้องแสดง Loading state ที่ผู้ใช้มองเห็นได้ชัดเจน

---

**AC3 — Empty state**

เมื่อ Search เสร็จแล้วไม่พบผู้ป่วยที่ตรงกับคำค้นหา ระบบต้องแสดง Empty state ที่สื่อความหมายชัดเจนว่าไม่พบข้อมูล

---

**AC4 — Error state**

เมื่อ Search ล้มเหลว ระบบต้องแสดง Error state และมีวิธีให้ผู้ใช้ Retry ได้

---

### Patient Selection

**AC5 — Multiple results**

เมื่อมีผู้ป่วยตรงกับคำค้นหามากกว่าหนึ่งคน ระบบต้องแสดงรายการผู้ป่วยที่ตรงกับผลการค้นหา เพื่อให้ผู้ใช้เลือก

---

**AC6 — Select patient**

ผู้ใช้สามารถเลือกผู้ป่วยได้ครั้งละหนึ่งคน

---

**AC7 — Selected patient details**

หลังเลือกผู้ป่วย ระบบต้องแสดงข้อมูลอย่างน้อย:

- HN
- Full name
- Date of birth
- Gender

ค่าที่แสดงต้องมาจาก mock patient record โดยตรง

---

### Check-in Form

**AC8 — Clinic required**

ผู้ใช้ต้องเลือก Clinic ก่อนจึงจะสามารถไปยัง Preview ได้

หากยังไม่ได้เลือก Clinic ระบบต้องแสดง Validation state ที่เข้าใจได้ชัดเจน

---

**AC9 — Chief Complaint optional**

Chief Complaint เป็นข้อมูล optional และสามารถเว้นว่างได้

---

### Preview and Confirmation

**AC10 — Preview before confirmation**

ก่อน Check-in เสร็จสมบูรณ์ ระบบต้องมี Preview step ที่แสดงอย่างน้อย:

- ผู้ป่วยที่เลือก
- Clinic
- Chief Complaint เมื่อมีการกรอก

ผู้ใช้ต้อง Confirm จาก Preview step ก่อนจึงจะถือว่า Check-in เสร็จสมบูรณ์

---

**AC11 — Back and edit**

จาก Preview ผู้ใช้สามารถ Back กลับไปแก้ไขข้อมูลได้

เมื่อกลับมายัง Check-in form:

- ผู้ป่วยที่เลือกต้องยังคงถูกเลือกอยู่
- Clinic ที่เลือกต้องยังคงอยู่
- Chief Complaint ที่กรอกไว้ต้องไม่สูญหาย

---

### Success

**AC12 — Successful check-in**

หลังจากผู้ใช้ Confirm Check-in สำเร็จ ระบบต้องแสดง Success state พร้อมเลข Queue จำลอง:

`A012`

เมื่อผู้ใช้เริ่ม Check-in รายการใหม่ Form state จากรายการก่อนหน้าต้องถูก Reset

---

### Accessibility and Responsive Behaviour

**AC13 — Keyboard accessibility**

Control หลักของ Flow ได้แก่:

- Search
- Patient selection
- Clinic selection
- Back
- Confirm

ต้องมี Label ที่เข้าใจได้ มี Visible Focus state และสามารถใช้งานด้วย Keyboard ได้

---

**AC14 — Mobile usability**

Primary Flow ต้องยังใช้งานได้บน Narrow Mobile Viewport โดย:

- หน้าเว็บต้องไม่เกิด Horizontal Scrolling
- Primary Actions ต้องยังมองเห็นและเข้าถึงได้

## Data Rules

ใช้เฉพาะ synthetic/mock data ที่อยู่ใน Repository หรือ synthetic data ที่สร้างขึ้นสำหรับ User Story นี้เท่านั้น

ห้ามใช้ข้อมูลผู้ป่วยจริง

Mock data ต้องรองรับอย่างน้อย:

- HN `65000123` → Somchai Jaidee
- ค้นหา `Jaidee` → พบผู้ป่วยมากกว่าหนึ่งคน
- Empty search result
- Search failure
- Delayed response สำหรับแสดง Loading state

## Out of Scope

User Story นี้ไม่รวม:

- Backend implementation
- Database หรือ SQL
- HIS integration
- Queue allocation หรือ Queue Management จริง
- Authentication / Authorization
- FHIR integration
- การเขียนข้อมูลเข้าสู่ Clinical System จริง
- Production deployment
