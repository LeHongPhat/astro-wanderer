---
title: "Chương 4: Đường Trung Bình Động (Moving Averages)"
subtitle: "EMA 34 & EMA 89: Xác định xu hướng và tìm điểm vào lệnh"
date: "2026-10-13"
order: 5
tags: ["trading"]
author: "Phat Le"
category: "trading"
description: "Chương 4 hướng dẫn sử dụng EMA 34 và EMA 89 để xác định xu hướng C1, tìm điểm vào lệnh trong C2, và quy trình giao dịch hoàn chỉnh kết hợp với vùng cản và Fibonacci."
draft: false
---

## Key Takeaways — Bạn sẽ nhận được gì sau chương này?

Sau khi đọc và nắm vững chương 4, bạn sẽ:

| # | Nội dung | Ứng dụng thực chiến |
| :--- | :--- | :--- |
| 1 | Hiểu MA/EMA là gì và vì sao dùng EMA thay vì SMA trong intraday | Chọn đúng công cụ cho đúng mục đích |
| 2 | Biết vì sao chọn EMA 34 và EMA 89 | Hiểu nguồn gốc Fibonacci của 2 con số này |
| 3 | Nắm cách xác định xu hướng C1 bằng EMA 34/89 | Nhận diện uptrend, downtrend, sideway một cách khách quan |
| 4 | Biết tìm điểm vào lệnh trong C2 tại EMA 34/89 | Chờ C2 quay về EMA — sau đó chờ BOS vào lệnh |
| 5 | Phân biệt C2 nông (EMA 34) và C2 sâu (EMA 89) | Điều chỉnh khối lượng lệnh phù hợp với từng kịch bản |
| 6 | Nhận diện phá EMA 89 + CHoCH — cảnh báo đảo chiều | Biết khi nào dừng giao dịch theo C1 |
| 7 | Nắm quy tắc Entry / SL / TP thống nhất — entry tại BOS vào lệnh | Entry rõ ràng, SL theo cấu trúc, không giao dịch cảm tính |
| 8 | Hiểu nguyên tắc confluence — EMA chỉ đáng tin khi trùng công cụ khác | Kết hợp EMA với vùng cản, Fibonacci, RSI |
| 9 | Nhận diện lỗi thường gặp khi dùng EMA | Tránh giao dịch EMA cross, tránh giao dịch khi EMA quấn nhau |
| 10 | Hiểu rằng EMA không phải tín hiệu mua/bán | EMA là bối cảnh — không phải tín hiệu |

> **Kết quả cốt lõi:** Sau chương này, bạn có khả năng xác định xu hướng C1 và tìm vùng vào lệnh trong C2 bằng EMA 34/89 — kết hợp với vùng cản, Fibonacci và cấu trúc. Entry thống nhất: chờ BOS vào lệnh xác nhận, entry tại điểm phá vỡ, đặt SL theo cấu trúc BOS vào lệnh.

## Mở Đầu

Đường trung bình động (Moving Average — MA) là công cụ làm mượt giá để nhìn rõ xu hướng. Nó không dự đoán tương lai — nó cho bạn biết giá đang ở đâu so với quá khứ gần đây.

Trong giáo trình này, chúng ta không dùng MA để phát tín hiệu mua/bán (giao cắt — cross). Chúng ta dùng MA cho 3 mục đích duy nhất:

| Mục đích | Công cụ | Dùng khi nào |
| :--- | :--- | :--- |
| Xác định xu hướng C1 | EMA 34 + EMA 89 | Trước khi tìm điểm vào lệnh |
| Tìm vùng vào lệnh trong C2 | EMA 34 (chính), EMA 89 (dự phòng) | Khi giá điều chỉnh (C2) |
| Cảnh báo đảo chiều | EMA 89 | Khi giá phá EMA 89 kèm CHoCH |

> **Nguyên tắc xuyên suốt:** EMA 34/89 là vùng cản động. Nó chỉ đáng tin khi trùng với vùng cản, Fibonacci, hoặc cấu trúc. EMA đứng một mình là EMA vô nghĩa.
>
> **Nguyên tắc Entry thống nhất:** EMA 34/89 không phải là điểm vào lệnh. Nó là vùng đáng chờ — nơi C2 có thể kết thúc. Entry chỉ được kích hoạt khi giá tạo BOS vào lệnh theo hướng C1 trên khung M5/M15. Entry tại điểm phá vỡ, đặt SL theo cấu trúc BOS vào lệnh.

