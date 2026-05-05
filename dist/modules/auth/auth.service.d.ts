export declare const authService: {
    getCurrentUser: (headers: any) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined | undefined;
        role: string | null | undefined;
        phone: string | null | undefined;
    } | null>;
};
//# sourceMappingURL=auth.service.d.ts.map