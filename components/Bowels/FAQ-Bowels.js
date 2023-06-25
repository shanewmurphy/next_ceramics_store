import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
export default function FAQBowels() {
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
                  <Disclosure.Panel className="px-2 pt-1 pb-2 text-text antialiased">
                    <h6 className="mb-2">Dinnerware:</h6>
                    <ul className="list-disc text-text text-xs list-outside pl-6">
                      <li className="text-sm">
                        Vertical rims prevent spills & allow for stacking
                      </li>
                      <li className="text-sm">
                        Semi-matte reactive glaze finish
                      </li>
                      <li className="text-sm">
                        100% microwave, dishwasher safe, oven safe up to 220°C
                        /430°F
                      </li>
                      <li className="text-sm">
                        Artisan crafted in a family-owned factory
                      </li>
                      <li className="text-sm">
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
                      <li className="text-sm">∅ 13 CM / 7.1 in</li>
                      <li className="text-sm">H: 7 CM / 2.7 in</li>
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
                      <li className="text-sm">
                        Delivery in 3-5 business days.
                      </li>
                      <li className="text-sm">
                        Standard shipping: €10 EUR (Free on orders above €70
                        EUR)
                      </li>
                      <li className="text-sm">
                        30 day return & exchange window
                      </li>
                      <li className="text-sm">
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
                      <li className="text-sm">
                        1 tree planted every €50 spent.
                      </li>
                      <li className="text-sm">100% recyclable packaging.</li>
                      <li className="text-sm">
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