## I. Tổng Quan Về Moving Average

### 1. MA là gì?

MA là giá trị trung bình của giá trong N cây nến gần nhất, được vẽ thành một đường liên tục.

- **SMA (Simple Moving Average):** trung bình cộng đơn giản — mọi cây nến có trọng số bằng nhau.
- **EMA (Exponential Moving Average):** trung bình có trọng số — những cây nến gần có trọng số cao hơn những cây nến xa.

**Vì sao dùng EMA thay vì SMA trong intraday?**

- EMA phản ứng nhanh hơn với biến động giá.
- EMA phù hợp với thị trường biến động mạnh.
- EMA bám sát giá hơn → tìm điểm vào lệnh tốt hơn.

### 2. Vì sao chọn 34 và 89?

Đây là hai con số Fibonacci — nằm trong dãy 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144… (chương 3).

| Đặc điểm | EMA 34 | EMA 89 |
| :--- | :--- | :--- |
| **Đại diện** | Xu hướng trung hạn | Xu hướng dài hơn |
| **Vai trò trong trend** | Hỗ trợ/kháng cự động | Hỗ trợ/kháng cự động mạnh |
| **C2 thường kết thúc** | Tại EMA 34 (C2 nông) | Tại EMA 89 (C2 sâu) |
| **Khi giá phá EMA** | Bình thường — C2 có thể đi tiếp về EMA 89 | Nếu kèm CHoCH → cảnh báo đảo chiều (Kịch bản 3) |

### 3. Cách sử dụng

- **Khung xác định xu hướng:** H1, H4 — giá nằm trên EMA thể hiện uptrend, giá nằm dưới EMA thể hiện downtrend.
- **Khung vào lệnh:** M15, M5 — tìm cấu trúc, điểm vào lệnh, điểm dừng lỗ, điểm chốt lời.
- **Không dùng thêm MA khác** — tránh nhiễu. Chỉ 2 đường là đủ.

## II. EMA 34/89 — Xác Định Xu Hướng C1

Trước khi tìm điểm vào lệnh, phải xác định xu hướng C1 đang là gì. EMA 34/89 giúp làm điều đó một cách khách quan.

### 1. Uptrend (C1 tăng)

**Dấu hiệu:**

- Giá nằm trên cả EMA 34 và EMA 89.
- EMA 34 nằm trên EMA 89.
- Cả hai EMA dốc lên, khoảng cách giữa 2 đường EMA mở rộng.
- Giá liên tục tạo Higher High và Higher Low.

**Hành động:** Chỉ tìm lệnh Mua khi C2 quay về EMA 34 hoặc EMA 89 — sau đó chờ BOS vào lệnh theo hướng tăng.

### 2. Downtrend (C1 giảm)

**Dấu hiệu:**

- Giá nằm dưới cả EMA 34 và EMA 89.
- EMA 34 nằm dưới EMA 89.
- Cả hai EMA dốc xuống, khoảng cách giữa 2 đường EMA mở rộng.
- Giá liên tục tạo Lower High và Lower Low.

**Hành động:** Chỉ tìm lệnh Bán khi C2 quay về EMA 34 hoặc EMA 89 — sau đó chờ BOS vào lệnh theo hướng giảm.

### 3. Sideway (không rõ xu hướng)

**Dấu hiệu:**

- Giá cắt qua lại EMA 34/89 liên tục.
- Hai EMA nằm ngang, quấn vào nhau, nằm sát nhau hoặc đè lên nhau.
- Không có chuỗi HH/HL hoặc LH/LL rõ ràng.

**Hành động:** Không giao dịch. Chờ xu hướng hình thành rõ.

> **Nguyên tắc vàng:** Chỉ giao dịch khi EMA 34 và EMA 89 dốc và tách nhau rõ ràng. Khi hai đường quấn vào nhau → thị trường đang sideway → bỏ qua.

### 4. Bảng tóm tắt xác định xu hướng

| Trạng thái | Giá so với EMA 34 | Giá so với EMA 89 | EMA 34 so với EMA 89 | Hành động |
| :--- | :--- | :--- | :--- | :--- |
| **Uptrend** | Trên | Trên | Trên, dốc lên | Chỉ Mua |
| **Downtrend** | Dưới | Dưới | Dưới, dốc xuống | Chỉ Bán |
| **Sideway** | Cắt qua lại | Cắt qua lại | Nằm ngang, quấn nhau | Không giao dịch |

