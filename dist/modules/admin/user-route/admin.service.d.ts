import { UserStatus } from "../../../generated/enums";
export declare const adminService: {
    getAllUsers: () => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        role: import("../../../generated/enums").Role;
        phone: string | null;
        status: UserStatus;
    }[]>;
    updateUserStatus: (id: string, status: UserStatus) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        role: import("../../../generated/enums").Role;
        phone: string | null;
        status: UserStatus;
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map