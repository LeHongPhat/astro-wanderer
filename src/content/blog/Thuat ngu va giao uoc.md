---
title: "Chương 0: Thuật Ngữ Và Quy Ước"
subtitle: "Từ điển dùng chung cho toàn bộ giáo trình"
date: "2026-09-27"
order: 0
tags: ["trading"]
author: "Phat Le"
category: "trading"
description: "Chương 0 tổng hợp toàn bộ thuật ngữ và quy ước dùng trong giáo trình — cấu trúc thị trường, vùng cản, chỉ báo, vào lệnh và quản lý lệnh — giải thích ngắn gọn cho trader mới."
draft: false
---

## Key Takeaways — Bạn sẽ nhận được gì sau chương này?

| # | Nội dung | Ứng dụng thực chiến |
| :--- | :--- | :--- |
| 1 | Nắm nghĩa của mọi thuật ngữ trước khi vào chương 1 | Đọc các chương sau không bị "vấp" từ lạ |
| 2 | Phân biệt rõ hai loại BOS: BOS xu hướng và BOS vào lệnh | Không nhầm xác nhận xu hướng với tín hiệu entry |
| 3 | Hiểu các quy ước viết trong giáo trình | Đọc bảng, số liệu, khung thời gian một cách nhất quán |

> **Cách dùng chương này:** Không cần học thuộc. Đọc lướt một lần, rồi quay lại tra cứu mỗi khi gặp từ chưa rõ. Cột "Chương" cho biết nơi thuật ngữ được giải thích chi tiết.

## Mở Đầu

Giáo trình dùng nhiều thuật ngữ tiếng Anh vì đó là ngôn ngữ chung của cộng đồng trader và của các nền tảng biểu đồ. Với người mới, chính những từ này thường là rào cản đầu tiên. Chương 0 gom tất cả về một chỗ và giải thích bằng ngôn ngữ đơn giản nhất.

## I. Cấu Trúc Thị Trường

| Thuật ngữ | Tên đầy đủ | Nghĩa đơn giản | Chương |
| :--- | :--- | :--- | :--- |
| **Uptrend** | — | Xu hướng tăng: giá tạo đỉnh sau cao hơn đỉnh trước, đáy sau cao hơn đáy trước | 2 |
| **Downtrend** | — | Xu hướng giảm: giá tạo đỉnh sau thấp hơn đỉnh trước, đáy sau thấp hơn đáy trước | 2 |
| **Sideway** | — | Thị trường đi ngang, không có xu hướng rõ. Hệ thống **không giao dịch** trong sideway | 2, 4 |
| **C1** | Xu hướng Cấp 1 (Primary Trend) | Sóng đẩy — xu hướng chính. Chỉ giao dịch thuận theo C1 | 2 |
| **C2** | Xu hướng Cấp 2 (Secondary Trend) | Sóng điều chỉnh — nhịp đi ngược C1. Trong uptrend là nhịp giảm, trong downtrend là nhịp tăng | 2 |
| **Swing high / Swing low** | — | Một đỉnh / một đáy nổi bật trên chart, nơi giá đổi hướng rõ ràng | 2, 3 |
| **HH** | Higher High | Đỉnh cao hơn đỉnh trước | 2 |
| **HL** | Higher Low | Đáy cao hơn đáy trước | 2 |
| **LH** | Lower High | Đỉnh thấp hơn đỉnh trước | 2 |
| **LL** | Lower Low | Đáy thấp hơn đáy trước | 2 |
| **Cấu trúc 1-2-1** | — | C1 → C2 → C1 mới phá đỉnh/đáy C1 cũ. Đây là "đơn vị" xác nhận một xu hướng | 2 |
| **CHoCH** | Change of Character | Giá phá đỉnh/đáy **ngược chiều** xu hướng (uptrend: phá HL gần nhất). Cảnh báo đảo chiều, **chưa phải** tín hiệu vào lệnh | 2 |
| **Failure of Structure** | — | Cấu trúc thất bại: C2 thoái lui quá 78.6%, phá điểm khởi đầu C1, hoặc xuất hiện CHoCH. Đứng ngoài | 2 |
| **Cấu trúc lồng nhau** | — | C2 của khung lớn là một xu hướng hoàn chỉnh trên khung nhỏ. H1 đang uptrend nhưng M5 đang giảm là chuyện bình thường | 2 |