## III. EMA 34/89 — Tìm Điểm Vào Lệnh Trong C2

Đây là phần trọng tâm của chương. Sau khi xác định được xu hướng C1, nhiệm vụ là chờ C2 quay về EMA 34/89 — sau đó chờ BOS vào lệnh theo C1.

*Nhắc lại thuật ngữ: Ở chương 2, C2 là Xu hướng Cấp 2 — sóng điều chỉnh. Trong uptrend, C2 là nhịp giảm (pullback); trong downtrend, C2 là nhịp tăng (rally). Giáo trình dùng thống nhất thuật ngữ C2 cho cả hai trường hợp.*

### 1. Nguyên lý — Entry thống nhất theo BOS vào lệnh

EMA 34/89 không phải là điểm vào lệnh. Nó là vùng đáng chờ.

> **Nhắc lại thuật ngữ (chương 0, chương 2):** Giáo trình phân biệt hai loại BOS.
>
> - **BOS xu hướng** (H1/H4): giá phá đỉnh/đáy C1 cũ → xác nhận C1 tiếp diễn.
> - **BOS vào lệnh** (M5/M15): giá phá đỉnh/đáy nhỏ cuối cùng của C2 theo hướng C1 → xác nhận C2 đã kết thúc.
>
> Chương này chỉ dùng **BOS vào lệnh** để entry. Bạn **không** chờ giá phá đỉnh C1 rồi mới mua — đó là mua đuổi.

**Quy trình entry thống nhất:**

1. C2 quay về EMA 34/89 → xác định vùng C2 có thể kết thúc.
2. Chờ giá tạo BOS vào lệnh theo hướng C1 → xác nhận C2 đã kết thúc.
3. Entry tại điểm phá vỡ của BOS vào lệnh vừa xác nhận (nến đóng cửa xác nhận).
4. Đặt SL theo cấu trúc BOS vào lệnh — dưới đáy/trên đỉnh của cấu trúc vừa hình thành.

**Vì sao entry tại BOS vào lệnh mà không phải tại EMA?**

- Tại EMA chỉ là vùng dự đoán — giá có thể tiếp tục đi sâu hơn.
- BOS vào lệnh là xác nhận — giá đã thực sự đảo chiều theo hướng C1.
- Entry tại BOS vào lệnh có xác suất cao hơn và SL rõ ràng hơn.
- Tránh được bẫy giá khi giá chạm EMA rồi tiếp tục đi ngược.

### 2. Kịch bản 1 — C2 nông, kết thúc tại EMA 34 (ưu tiên số 1)

**Điều kiện:**

- Xu hướng C1 là uptrend (giá trên cả 2 EMA, EMA 34 trên EMA 89, cả hai dốc lên).
- C2 quay về và chạm EMA 34.
- Tại EMA 34 có confluence: vùng cản, Fib 38.2–50%, round number.
- Trên M5/M15, giá tạo BOS vào lệnh theo hướng tăng — nến đóng cửa phá đỉnh nhỏ cuối cùng của C2.

**Entry / SL / TP:**

| Thành phần | Vị trí |
| :--- | :--- |
| **Entry** | Tại điểm phá vỡ của BOS vào lệnh — khi nến đóng cửa phá đỉnh nhỏ cuối cùng của C2 |
| **Stop-loss** | Dưới đáy của cấu trúc BOS vào lệnh (đáy nhỏ gần nhất trước khi BOS vào lệnh xảy ra) |
| **Take-profit 1** | Đỉnh C1 cũ |
| **Take-profit 2** | Fib Extension 1.618 hoặc 2.000 |

**Minh họa logic:**

```text
C1 tăng → C2 về EMA 34 → giá tạo đáy nhỏ → giá phá đỉnh nhỏ (BOS vào lệnh) → ENTRY
                                                                     ↓
                                                         SL dưới đáy nhỏ
```

### 3. Kịch bản 2 — C2 sâu, kết thúc tại EMA 89

**Điều kiện:**

