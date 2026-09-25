# US-001 — OPD Patient Check-in Lite (ฉบับภาษาไทย)

> ฉบับแปลภาษาไทยของ `US-001-opd-checkin.md` กรณีสองฉบับมีเนื้อหาต่างกัน ให้ถือฉบับภาษาอังกฤษเป็นหลัก

## Requirement

ในฐานะเจ้าหน้าที่ OPD ฉันต้องการค้นหาผู้ป่วยเดิมและทำ check-in ให้ผู้ป่วยรายนั้น เพื่อให้ผู้ป่วยเข้าคิวของคลินิกได้

## Acceptance Criteria

1. ค้นหาผู้ป่วยเดิมด้วย HN หรือชื่อผู้ป่วย
2. แสดง state Loading ระหว่างค้นหา
3. แสดง state Empty เมื่อไม่พบผู้ป่วย
4. แสดง state Error เมื่อค้นหาไม่สำเร็จ
5. เมื่อมีผู้ป่วยตรงเงื่อนไขหลายราย ต้องแสดงให้เลือกได้ครบทุกราย
6. ให้ผู้ใช้เลือกผู้ป่วยได้ครั้งละหนึ่งราย
7. แสดงรายละเอียดของผู้ป่วยที่เลือก: HN, ชื่อ, วันเกิด และเพศ
8. ต้องเลือก clinic ก่อนจะทำ Check-in ต่อได้
9. Chief Complaint เป็นช่องที่เว้นว่างได้
10. มีขั้นตอน Preview / Confirmation ก่อน Check-in ขั้นสุดท้าย
11. ให้ผู้ใช้ย้อนกลับมาแก้ไขก่อนกดยืนยันได้
12. เมื่อยืนยันสำเร็จ แสดง state Success พร้อมเลขคิวจำลอง เช่น `A012`
13. ช่องค้นหา การเลือกผู้ป่วย การเลือก clinic ปุ่ม Back และ Confirm ต้องมี label/focus ที่มองเห็นได้ และใช้งานด้วย keyboard ได้
14. หน้าจอยังใช้งานได้บนจอมือถือแคบ โดยไม่เกิดการเลื่อนแนวนอน และปุ่มหลักไม่ถูกซ่อน

## Checkable training examples

- กรอก HN `65000123` ต้องพบผู้ป่วยจำลอง **Somchai Jaidee** การค้นหาด้วย `Jaidee` ต้องได้ผู้ป่วยจำลองหลายราย และผู้ใช้ต้องเลือกหนึ่งรายก่อนไปต่อ
- ช่องว่างไม่ใช่การค้นหาผู้ป่วย การค้นหาที่ไม่มีผลลัพธ์ต้องแสดง Empty การจำลอง service ล้มเหลวต้องแสดง Error พร้อมทาง retry ส่วน Loading ต้องมองเห็นได้จาก mock response ที่หน่วงเวลาไว้โดยเจตนา
- หลังเลือกผู้ป่วย แสดง HN, ชื่อเต็ม, วันเกิด และเพศ จาก `src/mocks/patients.ts` ห้ามอนุมานอายุจากภาพอ้างอิง
- ต้องเลือก clinic ก่อนจะไปหน้า Preview ได้ และ Chief Complaint เว้นว่างได้ หน้า Preview แสดงผู้ป่วยที่เลือก clinic และอาการ (ถ้ากรอก)
- การกด Back จาก Preview ต้องคงผู้ป่วยที่เลือกและค่าที่กรอกไว้ การยืนยันขั้นสุดท้ายต้องได้ใบยืนยันจำลองพร้อมเลขคิว `A012` และการเริ่ม check-in รายใหม่ต้อง reset ฟอร์ม
- ทั้งแอปพลิเคชันและ Storybook ต้องแสดง state เหล่านี้ด้วย mock data แบบ deterministic โดยไม่มีการค้นหาผู้ป่วยจริง การจัดสรรคิวจริง หรือการเขียนข้อมูลลงระบบคลินิกใด ๆ

ภาพอ้างอิงที่ `docs/design/` ใช้กำกับเฉพาะ layout และ visual hierarchy ภาพไม่ได้แสดงหน้า confirmation และไม่ใช่ข้อกำหนดพฤติกรรม หากภาพขัดกับเอกสารนี้หรือ mock records ที่กำหนดเวอร์ชันไว้ ให้ใช้เอกสารนี้เรื่องพฤติกรรม และใช้ mock records เป็นค่าสำหรับการตรวจ

## Suggested Product Components

รายการนี้ไม่ใช่ลำดับการ implement ผู้เรียนและ AI agent ควรทบทวนว่าขอบเขตของแต่ละตัวมีประโยชน์หรือไม่

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

ใช้เฉพาะ mock/synthetic data ที่ repository นี้จัดเตรียมไว้ หรือ synthetic data ที่สร้างขึ้นใหม่เท่านั้น ห้ามใช้ข้อมูลผู้ป่วยจริงทุกกรณี

## Out of Scope

- การ implement backend
- Database schema หรือ SQL
- การเชื่อมต่อ HIS จริง
- การ implement authentication / authorization
- การเชื่อมต่อ FHIR
- การ deploy ขึ้น production
