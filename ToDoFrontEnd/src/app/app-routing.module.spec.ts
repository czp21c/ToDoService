import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';
/**
 * /todos
 * /todos/create
 * /todos/edit/:id
 * /todos/:id details
 */

describe('Router', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: []
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  });

  it('should navigate todos when navigate ""', fakeAsync(() =>{
    // given
    // when
    router.navigate([''])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos')
  }));

  it('should navigate todos//edit/:id when navigate "todos/edit/:id"', fakeAsync(() =>{
    // given
    // when
    router.navigate(['todos', 'edit', 2])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos/edit/2')
  }));

  it('should navigate todos/:id when navigate "todos/:id"', fakeAsync(() =>{
    // given
    // when
    router.navigate(['todos', 2])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos/2')
  }));

  it('should navigate todos/create when navigate "todos/create"', fakeAsync(() =>{
    // given
    // when
    router.navigate(['todos/create'])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos/create')
  }));
});