- Xu hướng C1 vẫn là uptrend.
- C2 xuyên qua EMA 34 và tiếp cận EMA 89.
- Tại EMA 89 có confluence: vùng cản mạnh, Fib 61.8%, round number.
- Trên M5/M15, giá tạo BOS vào lệnh theo hướng tăng — nến đóng cửa phá đỉnh nhỏ cuối cùng của C2.

**Entry / SL / TP:**

| Thành phần | Vị trí |
| :--- | :--- |
| **Entry** | Tại điểm phá vỡ của BOS vào lệnh — khi nến đóng cửa phá đỉnh nhỏ cuối cùng của C2 |
| **Stop-loss** | Dưới đáy của cấu trúc BOS vào lệnh (đáy nhỏ gần nhất trước khi BOS vào lệnh xảy ra) |
| **Take-profit 1** | EMA 34 (cản động phía trên) |
| **Take-profit 2** | Đỉnh C1 cũ |
| **Take-profit 3** | Fib Extension 1.618 hoặc 2.000 |

> **Lưu ý:** C2 về EMA 89 là C2 sâu — trend yếu hơn. Nên giảm khối lượng lệnh so với C2 về EMA 34.

### 4. Kịch bản 3 — Giá phá EMA 89 (cảnh báo đảo chiều)

**Dấu hiệu (trong uptrend — ngược lại cho downtrend):**

- Giá đóng cửa dưới EMA 89.
- Xuất hiện CHoCH (giá phá Higher Low gần nhất, tạo Lower Low).
- EMA 34 cắt xuống dưới EMA 89.

**Hành động:**

- Không vào lệnh Mua theo C1 nữa.
- Chờ cấu trúc mới hình thành (BOS xu hướng mới — Phương pháp 3, chương 6).
- Nếu đang có lệnh Mua → thoát ngay hoặc dời SL về hòa vốn.

### 5. Bảng tóm tắt Entry / SL / TP (thống nhất theo BOS vào lệnh)

| Kịch bản | Entry | Stop-loss | Take-profit |
| :--- | :--- | :--- | :--- |
| **C2 nông — EMA 34 + BOS vào lệnh** | Tại điểm phá vỡ | Dưới đáy của cấu trúc BOS vào lệnh | Đỉnh C1 cũ → Fib Extension |
| **C2 sâu — EMA 89 + BOS vào lệnh** | Tại điểm phá vỡ | Dưới đáy của cấu trúc BOS vào lệnh | EMA 34 → Đỉnh C1 cũ → Fib Extension |
| **Phá EMA 89 + CHoCH** | Không vào lệnh | — | Chờ cấu trúc mới |

> **Nguyên tắc SL:** SL luôn đặt dưới đáy của cấu trúc BOS vào lệnh (uptrend) hoặc trên đỉnh của cấu trúc BOS vào lệnh (downtrend). Không đặt SL tại EMA — vì EMA là vùng động, không phải cấu trúc.

## IV. Kết Hợp EMA 34/89 Với Các Công Cụ Khác

### 1. EMA + Lý thuyết Dow

- Dùng Dow để xác định C1 và C2.
- Dùng EMA 34/89 để xác nhận C1 và tìm vùng C2 có thể kết thúc.
- Khi C2 kết thúc tại EMA 34/89 → chờ BOS vào lệnh theo hướng C1.

### 2. EMA + Fibonacci

- Fib Retracement cho biết vùng nào C2 có thể kết thúc (38.2–61.8%).
- EMA 34/89 cho biết vùng nào là hỗ trợ/kháng cự động.
- **Confluence mạnh nhất:** Fib 50% trùng EMA 34 → vùng đáng chờ BOS vào lệnh.

### 3. EMA + Vùng cản

- Vùng cản cho biết giá có thể phản ứng ở đâu.
- EMA 34/89 cho biết xu hướng đang nghiêng về bên nào.
- **Confluence mạnh:** Vùng cản cũ trùng EMA 34 → xác suất BOS vào lệnh thành công cao.

### 4. EMA + RSI

- Khi giá và RSI phân kỳ, giá có thể điều chỉnh quay về các đường EMA.
- Khi C2 quay về EMA, RSI thường hạ nhiệt về 40–50 (uptrend) hoặc 50–60 (downtrend) — chuẩn bị cho BOS vào lệnh tiếp theo (chương 5).

### 5. Bảng confluence

