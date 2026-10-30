---
title: "Chương 6: Hệ Thống Giao Dịch Hoàn Chỉnh"
subtitle: "Tổng kết và tích hợp toàn bộ công cụ"
date: "2026-10-16"
order: 7
tags: ["trading"]
author: "Phat Le"
category: "trading"
description: "Chương 6 tổng kết toàn bộ giáo trình — tích hợp vùng cản, Lý thuyết Dow, Fibonacci, EMA 34/89 và RSI thành một hệ thống giao dịch hoàn chỉnh với 3 phương pháp chính và các điều kiện bắt buộc."
draft: false
---

## Key Takeaways — Bạn sẽ nhận được gì sau chương này?

Sau khi đọc và nắm vững chương 6, bạn sẽ:

| # | Nội dung | Ứng dụng thực chiến |
| :--- | :--- | :--- |
| 1 | Nắm 3 phương pháp giao dịch chính: Breakout, Chờ kết thúc C2, Đảo chiều cấu trúc | Biết chọn phương pháp theo trạng thái RSI, EMA và cấu trúc |
| 2 | Biết điều kiện vào lệnh, Entry / SL / TP và quản lý lệnh của từng phương pháp | Giao dịch theo quy trình, không cảm tính |
| 3 | So sánh ưu nhược điểm của 3 phương pháp | Biết phương pháp nào phù hợp với giai đoạn nào của trend |
| 4 | Nắm 5 điều kiện của một hệ thống giao dịch hoàn chỉnh | Tự kiểm tra từng lệnh trước khi vào |

> **Kết quả cốt lõi:** Sau chương này, bạn có một quy trình giao dịch hoàn chỉnh: xác định xu hướng C1 → chọn phương pháp phù hợp → chờ BOS xác nhận (đúng loại cho phương pháp đó) → vào lệnh với SL theo cấu trúc và R:R tối thiểu 1:1.

## Mở Đầu

Đây là chương tổng kết toàn bộ giáo trình. Tất cả những gì đã học — vùng cản, Lý thuyết Dow, Fibonacci, EMA 34/89, RSI — sẽ được tích hợp thành một hệ thống giao dịch hoàn chỉnh.

Một hệ thống giao dịch không phải là tập hợp các chỉ báo. Nó là một quy trình có điều kiện rõ ràng để bạn biết:

- Khi nào được vào lệnh.
- Khi nào không được vào lệnh.
- Vào lệnh ở đâu, dừng lỗ ở đâu, chốt lời ở đâu.
- Khi nào đứng ngoài.

> **Nguyên tắc xuyên suốt:** Hệ thống tốt không phải là hệ thống thắng nhiều nhất. Hệ thống tốt là hệ thống cho bạn biết khi nào nên nghỉ.

## I. Ba Phương Pháp Giao Dịch Chính

Toàn bộ hệ thống xoay quanh 3 phương pháp, chọn theo trạng thái thị trường, RSI và cấu trúc:

| # | Phương pháp | Điều kiện | Bản chất |
| :--- | :--- | :--- | :--- |
| 1 | **Breakout** | RSI chưa vào vùng quá mua / quá bán | Động lượng còn dư địa — breakout có xác suất tiếp diễn. Hai đường EMA nằm gần nhau, giá gần 2 đường EMA. |
| 2 | **Chờ kết thúc C2** | RSI đã vào vùng quá mua / quá bán | Động lượng đã cạn — chờ C2 kết thúc để vào lệnh theo C1. Giá rời xa hai đường EMA rồi hội tụ trở lại (giá điều chỉnh về EMA, hoặc đi ngang chờ EMA tiến lại gần giá). |
| 3 | **Đảo chiều cấu trúc** | Phân kỳ + CHoCH xuất hiện | Cấu trúc C1 đã đảo chiều — vào lệnh theo xu hướng mới khi đỉnh/đáy mới bị phá vỡ (BOS xu hướng mới). |

### 1. Phương pháp 1 — Breakout (RSI chưa vào vùng quá mua / quá bán)

**Khi nào áp dụng:**

