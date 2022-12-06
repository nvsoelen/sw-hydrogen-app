import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  // shopify: {
  //   storeDomain: 'shopworks-test-sandbox-plus.myshopify.com',
  //   storefrontToken: '6bdb2245db3dbe3352ed336acaec2e8a',
  //   storefrontApiVersion: '2022-07',
  // },

  shopify: {
    storeDomain: 'fijneman-test-shop.myshopify.com',
    storefrontToken: 'bd398178edf5716adde34d67cd27288b',
    storefrontApiVersion: '2022-10',
  },

  // logger: {
  //   showQueryTiming: true,
  // },
});
