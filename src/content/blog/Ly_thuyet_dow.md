---
title: "Chương 2: Lý Thuyết Dow Ứng Dụng Trong Giao Dịch"
subtitle: "Đọc cấu trúc thị trường để tìm ra xu hướng"
date: "2026-09-28"
order: 3
tags: ["trading"]
author: "Phat Le"
category: "trading"
description: "Chương 2 hướng dẫn cách đọc cấu trúc thị trường theo Lý thuyết Dow — C1, C2, cấu trúc 1-2-1, BOS và CHoCH — để tìm điểm vào lệnh tối ưu trong giao dịch intraday."
draft: false
---

## Key Takeaways — Bạn sẽ nhận được gì sau chương này?

Sau khi đọc và nắm vững chương 2, bạn sẽ:

| # | Nội dung | Ứng dụng thực chiến |
| :--- | :--- | :--- |
| 1 | Hiểu 2 nguyên tắc cốt lõi của Lý thuyết Dow | Tư duy đúng: giá phản ánh tất cả, thị trường luôn có xu hướng chính và xu hướng điều chỉnh |
| 2 | Phân biệt được Xu hướng Cấp 1 (C1) và Xu hướng Cấp 2 (C2) | Biết đâu là sóng đẩy, đâu là sóng điều chỉnh |
| 3 | Nắm điều kiện để C1 hợp lệ và điều kiện để C2 còn hiệu lực | Không nhầm C2 với đảo chiều |
| 4 | Hiểu cấu trúc 1-2-1 và cách xác nhận xu hướng | Biết khi nào xu hướng tiếp diễn, khi nào đảo chiều |
| 5 | Phân biệt BOS (Break of Structure) và CHoCH (Change of Character) | Nhận diện sớm tín hiệu tiếp diễn và đảo chiều cấu trúc |
| 6 | Phân biệt BOS xu hướng và BOS vào lệnh | Không nhầm giữa xác nhận xu hướng và tín hiệu entry |
| 7 | Hiểu cấu trúc lồng nhau giữa các khung thời gian | Không bối rối khi H1 tăng nhưng M5 đang giảm |
| 8 | Hiểu Failure of Structure — khi nào cấu trúc vô hiệu | Biết dừng lại khi cấu trúc thất bại, không cố "bắt" cấu trúc cũ |
| 9 | Nắm Top-Down Analysis — phân tích đa khung thời gian | Xác định xu hướng trên H1/H4, tìm điểm vào lệnh trên M5/M15 |
| 10 | Hiểu mối liên kết với vùng cản (chương 1) | Điểm phá cản chỉ đáng tin khi vùng cản đạt chất lượng |

> **Kết quả cốt lõi:** Sau chương này, bạn có khả năng đọc hiểu cấu trúc thị trường — biết giá đang ở đâu trong chu kỳ, đâu là C1, đâu là C2, và khi nào cấu trúc đảo chiều. Đây là nền tảng để kết hợp với các công cụ ở các chương sau.

## Mở Đầu

Lý thuyết Dow (của Charles H. Dow) là nền tảng tư tưởng cho mọi phương pháp phân tích kỹ thuật hiện đại. Đối với một day trader, giá trị của Lý thuyết Dow không nằm ở học thuật, mà ở khả năng đọc hiểu cấu trúc thị trường để tìm ra điểm vào lệnh có xác suất thắng cao nhất.

Chương này không nhằm dạy lại 6 nguyên tắc nguyên bản của Dow. Chúng ta chỉ giữ những gì thực sự dùng được trong giao dịch, và gắn nó với vùng cản đã học ở chương 1.

## I. Các Nguyên Tắc Cốt Lõi (Trọng Tâm Thực Chiến)

Thay vì đi sâu vào 6 nguyên tắc nguyên bản, trader intraday chỉ cần khắc ghi 2 trọng tâm sau:

### 1. Giá phản ánh tất cả (The Price Discounts Everything)