- RSI đang ở vùng trung tính (40–60).
- Hai đường EMA 34/89 nằm gần nhau, giá gần 2 đường EMA — thị trường đang tích lũy, chuẩn bị bùng nổ.
- Giá phá vỡ vùng cản quan trọng — đồng thời là BOS xu hướng (phá đỉnh/đáy C1 cũ trên H1/H4).

**Điều kiện vào lệnh:**

- Xu hướng C1 rõ ràng trên H1/H4 (giá trên/dưới EMA 34/89).
- Vùng cản bị phá phải nằm trong cấu trúc 1-2-1.
- Nến đóng cửa phá vùng cản (không chỉ râu nến).
- RSI chưa vào vùng quá mua/quá bán — RSI còn dư địa để tạo mốc cao hơn khi giá tạo đỉnh cao hơn (ngược lại cho downtrend).

**Entry / SL / TP:**

| Thành phần | Vị trí |
| :--- | :--- |
| **Entry** | Tại lần retest đầu tiên vùng cản vừa phá (ưu tiên), hoặc tại nến đóng cửa phá cản (BOS xu hướng) |
| **Stop-loss** | Dưới đáy C2 (uptrend) / trên đỉnh C2 (downtrend) — bên kia vùng cản vừa phá |
| **TP 1** | Vùng cản kế tiếp |
| **TP 2** | Fib Extension 1.618, 2.000 (2.618, 3.618 khi trend cực mạnh) |

**Quản lý lệnh:**

- Khi đạt 1R → dời SL về hòa vốn.
- Khi giá phá vùng cản kế tiếp → tiếp tục dời SL theo cấu trúc mới.
- Nếu RSI vào vùng quá mua/quá bán → chốt một phần.

### 2. Phương pháp 2 — Chờ kết thúc C2 (RSI đã vào vùng quá mua / quá bán)

**Khi nào áp dụng:**

- RSI đã vào vùng quá mua (> 70) hoặc quá bán (< 30).
- Giá đã đi một quãng dài theo C1 — giá rời xa hai đường EMA.
- Giá bắt đầu hội tụ trở lại với EMA: giá điều chỉnh về EMA, hoặc đi ngang chờ hai đường EMA tiến lại gần giá.

**Điều kiện vào lệnh:**

- Xu hướng C1 rõ ràng trên H1/H4.
- RSI đã vào vùng quá mua/quá bán → cảnh báo C2 sắp xuất hiện.
- C2 quay về vùng EMA 34/89 + Fib 38.2–61.8% + vùng cản.
- RSI về vùng 40–50 (uptrend) hoặc 50–60 (downtrend).
- Có BOS vào lệnh trên khung nhỏ (M5/M15) cùng chiều C1 — xem mục *Cấu trúc lồng nhau* ở chương 2.

**Entry / SL / TP:**

| Thành phần | Vị trí |
| :--- | :--- |
| **Entry** | Tại điểm phá vỡ của BOS vào lệnh (nến đóng cửa phá đỉnh/đáy nhỏ cuối cùng của C2) |
| **Stop-loss** | Dưới đáy / trên đỉnh của cấu trúc BOS vào lệnh (chương 4) |
| **TP1** | Đỉnh/đáy C1 cũ |
| **TP2** | Fib Extension 1.618 và các mốc cao hơn |

**Quản lý lệnh:**

- Khi đạt 1R → dời SL về hòa vốn.
- Khi phá đỉnh/đáy C1 cũ → vẽ Fib Extension để chốt lời.
- Nếu CHoCH xuất hiện → thoát ngay, không cố giữ.

### 3. Phương pháp 3 — Đảo chiều cấu trúc (Phân kỳ + CHoCH)

**Khi nào áp dụng:**

- RSI xuất hiện phân kỳ  — cảnh báo động lượng suy yếu.
- Cấu trúc C1 hiện tại có dấu hiệu kết thúc.
- Giá bắt đầu hình thành cấu trúc đảo chiều.

**Điều kiện vào lệnh:**

