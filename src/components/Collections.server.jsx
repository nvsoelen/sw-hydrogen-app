import {useShopQuery, gql, Seo} from '@shopify/hydrogen';

export default function Collections() {
    const { data } = useShopQuery({
        query: COLLECTION_QUERY,
    });

    return (
        <>
            <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
                <h2 id="collection-heading" className="sr-only">
                Collections
                </h2>
                <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 sm:px-6 lg:gap-x-8 lg:px-8">
                    {data?.collections?.nodes?.map((collection) => (
                        <div key={collection?.id} className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-w-4 sm:aspect-h-5 sm:h-auto">
                            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img
                                    src={collection?.image?.url}
                                    alt={collection?.image?.altText}
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                                </div>
                                <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">
                                    Shop the collection
                                    </p>
                                    <h3 className="mt-1 font-semibold text-white">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        {collection?.title}
                                    </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

const COLLECTION_QUERY = gql`
  query ShopCollection {
	collections(first: 3) {
        nodes {
            id
            title
            handle
            image {
                url
                altText
            }
        }
    }
  }
`;