- **Bản chất:** Mọi thông tin trên thị trường — báo cáo kinh tế, tin tức chính trị, tâm lý tham lam và sợ hãi của đám đông — đều đã được "in dấu" trên biểu đồ giá.
- **Hành động:** Tập trung 100% vào hành vi giá (Price Action) trên biểu đồ thay vì bị nhiễu loạn bởi tin tức bên ngoài. Tin tức chỉ quan trọng ở chỗ nó tạo ra biến động giá — và biến động đó đã hiện trên chart.
- **Lưu ý intraday:** Trong ngày có tin lớn (CPI, FOMC, NFP), giá có thể phá vỡ mọi cấu trúc kỹ thuật trong vài giây. Nguyên tắc "giá phản ánh tất cả" đúng về dài hạn, nhưng trong khoảnh khắc tin ra, cấu trúc bị vô hiệu. Day trader nên tránh giao dịch trong 5–15 phút quanh tin lớn.

### 2. Thị trường luôn tồn tại 2 xu hướng

Xác định hướng đi của thị trường là yếu tố sống còn:

| Loại xu hướng | Bản chất | Đặc điểm |
| :--- | :--- | :--- |
| **Xu hướng Cấp 1 — C1 (Primary Trend)** | Nhịp chính (sóng đẩy) | Là xu hướng chính của thị trường (đang tăng hoặc đang giảm) |
| **Xu hướng Cấp 2 — C2 (Secondary Trend)** | Nhịp điều chỉnh | Luôn đi ngược lại xu hướng C1 |

- Trong uptrend (C1 tăng): sẽ có những nhịp giảm điều chỉnh (C2).
- Trong downtrend (C1 giảm): sẽ có những nhịp tăng hồi phục (C2).

> **Nguyên tắc vàng:** **Chỉ giao dịch thuận theo xu hướng C1.** Tuyệt đối không giao dịch ngược C1 (bắt đỉnh/đáy ở sóng C2).

## II. Cấu Trúc Thị Trường Theo Dow

### 1. Xu hướng Cấp 1 (C1) — Sóng đẩy

Là xu hướng chính của thị trường.

- Trong uptrend: chuỗi các đỉnh cao hơn (Higher High — HH) và đáy cao hơn (Higher Low — HL).
- Trong downtrend: chuỗi các đỉnh thấp hơn (Lower High — LH) và đáy thấp hơn (Lower Low — LL).

### 2. Xu hướng Cấp 2 (C2) — Sóng điều chỉnh

Là nhịp đi ngược chiều C1. Trong uptrend, C2 là nhịp giảm; trong downtrend, C2 là nhịp tăng. Đặc điểm:

- Thường thoái lui 38.2–61.8% của C1 gần nhất (chi tiết ở chương 3 — Fibonacci).
- Không phá vỡ điểm khởi đầu của C1 trước đó.
- Thời gian thường ngắn hơn C1.

### 3. Điều kiện để C1 hợp lệ

Không phải mọi nhịp tăng đều là C1. Một C1 chỉ hợp lệ khi:

1. Phá được đỉnh/đáy gần nhất trước đó (BOS xu hướng — xem mục III.1).
2. Có động lượng rõ: nến thân dài, độ dốc cao, ít rút chân.
3. Có ít nhất một nhịp điều chỉnh nhỏ bên trong — nếu chỉ là một nhịp đơn thuần, chưa đủ cấu trúc.

### 4. Điều kiện để C2 còn hiệu lực

Một nhịp điều chỉnh chỉ còn được coi là C2 khi:

1. Không phá vỡ điểm khởi đầu của C1.
2. Thoái lui không quá 76.4% của C1 (chi tiết ở chương 3 — Fibonacci).
3. Không tạo cấu trúc đảo chiều (CHoCH — xem mục III.2).

Nếu vi phạm bất kỳ điều kiện nào → cấu trúc thất bại, không còn là C2. Lúc này cần đứng ngoài và chờ cấu trúc mới hình thành.

![Cấu trúc C1 và C2 trong uptrend](/img/blog/dow_uptrend_two_breaks_confirmation_v3.svg)

![Cấu trúc C1 và C2 trong downtrend](/img/blog/dow_downtrend_two_breaks_confirmation.svg)

## III. Cấu Trúc 1-2-1 Và Cách Xác Nhận Xu Hướng

Để biết khi nào C1 tiếp diễn, chúng ta sử dụng cấu trúc 1-2-1:

> **C1 (đẩy) → C2 (điều chỉnh) → C1 mới phá cản C1 cũ**