1. **Phân kỳ xuất hiện:**
   - Phân kỳ giảm: giá tạo Higher High + RSI tạo Lower High → cảnh báo đảo chiều giảm.
   - Phân kỳ tăng: giá tạo Lower Low + RSI tạo Higher Low → cảnh báo đảo chiều tăng.

2. **CHoCH xuất hiện:**
   - Sau phân kỳ giảm: giá phá Higher Low gần nhất (tạo Lower Low) → CHoCH giảm.
   - Sau phân kỳ tăng: giá phá Lower High gần nhất (tạo Higher High) → CHoCH tăng.
   - CHoCH cảnh báo cấu trúc C1 đang đảo chiều.

3. **BOS xu hướng mới — đỉnh/đáy mới bị phá vỡ:**
   - Sau CHoCH, giá tạo cấu trúc 1-2-1 mới theo hướng đảo chiều.
   - Giá tạo BOS xu hướng mới — phá đỉnh/đáy của cấu trúc 1-2-1 mới.
   - BOS xu hướng mới xác nhận xu hướng mới đã hình thành. Đây là BOS xu hướng **đầu tiên** của xu hướng mới, nên nó đóng vai trò tín hiệu entry.

**Entry / SL / TP:**

| Thành phần | Vị trí |
| :--- | :--- |
| **Entry** | Tại điểm phá vỡ của BOS xu hướng mới — khi đỉnh/đáy mới bị phá vỡ |
| **Stop-loss** | Theo cấu trúc C2 mới — dưới đáy / trên đỉnh của nhịp điều chỉnh ngay trước BOS xu hướng mới |
| **TP1** | Vùng cản đối diện theo hướng mới |
| **TP2** | Fib Extension 1.618, 2.000 |

**Quản lý lệnh:**

- Khi đạt 1R → dời SL về hòa vốn.
- Khi giá đi đúng hướng → trailing stop theo đáy/đỉnh gần nhất.
- Nếu xuất hiện CHoCH ngược lại → thoát ngay, không cố giữ.

**Lưu ý quan trọng:**

- Không vào lệnh ngay khi thấy phân kỳ. Phân kỳ là cảnh báo — không phải xác nhận.
- Không vào lệnh ngay khi có CHoCH. CHoCH là tín hiệu sớm — cần BOS xu hướng mới xác nhận.
- Chỉ vào lệnh khi BOS xu hướng mới xuất hiện — khi đỉnh/đáy mới bị phá vỡ.
- SL theo C2 mới — không theo C2 cũ. Vì cấu trúc đã đảo chiều, C2 cũ không còn hiệu lực.

### 4. So sánh 3 phương pháp

| Tiêu chí | 1. Breakout | 2. Chờ kết thúc C2 | 3. Đảo chiều cấu trúc |
| :--- | :--- | :--- | :--- |
| **Trạng thái RSI** | 40–60 | > 70 hoặc < 30 | Phân kỳ tại vùng cản mạnh |
| **Trạng thái EMA** | Hai EMA gần nhau, giá gần EMA | Giá rời xa EMA rồi hội tụ trở lại | — |
| **Bản chất** | Động lượng còn dư địa — tích lũy chuẩn bị bùng nổ | Động lượng đã cạn — chờ C2 kết thúc | Cấu trúc C1 đã đảo chiều |
| **Loại BOS dùng** | BOS xu hướng (H1/H4) | BOS vào lệnh (M5/M15) | BOS xu hướng mới |
| **Tín hiệu chính** | Phá vùng cản = phá đỉnh/đáy C1 | C2 kết thúc tại EMA + Fib, khung nhỏ phá cấu trúc | Phân kỳ + CHoCH + BOS xu hướng mới |
| **Điểm vào lệnh** | Tại retest vùng cản vừa phá | Tại BOS vào lệnh khi C2 kết thúc ở vùng EMA 34/89 + Fib | Tại BOS xu hướng mới |
| **Stop-loss** | Bên kia C2 / vùng cản vừa phá | Theo cấu trúc BOS vào lệnh | Theo cấu trúc C2 mới |
| **Xác suất** | Trung bình – cao | Cao (nếu có nhiều yếu tố) | Cao (nếu phân kỳ + CHoCH rõ) |
| **Rủi ro** | False breakout | C2 chuyển thành đảo chiều | Đảo chiều giả (false reversal) |
| **Phù hợp** | Đầu trend, sau tích lũy, EMA co lại | Giữa trend, sau khi C1 đi xa, EMA giãn ra | Cuối trend, khi có dấu hiệu đảo chiều |

