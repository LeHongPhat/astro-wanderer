---
title: "Chương 3: Fibonacci Trong Phân Tích Kỹ Thuật"
subtitle: "Công cụ đo lường nhịp điều chỉnh và xác định vùng chốt lời"
date: "2026-10-07"
order: 4  
tags: ["trading"]
author: "Phat Le"
category: "trading"
description: "Chương 3 hướng dẫn sử dụng Fibonacci Retracement để đo lực hồi C2 và Fibonacci Extension để xác định vùng chốt lời, kết hợp với vùng cản và cấu trúc."
draft: false
---


*Chương 3 — Fibonacci: Công cụ đo lường nhịp điều chỉnh và xác định vùng chốt lời*

## Key Takeaways — Bạn sẽ nhận được gì sau chương này?

Sau khi đọc và nắm vững chương 3, bạn sẽ:

| # | Nội dung | Ứng dụng thực chiến |
| :--- | :--- | :--- |
| 1 | Hiểu nguồn gốc dãy số Fibonacci và vì sao nó xuất hiện trong trading | Tư duy đúng: Fibonacci là quy ước xã hội, không phải phép màu |
| 2 | Nắm tỷ lệ vàng 0.618 và các tỷ lệ quan trọng (0.382, 0.5, 0.618) | Hiểu vì sao các mức này được dùng để đo lường |
| 3 | Biết Fibonacci Retracement là gì và dùng để làm gì | Đo lực hồi của C2 so với C1 — xác định vùng C2 có thể kết thúc |
| 4 | Biết Fibonacci Extension là gì và dùng để làm gì | Xác định vùng chốt lời khi không còn vùng cản phía trước |
| 5 | Biết cách vẽ Fib đúng trong uptrend và downtrend | Không vẽ sai chiều, không vẽ trên khung quá nhỏ |
| 6 | Hiểu ứng dụng của từng mức Fib (38.2%, 50%, 61.8%, 78.6%, 1.618, 2.000) | Biết mức nào đáng chú ý, mức nào cảnh báo cấu trúc thất bại |
| 7 | Nắm nguyên tắc confluence — Fibonacci chỉ đáng tin khi trùng với công cụ khác | Kết hợp Fib với vùng cản, EMA, RSI, cấu trúc |
| 8 | Hiểu quy trình kết hợp Retracement và Extension | Biết khi nào vẽ Retracement, khi nào vẽ Extension |
| 9 | Nhận diện lỗi thường gặp khi dùng Fibonacci | Tránh dùng Fib đứng một mình, tránh vẽ trước BOS |
| 10 | Hiểu rằng Fibonacci không phải công cụ vào lệnh | Không giao dịch chỉ vì giá chạm mức Fib |

> **Kết quả cốt lõi:** Sau chương này, bạn có khả năng đo lường nhịp điều chỉnh C2 và xác định vùng chốt lời tiềm năng — nhưng luôn kết hợp với vùng cản, EMA, và cấu trúc để tăng xác suất. Fibonacci là công cụ đo lường, không phải công cụ dự đoán.

## Mở Đầu

Fibonacci là công cụ đo lường, không phải công cụ dự đoán. Nó không nói cho bạn biết giá sẽ đi đâu — nó cho bạn biết những vùng giá nào đáng chú ý dựa trên tỷ lệ thoái lui và mở rộng của một sóng đã hoàn thành.

Trong giáo trình này, Fibonacci được dùng cho 2 mục đích duy nhất:

| Mục đích | Công cụ | Dùng khi nào |
| :--- | :--- | :--- |
| Đo lực hồi của C2 | Fibonacci Retracement | Sau khi C1 kết thúc, C2 đang diễn ra |
| Xác định vùng chốt lời | Fibonacci Extension | Sau khi cấu trúc 1-2-1 hình thành (BOS) |

> **Nguyên tắc xuyên suốt:** Fibonacci chỉ đáng tin khi trùng với vùng cản, EMA, hoặc cấu trúc. Fibonacci đứng một mình là Fibonacci vô nghĩa. Đây là lý do không có setup vào lệnh nào chỉ dựa vào Fibonacci trong giáo trình này.

## I. Giới Thiệu Về Dãy Số Fibonacci

### 1. Dãy số Fibonacci là gì?

Dãy số Fibonacci được phát hiện bởi nhà toán học người Ý Leonardo Fibonacci vào thế kỷ 13. Dãy số bắt đầu như sau:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987…

**Quy luật:** Mỗi số bằng tổng của hai số liền trước.

- 0 + 1 = 1
- 1 + 1 = 2
- 1 + 2 = 3
- 2 + 3 = 5
- 3 + 5 = 8
- …

