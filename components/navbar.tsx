import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Tìm kiếm sản phẩm, nhà cung cấp"
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <div className="flex flex-col">
      {/* Phần trên */}
      <div className="w-full header-bar">
        <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center py-4">
          <div className="flex gap-2 items-center">
            {/* Logo */}
            <NextLink href="/" className="flex items-center">
              <Image
                src="/images/setting.svg" // Đường dẫn logo trong public folder
                alt="Logo"
                width={20} // Chiều rộng (px)
                height={20} // Chiều cao (px)
                className="object-contain"
                priority // Tải ưu tiên cho logo
              />
            </NextLink>
            <div className="text-base font-medium text-white">
              Món Việt - Phường Ba Đình, Hà Nội
            </div>
          </div>
          <div className="flex gap-8 text-base font-medium text-white items-center">
            <NextLink href="/" className="flex items-center">
              Về chúng tôi
            </NextLink>
            <NextLink href="/" className="flex items-center">
              Dành cho đối tác
            </NextLink>
            <NextLink href="/" className="flex items-center">
              Đăng nhập
            </NextLink>
          </div>
        </div>
      </div>

      {/* Phần dưới */}
      <div className="w-full header-shadow">
        <div className="container mx-auto max-w-7xl px-6 flex items-center py-4 gap-[90px]">
          {/* Nội dung phần dưới */}
          <div className="flex flex-col item-start gap-2">
            <Image src="/images/logo.svg" alt="Logo" width={80} height={26} />
            <div className="text-xs text-neutral-100">
              Một sản phẩm của Tập đoàn Viettel
            </div>
          </div>
          <div className="flex flex-1 gap-6 items-center justify-center">
            <div className="flex items-center gap-2">
              <Image
                src="/images/category.svg"
                alt="Category"
                width={20}
                height={20}
              />
              <div className="text-base text-black">Danh mục sản phẩm</div>
            </div>
            <div className="flex-1 max-w-xl">{searchInput}</div>
          </div>
          <div className="flex item-center gap-5">
            <NextLink href="/" className="flex items-center">
              <Image
                src="/images/fav.svg"
                alt="Notification"
                width={20}
                height={20}
              />
            </NextLink>
            <NextLink href="/" className="flex items-center gap-2">
              <Image
                src="/images/order.svg"
                alt="Message"
                width={20}
                height={20}
              />
              <div className="text-base text-black">Quản lý đơn hàng</div>
            </NextLink>
            <NextLink href="/" className="flex items-center gap-2">
              <Image
                src="/images/cart.svg"
                alt="Profile"
                width={20}
                height={20}
              />
              <div className="text-base text-black">Giỏ hàng</div>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};
