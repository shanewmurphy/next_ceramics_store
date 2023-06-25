import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
export default function FAQCups() {
  return (
    <div>
      <div>
        <div className="w-full mt-12">
          <div className="mx-auto w-full">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between p-4 text-text text-left text-sm font-semibold bg-bgFaq antialiased">
                    <span>Specification</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-text`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-1 pb-2 text-sm text-text antialiased">
                    <h6>Dinnerware:</h6>
                    <ul className="list-disc text-text list-outside pl-6">
                      <li className="text-xs">
                        Vertical rims prevent spills & allow for stacking
                      </li>
                      <li className="text-xs">
                        Semi-matte reactive glaze finish
                      </li>
                      <li className="text-xs">
                        100% microwave, dishwasher safe, oven safe up to 220°C
                        /430°F
                      </li>
                      <li className="text-xs">
                        Artisan crafted in a family-owned factory
                      </li>
                      <li className="text-xs">
                        Locally sourced & recycled clay
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between p-4 text-text text-left text-sm font-semibold bg-bgFaq antialiased">
                    <span>Dimensions</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-text`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-1 pb-2 text-sm text-text antialiased">
                    <ul className="list-disc text-text list-outside pl-6">
                      <li className="text-xs">∅ 8.5 CM / 3.3 in</li>
                      <li className="text-xs">H: 10 CM / 3.9 in</li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between p-4 text-text text-left text-sm font-semibold bg-bgFaq antialiased">
                    <span>Delivery & Returns</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-text`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-1 pb-2 text-sm text-text antialiased">
                    <ul className="list-disc text-text list-outside pl-6">
                      <li className="text-xs">
                        Delivery in 3-5 business days.
                      </li>
                      <li className="text-xs">
                        Standard shipping: €10 EUR (Free on orders above €70
                        EUR)
                      </li>
                      <li className="text-xs">
                        30 day return & exchange window
                      </li>
                      <li className="text-xs">
                        Defects are replaced free of charge
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between p-4 text-text text-left text-sm font-semibold bg-bgFaq antialiased">
                    <span>Sustainability</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-text`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-1 pb-2 text-sm text-text antialiased">
                    <ul className="list-disc text-text list-outside pl-6">
                      <li className="text-xs">
                        1 tree planted every €50 spent.
                      </li>
                      <li className="text-xs">100% recyclable packaging.</li>
                      <li className="text-xs">
                        Locally sourced & recycled clay.
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}
