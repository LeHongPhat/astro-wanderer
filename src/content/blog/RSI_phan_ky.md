---
title: "Chương 5: RSI & Sự Phân Kỳ"
subtitle: "Đọc động lượng và cảnh báo đảo chiều sớm"
date: "2026-10-13"
order: 6
tags: ["trading"]
author: "Phat Le"
category: "trading"
description: "Chương 5 hướng dẫn sử dụng RSI để đọc động lượng thị trường, nhận diện vùng quá mua/quá bán, và phát hiện phân kỳ cảnh báo đảo chiều sớm. Entry luôn cần BOS xác nhận, SL theo cấu trúc."
draft: false
---

## Key Takeaways — Bạn sẽ nhận được gì sau chương này?

Sau khi đọc và nắm vững chương 5, bạn sẽ:

| # | Nội dung | Ứng dụng thực chiến |
| :--- | :--- | :--- |
| 1 | Hiểu RSI là gì và bản chất của chỉ báo động lượng | Biết RSI đo gì — và không đo gì |
| 2 | Nắm vùng quá mua / quá bán và cách dùng đúng trong trend | Không bán khi RSI > 70 trong uptrend mạnh |
| 3 | Hiểu vì sao RSI > 70 trong trend mạnh là xác nhận — không phải tín hiệu đảo chiều | Tránh lỗi phổ biến nhất của người mới |
| 4 | Biết điều chỉnh ngưỡng RSI theo bối cảnh thị trường | Linh hoạt theo trend, sideway, tin tức |
| 5 | Hiểu sự phân kỳ giữa giá và RSI | Nhận diện cảnh báo đảo chiều sớm |
| 6 | Phân biệt phân kỳ giảm (Bearish) và phân kỳ tăng (Bullish) | Biết khi nào cảnh báo đảo chiều giảm, khi nào tăng |
| 7 | Biết trader nên làm gì khi phân kỳ xuất hiện | Không vào lệnh ngay — chờ CHoCH và BOS xu hướng mới xác nhận |
| 8 | Nắm quy trình entry thống nhất khi phân kỳ xuất hiện | Entry tại BOS xu hướng mới, SL theo cấu trúc, TP theo vùng cản / Fib Extension |
| 9 | Nhận diện lỗi thường gặp khi dùng RSI | Tránh bán ngược trend, tránh vào lệnh khi chưa có xác nhận |

> **Kết quả cốt lõi:** Sau chương này, bạn có khả năng đọc động lượng thị trường qua RSI và nhận diện cảnh báo đảo chiều sớm qua phân kỳ. RSI là bối cảnh động lượng — không phải tín hiệu mua/bán. Phân kỳ là cảnh báo — không phải tín hiệu vào lệnh. Entry luôn cần BOS xác nhận: BOS vào lệnh khi giao dịch theo C1, BOS xu hướng mới khi giao dịch đảo chiều. SL luôn theo cấu trúc.

## Mở Đầu

RSI (Relative Strength Index) thuộc nhóm chỉ báo động lượng (momentum) — đo sức mạnh của giá trong một khoảng thời gian. Nó không cho bạn biết giá sẽ đi đâu, nhưng cho bạn biết lực đang mạnh lên hay yếu đi.

Trong giáo trình này, RSI được dùng cho 2 mục đích duy nhất:

| Mục đích | Công cụ | Dùng khi nào |
| :--- | :--- | :--- |
| Xác nhận động lượng | Vùng quá mua / quá bán | Khi giá vào vùng cản mạnh |
| Cảnh báo đảo chiều sớm | Phân kỳ (Divergence) | Trước khi cấu trúc bị phá vỡ |

> **Nguyên tắc xuyên suốt:** RSI không phải tín hiệu mua/bán. Nó là bối cảnh động lượng. RSI chỉ đáng tin khi trùng với cấu trúc, vùng cản, hoặc EMA. RSI đứng một mình là RSI vô nghĩa.

## I. RSI Là Gì?

### 1. Định nghĩa

RSI là chỉ báo dao động (oscillator) được phát triển bởi J. Welles Wilder, đo tốc độ và độ lớn của biến động giá.