## II. Điều Kiện Của Một Hệ Thống Giao Dịch Hoàn Chỉnh

Một hệ thống giao dịch chỉ được coi là hoàn chỉnh khi đáp ứng đủ 5 điều kiện sau:

### 1. Phải xác định được xu hướng

- Không giao dịch khi chưa biết xu hướng C1 là gì.
- Dùng EMA 34/89 trên H1/H4: giá trên/dưới cả 2 EMA, EMA 34 trên/dưới EMA 89, cả hai dốc.
- Dùng Lý thuyết Dow: chuỗi HH/HL (uptrend) hoặc LH/LL (downtrend).
- Nếu hai EMA nằm ngang, quấn nhau → sideway → không giao dịch.
- **Không có xu hướng = không có lệnh.**

### 2. Phải có entry rõ ràng

- Entry phải được xác định trước khi vào lệnh, không phải sau.
- Entry phải dựa trên nến xác nhận đã đóng cửa — không vào lệnh khi nến đang chạy.
- Entry phải có điều kiện cụ thể: giá ở vùng đáng chờ (vùng cản, EMA 34/89, Fib 38.2–61.8%) **và** có BOS xác nhận đúng loại: retest sau BOS xu hướng (Phương pháp 1), BOS vào lệnh (Phương pháp 2), BOS xu hướng mới (Phương pháp 3).
- Không vào lệnh vì "cảm giác" hoặc "linh tính".
- **Không có entry rõ ràng = không vào lệnh.**

### 3. Phải xác định được mức dừng lỗ theo phân tích kỹ thuật

Stop-loss không phải con số tùy ý. Nó phải dựa trên cấu trúc.

**Các mức SL hợp lệ:**

- Dưới đáy C2 / cấu trúc BOS vào lệnh (uptrend) — trên đỉnh C2 / cấu trúc BOS vào lệnh (downtrend).
- Bên kia vùng cản vừa phá (Phương pháp 1).
- Bên kia cấu trúc mới (sau CHoCH — Phương pháp 3).
- Có thể cộng thêm một khoảng đệm (ví dụ theo ATR) để tránh bị quét bởi râu nến.

> **Lưu ý:** Không đặt SL tại EMA — EMA là vùng động, không phải cấu trúc (chương 4). Mức Fib 78.6% chỉ dùng làm tham chiếu: nếu SL theo cấu trúc nằm quá xa mức này, cấu trúc nhiều khả năng đã thất bại.
>
> **SL đặt giữa vùng cản = tự nguyện bị quét.**

### 4. Tối thiểu phải có tỷ lệ R:R là 1:1

- Mỗi lệnh phải có R:R tối thiểu 1:1.
- Nếu R:R < 1:1 → bỏ qua lệnh, dù tín hiệu đẹp đến đâu.
- Ưu tiên lệnh có R:R từ 1:2 trở lên.
- R:R được tính trước khi vào lệnh: `R:R = (TP − Entry) / (Entry − SL)` (lệnh Mua).

**Cách cải thiện R:R:**

- Chờ retest thay vì đuổi breakout → entry tốt hơn, SL gần hơn.
- Chờ C2 thay vì mua đuổi C1 → entry tốt hơn.
- Chọn vùng cản có nhiều confluence → SL gần hơn, TP xa hơn.

> **R:R < 1:1 = không giao dịch.**

### 5. Phải có xác suất thắng trên 50%

Hệ thống phải có lợi thế (edge) — tức là xác suất thắng > 50%.

<!-- TODO: Phần còn lại của mục 5 chưa có trong bản gốc — cần bổ sung trước khi xuất bản. -->

## III. Tóm Tắt Chương