### 2. Tỷ lệ vàng (Golden Ratio)

Điều kỳ diệu của dãy Fibonacci không nằm ở các con số, mà ở tỷ lệ giữa chúng.

Khi chia một số Fibonacci cho số liền sau nó, kết quả tiến dần về 0.618:
- 34 / 55 = 0.618
- 55 / 89 = 0.618
- 89 / 144 = 0.618

Khi chia một số Fibonacci cho số cách nó hai vị trí, kết quả tiến dần về 0.382:
- 34 / 89 = 0.382
- 55 / 144 = 0.382

**Tỷ lệ vàng là 0.618 (hay 61.8%)** — được coi là tỷ lệ cân bằng hoàn hảo của tự nhiên.

### 3. Fibonacci trong tự nhiên

Tỷ lệ vàng xuất hiện khắp nơi trong tự nhiên — không phải do con người tạo ra, mà là quy luật tự nhiên:
- Hoa hướng dương: Số cánh và cách sắp xếp hạt tuân theo dãy Fibonacci.
- Vỏ ốc anh vũ: Đường xoắn của vỏ tuân theo tỷ lệ vàng.
- Cây cối: Cách mọc lá, cách phân nhánh tuân theo tỷ lệ Fibonacci.
- Cơ thể người: Tỷ lệ giữa các bộ phận (chiều dài cánh tay / bàn tay, chiều cao / chiều dài chân) xấp xỉ 1.618.
- Dải Ngân Hà: Các nhánh xoắn của thiên hà tuân theo đường xoắn Fibonacci.

### 4. Fibonacci trong nghệ thuật và kiến trúc

Con người đã áp dụng tỷ lệ vàng vào nghệ thuật từ hàng ngàn năm:
- Kim tự tháp Giza: Tỷ lệ các cạnh xấp xỉ 1.618.
- Đền Parthenon (Hy Lạp): Mặt tiền được chia theo tỷ lệ vàng.
- Tranh Mona Lisa (Leonardo da Vinci): Bố cục khuôn mặt tuân theo tỷ lệ vàng.
- Tác phẩm của Salvador Dalí, Michelangelo: Sử dụng tỷ lệ vàng trong bố cục.

### 5. Fibonacci trong trading

Trong trading, Fibonacci được dùng để chia nhỏ một sóng giá đã hoàn thành thành các tỷ lệ phần trăm. Các tỷ lệ này trở thành vùng giá đáng chú ý trong tương lai:
- **Retracement:** Đo sóng điều chỉnh (C2) thoái lui bao nhiêu % so với sóng đẩy (C1).
- **Extension:** Đo sóng đẩy mới (C1 mới) mở rộng bao nhiêu % so với sóng đẩy cũ.

**Vì sao Fibonacci hoạt động trong trading?**
Không phải vì có phép màu. Mà vì hàng triệu trader trên toàn thế giới cùng quan sát các tỷ lệ này — và cùng đưa ra quyết định giao dịch tại đó. Đây là **self-fulfilling prophecy** — giống như vùng cản.

> **Lưu ý quan trọng:** Fibonacci trong trading không phải là quy luật tự nhiên như trong cây cối hay vỏ ốc. Nó là quy ước xã hội — hoạt động vì nhiều người cùng dùng. Điều này có nghĩa là Fibonacci chỉ đáng tin khi trùng với các công cụ khác (vùng cản, EMA, cấu trúc).

## II. Fibonacci Retracement — Đo Lực Hồi Của C2

### 1. Định nghĩa

Fibonacci Retracement là công cụ đo mức độ thoái lui của sóng C2 so với 100% của sóng C1.

- Trong uptrend: C1 là sóng tăng. C2 là sóng giảm. Fib Retracement đo C2 thoái lui bao nhiêu % so với C1.
- Trong downtrend: C1 là sóng giảm. C2 là sóng tăng. Fib Retracement đo C2 hồi phục bao nhiêu % so với C1.

Nói cách khác: Fibonacci Retracement trả lời câu hỏi:
> "Sóng điều chỉnh C2 đã đi được bao xa so với sóng đẩy C1?"

### 2. Các mức Retracement quan trọng

