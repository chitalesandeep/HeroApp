import { MoviesRoutingModule } from './movies-routing.module';

describe('MoviesRoutingModule', () => {
  let moviesRoutingModule: MoviesRoutingModule;

  beforeEach(() => {
    moviesRoutingModule = new MoviesRoutingModule();
  });

  it('should create an instance', () => {
    expect(moviesRoutingModule).toBeTruthy();
  });
});