> Hệ thống giao dịch không phải là tập hợp chỉ báo, mà là một chuỗi câu hỏi phải trả lời "Có" trước khi bấm lệnh. Xu hướng C1 quyết định hướng giao dịch. RSI và EMA quyết định phương pháp. BOS — đúng loại cho phương pháp đó — quyết định thời điểm vào lệnh. Cấu trúc quyết định SL. R:R quyết định lệnh có đáng vào hay không. Thiếu bất kỳ mắt xích nào → đứng ngoài.

### 1. Quy trình 5 bước cho mọi lệnh

| Bước | Câu hỏi | Công cụ | Nếu "Không" |
| :--- | :--- | :--- | :--- |
| 1 | Có xu hướng C1 rõ ràng trên H1/H4 không? | Dow (HH/HL, LH/LL) + EMA 34/89 | Sideway → đứng ngoài |
| 2 | Đang ở trạng thái nào → dùng phương pháp nào? | RSI + EMA + phân kỳ | Không khớp phương pháp nào → đứng ngoài |
| 3 | Giá có ở vùng đáng chờ không? | Vùng cản (≥ 3/5 tiêu chí) + Fib + EMA | Không có confluence → bỏ qua |
| 4 | Đã có BOS xác nhận đúng loại chưa? | Cấu trúc trên M5/M15 hoặc H1/H4 | Chưa có → tiếp tục chờ |
| 5 | SL theo cấu trúc, R:R ≥ 1:1? | Cấu trúc + vùng cản / Fib Extension | R:R < 1:1 → bỏ lệnh |

### 2. Ba phương pháp — nhớ nhanh

| Phương pháp | Nhận diện | Tín hiệu vào lệnh | SL |
| :--- | :--- | :--- | :--- |
| **1. Breakout** | RSI 30–70, hai EMA gần nhau, giá tích lũy gần EMA | Retest sau BOS xu hướng (phá vùng cản) | Bên kia vùng cản vừa phá / đáy C2 |
| **2. Chờ kết thúc C2** | RSI đã quá mua/quá bán, giá rời xa EMA rồi quay về | BOS vào lệnh tại vùng EMA 34/89 + Fib | Theo cấu trúc BOS vào lệnh |
| **3. Đảo chiều cấu trúc** | Phân kỳ RSI tại vùng cản mạnh + CHoCH | BOS xu hướng mới (BOS xu hướng đầu tiên sau CHoCH) | Theo cấu trúc C2 mới |

### 3. Những nguyên tắc không bao giờ thay đổi

- Chỉ giao dịch thuận C1. Không có xu hướng = không có lệnh.
- Không vào lệnh khi nến chưa đóng cửa.
- Phân kỳ và CHoCH là cảnh báo — chỉ BOS mới là xác nhận.
- Không công cụ nào đứng một mình: vùng cản, Fibonacci, EMA, RSI chỉ có giá trị khi hợp lưu.
- SL theo cấu trúc — không đặt tại EMA, không đặt giữa vùng cản.
- Đạt 1R → dời SL về hòa vốn. Xuất hiện CHoCH ngược hướng lệnh → thoát.
- R:R < 1:1 = không giao dịch, dù tín hiệu đẹp đến đâu.

---

**Lời kết:** Đến đây, bạn đã có đủ mọi mảnh ghép của hệ thống: vùng cản cho biết giá có thể phản ứng ở đâu, Lý thuyết Dow cho biết thị trường đang ở đâu trong chu kỳ, Fibonacci đo nhịp điều chỉnh và vùng chốt lời, EMA 34/89 xác định xu hướng và vùng chờ, RSI đọc động lượng. Phần còn lại không nằm trong giáo trình — đó là kỷ luật tuân thủ quy trình, lệnh này qua lệnh khác. Hãy bắt đầu bằng việc ghi nhật ký giao dịch: mỗi lệnh ghi rõ phương pháp, loại BOS, vùng confluence, SL, R:R và kết quả. Sau 30–50 lệnh, nhật ký sẽ cho bạn biết hệ thống có thực sự mang lại lợi thế cho bạn hay không.