| Mức Fib | Ý nghĩa | Ứng dụng |
| :--- | :--- | :--- |
| 23.6% | Thoái lui nông — pullback rất khỏe | Ít khi kết thúc ở đây trong intraday |
| 38.2% | Thoái lui nông — trend mạnh | Vùng đáng chú ý đầu tiên |
| 50.0% | Thoái lui trung bình | Vùng cân bằng |
| 61.8% | Thoái lui sâu — tỷ lệ vàng | Vùng đáng chú ý cuối cùng còn hợp lệ |
| 78.6% | Thoái lui rất sâu — cảnh báo | Cấu trúc có thể thất bại |
| 100% | Phá điểm khởi đầu C1 | Cấu trúc thất bại — đảo chiều |

**Vì sao 38.2%, 50%, 61.8% quan trọng nhất?**
- Đây là vùng mà phần lớn các nhịp điều chỉnh lành mạnh kết thúc.
- Nếu C2 thoái lui ít hơn 38.2% → pullback quá nông, có thể chưa kết thúc.
- Nếu C2 thoái lui nhiều hơn 61.8% → pullback sâu, trend yếu hơn.
- Nếu C2 thoái lui hơn 78.6% → cấu trúc có thể thất bại.

### 3. Cách vẽ đúng

**Trong uptrend (C1 tăng, C2 giảm):**
1. Xác định điểm khởi đầu C1 (swing low).
2. Xác định điểm kết thúc C1 (swing high).
3. Kéo Fib từ low → high.
4. Các mức thoái lui xuất hiện từ trên xuống: 23.6%, 38.2%, 50%, 61.8%, 78.6%.

**Trong downtrend (C1 giảm, C2 tăng):**
1. Xác định điểm khởi đầu C1 (swing high).
2. Xác định điểm kết thúc C1 (swing low).
3. Kéo Fib từ high → low.
4. Các mức thoái lui xuất hiện từ dưới lên: 23.6%, 38.2%, 50%, 61.8%, 78.6%.

> **Lưu ý intraday:** Vẽ Fib trên khung H1 hoặc M15 để xác định vùng. Không vẽ Fib trên M1 — quá nhiễu, không đáng tin.

### 4. Fibonacci Retracement dùng để làm gì?

Fibonacci Retracement **không phải là công cụ vào lệnh**. Nó là công cụ xác định vùng — giúp bạn biết C2 có thể kết thúc ở đâu.

**Ứng dụng chính:**
- Xác định vùng C2 có thể kết thúc (38.2% – 61.8%).
- Đo lường sức mạnh của trend: C2 thoái lui nông (38.2%) → trend mạnh. C2 thoái lui sâu (61.8%) → trend yếu hơn.
- Cảnh báo cấu trúc thất bại: C2 thoái lui > 78.6% → cấu trúc có thể đảo chiều.

**Kết hợp với các công cụ khác:**

| Công cụ | Cách kết hợp |
| :--- | :--- |
| Vùng cản | Fib trùng vùng cản → vùng đáng chú ý hơn |
| EMA 34/89 | Fib trùng EMA → vùng đáng chú ý hơn |
| RSI | RSI về 40–50 trong uptrend tại vùng Fib → xác nhận |
| Nến | Pin bar, engulfing tại vùng Fib → tín hiệu xác nhận |

> **Ví dụ confluence (hợp lưu) mạnh:** Trong uptrend, C2 thoái lui về 50% C1, trùng với EMA 34, trùng với vùng cản cũ, có pin bar xác nhận. Đây là vùng khá tốt khi có nhiều công cụ cùng chỉ về một vùng giá.

*Nhắc lại: Fibonacci Retracement không tạo ra tín hiệu vào lệnh. Nó chỉ cho bạn biết vùng nào đáng chờ. Việc vào lệnh hay không phụ thuộc vào cấu trúc, nến xác nhận, và confluence với các công cụ khác.*

## III. Fibonacci Extension — Xác Định Vùng Chốt Lời

### 1. Định nghĩa

Fibonacci Extension là công cụ đo mức mở rộng của sóng C1 mới so với sóng C1 cũ, sau khi cấu trúc 1-2-1 đã hình thành (BOS).

- Dùng sau khi BOS xảy ra — tức là sau khi giá đã phá đỉnh/đáy C1 cũ.
- Giúp xác định giá có thể đi đến đâu trong sóng C1 mới.
- Là công cụ xác định vùng chốt lời, không phải công cụ vào lệnh.

Nói cách khác: Fibonacci Extension trả lời câu hỏi:
> "Nếu sóng C1 mới tiếp diễn, giá có thể đi đến vùng nào?"

### 2. Các mức Extension quan trọng

