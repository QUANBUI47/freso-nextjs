"use client";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";

import { SearchIcon } from "@/components/icons";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import {
  Category,
  ParentCategory,
  productCatalogService,
} from "@/lib/api/services/product";

export const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [parentCategories, setParentCategories] = useState<ParentCategory[]>(
    []
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const categoryMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await productCatalogService.getCategories({
          pageNo: 1,
          limit: 10,
        });
        if (response.success && response.data) {
          const categories = response.data.results || [];
          setParentCategories(categories);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);
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
            <Popover
              placement="bottom"
              isOpen={isPopoverOpen}
              onOpenChange={setIsPopoverOpen}
            >
              <PopoverTrigger>
                <button className="flex items-center gap-2 text-white">
                  Dành cho đối tác
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx(
                      "transition-transform duration-200",
                      isPopoverOpen && "rotate-180"
                    )}
                  >
                    <g clipPath="url(#clip0_28855_273367)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.65117 5.22637C2.85273 5.02481 3.17953 5.02481 3.38109 5.22637L7.83333 9.67861L12.2856 5.22637C12.4871 5.02481 12.8139 5.02481 13.0155 5.22637C13.2171 5.42793 13.2171 5.75472 13.0155 5.95628L8.19829 10.7735C7.99673 10.975 7.66994 10.975 7.46837 10.7735L2.65117 5.95628C2.44961 5.75472 2.44961 5.42793 2.65117 5.22637Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_28855_273367">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </PopoverTrigger>
              <PopoverContent className="custom-popover">
                <ul className="flex flex-col gap-3">
                  <li className="bg-white hover:bg-primary-100 rounded-sm py-2 pr-6 pl-4 text-base font-medium">
                    <Link
                      href="/danh-cho-nguoi-ban"
                      className="block text-neutral-100 hover:text-primary-400"
                    >
                      Dành cho nhà cung cấp
                    </Link>
                  </li>
                  <li className="bg-white hover:bg-primary-100 rounded-sm py-2 pr-6 pl-4 text-base font-medium">
                    <Link
                      href="/khach-hang"
                      className="block text-neutral-100 hover:text-primary-400"
                    >
                      Dành cho nhà hàng
                    </Link>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
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
            <div className="text-xs text-neutral-100 overflow-hidden whitespace-nowrap w-[8.75rem]">
              <div className="relative w-full overflow-hidden">
                <Marquee speed={40} gradient={false}>
                  <span className="mx-8 text-xs text-neutral-100">
                    Một sản phẩm của Tập đoàn Viettel
                  </span>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-6 items-center justify-center">
            <Popover
              placement="bottom-start"
              isOpen={isCategoryMenuOpen}
              onOpenChange={setIsCategoryMenuOpen}
            >
              <PopoverTrigger>
                <div
                  className="hidden md:flex items-center gap-2 cursor-pointer"
                  onMouseEnter={() => {
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                      timeoutRef.current = null;
                    }
                    setIsCategoryMenuOpen(true);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => {
                      setIsCategoryMenuOpen(false);
                    }, 150);
                  }}
                  onFocus={() => setIsCategoryMenuOpen(true)}
                  onBlur={() => {
                    timeoutRef.current = setTimeout(() => {
                      setIsCategoryMenuOpen(false);
                    }, 150);
                  }}
                  tabIndex={0}
                >
                  <Image
                    src="/images/category.svg"
                    alt="Category"
                    width={20}
                    height={20}
                  />
                  <div className="text-base text-black">Danh mục sản phẩm</div>
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="p-0 relative"
                style={{ padding: "0" }}
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                  }
                  setIsCategoryMenuOpen(true);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setIsCategoryMenuOpen(false);
                  }, 150);
                }}
              >
                <div className="flex relative">
                  {/* Main Category Menu */}
                  <div
                    ref={categoryMenuRef}
                    className="rounded-lg py-3 px-2 bg-white relative flex flex-shrink-0"
                  >
                    <div className="flex flex-col gap-2">
                      {parentCategories.map((category) => (
                        <div
                          key={category.id}
                          className={clsx(
                            "flex items-center gap-3 justify-between py-2 pl-4 pr-6 rounded-sm transition-colors",
                            hoveredCategory === category.id &&
                              "bg-primary-100 text-primary"
                          )}
                          onMouseEnter={() => {
                            if (timeoutRef.current) {
                              clearTimeout(timeoutRef.current);
                              timeoutRef.current = null;
                            }
                            setHoveredCategory(category.id as string);
                          }}
                          onMouseLeave={() => {
                            timeoutRef.current = setTimeout(() => {
                              setHoveredCategory(null);
                            }, 150);
                          }}
                        >
                          <NextLink
                            href={`/category/${category.id}`}
                            className="flex gap-3 items-center justify-between w-full"
                          >
                            <div className="flex gap-3">
                              <Image
                                src={category.icon}
                                alt={category.name}
                                width={20}
                                height={20}
                              />
                              <div
                                className={clsx(
                                  "text-base font-medium text-neutral-100",
                                  hoveredCategory === category.id &&
                                    "text-primary"
                                )}
                              >
                                {category.name}
                              </div>
                            </div>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              className="w-3 h-3 flex-shrink-0"
                            >
                              <path
                                d="M4.5 9L7.5 6L4.5 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </NextLink>
                        </div>
                      ))}
                    </div>
                    {hoveredCategory &&
                      parentCategories.find((c) => c.id === hoveredCategory)
                        ?.categories && (
                        <>
                          {/* Bridge element để nối category và sub category, tránh mất hover khi di chuột */}
                          <div
                            className="absolute left-full inset-y-0 w-1 z-40"
                            onMouseEnter={() => {
                              if (timeoutRef.current) {
                                clearTimeout(timeoutRef.current);
                                timeoutRef.current = null;
                              }
                              setHoveredCategory(hoveredCategory);
                            }}
                            onMouseLeave={() => {
                              timeoutRef.current = setTimeout(() => {
                                setHoveredCategory(null);
                              }, 150);
                            }}
                          />
                          <div
                            className="absolute left-full bg-white rounded-lg z-50 px-2 py-3 category-overlay min-w-[200px]"
                            style={{
                              top: "0px",
                              height: categoryMenuRef.current
                                ? `${categoryMenuRef.current.offsetHeight}px`
                                : "100%",
                            }}
                            onMouseEnter={() => {
                              if (timeoutRef.current) {
                                clearTimeout(timeoutRef.current);
                                timeoutRef.current = null;
                              }
                              setHoveredCategory(hoveredCategory);
                            }}
                            onMouseLeave={() => {
                              timeoutRef.current = setTimeout(() => {
                                setHoveredCategory(null);
                              }, 150);
                            }}
                          >
                            <div className="flex flex-col gap-2 h-full overflow-y-auto">
                              {parentCategories
                                .find((c) => c.id === hoveredCategory)
                                ?.categories?.map((category) => (
                                  <NextLink
                                    key={category.id}
                                    href={`/category/${hoveredCategory}/sub/${category.id}`}
                                    className="flex items-center px-3 py-2 text-base text-neutral-100 font-medium hover:bg-primary-100 hover:text-primary rounded transition-colors min-w-0"
                                  >
                                    <span className="truncate">
                                      {category.name}
                                    </span>
                                  </NextLink>
                                ))}
                            </div>
                          </div>
                        </>
                      )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
