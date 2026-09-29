# Agent Bot × AI Supply Chain: หลักฐาน กลไก และทางแยก

**ชุดอ่าน 02 — วิจัยและวิเคราะห์เชิงลึก**  
**โจทย์:** การแข่งขัน Agent เปลี่ยนตำแหน่งการเก็บมูลค่าใน AI อย่างไร และส่งผ่านไปยังชิป คลาวด์ ดาต้าเซ็นเตอร์ เครือข่าย และพลังงานเพียงใด  
**ตรวจหลักฐานถึง:** 29 กันยายน 2026  
**สถานะ:** ก่อนเลือก narrative thesis; ยังไม่มีข้อสรุปเรื่องผู้ชนะหรือคำแนะนำลงทุน

## วิธีอ่านและวิธีตรวจ

ป้าย **[ข้อเท็จจริง]** หมายถึงข้อมูลที่แหล่งต้นทางบันทึกไว้; **[คำกล่าวผู้ขาย]** คือข้อมูลที่บริษัทเผยแพร่เกี่ยวกับตน ซึ่งตรวจขอบเขตและแรงจูงใจด้วย; **[วิเคราะห์]** คือเหตุผลที่อนุมานจากหลักฐาน; **[ฉากทัศน์]** คือสิ่งที่อาจเกิดขึ้นภายใต้เงื่อนไข ไม่ใช่คำพยากรณ์

ใช้เอกสารผลิตภัณฑ์ของ OpenAI, Anthropic, Google, AWS, Microsoft และ SpaceXAI เพื่อตรวจ **สิ่งที่เปิดตัว**; ใช้ข้อมูลผู้ใช้งานของ Anthropic และงานประเมินอิสระของ METR เพื่อตรวจ **รูปแบบการใช้กับขีดจำกัด**; ใช้ IEA, ผลประกอบการ NVIDIA และเอกสารเทคโนโลยี Google/TSMC เพื่อตรวจ **โครงสร้างพื้นฐาน** แหล่งเหล่านี้ตอบคนละคำถาม จึงไม่เอาตัวเลขต่างชนิดมาเปรียบเป็นแท่งเดียวกัน

ตัวเลขยอดขายชิปหรือไฟฟ้าของดาต้าเซ็นเตอร์ **ไม่สามารถระบุผลเชิงสาเหตุจาก Agent โดยเฉพาะ** เพราะยังรวมการฝึกโมเดล, chatbot, วิดีโอ, search และงาน AI อื่น ๆ งานวิจัยใช้ช่วงเวลาและตัวอย่างต่างกัน อ่านวันที่เผยแพร่และช่วงเวลาวัดแยกกันเสมอ

## 1. ลำดับเหตุการณ์ที่เกี่ยวข้อง

