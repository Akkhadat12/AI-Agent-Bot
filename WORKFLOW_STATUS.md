# Workflow status — Agent Bot × AI Supply Chain

- **Repository:** https://github.com/Akkhadat12/AI-Agent-Bot
- **Working branch:** [`agent-bot-ai-supply-chain-2026`](https://github.com/Akkhadat12/AI-Agent-Bot/tree/agent-bot-ai-supply-chain-2026)
- **Approved scope:** ห่วงโซ่มูลค่า AI ทั้งระบบและโครงสร้างพื้นฐาน: ชิป คลาวด์ ดาต้าเซ็นเตอร์ เครือข่าย พลังงาน
- **Approved thesis:** ยังไม่มี — รอเจ้าของงานเลือกหลังอ่าน `01` และ `02`
- **Stage:** `PLANNING`
- **Last verified reading-pack commit / date:** [`e28e08c32380febb3c8a8e79360bc5a0e7f0812f`](https://github.com/Akkhadat12/AI-Agent-Bot/commit/e28e08c32380febb3c8a8e79360bc5a0e7f0812f) / 29 กันยายน 2026
- **Current public build URL:** ยังไม่มีสำหรับงานใหม่นี้
- **Reading pack:** [01_KNOWLEDGE_SUMMARY.md](01_KNOWLEDGE_SUMMARY.md) · [01_KNOWLEDGE_SUMMARY.pdf](01_KNOWLEDGE_SUMMARY.pdf) · [02_RESEARCH_AND_ANALYSIS.md](02_RESEARCH_AND_ANALYSIS.md) · [02_RESEARCH_AND_ANALYSIS.pdf](02_RESEARCH_AND_ANALYSIS.pdf)
- **Owner reading folder:** https://drive.google.com/drive/folders/1CBG-OOusgdXWSvLjtT3cMSCJx0yCTYU9
- **Build brief / QA plan / notes / rationale / QA report:** ยังไม่ถึงขั้นสร้าง
- **Open findings and blockers:** ยังไม่มี
- **Next actor and exact action:** เจ้าของงาน — อ่านชุด `01` และ `02` แล้วเลือกหรือปรับ narrative thesis; จากนั้นผู้วิจัยจัดทำ `03`–`05` และ reference package

## การใช้ repository เก่ากับงานใหม่

สร้าง branch `agent-bot-ai-supply-chain-2026` จาก `main` สำหรับหัวข้อใหม่นี้ เอกสารวิจัยและภาพอ้างอิงเรื่องเดิมบน branch นี้ถูกแทนที่/ลบออกใน reading-pack commit โดยไม่ลบประวัติ `main` หรือ branch เว็บเก่า `cursor/agent-bot-web-7739` เว็บเก่าที่บันทึกไว้ใน `BUILD_NOTES.md` ของ branch นั้นคือ `https://bots-vs-agents-2026.vercel.app`; ผู้สร้างเว็บใหม่ต้องแยกเว็บเก่านี้จาก Vercel production deployment ของงานใหม่

## สัญญาการส่งต่องาน (มีผลเมื่อ thesis และบรีฟพร้อม)

ผู้วิจัยตั้งสถานะ `READY_FOR_BUILD` เมื่อเอกสารครบและตรวจแล้วเท่านั้น Build อ่านไฟล์ปัจจุบัน ตั้ง `BUILDING`, สร้างและ deploy เว็บใหม่บน Vercel, บันทึก URL/commit/`BUILD_NOTES.md`/เอกสารเหตุผลฉาก แล้วตั้ง `READY_FOR_QA` พร้อม `Next: QA` QA ตรวจ production URL และ commit นั้นอย่างอิสระ บันทึก finding ID ใน `07_WEB_QA_REPORT.md` และตั้ง `QA_FAIL` พร้อมส่งกลับ Build หรือ `QA_PASS` เมื่อผ่าน Build แก้ ID และให้ QA ทดสอบซ้ำจนผ่านหรือบันทึก blocker ทุกฝ่าย fetch branch ล่าสุดก่อนเขียนและไม่ force-push