## II. Hai Loại BOS — Đọc Kỹ Phần Này

**BOS (Break of Structure)** là khi giá phá đỉnh/đáy **cùng chiều** xu hướng. Giáo trình dùng BOS ở hai khung thời gian, với hai mục đích khác nhau, nên đặt hai tên riêng:

| | **BOS xu hướng** | **BOS vào lệnh** |
| :--- | :--- | :--- |
| **Khung** | H1/H4 | M5/M15 |
| **Giá phá cái gì?** | Đỉnh/đáy C1 cũ | Đỉnh/đáy nhỏ cuối cùng của C2 |
| **Cho biết điều gì?** | C1 tiếp diễn | C2 đã kết thúc |
| **Dùng để làm gì?** | Xác nhận xu hướng, vẽ Fib Extension, Phương pháp 1 (Breakout) | Kích hoạt entry ở Phương pháp 2 (Chờ kết thúc C2) |

- **BOS xu hướng mới:** BOS xu hướng **đầu tiên** sau CHoCH, xác nhận một xu hướng mới đã hình thành. Dùng làm tín hiệu entry ở Phương pháp 3 (Đảo chiều cấu trúc).
- Khi giáo trình chỉ viết "BOS", đó là khái niệm chung.

> **Ví dụ uptrend trên H1:** Giá tăng từ 4,000 lên 4,050 (C1), rồi điều chỉnh về 4,020 (C2).
>
> - Trên M5, nhịp giảm 4,050 → 4,020 là một downtrend nhỏ. Đỉnh nhỏ cuối cùng của nó ở 4,028.
> - Nến M5 đóng cửa trên 4,028 → **BOS vào lệnh** → entry Mua, SL dưới 4,020.
> - Sau đó giá vượt 4,050 → **BOS xu hướng** trên H1 → C1 tiếp diễn, vẽ Fib Extension để tìm vùng chốt lời.
>
> Nếu chờ đến BOS xu hướng ở 4,050 mới Mua, bạn đã bỏ lỡ khoảng 22 giá (từ 4,028 lên 4,050) và đang mua đuổi.

## III. Vùng Cản

| Thuật ngữ | Tên đầy đủ | Nghĩa đơn giản | Chương |
| :--- | :--- | :--- | :--- |
| **Vùng cản** | Kháng cự – Hỗ trợ (KC – HT) | Vùng giá mà giá có khả năng phản ứng. Luôn là một **vùng**, không phải một đường | 1 |
| **Kháng cự** | Resistance | Vùng "trần" — lực bán áp đảo | 1 |
| **Hỗ trợ** | Support | Vùng "sàn" — lực mua áp đảo | 1 |
| **Trendline** | Đường xu hướng | Đường chéo nối các đáy cao dần (uptrend) hoặc đỉnh thấp dần (downtrend) | 1 |
| **Cản động** | Dynamic S/R | Vùng cản di chuyển theo giá, ví dụ EMA 34/89 | 1, 4 |
| **Round number** | Mức giá tâm lý | Mức số tròn (4,000; 50,000) mà nhiều trader đặt lệnh | 1 |
| **Bounce** | — | Giá chạm vùng cản rồi bật ngược lại | 1 |
| **Breakout** | — | Giá phá xuyên qua vùng cản, có nến đóng cửa bên ngoài vùng | 1 |
| **False breakout / Fakeout** | Phá vỡ giả | Giá phá ra ngoài vùng cản rồi quay lại vào trong — bẫy giá | 1, 2 |
| **Bull trap / Bear trap** | Bẫy tăng / Bẫy giảm | False breakout theo chiều tăng / chiều giảm | 2 |
| **Retest** | — | Sau breakout, giá quay lại kiểm tra vùng cản vừa phá | 1, 2 |
| **Role Reversal** | Đảo chiều vai trò | Kháng cự bị phá thành hỗ trợ mới, và ngược lại | 1 |
| **Confluence** | Hợp lưu | Nhiều công cụ (vùng cản, EMA, Fib, RSI) cùng chỉ về một vùng giá. Càng nhiều, xác suất càng cao | 1–6 |
| **Price void** | Vùng trống | Vùng giá phía trước không có vùng cản nào | 3 |
| **Self-fulfilling prophecy** | Lời tiên tri tự ứng nghiệm | Một mức giá có tác dụng vì nhiều người cùng tin và cùng hành động tại đó | 1, 3 |

