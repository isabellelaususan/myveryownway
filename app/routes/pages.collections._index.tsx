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
        className:
          'row-span-1 col-span-2 2xl:h-[234.06px] md:h-[204.06px] md:order-1 order-4',
      },
      {
        img: '/Shop/collection/flowerTwo.png',
        className:
          'row-span-1 col-span-1 2xl:h-[234.06px] md:h-[204.06px] md:order-2 order-3',
      },
      {
        img: '/Shop/collection/flowerThree.png',
        className:
          'row-span-2 col-span-1 2xl:h-[520.13px] md:h-[447.13px] md:order-3 order-1',
      },
      {
        img: '/Shop/collection/flowerFour.png',
        className:
          'row-span-1 col-span-1 2xl:h-[234.06px] md:h-[204.06px] md:order-4 order-2',
      },
      {
        img: '/Shop/collection/flowerFive.png',
        className:
          'row-span-1 col-span-2 2xl:h-[234.06px] md:h-[204.06px] order-5',
      },
      {
        img: '/Shop/collection/flowerSix.png',
        className:
          'row-span-2 col-span-1 2xl:h-[806.3px] md:h-[613.3px] order-6',
      },
      {
        img: '/Shop/collection/flowerSeven.png',
        className:
          'row-span-1 col-span-1 2xl:h-[519.73px] md:h-[359.73px] order-7',
      },
      {
        img: '/Shop/collection/flowerEight.png',
        className:
          'row-span-2 col-span-2 2xl:h-[640.18px] md:h-[540.18px] md:order-8 order-12',
      },
      {
        img: '/Shop/collection/flowerNine.png',
        className:
          'row-span-1 col-span-1 2xl:h-[234.06px] md:h-[204.06px] md:order-9 order-8',
      },
      {
        img: '/Shop/collection/flowerTen.png',
        className:
          'row-span-1 col-span-1 2xl:h-[234.06px] md:h-[204.06px] md:order-10 order-9',
      },
      {
        img: '/Shop/collection/flowerEleven.png',
        className:
          'row-span-2 col-span-1 2xl:h-[520.13px] md:h-[450.13px] md:order-11 order-10',
      },
      {
        img: '/Shop/collection/flowerTwelve.png',
        className:
          'row-span-2 col-span-2 2xl:h-[680.13px] md:h-[520px] 2xl:mt-[-10rem] md:mt-[-4.4rem] md:order-12 order-[13]',
      },
      {
        img: '/Shop/collection/flowerThirteen.png',
        className:
          'row-span-1 col-span-1 2xl:h-[234.06px] md:h-[204.06px] md:order-[13] order-11',
      },
      {
        img: '/Shop/collection/flowerFourteen.png',
        className:
          'md:row-span-3 md:col-span-3 row-span-2 col-span-2 2xl:h-[555.55px] md:h-[490.55px] order-[14]',
      },
      {
        img: '/Shop/collection/flowerFifteen.png',
        className: 'row-span-3 col-span-1 md:block hidden md:order-[15]',
      },
      {
        img: '/Shop/collection/flowerSixteen.png',
        className:
          'md:row-span-2 md:col-span-1 row-span-1 col-span-1 2xl:h-[388.82px] md:h-[296.82px] order-[16]',
      },
      {
        img: '/Shop/collection/flowerSeventeen.png',
        className:
          'md:row-span-2 md:col-span-1 row-span-1 col-span-1 2xl:h-[388.82px] md:h-[296.82px] order-[17]',
      },
      {
        img: '/Shop/collection/flowerEighteen.png',
        className:
          'row-span-2 col-span-2 2xl:h-[388.82px] md:h-[296.82px] md:order-[18] order-[15]',
      },
    ],
  },
  {
    title: 'On The Move',
    link: 'on-the-move',
    content: [
      {
        img: '/Shop/collection/moveOne.png',
        className:
          'row-span-1 col-span-2 2xl:h-[388.82px] md:h-[346.82px] order-1',
      },
      {
        img: '/Shop/collection/moveTwo.png',
        className:
          'row-span-1 col-span-1 2xl:h-[388.82px] md:h-[346.82px] order-2',
      },
      {
        img: '/Shop/collection/moveThree.png',
        className:
          'row-span-1 col-span-1 2xl:h-[388.82px] md:h-[346.82px] order-3',
      },
      {
        img: '/Shop/collection/moveEleven.png',
        className:
          'row-span-1 col-span-1 2xl:h-[555.55px] md:h-[489px] md:order-4 order-12',
      },
      {
        img: '/Shop/collection/moveFive.png',
        className:
          'row-span-1 md:col-span-3 col-span-2 2xl:h-[555.55px] md:h-[489px] md:order-5 order-4',
      },
      {
        img: '/Shop/collection/moveSix.png',
        className:
          'row-span-2 col-span-2 2xl:h-[651px] md:h-[551.08px] md:order-6 order-[14]',
      },
      {
        img: '/Shop/collection/moveSeven.png',
        className:
          'row-span-1 col-span-1 2xl:h-[520px] md:h-[395.77px] md:order-7 order-5',
      },
      {
        img: '/Shop/collection/moveEight.png',
        className:
          'row-span-1 col-span-1 2xl:h-[520px] md:h-[395.77px] md:order-8 order-6',
      },
      {
        img: '/Shop/collection/moveTen.png',
        className:
          'row-span-1 col-span-1 2xl:h-[234px] md:h-[204.06px] md:order-9 order-7',
      },
      {
        img: '/Shop/collection/moveNine.png',
        className:
          'row-span-1 col-span-2 2xl:h-[670px] md:h-[567.11px] 2xl:mt-[-9rem] md:mt-[-6rem] order-10',
      },
      {
        img: '/Shop/collection/moveFour.png',
        className:
          'row-span-1 col-span-1 2xl:h-[526px] md:h-[470px] md:order-11 order-9',
      },
      {
        img: '/Shop/collection/moveTwelve.png',
        className:
          'md:row-span-1 row-span-2 col-span-1 2xl:h-[806px] md:h-[719.75px] 2xl:mt-[-17.5rem] md:mt-[-15.5rem] md:order-12 order-8',
      },
      {
        img: '/Shop/collection/moveFifteen.png',
        className:
          'md:row-span-1 row-span-2 col-span-1 md:order-[13] order-[17]',
      },
      {
        img: '/Shop/collection/moveThirteen.png',
        className: 'md:row-span-2 row-span-1 col-span-1 md:order-[14] order-11',
      },
      {
        img: '/Shop/collection/moveFourteen.png',
        className: 'row-span-2 col-span-2 md:order-[15] order-[13]',
      },
      {
        img: '/Shop/collection/moveSixteen.png',
        className: 'row-span-1 col-span-1 md:order-[16] order-[15]',
      },
      {
        img: '/Shop/collection/moveEightteen.png',
        className:
          'row-span-1 md:col-span-3 col-span-2 2xl:h-[859px] md:h-[756.7px] md:order-[17] order-12',
      },
      {
        img: '/Shop/collection/moveNineteen.png',
        className:
          'md:row-span-1 row-span-3 col-span-1 2xl:h-[859px] md:h-[756.7px] md:order-[18] order-[16]',
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
      <section className="md:py-36 py-16 relative">
        <div>
          <Image
            srcSet="/icons/purpleStar.svg"
            alt="purpleStar"
            width={201}
            className="absolute md:-right-24 -right-1 md:top-96 top-28 md:w-[201px] w-10 -z-10"
          />
          <Image
            srcSet="/icons/greenLineRound.svg"
            alt="greenLineRound"
            width={273}
            className="absolute left-[24%] md:top-[18%] top-36 -z-10 md:w-[273px] w-[51px]"
          />
          <Image
            srcSet="/icons/pinkCurvePipe.svg"
            alt="pinkCurvePipe"
            width={225}
            className="absolute md:top-[34%] top-72 md:w-[225px] w-[92px] -z-10"
          />
          <Image
            srcSet="/icons/yellowBox.svg"
            alt="yellowBox"
            width={158}
            className="absolute md:right-20 right-0 -z-10 md:top-[35%] top-96 md:w-[158px] w-[52px]"
          />
        </div>
        <div className="2xl:max-w-[1539px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-10 mx-auto">
          <div className="md:flex 2xl:gap-20 gap-16">
            <div className="flex flex-col self-start gap-3 md:w-[22%] w-full font-MontserratBold 2xl:text-[32px] md:text-2xl text-base md:sticky top-[50px] pb-8">
              {collection.map((tab, index) => (
                <button
                  key={index}
                  className={`hover:bg-white rounded-full md:px-4 px-2 md:py-1 py-0.5 w-fit cursor-pointer ${
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
            <div className="md:w-[78%] w-full">
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-11 gap-6">
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
