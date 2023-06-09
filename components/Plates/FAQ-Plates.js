import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
export default function FAQPlates() {
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
                      <li className="text-sm">
                        Vertical rims prevent spills & allow for stacking
                      </li>
                      <li>Semi-matte reactive glaze finish</li>
                      <li>
                        100% microwave, dishwasher safe, oven safe up to 220°C
                        /430°F
                      </li>
                      <li>Artisan crafted in a family-owned factory</li>
                      <li>Locally sourced & recycled clay</li>
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
                    <ul className="list-disc list-outside pl-6">
                      <li>∅ 26 CM / 10.1 in</li>
                      <li>Height: 2 CM / 0.7 in</li>
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
                    <ul className="list-disc list-outside pl-6">
                      <li>Delivery in 3-5 business days.</li>
                      <li>
                        Standard shipping: €10 EUR (Free on orders above €70
                        EUR)
                      </li>
                      <li>30 day return & exchange window</li>
                      <li>Defects are replaced free of charge</li>
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
                    <ul className="list-disc list-outside pl-6">
                      <li>1 tree planted every €50 spent.</li>
                      <li>100% recyclable packaging.</li>
                      <li>Locally sourced & recycled clay.</li>
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
