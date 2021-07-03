/* eslint-disable */
declare namespace MagicsApi {
    namespace Responses {
        export type GeneralError = Schemas.ErrorMessage;
    }
    namespace Schemas {
        export interface ErrorMessage {
            message?: string;
        }
        export interface Magic {
            name: string;
            mana?: number;
            type?: string;
            description?: string;
        }
        namespace Magic {
            namespace Properties {
                export type Name = string;
            }
        }
    }
}
declare namespace MagicsApiPaths {
    namespace Hello {
        namespace Get {
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace Magics {
        namespace Delete {
            namespace Parameters {
                export type Name = MagicsApi.Schemas.Magic.Properties.Name;
            }
            export interface QueryParameters {
                name?: Parameters.Name;
            }
            namespace Responses {
                export interface $204 {
                }
                export type $409 = MagicsApi.Schemas.ErrorMessage;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Limit = number;
                export type Page = number;
            }
            export interface QueryParameters {
                limit?: Parameters.Limit;
                page?: Parameters.Page;
            }
            namespace Responses {
                export type $200 = MagicsApi.Schemas.Magic[];
                export type $400 = MagicsApi.Schemas.ErrorMessage;
            }
        }
        namespace Post {
            export type RequestBody = MagicsApi.Schemas.Magic;
            namespace Responses {
                export interface $200 {
                }
                export type $400 = MagicsApi.Schemas.ErrorMessage;
            }
        }
        namespace Put {
            export type RequestBody = MagicsApi.Schemas.Magic;
            namespace Responses {
                export interface $204 {
                }
                export type $409 = MagicsApi.Schemas.ErrorMessage;
            }
        }
    }
}
