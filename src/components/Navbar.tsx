import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

export const Navbar = () => {
  const user = null;
  return (
    <div className=" bg-white sticky top-0 z-50 inset-x-0 h-16">
      <header>
        <MaxWidthWrapper>
          <div className=" border-b border-gray-200">
            <div className=" flex h-16 items-center">
              {/* TODO: Mobile Nav */}

              <div className=" ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <Icons.logo className=" h-10 w-10" />
                </Link>
              </div>

              <div className=" hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href={"/sign-in"}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign in
                    </Link>
                  )}
                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden></span>
                  )}
                  {user ? null : (
                    <Link
                      href={"/sign-up"}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Create account
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden></span>
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      {" "}
                      <span className="h-6 w-px bg-gray-200" aria-hidden></span>
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    {" "}
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
