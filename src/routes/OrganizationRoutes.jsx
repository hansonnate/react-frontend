// External
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Internal
import {
  // Organization pages
  // OrganizationDetails,
  // Users,
  // UserGroups,
  // DistributionSettings,
  // Roles,
  // AccessGroups,
} from "pages";

export const OrganizationRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="org-deetz" />} />
      <Route path="org-deetz/*" element={<OrganizationDetails />} />
      <Route path="users/*" element={<Users />} />
      <Route path="user-groups/*" element={<UserGroups />} />
      <Route path="dist-settings/*" element={<DistributionSettings />} /> */}
    </Routes>
  );
};

export const UserGroupsRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="Roles" />} />
      <Route path="Roles/*" element={<Roles />} />
      <Route path="AccessGroups/*" element={<AccessGroups />} /> */}
    </Routes>
  )
}


//:id