- RSI dao động từ 0 đến 100.
- RSI đo tỷ lệ giữa lực tăng và lực giảm trong N cây nến gần nhất.
- RSI càng cao → lực tăng càng mạnh. RSI càng thấp → lực giảm càng mạnh.

### 2. Công thức (hiểu đơn giản, không cần tính)

`RSI = 100 − (100 / (1 + RS))`

Trong đó: RS = Trung bình lực tăng / Trung bình lực giảm trong N cây nến.

Bạn không cần tính RSI bằng tay. Chỉ cần hiểu:

- Khi giá tăng liên tục → RSI tăng.
- Khi giá giảm liên tục → RSI giảm.
- Khi giá đi ngang → RSI dao động quanh 50.

### 3. Cài đặt

| Thông số | Giá trị | Ghi chú |
| :--- | :--- | :--- |
| Chu kỳ (Period) | 14 | Mặc định — phù hợp với intraday |
| Khung thời gian | H1, H4 (xác định xu hướng); M15, M5 (tìm cấu trúc, vào lệnh) | Cùng khung với EMA 34/89 |
| Mức quá mua | 70 (điều chỉnh lên 80 trong trend mạnh) | Ngưỡng cảnh báo động lượng tăng đã mạnh |
| Mức quá bán | 30 (điều chỉnh xuống 20 trong trend mạnh) | Ngưỡng cảnh báo động lượng giảm đã mạnh |

> **Lưu ý intraday:** Trong trend mạnh, RSI có thể duy trì > 70 hoặc < 30 trong nhiều giờ. Đừng bán chỉ vì RSI > 70 — đó là lỗi phổ biến nhất của người mới.

### 4. RSI KHÔNG phải là gì?

- **Không phải tín hiệu mua/bán:** RSI > 70 không có nghĩa là bán ngay.
- **Không phải công cụ dự đoán:** RSI không biết giá sẽ đi đâu.
- **Không phải chỉ báo xu hướng:** RSI chỉ đo động lượng, không đo hướng.
- **Không dùng một mình:** RSI đứng một mình → tín hiệu nhiễu.

## II. Vùng Quá Mua Và Quá Bán

### 1. Định nghĩa

| Vùng | Ngưỡng | Ý nghĩa | Hành động |
| :--- | :--- | :--- | :--- |
| Quá mua (Overbought) | RSI > 70 | Lực tăng đã mạnh trong thời gian dài — có thể điều chỉnh | Không mua đuổi. Chờ C2 quay về EMA 34/89 |
| Quá bán (Oversold) | RSI < 30 | Lực giảm đã mạnh trong thời gian dài — có thể hồi | Không bán đuổi. Chờ C2 quay về EMA 34/89 |
| Trung tính | 30–70 | Động lượng cân bằng | Giao dịch theo cấu trúc |

### 2. Sai lầm phổ biến nhất

> "RSI > 70 → Bán. RSI < 30 → Mua."

Đây là sai lầm chết người trong thị trường có xu hướng.

**Ví dụ:** Trong một uptrend mạnh, RSI có thể duy trì > 70 trong nhiều cây nến. Nếu bạn bán vì RSI > 70, bạn đang bán ngược C1 — vi phạm nguyên tắc vàng của chương 2.

### 3. Cách dùng đúng trong thị trường có xu hướng

| Trạng thái | RSI | Hành động đúng |
| :--- | :--- | :--- |
| Uptrend mạnh | RSI > 70 | Không bán. Chờ C2 quay về EMA 34 + RSI về 40–50 → chờ BOS vào lệnh → Mua |
| Uptrend mạnh | RSI 40–50 | Vùng chờ Mua lý tưởng (C2 lành mạnh) |
| Downtrend mạnh | RSI < 30 | Không mua. Chờ C2 quay về EMA 34 + RSI về 50–60 → chờ BOS vào lệnh → Bán |
| Downtrend mạnh | RSI 50–60 | Vùng chờ Bán lý tưởng (C2 lành mạnh) |
| Sideway | RSI > 70 hoặc < 30 | Không giao dịch theo hệ thống — chỉ dùng để quan sát |

