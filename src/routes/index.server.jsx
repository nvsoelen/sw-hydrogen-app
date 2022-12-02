import {useShopQuery, gql, Seo} from '@shopify/hydrogen';

export default function Home() {
  // const {data} = useShopQuery({
  //   query: SHOP_QUERY,
  // });

  // const {
  //   data: { products },
  // } = useShopQuery({
  //   query: PRODUCT_QUERY,
  // });

  const { data } = useShopQuery({
    query: HOME_QUERY,
  });

  // const listItems = productData.products.map((product) =>
  //   <li>{ product }</li>
  // );

  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
        <div className="relative w-full flex-1 bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={data.page.metafield.reference.image.url}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
      </div>
      
      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={data.page.metafield.reference.image.url}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="h-48 w-full bg-white" />
        </div>
        <div className="relative py-32">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {data.page.title}
          </h1>
          <div className="mt-4 sm:mt-6">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </>
  ) 
}

// const SHOP_QUERY = gql`
//   query ShopInfo {
//     shop {
//       name
//       description
//     }
//   }
// `;

// const PRODUCT_QUERY = gql`
//   query ProductCollection {
//     products(first: 3) {
//       nodes {
//         id
//         title
//         description
//       }
//     }
//   }
// `;

const HOME_QUERY = gql`
  query ShopInfo {
    page(id:"gid://shopify/Page/92617605276") {
      title
      metafield(namespace: "custom" key: "banner")	{
        reference {
          ... on MediaImage {
            image {
              url
            }
          }
        }
      }
    }
  }
`;



