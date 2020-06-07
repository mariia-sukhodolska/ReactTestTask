import { sortArrByDirection } from './common.utils';

describe('common utils', () => {
  describe('sort TV Shows', () => {
    const arr = [
      { name: 'dfg', rating: 4 },
      { name: 'abc', rating: 6 },
      { name: 'klm', rating: 2 },
      { name: 'hij', rating: 8 }
    ];
    const arrSortedAscString = [
      { name: 'abc', rating: 6 },
      { name: 'dfg', rating: 4 },
      { name: 'hij', rating: 8 },
      { name: 'klm', rating: 2 }
    ];
    const arrSortedDescString = [
      { name: 'klm', rating: 2 },
      { name: 'hij', rating: 8 },
      { name: 'dfg', rating: 4 },
      { name: 'abc', rating: 6 }
    ];
    const arrSortedAscNumeric = [
      { name: 'klm', rating: 2 },
      { name: 'dfg', rating: 4 },
      { name: 'abc', rating: 6 },
      { name: 'hij', rating: 8 }
    ];
    const arrSortedDescNumeric = [
      { name: 'hij', rating: 8 },
      { name: 'abc', rating: 6 },
      { name: 'dfg', rating: 4 },
      { name: 'klm', rating: 2 }
    ];

    test('should return array in asc direction sorted by string value', () => {
      expect(sortArrByDirection(arr, 'asc', 'name')).toEqual(
        arrSortedAscString
      );
    });

    test('should return array in desc direction sorted by string value', () => {
      expect(sortArrByDirection(arr, 'desc', 'name')).toEqual(
        arrSortedDescString
      );
    });

    test('should return array in asc direction sorted by numeric value', () => {
      expect(sortArrByDirection(arr, 'asc', 'rating')).toEqual(
        arrSortedAscNumeric
      );
    });

    test('should return array in desc direction sorted by numeric value', () => {
      expect(sortArrByDirection(arr, 'desc', 'rating')).toEqual(
        arrSortedDescNumeric
      );
    });
  });
});
