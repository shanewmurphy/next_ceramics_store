import Link from "next/link";
import { Navbar, Text, Dropdown } from "@nextui-org/react";
import Cart from "./Cart";

export default function Nav() {
  const collapseItems = [
    {
      PageTitle: "Shop",
      URL: "/Bowels-Collection",
    },
    {
      PageTitle: "Customers",
      URL: "/Bowels-Collection",
    },
    {
      PageTitle: "Pricing",
      URL: "/Bowels-Collection",
    },
  ];

  return (
    <div>
      <div className="flex w-screen absolute top-0 z-10">
        <Navbar
          className="fixed"
          variant="sticky"
          css={{
            backgroundColor: "$myNavBackGround",
          }}
        >
          <Navbar.Content hideIn="xs" className="ml-10">
            <Link className="text-text" href="/Bowels-Collection">
              <Navbar.Brand>LOGO</Navbar.Brand>
            </Link>
            <Navbar.Link href="#" className="text-text text-2xl">
              <Dropdown placement="bottom-left">
                <Dropdown.Button
                  className="text-text text-base font-semibold bg-transparent"
                  light
                  ripple={false}
                >
                  Shop
                </Dropdown.Button>
                <Dropdown.Menu
                  variant="light"
                  aria-label="Actions"
                  css={{ backgroundColor: "$myNavBackGround" }}
                >
                  <Dropdown.Item className="text-text">
                    <Link href="/Product-List">All Ceramics</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="text-text">
                    <Link href="/Dinnerware-Collection">Dinnerware Sets</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="text-text">
                    <Link href="/Bowels-Collection">Bowels</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="text-text">Plates</Dropdown.Item>
                  <Dropdown.Item className="text-text">Cups</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Sustainability</Navbar.Link>
          </Navbar.Content>
          <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          </Navbar.Brand>

          <Navbar.Content>
            <Navbar.Brand className="lg:hidden md:hidden sm:block">
              LOGO
            </Navbar.Brand>
            <Navbar.Item className="mr-6">
              <Cart />
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Collapse>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem key={item}>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href={item.URL}
                >
                  {item.PageTitle}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