## IV. Công Cụ Và Chỉ Báo

| Thuật ngữ | Tên đầy đủ | Nghĩa đơn giản | Chương |
| :--- | :--- | :--- | :--- |
| **Fib Retracement** | Fibonacci thoái lui | Đo C2 đã thoái lui bao nhiêu % so với C1. Vùng chính: 38.2–61.8% | 3 |
| **Fib Extension** | Fibonacci mở rộng | Ước lượng C1 mới có thể đi đến đâu. Mốc chính: 1.618, 2.000. Chỉ vẽ sau BOS xu hướng | 3 |
| **Tỷ lệ vàng** | Golden Ratio | 0.618 (và nghịch đảo 1.618) | 3 |
| **MA** | Moving Average | Đường trung bình giá của N nến gần nhất | 4 |
| **SMA** | Simple Moving Average | MA mà mọi nến có trọng số như nhau | 4 |
| **EMA** | Exponential Moving Average | MA ưu tiên nến gần hơn — phản ứng nhanh hơn SMA. Giáo trình dùng EMA 34 và EMA 89 | 4 |
| **EMA cross** | Giao cắt EMA | EMA ngắn cắt EMA dài. Giáo trình **không** dùng làm tín hiệu | 4 |
| **RSI** | Relative Strength Index | Chỉ báo động lượng, dao động 0–100, chu kỳ 14 | 5 |
| **Momentum** | Động lượng | Sức mạnh và tốc độ của nhịp giá | 5 |
| **Quá mua / Quá bán** | Overbought / Oversold | RSI > 70 / RSI < 30. Trong trend là **xác nhận trend mạnh**, không phải tín hiệu đảo chiều | 5 |
| **Vùng trung tính** | — | RSI 30–70 | 5 |
| **Phân kỳ** | Divergence | Giá và RSI đi ngược chiều nhau → động lượng suy yếu, cảnh báo đảo chiều | 5 |
| **Phân kỳ giảm** | Bearish Divergence | Giá tạo HH, RSI tạo LH | 5 |
| **Phân kỳ tăng** | Bullish Divergence | Giá tạo LL, RSI tạo HL | 5 |
| **ATR** | Average True Range | Biên độ dao động trung bình của nến — dùng ước lượng khoảng đệm cho SL | 6 |
| **Volume** | Khối lượng giao dịch | Lượng giao dịch trong một nến. Breakout có volume tăng thì đáng tin hơn | 1 |

## V. Vào Lệnh Và Quản Lý Lệnh

