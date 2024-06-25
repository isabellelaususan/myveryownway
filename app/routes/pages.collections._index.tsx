import {Link, useLoaderData, useNavigate} from '@remix-run/react';
import {Image, getPaginationVariables} from '@shopify/hydrogen';
import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useState} from 'react';
import type {CollectionFragment} from 'storefrontapi.generated';

export async function loader({context, request}: LoaderFunctionArgs) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });

  const {collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: paginationVariables,
  });

  return json({collections});
}

export const collection = [
  {
    title: 'Flower Bouquet',
    link: 'flower-bouquet',
    content: [
      {
        img: '/Shop/collection/flowerOne.png',
        className: 'row-span-1 col-span-2 2xl:h-[234.06px] h-[204.06px]',
      },
      {
        img: '/Shop/collection/flowerTwo.png',
        className: 'row-span-1 col-span-1 2xl:h-[234.06px] h-[204.06px]',
      },
      {
        img: '/Shop/collection/flowerThree.png',
        className: 'row-span-2 col-span-1 2xl:h-[520.13px] h-[447.13px]',
      },
      {
        img: '/Shop/collection/flowerFour.png',
        className: 'row-span-1 col-span-1 2xl:h-[234.06px] h-[204.06px]',
      },
      {
        img: '/Shop/collection/flowerFive.png',
        className: 'row-span-1 col-span-2 2xl:h-[234.06px] h-[204.06px]',
      },
      {
        img: '/Shop/collection/flowerSix.png',
        className: 'row-span-2 col-span-1 2xl:h-[806.3px] h-[613.3px]',
      },

      {
        img: '/Shop/collection/flowerSeven.png',
        className: 'row-span-1 col-span-1 2xl:h-[519.73px] h-[359.73px]',
      },
      {
        img: '/Shop/collection/flowerEight.png',
        className: 'row-span-2 col-span-2 2xl:h-[640.18px] h-[540.18px]',
      },

      {
        img: '/Shop/collection/flowerNine.png',
        className: 'row-span-1 col-span-1 2xl:h-[234.06px] h-[204.06px]',
      },

      {
        img: '/Shop/collection/flowerTen.png',
        className: 'row-span-1 col-span-1 2xl:h-[234.06px] h-[204.06px]',
      },

      {
        img: '/Shop/collection/flowerEleven.png',
        className: 'row-span-2 col-span-1 2xl:h-[520.13px] h-[450.13px]',
      },
      {
        img: '/Shop/collection/flowerTwelve.png',
        className:
          'row-span-2 col-span-2 2xl:h-[680.13px] h-[520px] 2xl:mt-[-10rem] mt-[-4.4rem]',
      },

      {
        img: '/Shop/collection/flowerThirteen.png',
        className: 'row-span-1 col-span-1 2xl:h-[234.06px] h-[204.06px]',
      },
      {
        img: '/Shop/collection/flowerFourteen.png',
        className: 'row-span-3 col-span-3 2xl:h-[555.55px] h-[490.55px]',
      },
      {
        img: '/Shop/collection/flowerFifteen.png',
        className: 'row-span-3 col-span-1',
      },
      {
        img: '/Shop/collection/flowerSixteen.png',
        className: 'row-span-2 col-span-1 2xl:h-[388.82px] h-[296.82px]',
      },
      {
        img: '/Shop/collection/flowerSeventeen.png',
        className: 'row-span-2 col-span-1 2xl:h-[388.82px] h-[296.82px]',
      },
      {
        img: '/Shop/collection/flowerEighteen.png',
        className: 'row-span-2 col-span-2 2xl:h-[388.82px] h-[296.82px]',
      },
    ],
  },
  {
    title: 'On The Move',
    link: 'on-the-move',
    content: [
      {
        img: '/Shop/collection/moveOne.png',
        className: 'row-span-1 col-span-2 2xl:h-[388.82px] h-[346.82px]',
      },
      {
        img: '/Shop/collection/moveTwo.png',
        className: 'row-span-1 col-span-1 2xl:h-[388.82px] h-[346.82px]',
      },
      {
        img: '/Shop/collection/moveThree.png',
        className: 'row-span-1 col-span-1 2xl:h-[388.82px] h-[346.82px]',
      },
      {
        img: '/Shop/collection/moveEleven.png',
        className: 'row-span-1 col-span-1 2xl:h-[555.55px] h-[489px]',
      },
      {
        img: '/Shop/collection/moveFive.png',
        className: 'row-span-1 col-span-3 2xl:h-[555.55px] h-[489px]',
      },
      {
        img: '/Shop/collection/moveSix.png',
        className: 'row-span-2 col-span-2 2xl:h-[651px] h-[551.08px]',
      },
      {
        img: '/Shop/collection/moveSeven.png',
        className: 'row-span-1 col-span-1 2xl:h-[520px] h-[395.77px]',
      },
      {
        img: '/Shop/collection/moveEight.png',
        className: 'row-span-1 col-span-1 2xl:h-[520px] h-[395.77px]',
      },
      {
        img: '/Shop/collection/moveTen.png',
        className: 'row-span-1 col-span-1 2xl:h-[234px] h-[204.06px]',
      },
      {
        img: '/Shop/collection/moveNine.png',
        className:
          'row-span-1 col-span-2 2xl:h-[670px] h-[567.11px] 2xl:mt-[-9rem] mt-[-6rem]',
      },
      {
        img: '/Shop/collection/moveFour.png',
        className: 'row-span-1 col-span-1 2xl:h-[526px] h-[470px]',
      },
      {
        img: '/Shop/collection/moveTwelve.png',
        className:
          'row-span-1 col-span-1 2xl:h-[806px] h-[719.75px] 2xl:mt-[-17.5rem] mt-[-15.5rem]',
      },
      {
        img: '/Shop/collection/moveFifteen.png',
        className: 'row-span-1 col-span-1',
      },

      {
        img: '/Shop/collection/moveThirteen.png',
        className: 'row-span-2 col-span-1',
      },
      {
        img: '/Shop/collection/moveFourteen.png',
        className: 'row-span-2 col-span-2',
      },
      {
        img: '/Shop/collection/moveSixteen.png',
        className: 'row-span-1 col-span-1',
      },

      {
        img: '/Shop/collection/moveEightteen.png',
        className: 'row-span-1 col-span-3 2xl:h-[859px] h-[756.7px]',
      },
      {
        img: '/Shop/collection/moveNineteen.png',
        className: 'row-span-1 col-span-1 2xl:h-[859px] h-[756.7px]',
      },
    ],
  },
];

