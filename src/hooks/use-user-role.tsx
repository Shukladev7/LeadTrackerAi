'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { getCurrentUserEmployeeAction } from '@/lib/actions';
import type { Employee } from '@/lib/business-types';

interface UseUserRoleReturn {
  userRole: string | null;
  isAdmin: boolean;
  employee: Employee | null;
  loading: boolean;
  error: string | null;
}

export function useUserRole(): UseUserRoleReturn {
  const { user } = useAuth();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserRole() {
      if (!user?.email) {
        setUserRole(null);
        setEmployee(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const employeeData = await getCurrentUserEmployeeAction(user.email);
        
        if (employeeData) {
          setEmployee(employeeData);
          setUserRole(employeeData.role);
        } else {
          setEmployee(null);
          setUserRole(null);
          setError('Employee record not found');
        }
      } catch (err) {
        console.error('Error fetching user role:', err);
        setError('Failed to fetch user role');
        setUserRole(null);
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUserRole();
  }, [user?.email]);

  const isAdmin = userRole === 'Admin';

  return {
    userRole,
    isAdmin,
    employee,
    loading,
    error,
  };
}