> **Nguyên tắc vàng:** Trong trend, RSI > 70 hoặc < 30 là xác nhận trend mạnh — không phải tín hiệu đảo chiều. Trong sideway, hệ thống không giao dịch (chương 4), nên RSI không được dùng để bắt đỉnh/đáy.

### 4. Điều chỉnh ngưỡng theo bối cảnh

| Bối cảnh | Ngưỡng quá mua | Ngưỡng quá bán |
| :--- | :--- | :--- |
| Trend mạnh | 80 | 20 |
| Trend bình thường | 70 | 30 |
| Sideway | 70 | 30 |
| Sau tin lớn | Không dùng RSI | Không dùng RSI |

### 5. RSI kết hợp với cấu trúc

RSI chỉ đáng tin khi kết hợp với cấu trúc:

- RSI > 70 + giá tại vùng cản mạnh + CHoCH → cảnh báo đảo chiều.
- RSI > 70 + giá trên EMA 34/89 + chưa có CHoCH → trend còn mạnh, không bán.
- RSI < 30 + giá tại vùng cản mạnh + CHoCH → cảnh báo đảo chiều.
- RSI < 30 + giá dưới EMA 34/89 + chưa có CHoCH → trend còn mạnh, không mua.

## III. Sự Phân Kỳ Giữa Giá Và RSI

### 1. Định nghĩa

Phân kỳ (Divergence) xảy ra khi giá và RSI đi ngược chiều nhau. Đây là dấu hiệu động lượng yếu đi — cảnh báo khả năng đảo chiều.

### 2. Phân kỳ giảm (Bearish Divergence)

- Giá tạo Higher High (đỉnh cao hơn).
- RSI tạo Lower High (đỉnh thấp hơn).

**Ý nghĩa:** Giá vẫn tăng nhưng động lượng yếu đi → cảnh báo đảo chiều giảm.

![Bearish Divergence](/img/blog/bearish_divergence_price_vs_rsi_v3.svg)

### 3. Phân kỳ tăng (Bullish Divergence)

- Giá tạo Lower Low (đáy thấp hơn).
- RSI tạo Higher Low (đáy cao hơn).

**Ý nghĩa:** Giá vẫn giảm nhưng động lượng yếu đi → cảnh báo đảo chiều tăng.

![Bullish Divergence](/img/blog/bullish_divergence_price_vs_rsi_v3.svg)

### 4. Bảng tóm tắt phân kỳ

| Loại | Giá | RSI | Ý nghĩa | Hành động |
| :--- | :--- | :--- | :--- | :--- |
| Phân kỳ giảm (Bearish) | Higher High | Lower High | Cảnh báo đảo chiều giảm | Chờ CHoCH + BOS xu hướng mới (giảm) → Bán |
| Phân kỳ tăng (Bullish) | Lower Low | Higher Low | Cảnh báo đảo chiều tăng | Chờ CHoCH + BOS xu hướng mới (tăng) → Mua |

## IV. Trader Nên Làm Gì Khi Phân Kỳ Xuất Hiện?

### 1. Ba bước xử lý

**Bước 1: Không vào lệnh ngay.**

Phân kỳ là cảnh báo, không phải xác nhận. Vào lệnh ngay khi thấy phân kỳ = đoán đỉnh/đáy.

**Bước 2: Chờ xác nhận cấu trúc.**

- Chờ CHoCH (giá phá đáy/đỉnh gần nhất theo hướng đảo chiều).
- Chờ BOS xu hướng mới — giá phá đỉnh/đáy của cấu trúc 1-2-1 mới theo hướng đảo chiều.
- Chỉ vào lệnh sau khi có xác nhận (cấu trúc 1-2-1 mới).

**Bước 3: Vào lệnh và quản lý.**

- Entry tại điểm phá vỡ của BOS xu hướng mới.
- SL theo cấu trúc C2 mới (dưới đáy / trên đỉnh của nhịp điều chỉnh ngay trước BOS).
- TP theo vùng cản đối diện hoặc Fib Extension.

### 2. Quy trình chi tiết