- **2025:** OpenAI เปิด Responses API, เครื่องมือ computer use และ Agents SDK ให้ผู้พัฒนาประกอบ Agent; สิ่งนี้เป็นโครงสร้างพื้นฐานสำหรับ Agent ไม่ใช่หลักฐาน ROI ของลูกค้าทุกประเภท [OpenAI, 11 มี.ค. 2025](https://openai.com/index/new-tools-for-building-agents/)
- **ม.ค.–เม.ย. 2026:** Anthropic ขยายผลิตภัณฑ์ Claude Code/Cowork; Google ประกาศ TPU 8i สำหรับ inference และ AWS เพิ่ม managed harness ให้ AgentCore; Microsoft ประกาศ Agent 365 เป็นชั้นกำกับดูแล [Anthropic, 13 ม.ค.](https://www.anthropic.com/news/introducing-anthropic-labs) · [Google, 22 เม.ย.](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/) · [AWS, 22 เม.ย.](https://aws.amazon.com/about-aws/whats-new/2026/04/agentcore-new-features-to-build-agents-faster/) · [Microsoft, 9 มี.ค.](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/)
- **พ.ค.–ก.ย. 2026:** Google เปิด Managed Agents; SpaceXAI เปิด Grok Bot beta; OpenAI เปิด Agents API public beta การเปิดตัวไม่เท่ากับส่วนแบ่งตลาดหรือการใช้งานเชิงพาณิชย์ในระดับเดียวกัน [Google, 19 พ.ค.](https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/) · [SpaceXAI, 11 ส.ค.](https://x.ai/news/introducing-grok-bot) · [OpenAI, 10 ก.ย.](https://openai.com/index/introducing-the-agents-api/)
- **2026:** IEA อัปเดตมุมมองพลังงานและข้อจำกัดในการขยายดาต้าเซ็นเตอร์ โดยให้กรณีกลางถึงปี 2030 ไม่ใช่การทำนายเฉพาะ Agent [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)

## 2. กลไกเศรษฐศาสตร์: จากงานของคนไปสู่การใช้เครื่อง

### อุปสงค์ที่ต้องแยกเป็นสี่ตัวแปร

**[วิเคราะห์]** งาน Agent 1 งานอาจเรียกโมเดลหลายรอบและใช้ sandbox/เครื่องมือ แต่จำนวนงานที่ทำจริงก็ขึ้นกับราคา คุณภาพ ความเชื่อใจ และสิทธิ์เข้าถึงระบบ ตัวแปรหลักคือ:

> งานที่ต้องใช้ compute = จำนวนผู้ใช้ × งานที่มอบหมายต่อคน × รอบการทำงานต่อหนึ่งงาน × compute ต่อรอบ

จากนั้นหักผลของ model routing, โมเดลเล็ก, caching, batching, ชิปใหม่ และซอฟต์แวร์เสิร์ฟโมเดลที่ทำให้แต่ละรอบถูกลง สมการนี้เป็นแผนที่สาเหตุ ไม่ใช่สูตรประมาณยอดขายอย่างแม่นยำ [Google: โครงสร้างชิป inference](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/) · [OpenAI: ต้นทุนต่อผลลัพธ์](https://openai.com/index/managing-ai-investments-in-agentic-era/)

Anthropic พบว่า output ที่มีระดับการมอบอิสระสูงมีการใช้ token มากขึ้น (สหสัมพันธ์ r = 0.68 ในชุด chat/Cowork) และ Claude Code มีระดับ autonomy มากกว่า chat/Cowork แม้เทียบโมเดลเดียวกัน **นี่เป็นความสัมพันธ์ภายในผลิตภัณฑ์ ไม่ใช่เหตุและผลทั่วตลาด** อีกทั้งนับ token ไม่รวมต้นทุนคนตรวจหรือมูลค่าของงานที่เสร็จ [Anthropic, 26 มิ.ย. 2026](https://www.anthropic.com/research/economic-index-june-2026-report)

IEA บอกสองด้านพร้อมกัน: พลังงานต่อหนึ่งงานลดลงอย่างน้อยระดับสิบเท่าต่อปีในช่วงหลังจากความก้าวหน้าด้านเทคโนโลยี ขณะที่งาน reasoning/agentic บางชนิดกินพลังงานต่อคำขอมากกว่าข้อความง่ายหลายร้อยถึงหลายพันเท่า ข้อสรุปจึงขึ้นกับ **ปริมาณใช้ × ชนิดงาน × ประสิทธิภาพ** ไม่ใช่การเลือกอ้างเพียงด้านที่สนับสนุนมุมมองตน [IEA 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)

### ใครมีโอกาสเก็บส่วนต่าง

**[วิเคราะห์]** ผู้ครองช่องทางที่ผู้ใช้สั่งงานและระบบที่ Agent ต้องเข้า อาจกำหนดราคา เก็บบริบท และเลือกโมเดลเบื้องหลังได้ จึงมีอำนาจต่อรองต่อผู้ขายโมเดล แต่สิ่งนี้ขึ้นกับการย้ายข้อมูล ความเชื่อใจ และความสามารถจริง Microsoft เน้น governance และข้อมูลในงาน; AWS เน้น runtime/identity ที่ไม่ผูกโมเดล; OpenAI กับ Anthropic ลงทุนทั้งโมเดลและ harness [Microsoft](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/) · [AWS](https://aws.amazon.com/bedrock/agentcore/faqs/) · [OpenAI](https://openai.com/index/introducing-the-agents-api/) · [Anthropic](https://www.anthropic.com/research/trustworthy-agents)

อีกด้าน **[วิเคราะห์]** โมเดลที่เก่งกว่ามากอาจยังเก็บค่าเช่าทางเศรษฐกิจได้หากความผิดพลาดในงานแพงหรือโมเดลทดแทนทำงานไม่ได้ ส่วนแอปที่เป็นเพียงหน้าต่างเรียกโมเดลโดยไม่มีข้อมูล เครื่องมือ และการตรวจผล อาจถูกทำซ้ำง่าย คำเหล่านี้เป็นสมมติฐานการแข่งขัน ไม่ใช่การวัด margin ของบริษัทใด

### อุปสงค์กับผลตอบแทนเป็นคนละเรื่อง

OpenAI ระบุว่าควรวัดงานที่เสร็จ คุณภาพ และผลลัพธ์ต่อค่าใช้จ่าย มากกว่านับ token อย่างเดียว [OpenAI, 14 ก.ค. 2026](https://openai.com/index/managing-ai-investments-in-agentic-era/) งานทดลองแบบสุ่มของ METR กับนักพัฒนา open-source ที่มีประสบการณ์ 16 คนและ 246 งาน (ช่วง ก.พ.–มิ.ย. 2025) พบการใช้เครื่องมือ AI ทำให้งานในเงื่อนไขทดลองช้าลงประมาณ 20%; METR เตือนว่าการทดลองใหม่ในปี 2026 มีอคติจากผู้ที่ไม่อยากทำงานโดยไม่มี AI จึงยังประมาณผลปัจจุบันอย่างน่าเชื่อถือไม่ได้ **ห้ามแปลว่า Agent ทุกตัวทำให้คนช้าลง** และห้ามใช้การยอมรับเทคโนโลยีแทนผลผลิตสุทธิ [METR, 24 ก.พ. 2026](https://metr.org/blog/2026-02-24-uplift-update/) · [งานวิจัยเดิม](https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf)

## 3. ผลต่อแต่ละชั้นของ Supply Chain AI

### แอป ข้อมูล และการกำกับสิทธิ์

**แรงบวก:** ถ้า Agent เปลี่ยนจากถามตอบเป็นทำงานในระบบจริง แอปที่มีข้อมูลและ workflow อาจเก็บค่าบริการจากผลลัพธ์หรือการใช้งานซ้ำ ข้อมูลและสิทธิ์กลายเป็นจุดคอขวดเชิงธุรกิจ [Anthropic: สี่องค์ประกอบ](https://www.anthropic.com/research/trustworthy-agents) · [Microsoft: Agent 365](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/)

**แรงต้าน:** ความผิดพลาด การรั่วไหลของข้อมูล และ prompt injection ทำให้องค์กรต้องซื้อการตรวจสอบและกำหนดขอบเขตการกระทำ มากกว่าปล่อย Agent อิสระทั้งหมด การเชื่อมกับ ERP/CRM ที่มีสิทธิ์จริงอาจช้ากว่าการสาธิต [Anthropic: ความเสี่ยงและสิทธิ์](https://www.anthropic.com/research/trustworthy-agents)

### โมเดลและแพลตฟอร์ม Agent

**แรงบวก:** งานหลายขั้นใช้โมเดล การเรียกเครื่องมือ หน่วยความจำ และการติดตามผล ผู้ให้บริการแพลตฟอร์มจึงขายมากกว่า token ได้หรือเพิ่มการใช้บริการเดิม OpenAI Agents API ยังคิดตาม token/เครื่องมือและ sandbox ไม่คิดค่า API เพิ่ม; AWS ขายชั้น Runtime/Gateway/Identity/Evaluations; Google มี managed sandbox [OpenAI](https://developers.openai.com/api/docs/guides/agents-api/overview) · [AWS](https://aws.amazon.com/bedrock/agentcore/faqs/) · [Google](https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/)

**แรงต้าน:** แพลตฟอร์มรองรับหลายโมเดลทำให้ลูกค้าสลับผู้ขายได้ง่ายขึ้น และการแข่งขันด้านราคา/ประสิทธิภาพอาจทำให้มูลค่าต่อ token ลด แม้งานรวมเพิ่ม [AWS: model-agnostic](https://aws.amazon.com/bedrock/agentcore/faqs/) · [OpenAI: ราคาและประสิทธิภาพ](https://openai.com/index/managing-ai-investments-in-agentic-era/)

### ชิป HBM และการผลิต

**แรงบวก:** หากจำนวนงาน agentic โตเร็วกว่าประสิทธิภาพที่ดีขึ้น จะต้องใช้กำลัง inference เพิ่ม และมีความต้องการ HBM, packaging, CPU และเครือข่ายร่วมกับ accelerator NVIDIA รายงานรายได้ Data Center Q2 FY2027 ที่ 89.0 พันล้านดอลลาร์ เพิ่ม 117% ปีต่อปี [NVIDIA, 26 ส.ค. 2026](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027)

**ข้อจำกัด:** รายได้นั้นรวมงาน AI อื่นและเป็นยอดขายของผู้ขาย ไม่ใช่ ROI ของผู้ซื้อหรือยอดขายจาก Agent โดยตรง IEA ระบุข้อจำกัด HBM ถึงอย่างน้อยปลาย 2027 และข้อจำกัดการผลิตชิปขั้นสูง; TSMC ประกาศขยาย CoWoS เพื่อรองรับการรวมชิปและ HBM มากขึ้น แต่แผนกำลังผลิตไม่เท่ากับส่งมอบและทำกำไรแล้ว [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) · [TSMC 2026 Technology Symposium](https://pr.tsmc.com/system/files/newspdf/attachment/49337b40ff139d51d533076cf7a945b30e107e07/2026%20Tech%20Symposium%20%28E%29_Final_wmn.pdf)

**แรงแข่งขัน:** Google ระบุว่า TPU 8i ให้ performance per dollar สำหรับ inference ดีกว่ารุ่นก่อน 80% ตัวเลขเป็นการเทียบผลิตภัณฑ์ของ Google เอง ไม่ใช่ benchmark อิสระเทียบ NVIDIA แต่แสดงว่าผู้ซื้อรายใหญ่มีทางเลือกออกแบบ ASIC และปรับทั้ง stack [Google, 22 เม.ย. 2026](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)

### คลาวด์ เครือข่าย ดาต้าเซ็นเตอร์ ไฟฟ้า

**แรงบวก:** Agent ที่รันยาวและตอบเร็วทำให้บริการ runtime, sandbox, network และ storage เป็นส่วนของผลิตภัณฑ์ IEA ประเมินการใช้ไฟดาต้าเซ็นเตอร์โลกกรณีกลาง 485 TWh (2025) → 950 TWh (2030) ขณะที่ดาต้าเซ็นเตอร์เน้น AI โตเร็วกว่าค่าเฉลี่ย [IEA 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)

**ข้อจำกัด:** การเชื่อมไฟฟ้า หม้อแปลง อุปกรณ์กำลัง ความหนาแน่นพลังงานต่อ rack ความเห็นชุมชนและเงินทุน ทำให้โครงการที่ประกาศไม่จำเป็นต้องสร้างเสร็จ IEA ระบุว่าการลงทุนดาต้าเซ็นเตอร์อ่อนไหวต่อความเชื่อมั่นเรื่องผลตอบแทน; การใช้จ่ายทุนของบริษัทเทคโนโลยีใหญ่เกิน 400 พันล้านดอลลาร์ในปี 2025 และคาดว่าจะเพิ่ม 75% ในปี 2026 เป็นขนาด **การลงทุน** ไม่ใช่กำไรจาก Agent [IEA 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)

## 4. สมมติฐานที่แข่งขันกัน

**A — ปริมาณงานชนะประสิทธิภาพ [ฉากทัศน์].** Agent ได้งานซ้ำจำนวนมากและงานยาวที่มีคุณค่า จึงเพิ่ม inference รวมเร็วกว่า cost/task ที่ลด ผู้ขายกำลังประมวลผล HBM เครือข่าย และไฟฟ้าได้รับอุปสงค์ต่อเนื่อง ข้อมูลที่หนุน: การใช้ Agent ยาวขึ้นในระบบ Anthropic และการลงทุน/รายได้โครงสร้างพื้นฐานที่เพิ่ม ข้อมูลที่ยังขาด: สัดส่วนของ Agent ใน workload รวม และกำไรต่อหนึ่งงาน [Anthropic](https://www.anthropic.com/research/measuring-agent-autonomy) · [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027)

**B — ประสิทธิภาพและการแข่งขันชนะ [ฉากทัศน์].** ความสามารถต่อดอลลาร์ดีขึ้น, งานง่ายย้ายไปโมเดลเล็ก/ASIC, ระบบใช้ cache และ routing ทำให้ Agent เพิ่มจำนวนแต่ไม่เพิ่ม compute หรือรายได้ฮาร์ดแวร์ตามสัดส่วน ข้อมูลที่หนุน: IEA ระบุพลังงานต่อ task ลดมาก, Google เสนอชิป inference เฉพาะ, OpenAI ระบุราคา token ลด ข้อมูลที่ยังขาด: elasticity จริงของอุปสงค์เมื่อราคาลด [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) · [Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/) · [OpenAI](https://openai.com/index/managing-ai-investments-in-agentic-era/)

**C — งานมีจริงแต่ขยายช้า [ฉากทัศน์].** การพิสูจน์ ROI, สิทธิ์ข้อมูล, การตรวจผิดพลาด และข้อจำกัดไฟฟ้า/HBM ทำให้การลงทุนเร็วกว่าการใช้งานที่จ่ายคุ้มในระยะต้น ข้อมูลที่หนุน: METR พบผลผลิตไม่ได้บวกเสมอในงานหนึ่งและ IEA ระบุคอขวด ข้อมูลที่ยังขาด: ตัวอย่างองค์กรจำนวนมากที่วัดผลสุทธิหลังใช้ Agent จริง [METR](https://metr.org/blog/2026-02-24-uplift-update/) · [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)

สามฉากทัศน์อาจเกิดต่างกันตามช่วงเวลาและประเภทงาน ไม่ใช่ตัวเลือกที่ต้องมีเพียงหนึ่งเดียว

## 5. หลักฐานค้านและจุดที่ห้ามกล่าวเกิน

1. **เปิดตัว ≠ ใช้จริงในวงกว้าง.** ข่าวผลิตภัณฑ์บอกความสามารถที่เสนอและความตั้งใจของผู้ขาย ไม่บอกจำนวนงานที่สำเร็จสุทธิหรือการต่อสัญญาของลูกค้า
2. **token มาก ≠ มูลค่าสูง.** งานที่ซับซ้อนอาจใช้ token มากและมีคุณค่า แต่การวนซ้ำผิดพลาดก็ใช้ token มาก ต้องวัด completion, quality, review time และ spend ต่อ task [OpenAI](https://openai.com/index/how-to-connect-ai-usage-to-business-value/)
3. **ไฟฟ้าดาต้าเซ็นเตอร์ ≠ ไฟฟ้า Agent.** ตัวเลข IEA รวมหลาย workload และเป็นกรณีคาดการณ์ถึง 2030 ไม่มีตัวคูณที่นำจำนวน Agent ไปแปลงเป็น TWh ได้ตรง ๆ [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)
4. **ยอดขาย GPU ≠ ลูกค้าได้กำไร.** รายได้ NVIDIA ยืนยันยอดขายช่วงหนึ่ง ไม่ยืนยัน utilization ระยะยาวหรือความสามารถจ่ายของแอปปลายทาง [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027)
5. **benchmark ≠ ผลธุรกิจทุกประเภท.** METR time horizon วัดงานซอฟต์แวร์ชุดหนึ่งที่ Agent ทำสำเร็จด้วยความน่าจะเป็นระดับหนึ่ง ไม่ใช่เวลาที่ระบบทำงานเองจริงหรือผลตอบแทนทางการเงิน [METR](https://metr.org/time-horizons/)
6. **ผู้ขายชิปเดิม ≠ ชนะทุกแบบของ inference.** การออกแบบ ASIC และการเพิ่มประสิทธิภาพบริการ inference เพิ่มการแข่งขัน แต่ยังไม่พิสูจน์ว่าชิปใดแทนกันได้สมบูรณ์ในทุก workload [Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)

## 6. สิ่งที่ควรติดตามเพื่อตัดสินสมมติฐาน

- **ปลายทาง:** งานที่ Agent จบและตรวจได้ต่อเดือน, อัตราต้องแก้, เวลาคนตรวจ, อัตราต่อสัญญา, รายได้สุทธิต่อ task
- **โมเดล/คลาวด์:** token และ tool calls ต่อ task ที่สำเร็จ, ต้นทุนรวมต่อ task, สัดส่วน routing ไปโมเดลเล็ก, utilization, margin หลังหักพลังงานและค่าเสื่อม
- **ชิป/ซัพพลาย:** HBM และ packaging capacity ที่ส่งมอบจริง, lead time, การใช้ GPU/ASIC, คำสั่งซื้อที่ยืนยันเทียบกับแผน
- **ดาต้าเซ็นเตอร์:** เมกะวัตต์ที่ต่อไฟแล้ว, ระยะเวลารอเชื่อมกริด, ต้นทุนไฟและระบายความร้อน, โครงการที่เลื่อน/ยกเลิก

หากข้อมูลเหล่านี้ไม่เปิดเผย ควรกล่าวว่า **ยังวัดไม่ได้** ไม่เติมตัวเลขสมมติให้ดูแน่นอน

## 7. Claim ledger สำหรับตรวจย้อนหลัง

### C01 — บริษัทชั้นนำเปิด Agent หลายแบบ

**ประเภท:** [ข้อเท็จจริงเรื่องการเปิดตัว]  
**แหล่ง:** [OpenAI 10 ก.ย. 2026](https://openai.com/index/introducing-the-agents-api/), [Google 19 พ.ค. 2026](https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/), [AWS 22 เม.ย. 2026](https://aws.amazon.com/about-aws/whats-new/2026/04/agentcore-new-features-to-build-agents-faster/), [Microsoft 9 มี.ค. 2026](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/), [SpaceXAI 11 ส.ค. 2026](https://x.ai/news/introducing-grok-bot)  
**ข้อจำกัด/คำอธิบายอื่น:** ผลิตภัณฑ์ต่างหน้าที่และระดับความพร้อม; ข่าวเปิดตัวไม่วัดการใช้จริง  
**ความมั่นใจ:** สูงเฉพาะการเปิดตัว; ต่ำต่อข้ออ้างว่าผลตอบแทนกว้างขวาง  
**ผลต่อการเล่า:** แสดงหลายทางเข้าสู่งานเดียวกัน ไม่วาดว่าเหมือนกันทั้งหมด

### C02 — การมอบอิสระสัมพันธ์กับ token ที่ใช้มากขึ้น

**ประเภท:** [ข้อเท็จจริงในข้อมูลผู้ให้บริการ]  
**แหล่ง:** [Anthropic Economic Index, เผยแพร่ 26 มิ.ย. 2026](https://www.anthropic.com/research/economic-index-june-2026-report); ข้อมูลผลิตภัณฑ์ของตนในช่วง เม.ย.–มิ.ย. 2026  
**หลักฐาน:** ความสัมพันธ์ r = 0.68 ระหว่างระดับ autonomy เฉลี่ยกับ median token ในกลุ่ม artifact บน chat/Cowork  
**ข้อจำกัด:** เป็นความสัมพันธ์ ไม่ใช่เหตุผลเชิงสาเหตุ; ข้อมูล Claude ไม่แทนทั้งตลาด  
**ความมั่นใจ:** กลางต่อทิศทางในตัวอย่าง; ต่ำต่อขนาดผลรวมอุตสาหกรรม  
**ผลต่อการเล่า:** ภาพงานยาวอาจใช้หลายรอบ แต่ห้ามใส่สเกล GPU แบบวัดจริง

### C03 — Agent บางงานใช้พลังงานมาก แต่ประสิทธิภาพต่อ task ก็ดีขึ้น

**ประเภท:** [การประเมินของหน่วยงานอิสระ]  
**แหล่ง:** [IEA, Key Questions on Energy and AI, 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)  
**หลักฐาน:** งาน reasoning/agentic บางชนิดใช้พลังงานต่อคำขอมากกว่าข้อความง่ายหลายร้อย/พันเท่า; พลังงานต่อ task ลดลงอย่างน้อยหนึ่ง order of magnitude ต่อปีในช่วงหลัง  
**ข้อจำกัด:** ช่วงการใช้พลังงานขึ้นกับชนิดงาน; disclosure ยังไม่ครบ; ไม่มีค่าเฉลี่ย Agent หนึ่งตัวที่ใช้ได้ทั่วไป  
**ความมั่นใจ:** กลางต่อกลไก; ต่ำต่อการทำนาย Agent-only load  
**ผลต่อการเล่า:** ให้สองแรงสวนกันอยู่ในภาพเดียว

### C04 — ไฟฟ้าดาต้าเซ็นเตอร์อาจเกือบเท่าตัวถึงปี 2030

**ประเภท:** [ประมาณการกรณีกลาง]  
**แหล่ง:** [IEA 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)  
**หลักฐาน:** 485 TWh ในปี 2025 เทียบกับ 950 TWh ในปี 2030  
**ข้อจำกัด:** รวมดาต้าเซ็นเตอร์ทั้งหมด; ขึ้นกับเงินทุน การต่อไฟ และการใช้ AI; ไม่ใช่ไฟฟ้าจาก Agent เท่านั้น  
**ความมั่นใจ:** กลางต่อการเป็นกรณีกลางของ IEA; ต่ำต่อผลลัพธ์จริงปี 2030  
**ผลต่อการเล่า:** หากใช้กราฟต้องติดป้าย “global data centres, IEA central case”

### C05 — HBM และอุปกรณ์ไฟฟ้าเป็นข้อจำกัด

**ประเภท:** [การประเมินห่วงโซ่อุปทาน]  
**แหล่ง:** [IEA 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary), [TSMC 2026 Technology Symposium](https://pr.tsmc.com/system/files/newspdf/attachment/49337b40ff139d51d533076cf7a945b30e107e07/2026%20Tech%20Symposium%20%28E%29_Final_wmn.pdf)  
**หลักฐาน:** IEA คาดความตึงตัว HBM อย่างน้อยถึงปลาย 2027 และชี้ข้อจำกัดหม้อแปลง/อุปกรณ์กำลัง; TSMC วางแผนขยาย CoWoS  
**ข้อจำกัด:** สถานะอาจเปลี่ยนเมื่อกำลังผลิตมาเพิ่ม; ไม่มีสัดส่วนที่เกิดจาก Agent แยกต่างหาก  
**ความมั่นใจ:** กลาง  
**ผลต่อการเล่า:** แสดงการต่อกันของคอขวด ไม่ระบุบริษัทผู้ชนะจากแผนที่นี้

### C06 — รายได้ Data Center ของ NVIDIA โตแรง

**ประเภท:** [ผลประกอบการบริษัท]  
**แหล่ง:** [NVIDIA Q2 FY2027, ไตรมาสสิ้นสุด 26 ก.ค.; เผยแพร่ 26 ส.ค. 2026](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027)  
**หลักฐาน:** 89.0 พันล้านดอลลาร์ เพิ่ม 117% ปีต่อปี  
**ข้อจำกัด:** รวมหลายงาน AI และธุรกิจ Data Center; ไม่บอก ROI ของลูกค้าหรือส่วนที่ Agent สร้าง  
**ความมั่นใจ:** สูงต่อยอดรายงาน; ต่ำต่อการแยก Agent  
**ผลต่อการเล่า:** ใช้เป็นภาพขนาดตลาดอุปกรณ์ ไม่อ้างความสำเร็จของ Agent

### C07 — ASIC และการทำ inference ให้ถูกลงเป็นแรงแข่งขัน

**ประเภท:** [คำกล่าวผู้ขาย + วิเคราะห์]  
**แหล่ง:** [Google TPU 8i, 22 เม.ย. 2026](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)  
**หลักฐาน:** Google ระบุ performance per dollar ดีขึ้น 80% จาก TPU รุ่นก่อนสำหรับ inference  
**ข้อจำกัด:** เทียบผลิตภัณฑ์ตนเอง ไม่มีการยืนยันว่าแทน GPU ทุกชนิดได้; อาจมีต้นทุนเปลี่ยนระบบ  
**ความมั่นใจ:** กลางต่อความตั้งใจและทิศทางออกแบบ; ต่ำต่อผลส่วนแบ่งตลาด  
**ผลต่อการเล่า:** อย่าวาดชิปชนิดหนึ่งชนะเด็ดขาด

### C08 — งานที่ใช้ AI อาจไม่เพิ่มผลิตภาพเสมอ

**ประเภท:** [งานทดลองที่มีขอบเขต]  
**แหล่ง:** [METR, ศึกษางาน ก.พ.–มิ.ย. 2025](https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf), [อัปเดต 24 ก.พ. 2026](https://metr.org/blog/2026-02-24-uplift-update/)  
**หลักฐาน:** 16 นักพัฒนา, 246 งาน, ช้าลงประมาณ 20% ภายใต้เงื่อนไขการทดลองเดิม; การทดลองใหม่ให้สัญญาณที่ไม่น่าเชื่อถือเรื่องผลปัจจุบัน  
**ข้อจำกัด:** งานและผู้เข้าร่วมเฉพาะกลุ่ม; เครื่องมือเปลี่ยนเร็ว; ไม่ใช่งาน Agent ทั้งหมด  
**ความมั่นใจ:** กลางต่อผลการทดลองเดิม; ต่ำต่อการนำไปทำนายปี 2026  
**ผลต่อการเล่า:** เตือนว่าการใช้จริงและผลสุทธิต่างกัน

### C09 — การกำกับสิทธิ์เป็นส่วนของคุณค่าทางธุรกิจ

**ประเภท:** [ข้อเท็จจริงด้านผลิตภัณฑ์ + วิเคราะห์]  
**แหล่ง:** [Microsoft Agent 365](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/), [AWS AgentCore](https://aws.amazon.com/bedrock/agentcore/faqs/), [Anthropic ความปลอดภัย](https://www.anthropic.com/research/trustworthy-agents)  
**หลักฐาน:** ผู้ขายสร้างชั้น identity, policy, observability และ evaluations  
**ข้อจำกัด:** การมีผลิตภัณฑ์ไม่ยืนยันรายได้หรือ moat ที่ยั่งยืน  
**ความมั่นใจ:** สูงต่อการมีชั้นผลิตภัณฑ์; กลางต่อความสำคัญเชิงกลยุทธ์  
**ผลต่อการเล่า:** แสดง Agent ต้องผ่านประตูสิทธิ์ก่อนลงมือ

### C10 — การเปิดตัว Agent ไม่ยืนยัน ROI ทั่วไป

**ประเภท:** [วิเคราะห์จากช่องว่างหลักฐาน]  
**แหล่ง:** [OpenAI: วัดผลลัพธ์](https://openai.com/index/how-to-connect-ai-usage-to-business-value/), [METR](https://metr.org/blog/2026-02-24-uplift-update/), [IEA: ความไวต่อผลตอบแทน](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)  
**ข้อโต้แย้งที่เป็นไปได้:** บางองค์กรอาจได้ผลตอบแทนสูงในงานเฉพาะ แม้ยังไม่มีข้อมูลภาพรวม  
**ความมั่นใจ:** สูงว่า “ยังพิสูจน์ทั่วไปไม่ได้”; ต่ำต่อการระบุผู้แพ้ชนะรายบริษัท  
**ผลต่อการเล่า:** จบด้วยคำถามที่วัดได้ ไม่ใช่รายชื่อหุ้นชนะ

## 8. ทางเลือกของคำถามเรื่องเล่า ก่อนเจ้าของงานเลือก thesis

- **ทางเลือก ก:** ใครจะถือจุดรับงานและผลลัพธ์ เมื่อโมเดลกลายเป็นส่วนที่สลับได้?
- **ทางเลือก ข:** Agent จะเปลี่ยนจากการซื้อกำลังฝึกโมเดลไปเป็นการซื้อ inference และโครงสร้างพื้นฐานชนิดใด?
- **ทางเลือก ค:** การเติบโตของงาน Agent จะมากพอชนะการลดต้นทุนต่อ task และข้อจำกัดไฟฟ้า/HBM หรือไม่?

ทั้งสามยังเปิดไว้ เอกสารนี้ไม่ได้กำหนดลำดับฉากเว็บหรือภาพสรุปสุดท้ายจนกว่าเจ้าของงานจะเลือก thesis

## แหล่งหลักและวันที่

- [OpenAI, Agents API, 10 ก.ย. 2026](https://openai.com/index/introducing-the-agents-api/); [ต้นทุนและผลลัพธ์, 14 ก.ค. 2026](https://openai.com/index/managing-ai-investments-in-agentic-era/)
- [Anthropic, Economic Index, 26 มิ.ย. 2026](https://www.anthropic.com/research/economic-index-june-2026-report); [การใช้ Agent จริง, 18 ก.พ. 2026](https://www.anthropic.com/research/measuring-agent-autonomy); [ความปลอดภัย, 9 เม.ย. 2026](https://www.anthropic.com/research/trustworthy-agents)
- [Google, Managed Agents, 19 พ.ค. 2026](https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/); [TPU 8i, 22 เม.ย. 2026](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)
- [AWS, AgentCore, 22 เม.ย. 2026](https://aws.amazon.com/about-aws/whats-new/2026/04/agentcore-new-features-to-build-agents-faster/); [Microsoft, Agent 365, 9 มี.ค. 2026](https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/); [SpaceXAI, Grok Bot, 11 ส.ค. 2026](https://x.ai/news/introducing-grok-bot)
- [IEA, Key Questions on Energy and AI, 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary); [NVIDIA, Q2 FY2027, 26 ส.ค. 2026](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027); [TSMC, Technology Symposium 2026](https://pr.tsmc.com/system/files/newspdf/attachment/49337b40ff139d51d533076cf7a945b30e107e07/2026%20Tech%20Symposium%20%28E%29_Final_wmn.pdf)
- [METR, randomized trial, ข้อมูล ก.พ.–มิ.ย. 2025](https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf); [METR, อัปเดต 24 ก.พ. 2026](https://metr.org/blog/2026-02-24-uplift-update/)