| Loại xu hướng | Bước 1 — C1 | Bước 2 — C2 | Bước 3 — Xác nhận phá cản |
| :--- | :--- | :--- | :--- |
| **Uptrend** | Nhịp tăng đẩy | Nhịp giảm điều chỉnh | Giá bứt phá vượt đỉnh cũ của C1 → tạo Higher High |
| **Downtrend** | Nhịp giảm đẩy | Nhịp tăng hồi | Giá đâm thủng đáy cũ của C1 → tạo Lower Low |

### 1. BOS — Phá cản tiếp diễn xu hướng

BOS (Break of Structure) xảy ra khi giá phá đỉnh/đáy **cùng chiều** xu hướng hiện tại.

- Trong uptrend: giá phá đỉnh cũ → BOS → xác nhận uptrend tiếp diễn.
- Trong downtrend: giá phá đáy cũ → BOS → xác nhận downtrend tiếp diễn.

**Hành động:** Có thể vào lệnh theo hướng BOS, ưu tiên chờ retest để có R:R tốt hơn.

**Hai loại BOS trong giáo trình:**

Cùng một khái niệm "phá cấu trúc", nhưng giáo trình dùng ở hai khung thời gian với hai mục đích khác nhau. Để không nhầm lẫn, chúng ta đặt tên riêng:

| | **BOS xu hướng** | **BOS vào lệnh** |
| :--- | :--- | :--- |
| **Khung thời gian** | H1/H4 (khung xác định xu hướng) | M5/M15 (khung vào lệnh) |
| **Giá phá cái gì?** | Đỉnh/đáy C1 cũ | Đỉnh/đáy nhỏ cuối cùng của C2 |
| **Ý nghĩa** | C1 tiếp diễn — cấu trúc 1-2-1 hoàn thành | C2 đã kết thúc — giá quay lại theo hướng C1 |
| **Dùng để** | Xác nhận xu hướng, vẽ Fib Extension, Phương pháp 1 (Breakout) | Kích hoạt entry ở Phương pháp 2 (Chờ kết thúc C2) |
| **Xảy ra khi nào?** | Sau khi C2 đã kết thúc và giá đi lên lại | Ngay tại vùng C2 kết thúc (vùng cản, EMA, Fib) |

> **Vì sao phải tách?** Nếu chờ BOS xu hướng (giá phá đỉnh C1) rồi mới mua, bạn đang mua ở đỉnh — đúng kiểu mua đuổi mà mục IV.4 cảnh báo. BOS vào lệnh cho phép vào lệnh **sớm hơn, ngay gần đáy C2**, với SL ngắn và R:R tốt hơn.
>
> Khi giáo trình chỉ viết "BOS" mà không ghi rõ, đó là nói về khái niệm chung.

<!-- Hình ảnh minh họa Break of Structure (BOS) -->

### 2. CHoCH — Đảo chiều cấu trúc

CHoCH (Change of Character) xảy ra khi giá phá đỉnh/đáy **ngược chiều** xu hướng hiện tại.

- Trong uptrend: giá phá Higher Low gần nhất (tạo Lower Low) → CHoCH → cảnh báo uptrend có thể kết thúc.
- Trong downtrend: giá phá Lower High gần nhất (tạo Higher High) → CHoCH → cảnh báo downtrend có thể kết thúc.

**Hành động:** Không vào lệnh ngay. Chờ xác nhận bằng cấu trúc mới (BOS theo hướng mới) hoặc retest vùng cản.

**Phân biệt nhanh:**

- **BOS** = phá cản tiếp diễn xu hướng → xu hướng tiếp tục được duy trì.
- **CHoCH** = phá cản đảo chiều xu hướng → cảnh báo sự thay đổi của cấu trúc.
- **Retest** = sau khi phá cản, giá quay lại kiểm tra vùng cản vừa phá → nếu giữ được, xu hướng tiếp tục duy trì.

![BOS và CHoCH](/img/blog/dow_uptrend_bos_then_choch_break_higher_low_v2.svg)

### 3. Cấu trúc lồng nhau giữa các khung thời gian

Đây là điều người mới hay bối rối nhất khi chuyển từ H1 xuống M5: **"H1 đang uptrend, nhưng M5 lại đang downtrend — vậy tôi Mua hay Bán?"**

Câu trả lời: cả hai đều đúng, vì cấu trúc thị trường **lồng vào nhau**.