| Thuật ngữ | Tên đầy đủ | Nghĩa đơn giản | Chương |
| :--- | :--- | :--- | :--- |
| **Entry** | Điểm vào lệnh | Mức giá mở lệnh. Luôn cần BOS xác nhận | 4–6 |
| **SL** | Stop-loss | Mức cắt lỗ — đặt theo **cấu trúc**, không đặt tại EMA hay giữa vùng cản | 4–6 |
| **TP** | Take-profit | Mức chốt lời — vùng cản kế tiếp, đỉnh/đáy C1 cũ, hoặc Fib Extension | 4–6 |
| **R** | Risk | Khoảng cách từ Entry đến SL — tức số tiền bạn chấp nhận mất cho một lệnh | 6 |
| **1R** | — | Lợi nhuận bằng đúng mức rủi ro. Khi đạt 1R → dời SL về hòa vốn | 4, 6 |
| **R:R** | Risk:Reward | Tỷ lệ rủi ro so với lợi nhuận kỳ vọng. Tối thiểu 1:1, ưu tiên từ 1:2 | 6 |
| **Hòa vốn** | Breakeven | Dời SL về đúng giá Entry — lệnh không còn rủi ro lỗ | 4, 6 |
| **Trailing stop** | Dời SL theo giá | Liên tục dời SL theo đáy (uptrend) / đỉnh (downtrend) gần nhất để giữ lợi nhuận | 3, 6 |
| **Chốt từng phần** | Partial take-profit | Đóng một phần vị thế ở mỗi mốc TP, giữ phần còn lại | 3, 4 |
| **Khối lượng lệnh** | Position size | Số lot/hợp đồng của lệnh | 4 |
| **Spread** | — | Chênh lệch giữa giá Mua và giá Bán. Nên cộng vào khoảng đệm SL | — |
| **Edge** | Lợi thế | Hệ thống có xác suất thắng hoặc R:R đủ để có lời về dài hạn | 6 |
| **FOMO** | Fear Of Missing Out | Sợ bỏ lỡ → mua đuổi khi giá đã chạy xa | 2 |

## VI. Nến Và Khung Thời Gian

| Thuật ngữ | Nghĩa đơn giản | Chương |
| :--- | :--- | :--- |
| **Thân nến** | Phần giữa giá mở cửa và giá đóng cửa | 1, 2 |
| **Râu nến** (wick) | Phần mảnh phía trên/dưới thân nến — giá đã chạm tới nhưng không giữ được | 1, 2 |
| **Nến đóng cửa** | Nến đã kết thúc thời gian của nó. Mọi xác nhận phá cản đều phải chờ nến đóng cửa | 2 |
| **Pin bar** | Nến thân nhỏ, râu dài — giá bị từ chối mạnh tại một vùng | 3 |
| **Engulfing** | Nến nhấn chìm — thân nến sau bao trùm thân nến trước | 3 |
| **M1, M5, M15, M30** | Khung 1, 5, 15, 30 phút | — |
| **H1, H4** | Khung 1 giờ, 4 giờ | — |
| **D1, W1** | Khung ngày, khung tuần | — |
| **Khung xác định xu hướng** | H1/H4 — nơi xác định C1, C2, vùng cản, EMA | 2, 4 |
| **Khung vào lệnh** | M5/M15 — nơi chờ BOS vào lệnh, đặt Entry/SL | 2, 4 |
| **Top-Down Analysis** | Phân tích từ khung lớn xuống khung nhỏ | 2 |
| **Intraday / Day trader** | Giao dịch trong ngày / người giao dịch trong ngày | — |

## VII. Quy Ước Viết Trong Giáo Trình

- **C1/C2 luôn gắn với một khung thời gian.** Khi cần rõ, giáo trình viết "C2 của H1" hay "C1 của M5".
- **Mua / Bán** dùng thay cho Buy / Sell.
- **Mức Retracement** viết dạng phần trăm (38.2%), **mức Extension** viết dạng số thập phân (1.618).
- **Khoảng giá trị** viết với gạch nối: 38.2–61.8%, RSI 40–50.
- **Số lớn** dùng dấu phẩy phân cách hàng nghìn: 3,500; 50,000.
- **Ví dụ** mặc định mô tả uptrend; với downtrend thì làm ngược lại (đỉnh ↔ đáy, Mua ↔ Bán).
- **"→"** đọc là "dẫn đến" hoặc "thì".

## VIII. Tóm Tắt Chương

> Hãy nhớ trước ba cặp khái niệm: **C1 và C2** (sóng đẩy và sóng điều chỉnh), **BOS và CHoCH** (tiếp diễn và cảnh báo đảo chiều), **BOS xu hướng và BOS vào lệnh** (xác nhận xu hướng trên H1/H4 và tín hiệu entry trên M5/M15). Nắm vững ba cặp này, bạn sẽ đọc toàn bộ giáo trình mà không bị lạc.

---

**Chuyển chương:** Với bộ thuật ngữ trong tay, chương tiếp theo sẽ đi vào **Kháng cự & Hỗ trợ** — nền tảng vùng cản cho mọi công cụ phía sau.