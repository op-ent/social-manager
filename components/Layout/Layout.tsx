import { Button, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import ColorModeToggle from "../ColorModeToggle";
import { signOut } from "next-auth/react";
import NextLink from "next/link";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { colorMode } = useColorMode();
  return (
    <div className="flex h-full">
      <div className="w-64">
        <div
          className={clsx(
            "fixed h-screen w-64 border-r p-2 z-50",
            colorMode === "light" ? "bg-gray-300" : "bg-gray-700"
          )}
        >
          <div className="mb-4">
            <Heading as="p" size="lg">
              SOCIAL MANAGER
            </Heading>
            <Text>
              by{" "}
              <Link
                as={NextLink}
                color="blue.500"
                href="https://github.com/op-ent"
              >
                op-ent
              </Link>
            </Text>
          </div>
          <div className="grid gap-2">
            <Button colorScheme="gray" as={NextLink} href="/">
              Home
            </Button>
            <Button colorScheme="twitter" as={NextLink} href="/twitter">
              Twitter (WIP)
            </Button>
            <Button colorScheme="facebook">Facebook (Soon)</Button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col h-full">
        <div
          className={clsx(
            "sticky top-0 bg-gray-700 border-b z-50",
            colorMode === "light" ? "bg-gray-300" : "bg-gray-700"
          )}
        >
          <div className="p-2 flex items-center justify-between">
            <div>A title</div>
            <div className="space-x-2">
              <ColorModeToggle />
              <Button colorScheme="blue" onClick={() => signOut()}>
                Sign out
              </Button>
            </div>
          </div>
        </div>
        <main>{children}</main>
        <div className="mt-auto">footer</div>
      </div>
    </div>
  );
}
