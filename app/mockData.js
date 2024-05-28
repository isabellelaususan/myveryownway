// app/mockData.js

export const mockProducts = {
  products: {
    edges: [
      {
        node: {
          id: '1',
          title: 'Product 1',
          description: 'Description for product 1',
          images: {
            edges: [
              {
                node: {
                  src: 'https://via.placeholder.com/150',
                },
              },
            ],
          },
        },
      },
      {
        node: {
          id: '2',
          title: 'Product 2',
          description: 'Description for product 2',
          images: {
            edges: [
              {
                node: {
                  src: 'https://via.placeholder.com/150',
                },
              },
            ],
          },
        },
      },
      // Add more mock products as needed
    ],
  },
};
