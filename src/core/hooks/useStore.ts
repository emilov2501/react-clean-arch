import { DI } from "../di/di";

export const useStore = <Store>(store: string) => DI.resolve<Store>(store);
