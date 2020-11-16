import {
  APP_INITIALIZER,
  ComponentFactory,
  ComponentFactoryResolver,
  FactoryProvider,
  Provider,
  Type,
} from '@angular/core';
import { CmsStructureConfig, provideConfig } from '@spartacus/core';
import { OutletPosition, OutletService } from '@spartacus/storefront';

export interface ProvideOutletOptions {
  id: string;
  position?: OutletPosition;
  component: Type<any>;
}

export function provideOutlet(options: ProvideOutletOptions): FactoryProvider {
  function appInitFactory(
    componentFactoryResolver: ComponentFactoryResolver,
    outletService: OutletService<ComponentFactory<Type<any>>>
  ) {
    return () => {
      if (options.component) {
        const factory = componentFactoryResolver.resolveComponentFactory(
          options.component
        );
        outletService.add(
          options.id,
          factory,
          options.position ?? OutletPosition.REPLACE
        );
      }
    };
  }

  return {
    provide: APP_INITIALIZER,
    useFactory: appInitFactory,
    deps: [ComponentFactoryResolver, OutletService],
    multi: true,
  };
}

export function provideStaticCmsPage(pageId: string): Provider {
  const staticPage: CmsStructureConfig = {
    cmsStructure: {
      pages: [
        {
          pageId,
          slots: {},
        },
      ],
    },
  };

  return provideConfig(staticPage);
}