> **Quy tắc cốt lõi:** C2 của khung lớn có thể là một xu hướng hoàn chỉnh trên khung nhỏ.

**Ví dụ trong uptrend H1:**

```text
Khung H1:   C1 tăng ──────────►  C2 giảm  ──────────►  C1 tăng mới
                                    │
                                    ▼  (phóng to nhịp C2 này xuống M5)
Khung M5/M15:   downtrend nhỏ: H → LH → LL 
                                                      │
                                    
```

- Trên H1, nhịp giảm là **C2** — một nhịp điều chỉnh bình thường trong uptrend.
- Trên M5/M15, chính nhịp giảm đó lại là một **downtrend nhỏ** đầy đủ, với các đỉnh thấp dần (LH) và đáy thấp dần (LL).
- Khi C2 của H1 kết thúc, downtrend nhỏ trên M5/M15 sẽ bị phá: giá phá **Lower High cuối cùng** → trên M5/M15, đó là một **CHoCH**.


**Cách đọc đúng khi giao dịch:**

| Bước | Khung | Câu hỏi | Ví dụ uptrend |
| :--- | :--- | :--- | :--- |
| 1 | H1/H4 | Xu hướng C1 là gì? | Uptrend → chỉ tìm lệnh Mua |
| 2 | H1/H4 | Giá có đang trong C2 không? Đã về vùng đáng chờ chưa? | C2 đang giảm về EMA 34 + Fib 50% |
| 3 | M5/M15 | Xu hướng nhỏ của nhịp C2 là gì? | Downtrend nhỏ — **chưa** Mua |
| 4 | M5/M15 | Xu hướng nhỏ đó đã bị phá chưa? | Giá phá LH cuối cùng → Tín hiệu vào lệnh → **Mua** |

> **Lưu ý:**
>
> - Downtrend trên M5 trong lúc H1 đang uptrend **không phải** tín hiệu Bán. Đó chỉ là C2 của H1, nếu chỉ nhìn ở khung nhỏ và bán theo nó là giao dịch ngược C1.
> - Chỉ khi H1 xuất hiện CHoCH (mục III.2) thì xu hướng lớn mới thực sự có dấu hiệu đảo chiều.
> - Các nhãn C1/C2 luôn gắn với một khung thời gian. Khi trao đổi, hãy nói rõ "C2 của H1" hay "C1 của M5".

### 4. Failure of Structure — Khi nào cấu trúc vô hiệu

Cấu trúc thất bại xảy ra khi nhịp điều chỉnh C2 đi quá sâu, phá vỡ cấu trúc 1-2 đã hình thành.

**Dấu hiệu:**

- C2 thoái lui > 76.4% của C1 (chi tiết ở chương 3 — Fibonacci).
- C2 phá vỡ điểm khởi đầu của C1.
- Xuất hiện CHoCH.

**Hành động:** Đứng ngoài quan sát. Giá có thể đã hoàn thành một chu kỳ tăng/giảm và đang bắt đầu chu kỳ mới. Không cố "bắt" cấu trúc cũ.

<!-- Hình ảnh minh họa Failure of Structure -->

## IV. Tối Ưu Hóa Điểm Vào Lệnh

Để tránh các bẫy giá trong giao dịch intraday, hãy kết hợp các kỹ thuật sau:

### 1. Lọc bẫy giá (Fakeout / Bull Trap / Bear Trap)

- **Chờ nến đóng cửa:** Tuyệt đối không vào lệnh khi nến đang chạy.
- **Điều kiện phá cản (Breakout):** Thân nến phải đóng cửa vượt hẳn qua đỉnh/đáy cũ của C1 — không chỉ râu nến.
- **Xác nhận bổ sung:** Kết hợp RSI (chương 5) để lọc bẫy.

### 2. Phân tích đa khung thời gian (Top-Down Analysis)

Không chỉ nhìn vào một khung thời gian.

- Dùng khung lớn (H1/H4) để xác định xu hướng C1.
- Khi khung lớn đang là uptrend và giá đang trong C2, chuyển xuống khung nhỏ (M5/M15) chờ BOS để kích hoạt lệnh Mua (ngược lại cho downtrend) — xem mục III.3.
- Sự đồng pha giữa 2 khung thời gian sẽ gia tăng tỷ lệ thắng đáng kể.