| Bước | Hành động |
| :--- | :--- |
| 1 | Phát hiện phân kỳ → chuyển sang trạng thái quan sát |
| 2 | Kiểm tra confluence (vùng cản, EMA, Fib) |
| 3 | Chờ CHoCH xác nhận |
| 4 | Chờ BOS xu hướng mới |
| 5 | Entry tại điểm phá vỡ của BOS xu hướng mới (nến đóng cửa xác nhận) |
| 6 | SL bên kia C2 mới, TP theo vùng cản đối diện / Fib Extension |

## V. Kết Hợp RSI Với Các Công Cụ Khác

### 1. RSI + Lý thuyết Dow

- Dùng Dow để xác định C1 và C2.
- Dùng RSI để xác nhận động lượng của C1.
- Nếu C1 đang mạnh + RSI xác nhận → trend tiếp diễn.
- Nếu C1 yếu dần + RSI phân kỳ → cảnh báo đảo chiều hoặc false breakout.

### 2. RSI + Vùng cản

- RSI phân kỳ tại vùng cản mạnh → xác suất đảo chiều cao.
- RSI quá mua tại kháng cự mạnh / quá bán tại hỗ trợ mạnh → cảnh báo động lượng, chờ CHoCH + BOS xu hướng mới trước khi hành động.

### 3. RSI + EMA 34/89

- RSI về 40–50 trong uptrend + C2 quay về EMA 34 → vùng chờ Mua lý tưởng.
- RSI về 50–60 trong downtrend + C2 quay về EMA 34 → vùng chờ Bán lý tưởng.
- RSI phân kỳ + giá phá EMA 89 → cảnh báo đảo chiều mạnh.

### 4. RSI + Fibonacci

- RSI về 40–50 (uptrend) + C2 quay về Fib 38.2–50% → confluence mạnh.
- RSI phân kỳ + C2 quay về Fib 78.6% → cảnh báo cấu trúc có thể thất bại.

### 5. Bảng confluence

| Confluence | Độ mạnh | Hành động |
| :--- | :--- | :--- |
| RSI đứng một mình | Yếu | Bỏ qua |
| RSI + vùng cản | Trung bình | Chờ BOS vào lệnh |
| RSI + vùng cản + EMA 34 | Mạnh | Chờ BOS vào lệnh |
| RSI + vùng cản + EMA 34 + Fib | Rất mạnh | Chờ BOS vào lệnh |
| RSI phân kỳ + CHoCH + vùng cản mạnh | Rất mạnh | Chờ BOS xu hướng mới |

## VI. Lỗi Thường Gặp

1. Bán khi RSI > 70 trong uptrend mạnh — bán ngược trend, lỗ nặng.
2. Mua khi RSI < 30 trong downtrend mạnh — mua ngược trend, lỗ nặng.
3. Vào lệnh ngay khi thấy phân kỳ — chưa có CHoCH xác nhận, dính tín hiệu giả.
4. Dùng RSI trên M1 — quá nhiễu, không đáng tin.
5. Dùng RSI đứng một mình — không kết hợp vùng cản, EMA, cấu trúc.
6. Không chờ nến đóng cửa xác nhận — dính fakeout.
7. Phân kỳ xuất hiện nhưng không kiểm tra confluence — phân kỳ yếu, không đáng giao dịch.
8. Cố giao dịch khi RSI ở vùng trung tính mà không có cấu trúc rõ ràng.

## VII. Tóm Tắt Chương

> RSI không cho bạn biết giá sẽ đi đâu. Nó cho bạn biết động lượng đang mạnh lên hay yếu đi. Phân kỳ là cảnh báo — không phải tín hiệu. Nhiệm vụ của bạn là kết hợp RSI với cấu trúc, vùng cản và EMA để tìm ra xác suất. Entry luôn cần BOS xác nhận. SL luôn theo cấu trúc.

---

**Chuyển chương:** Sau khi nắm vững RSI và phân kỳ, chương tiếp theo sẽ đi vào **Hệ thống giao dịch hoàn chỉnh** — nơi tất cả các công cụ đã học (vùng cản, Dow, Fibonacci, EMA, RSI) được tích hợp thành một quy trình thống nhất.