export default function Collections() {
  const {collections} = useLoaderData<typeof loader>();
  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="collections">
      {/* <Pagination connection={collections}>
        {({nodes, isLoading, PreviousLink, NextLink}) => (
          <div>
            <PreviousLink>
              {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
            </PreviousLink>
            <CollectionsGrid collections={nodes} />
            <NextLink>
              {isLoading ? 'Loading...' : <span>Load more ↓</span>}
            </NextLink>
          </div>
        )}
      </Pagination> */}
      <section className="py-36 relative">
        <div>
          <Image
            srcSet="/icons/skyBlueCurve.svg"
            alt="skyBlueCurve"
            width={249}
            className="absolute -left-16 2xl:top-[24rem] 2xl:w-[249px] w-[160px]"
          />
          <Image
            srcSet="/icons/greenHeart.svg"
            alt="greenHeart"
            width={204}
            className="absolute -z-10 2xl:top-[22%] top-[24%] left-[22%] 2xl:w-[204px] w-[130px]"
          />
          <Image
            srcSet="/icons/pinkHalfRound.svg"
            alt="pinkHalfRound"
            width={130}
            className="absolute right-0 2xl:top-48 top-48 2xl:w-[130px] w-[70px]"
          />
          <Image
            srcSet="/icons/orangeHalfZig.svg"
            alt="orangeHalfZig"
            width={204}
            className="absolute -z-10 top-[28%] right-0 2xl:w-[204px] w-[120px]"
          />
        </div>
        <div className="2xl:max-w-[1539px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
          <div className="flex 2xl:gap-20 gap-16">
            <div className="flex flex-col self-start gap-3 w-[22%] font-MontserratBold 2xl:text-[32px] text-2xl sticky top-[50px]">
              {collection.map((tab, index) => (
                <button
                  key={index}
                  className={`hover:bg-white rounded-full px-4 py-1 w-fit cursor-pointer ${
                    activeTab === index ? 'bg-white' : ''
                  }`}
                  onClick={() => {
                    setActiveTab(index);
                    navigate(`?${tab.link}`);
                  }}
                >
                  {tab?.title}
                </button>
              ))}
            </div>
            <div className="w-[78%]">
              <div className="grid grid-cols-4 gap-11">
                {collection[activeTab].content.map((content, index) => (
                  <div className={content.className} key={index}>
                    <Image
                      srcSet={content?.img}
                      alt="imageSHop"
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CollectionsGrid({collections}: {collections: CollectionFragment[]}) {
  return (
    <div className="collections-grid">
      {collections.map((collection, index) => (
        <CollectionItem
          key={collection.id}
          collection={collection}
          index={index}
        />
      ))}
    </div>
  );
}

function CollectionItem({
  collection,
  index,
}: {
  collection: CollectionFragment;
  index: number;
}) {
  return (
    <Link
      className="collection-item"
      key={collection.id}
      to={`/collections/${collection.handle}`}
      prefetch="intent"
    >
      {collection?.image && (
        <Image
          alt={collection.image.altText || collection.title}
          aspectRatio="1/1"
          data={collection.image}
          loading={index < 3 ? 'eager' : undefined}
        />
      )}
      <h5>{collection.title}</h5>
    </Link>
  );
}

const COLLECTIONS_QUERY = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
` as const;