### 3. Quy tắc Entry / Stop-loss / Take-profit

| Kịch bản | Entry | Stop-loss | Take-profit |
| :--- | :--- | :--- | :--- |
| **BOS + Retest** | Tại nến xác nhận retest thành công | Dưới đáy C2 (uptrend) / trên đỉnh C2 (downtrend) | Vùng cản kế tiếp, R:R tối thiểu 1:1 |
| **CHoCH** | Không vào lệnh — chờ BOS theo hướng mới | Bên kia cấu trúc mới | Vùng cản đối diện |

*Các phương pháp vào lệnh chi tiết (tại BOS khung nhỏ, tại retest sau BOS xu hướng) được hệ thống hóa ở chương 4–6.*

### 4. Quản trị FOMO — Tiêu chí cụ thể

Khi C1 đang lao lên quá dốc, tuyệt đối không mua đuổi (đu đỉnh). Hãy kiên nhẫn chờ C2 hoàn thành để có vùng giá chiết khấu tốt nhất.

**Khi nào được coi là "quá dốc"?**

- RSI > 70 (quá mua) trên khung vào lệnh.
- Giá cách EMA 34 quá xa.

**Khi đó phải làm gì?**

1. Không mua đuổi.
2. Chờ C2 xuất hiện — thị trường luôn có 2 xu hướng, nên C2 gần như luôn xuất hiện.
3. Nếu C2 không đến và giá tiếp tục chạy → đứng ngoài. Cơ hội luôn có, vốn thì không.
4. Nếu C2 đến nhưng quá sâu (>76.4%) → cấu trúc có thể thất bại; nếu giá tăng lại, nhiều khả năng sẽ không phá được đỉnh C1 trước đó.
5. Nếu C2 thoái lui quá 100% C1 và tạo CHoCH → cấu trúc đã đảo chiều. Đứng ngoài.

## V. Liên Kết Với Vùng Cản (Chương 1)

Điểm phá cản trong cấu trúc 1-2-1 chỉ đáng tin khi vùng cản bị phá đạt tối thiểu **3/5 tiêu chí** chất lượng ở chương 1, trong đó nên có:

1. Ít nhất 2 lần phản ứng (test) trước đó.
2. Nến phản ứng rõ ràng (thân dài, rời vùng dứt khoát).
3. Cùng chiều xu hướng C1 trên các khung lớn như H1, H4, D1.

Nếu vùng cản yếu → xác suất false breakout cao → nên bỏ qua hoặc chờ retest.

## VI. Lỗi Thường Gặp

1. Vào lệnh khi nến chưa đóng cửa → dính fakeout.
2. Nhầm BOS với CHoCH → vào lệnh ngược trend.
3. Bỏ qua khung thời gian lớn → giao dịch ngược xu hướng C1.
4. Mua đuổi khi C1 đã đi quá dốc → dính điều chỉnh sâu.
5. Không chấp nhận Failure of Structure → cố "bắt" cấu trúc cũ.
6. Đặt SL sai → bị quét trước khi giá đi đúng hướng.
7. Giao dịch trong sideway mà tưởng là thị trường có xu hướng → cấu trúc 1-2-1 liên tục thất bại.
8. Thấy M5 đang downtrend trong khi H1 uptrend rồi vào lệnh Bán → thực chất đang bán trong C2 của H1, ngược C1.

## VII. Tóm Tắt Chương

> Thị trường luôn có C1 và C2 — chỉ giao dịch thuận C1. BOS xu hướng xác nhận C1 tiếp diễn; BOS vào lệnh trên khung nhỏ xác nhận C2 đã kết thúc; CHoCH cảnh báo đảo chiều nhưng chưa phải tín hiệu vào lệnh. C2 của khung lớn là một xu hướng hoàn chỉnh trên khung nhỏ. Khi C2 vượt 76.4% và phá điểm khởi đầu C1, cấu trúc đã thất bại — đứng ngoài và chờ cấu trúc mới.

---

**Chuyển chương:** Sau khi nắm vững cấu trúc thị trường theo Dow, chương tiếp theo sẽ đi vào **Fibonacci** — công cụ đo lường nhịp điều chỉnh C2 và xác định vùng chốt lời.