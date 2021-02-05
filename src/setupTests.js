jest.mock('mapbox-gl', () => ({
  map: jest.fn().mockReturnValue({
    remove: jest.fn(),
  }),
}));