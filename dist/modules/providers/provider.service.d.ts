export declare const providerService: {
    getAllProviders: () => Promise<({
        user: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: import("../../generated/enums").Role;
            phone: string | null;
            status: import("../../generated/enums").UserStatus;
        };
    } & {
        id: string;
        userId: string;
        businessName: string;
    })[]>;
};
//# sourceMappingURL=provider.service.d.ts.map