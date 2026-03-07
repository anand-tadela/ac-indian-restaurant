# GitHub Copilot Instructions for A&C Indian Restaurant

## Project Overview
This is an Angular 19 restaurant web application for A&C Indian Restaurant, featuring online menu browsing, cart management, and order placement functionality.

## Tech Stack
- **Framework**: Angular 19.2.0
- **Language**: TypeScript 5.7.2
- **Styling**: SCSS
- **State Management**: Angular Signals (signal, computed)
- **Routing**: Angular Router (standalone)
- **Deployment**: Firebase Hosting
- **Testing**: Jasmine/Karma (tests skipped by default)

## Architecture & Patterns

### Project Structure
```
src/app/
├── components/       # Reusable UI components (header, footer, theme-switcher)
├── pages/           # Route-level page components (home, menu, checkout, etc.)
├── services/        # Business logic and state management
├── models/          # TypeScript interfaces and types
├── app.config.ts    # Application configuration
└── app.routes.ts    # Route definitions
```

### Component Architecture
- **Use standalone components** - All components should use the standalone API (no NgModules)
- **Import dependencies** directly in component decorators using the `imports` array
- **Component decorator properties**: Use `selector`, `imports`, `templateUrl`, `styleUrl` (singular)
- **Tests are disabled** by default - do not generate spec files unless explicitly requested

### State Management with Signals
- **Use Angular Signals** for reactive state management
- **Signal patterns**:
  - `signal<T>()` for writable state
  - `computed()` for derived values
  - `asReadonly()` to expose read-only signals
- **Example pattern** (see CartService):
  ```typescript
  private cartItems = signal<CartItem[]>([]);
  items = this.cartItems.asReadonly();
  itemCount = computed(() => this.cartItems().reduce(...));
  ```

### Service Patterns
- All services use `@Injectable({ providedIn: 'root' })` for singleton pattern
- Services manage state using signals and expose computed values
- Business logic should be encapsulated in services, not components

### Type Safety
- **Strict TypeScript** - Follow strict typing practices
- **Interface definitions** - Use interfaces for all data models in `models/` directory
- **Model structure**: MenuItem, CartItem, Order interfaces with clear property types
- **Prefer interfaces over types** for object shapes

## Coding Conventions

### Component Development
- **Naming**: Use PascalCase for component classes, kebab-case for selectors
- **Selector prefix**: Use `app-` prefix for all component selectors
- **Template/style files**: Prefer separate files over inline templates/styles
- **SCSS organization**: One SCSS file per component, scoped to component

### TypeScript Style
- Use `const` by default, `let` only when reassignment is needed
- Use arrow functions for callbacks and methods when appropriate
- Prefer readonly arrays and objects where applicable
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators

### Signal Usage
- Use signals for all component state that triggers UI updates
- Prefer `computed()` over manual calculations in templates
- Use `update()` method for signal transformations based on current value
- Use `set()` for direct value replacement

### Dependency Injection
- Constructor injection for all services and dependencies
- Use access modifiers (public/private) appropriately in constructors
- Public for template access, private for internal use only

## Routing & Navigation
- Use `RouterOutlet`, `RouterLink`, and `RouterLinkActive` directives
- Define routes in `app.routes.ts` using the Routes array
- Lazy load feature modules when appropriate
- Use route parameters and query params with Angular Router

## Styling Guidelines
- **SCSS features**: Use variables, mixins, and nesting where beneficial
- **Theme support**: Application supports multiple themes via ThemeService
- **Responsive design**: Ensure mobile-first responsive layouts
- **CSS custom properties**: May be used for theming

## Firebase Integration
- Application is configured for Firebase Hosting deployment
- Build command: `ng build` (outputs to `dist/` directory)
- Deploy using Firebase CLI after building

## Component Generation
When generating new components:
```bash
ng generate component <path/component-name>
```
Default schematics configuration:
- Style: SCSS
- Tests: Skipped (skipTests: true)
- Standalone: true (Angular 19 default)

## Business Domain Context
- **Restaurant operations**: Menu browsing, cart management, order placement
- **Menu items**: Include properties like price, category, vegetarian/spicy indicators, images
- **Order types**: Pickup or delivery
- **Payment methods**: Credit card or PayPal
- **Order status flow**: pending → confirmed → preparing → ready → delivered

## Best Practices
1. **Component composition**: Break down complex UIs into smaller, reusable components
2. **Signal-based reactivity**: Leverage signals for clean, performant reactive code
3. **Type safety**: Always define interfaces for data structures
4. **Service layer**: Keep components thin, move logic to services
5. **Computed values**: Use computed signals instead of manual calculations
6. **Immutability**: When updating signals with arrays/objects, create new references
7. **Template syntax**: Use Angular template syntax (`*ngIf`, `*ngFor`, etc.)
8. **Standalone APIs**: Import CommonModule, FormsModule, etc. directly in components as needed

## Common Patterns

### Adding to Cart
```typescript
cartService.addItem(menuItem, quantity, specialInstructions);
```

### Signal Updates
```typescript
// Direct set
this.items.set([...newItems]);

// Update based on current value
this.isOpen.update(v => !v);
```

### Computed Signals
```typescript
total = computed(() => this.subtotal() + this.tax());
```

## Development Commands
- `npm start` or `ng serve` - Start development server (http://localhost:4200)
- `npm run build` - Build for production
- `npm test` - Run unit tests with Karma
- `ng generate` - Scaffold new components, services, etc.

## Notes for Code Generation
- Default to standalone components
- Skip test file generation
- Use SCSS for styles
- Follow existing patterns in services (signals + computed)
- Maintain consistent file organization (components/, pages/, services/, models/)
- Use TypeScript interfaces for all data models
