import Image from "next/image";
import NextLink from "next/link";

export const Footer = () => {
  return (
    <footer
      className="relative w-full"
      style={{
        backgroundImage: "url('/images/bg-footer.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 py-6 md:py-12">
        <div className="px-4 xl:px-0 max-w-6xl flex flex-col items-start gap-10 mx-auto">
          <div className="w-full flex flex-col md:flex-row gap-4 xs:gap-8 md:gap-14">
            {/* Cột 1: Logo và thông tin */}
            <div className="w-[23.25rem] h-[15.25rem] flex flex-col gap-4">
              <button
                type="button"
                className="flex items-center cursor-pointer"
              >
                <Image
                  alt="FRESO logo"
                  width={90}
                  height={29}
                  loading="eager"
                  priority
                  src="/images/logo.svg"
                />
              </button>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-bold text-neutral-80">
                  Sàn nguyên liệu thực phẩm giá sỉ
                </div>
                <p className="text-xs text-neutral-60 text-justify">
                  Được phát triển bởi Tổng công ty Dịch vụ số Viettel, trực
                  thuộc Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel),
                  Freso kết nối trực tiếp những nhà cung cấp địa phương với nhà
                  hàng, quán ăn, quán cafe, mang đến hơn 10.000+ mặt hàng đúng
                  tiêu chuẩn và đảm bảo đủ 100% hóa đơn VAT.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-bold text-neutral-80">
                  Chứng nhận đăng ký
                </div>
                <NextLink
                  href="http://online.gov.vn/Website/chi-tiet-135670?AspxAutoDetectCookieSupport=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* TODO: Thêm file certificate_BCT.png vào public/assets/images/png/ */}
                  {/* <Image
                      alt="Business registration certificate"
                      width={96}
                      height={36}
                      loading="lazy"
                      className="w-24 h-auto object-contain"
                      src="/assets/images/png/certificate_BCT.png"
                    /> */}
                  <Image
                    alt="Business registration certificate"
                    width={96}
                    height={36}
                    loading="lazy"
                    className="w-24 h-auto object-contain"
                    src="/images/dadangky.svg"
                  />
                </NextLink>
              </div>
            </div>

            {/* Cột 2-4: Menu links */}
            <div className="max-w-full w-[43.25rem] min-h-[21.4375rem] grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {/* Về chúng tôi */}
              <div className="flex flex-col gap-2 md:gap-4">
                <div className="text-sm font-bold text-neutral-80">
                  Về chúng tôi
                </div>
                <ul className="flex flex-col gap-2 md:gap-3">
                  <li className="cursor-pointer">
                    <NextLink
                      href="/ve-chung-toi/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Về FRESO
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <NextLink
                      href="/danh-cho-nguoi-ban/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kênh người bán
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <NextLink
                      href="/thong-tin/dieu-khoan-su-dung/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Điều khoản sử dụng
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <NextLink
                      href="/thong-tin/chinh-sach-bao-mat/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chính sách bảo mật
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <NextLink
                      href="/thong-tin/quy-che/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quy chế hoạt động
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <NextLink
                      href="/thong-tin/giai-quyet-tranh-chap/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cơ chế giải quyết tranh chấp
                    </NextLink>
                  </li>
                </ul>
              </div>

              {/* Hỗ trợ */}
              <div className="flex flex-col gap-2 md:gap-4">
                <div className="text-sm font-bold text-neutral-80">Hỗ trợ</div>
                <ul className="flex flex-col gap-2 md:gap-3">
                  <li className="cursor-pointer">
                    <NextLink
                      href="/ho-tro/trung-tam-tro-giup/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Trung tâm trợ giúp
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <NextLink
                      href="/ho-tro/huong-dan-mua-hang/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hướng dẫn mua hàng
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <NextLink
                      href="/ho-tro/huong-dan-ban-hang/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hướng dẫn bán hàng
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <NextLink
                      href="/ho-tro/giao-nhan-hang/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Giao hàng và nhận hàng
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <NextLink
                      href="/ho-tro/tra-hang-hoan-tien/"
                      className="text-sm text-neutral-60 hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Trả Hàng/Hoàn Tiền
                    </NextLink>
                  </li>
                  <li className="cursor-pointer">
                    <span className="text-sm text-neutral-60 hover:text-primary-400">
                      Cổng tiếp nhận & Danh sách phản ánh của TCXH
                    </span>
                  </li>
                </ul>
              </div>

              {/* Thông tin liên hệ */}
              <div className="flex flex-col gap-4 md:gap-6 lg:col-span-1">
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="text-sm font-bold text-neutral-80">
                    Thông tin liên hệ
                  </div>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <li className="cursor-pointer">
                      <NextLink
                        href="tel:1900 8119"
                        className="text-sm text-neutral-60 hover:text-primary-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hotline: 1900 8119
                      </NextLink>
                    </li>
                    <li className="cursor-pointer">
                      <NextLink
                        href="mailto:support@freso.vn"
                        className="text-sm text-neutral-60 hover:text-primary-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Email: support@freso.vn
                      </NextLink>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="text-sm font-bold text-neutral-80">
                    Mạng xã hội
                  </div>
                  <ul className="flex flex-col gap-1 md:gap-2">
                    <li className="cursor-pointer">
                      <NextLink
                        href="https://www.facebook.com/freso.vn"
                        className="text-sm text-neutral-60 hover:text-primary-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </NextLink>
                    </li>
                    <li className="cursor-pointer">
                      <NextLink
                        href="https://www.youtube.com/freso.vn"
                        className="text-sm text-neutral-60 hover:text-primary-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Youtube
                      </NextLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="text-xs text-white flex flex-col gap-4 md:gap-6">
            <p>
              Cơ quan chủ quản: Tập đoàn Công nghiệp - Viễn thông Quân đội{" "}
              <br /> Tổng Công ty Dịch vụ số Viettel - Chi nhánh Tập đoàn Công
              nghiệp - Viễn thông Quân đội <br /> GCN ĐKHĐ: 0100109106-478 - Cấp
              lần đầu: 06/06/2019, Cơ quan cấp: Sở Kế hoạch và Đầu tư TP Hà Nội{" "}
              <br /> Trụ sở chính:{" "}
              <span className="font-semibold">
                Số 01, phố Giang Văn Minh, Phường Giảng Võ, Thành phố Hà Nội,
                Việt Nam
              </span>
              <br />
            </p>
            <div>@ Copyright FRESO_Service2025</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