| Mức Extension | Ý nghĩa | Ứng dụng |
| :--- | :--- | :--- |
| 1.618 | Mở rộng tiêu chuẩn | Vùng chốt lời chính (mục tiêu phổ biến nhất) |
| 2.000 | Mở rộng mạnh | Vùng chốt lời phần còn lại |
| 2.618 | Mở rộng rất mạnh | Chỉ dùng khi trend cực mạnh |
| 3.618 | Mở rộng rất rất mạnh | Chỉ dùng khi trend cực mạnh (Ví dụ: chart vàng nửa cuối năm 2025) |

### 3. Cách vẽ đúng

**Trong uptrend (sau BOS tăng):**
1. Xác định điểm khởi đầu C1 (swing low).
2. Xác định điểm kết thúc C1 (swing high).
3. Xác định đáy C2 (swing low của pullback).
4. Kéo Fib Extension theo 3 điểm: đáy (low) → đỉnh (high) → đáy (low) của C2.
5. Các mức extension xuất hiện: 1.618, 2.000, 2.618,...

**Trong downtrend (sau BOS giảm):**
1. Xác định điểm khởi đầu C1 (swing high).
2. Xác định điểm kết thúc C1 (swing low).
3. Xác định đỉnh C2 (swing high của rally).
4. Kéo Fib Extension theo 3 điểm: đỉnh (high) → đáy (low) → đỉnh (high) của C2.
5. Các mức extension xuất hiện: 1.618, 2.000, 2.618.

> **Lưu ý:** Fib Extension chỉ được vẽ sau khi BOS xác nhận — tức là sau khi giá đã phá đỉnh/đáy C1 cũ (Phá cản theo Dow — liên kết với chương 2). Nếu vẽ trước, đó là đoán.

### 4. Fibonacci Extension dùng để làm gì?

Fibonacci Extension **không phải là công cụ vào lệnh**. Nó là công cụ xác định vùng chốt lời — đặc biệt hữu ích khi không còn vùng cản phía trước.

**Ứng dụng chính:**
- Xác định vùng chốt lời khi giá đã phá đỉnh/đáy C1 cũ.
- Đo lường tiềm năng của sóng C1 mới: Sóng mới có thể đi đến 1.272, 1.618, hay 2.000?
- Hỗ trợ trailing stop: Khi giá đạt 1.272 → dời SL về hòa vốn. Khi đạt 1.618 → trailing theo đáy/đỉnh gần nhất.

**Vì sao cần Fibonacci Extension khi không còn cản?**
Trong một xu hướng mạnh, sau khi phá đỉnh cũ (BOS), giá có thể đi vào vùng không có cản nào phía trước — gọi là vùng trống (price void). Lúc này, Fibonacci Extension là công cụ duy nhất giúp bạn ước lượng vùng chốt lời hợp lý.

**Chiến lược chốt lời theo Fib Extension:**

| Mức | Hành động | Lý do |
| :--- | :--- | :--- |
| 1.618 | Cân nhắc chốt 50% vị thế hoặc toàn bộ vị thế. | Mức phổ biến nhất, nhiều trader dùng |
| 2.618 | Chốt một phần còn lại | Ít gặp trong intraday |

**Kết hợp với các công cụ khác:**

| Công cụ | Cách kết hợp |
| :--- | :--- |
| Vùng cản | Fib Extension trùng vùng cản → mục tiêu mạnh hơn |
| RSI | RSI quá mua tại Fib Extension → xác nhận chốt |

*Nhắc lại: Fibonacci Extension không tạo ra tín hiệu vào lệnh. Nó chỉ cho bạn biết vùng nào đáng chốt lời. Việc chốt hay không còn phụ thuộc vào cấu trúc, động lượng, và confluence với các công cụ khác.*

## V. Lỗi Thường Gặp

- Vẽ Fib sai chiều — kéo từ high → low trong uptrend thay vì low → high.
- Vẽ Fib trên khung nhỏ — quá nhiễu, không đáng tin.
- Dùng Fib đứng một mình — không kết hợp vùng cản, EMA, RSI.
- Vẽ Fib Extension trước BOS — đó là đoán, không phải xác nhận.
- Nghĩ Fibonacci là công cụ vào lệnh — Fibonacci chỉ xác định vùng, không tạo tín hiệu.

> **Câu chốt:** Fibonacci không cho bạn biết giá sẽ đi đâu. Nó cho bạn biết những vùng giá nào đáng chú ý — và nhiệm vụ của bạn là kết hợp với vùng cản, EMA, cấu trúc để tìm ra xác suất.

---

**Chuyển chương:** Sau khi nắm vững Fibonacci, chương tiếp theo sẽ đi vào **EMA 34 và EMA 89** — công cụ xác định xu hướng và vùng vào lệnh tại xu thế cấp 2, kết hợp trực tiếp với Fib Retracement.