| Confluence | Độ mạnh | Hành động |
| :--- | :--- | :--- |
| EMA 34 đứng một mình | Yếu | Bỏ qua |
| EMA 34 + Fib 38.2–50% | Trung bình | Chờ BOS vào lệnh |
| EMA 34 + Fib + vùng cản | Mạnh | Chờ BOS vào lệnh |
| EMA 89 + Fib 61.8% + vùng cản mạnh | Rất mạnh | Chờ BOS vào lệnh |

## V. Quy Trình Giao Dịch Hoàn Chỉnh Với EMA 34/89

**Bước 1: Xác định xu hướng C1 trên H1/H4**

- Giá trên/dưới cả 2 EMA?
- EMA 34 trên/dưới EMA 89?
- Cả hai EMA có dốc và tách nhau không?

**Bước 2: Chờ C2 quay về EMA**

- Uptrend: chờ C2 giảm về EMA 34/89.
- Downtrend: chờ C2 tăng về EMA 34/89.

**Bước 3: Xác định vùng C2 có thể kết thúc**

- Vẽ Fib Retracement từ điểm khởi đầu đến điểm kết thúc C1.
- Xác định vùng 38.2–61.8%.
- Kiểm tra EMA 34/89 có trùng vùng Fib không.
- Kiểm tra vùng cản.

**Bước 4: Chờ BOS vào lệnh xác nhận**

- Chuyển xuống khung M5/M15.
- Chờ giá tạo BOS vào lệnh theo hướng C1:
  - Uptrend: nến đóng cửa phá đỉnh nhỏ cuối cùng của C2.
  - Downtrend: nến đóng cửa phá đáy nhỏ cuối cùng của C2.
- Nhớ rằng trên M5/M15, C2 của H1 trông như một downtrend nhỏ (uptrend nhỏ nếu C1 giảm). BOS vào lệnh chính là lúc xu hướng nhỏ đó bị phá — xem mục *Cấu trúc lồng nhau giữa các khung thời gian* ở chương 2.
- Kiểm tra RSI: đã về 40–50 (uptrend) hoặc 50–60 (downtrend) chưa.

**Bước 5: Entry tại BOS vào lệnh**

- **Entry:** Tại điểm phá vỡ của BOS vào lệnh (nến đóng cửa xác nhận).
- **SL:** Dưới đáy của cấu trúc BOS vào lệnh (uptrend) / trên đỉnh của cấu trúc BOS vào lệnh (downtrend).
- **TP1:** Đỉnh/đáy C1 cũ.
- **TP2:** Các mốc Fib Extension.

**Bước 6: Quản lý lệnh**

- Khi đạt 1R → dời SL về hòa vốn.
- Khi phá đỉnh/đáy C1 cũ → vẽ Fib Extension.
- Chốt từng phần theo các mốc Fib Extension.
- Trailing stop theo đáy/đỉnh gần nhất.

## VI. Lỗi Thường Gặp

1. Giao dịch theo EMA cross (EMA 34 cắt EMA 89) — tín hiệu trễ, dễ nhiễu.
2. Vào lệnh khi EMA 34/89 nằm ngang, quấn nhau — thị trường sideway, không có trend.
3. Vào lệnh ngay khi giá chạm EMA mà không chờ BOS vào lệnh — giá có thể tiếp tục đi sâu.
4. Không kiểm tra confluence — EMA đứng một mình, thiếu chính xác và sai hệ thống.
5. Dùng EMA trên M1 — quá nhiễu, không đáng tin.
6. Nhầm C2 sâu về EMA 89 với đảo chiều — EMA 89 vẫn là hỗ trợ trong uptrend nếu chưa có CHoCH.
7. Đặt SL tại EMA thay vì theo cấu trúc BOS vào lệnh — EMA là vùng động, không phải cấu trúc.

## VII. Tóm Tắt Chương

> EMA 34/89 không phải là tín hiệu mua/bán. Nó là bối cảnh để bạn biết mình đang ở đâu trong cấu trúc thị trường — và vùng nào đáng chờ. Entry luôn cần BOS vào lệnh xác nhận. SL luôn theo cấu trúc BOS vào lệnh. Đó là logic thống nhất của toàn bộ giáo trình.

---

**Chuyển chương:** Sau khi nắm vững EMA 34/89, chương tiếp theo sẽ đi vào **RSI và sự phân kỳ** — công cụ xác nhận động lượng và cảnh báo đảo chiều sớm.