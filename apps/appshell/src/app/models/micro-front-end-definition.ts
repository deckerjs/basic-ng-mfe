import { LoadRemoteModuleOptions } from "@angular-architects/module-federation";

export type MicroFrontEndDefinition = LoadRemoteModuleOptions & {
    type:string,
    displayName: string;
    routePath: string;
    ngModuleName: string;
}