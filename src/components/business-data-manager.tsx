'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building2, 
  Users, 
  UserCheck, 
  Target, 
  Settings,
  Database,
  FileText,
  TrendingUp
} from 'lucide-react';
import { NirmalaLogo } from '@/components/nirmala-logo';

export default function BusinessDataManager() {
  const [activeTab, setActiveTab] = useState('overview');

  const businessDataSections = [
    {
      id: 'employees',
      title: 'Employees',
      description: 'Manage employee records and information',
      icon: Users,
      count: 0,
      color: 'bg-blue-500',
    },
    {
      id: 'departments',
      title: 'Departments',
      description: 'Organize company departments',
      icon: Building2,
      count: 0,
      color: 'bg-green-500',
    },
    {
      id: 'roles',
      title: 'Employee Roles',
      description: 'Define roles and permissions',
      icon: UserCheck,
      count: 0,
      color: 'bg-purple-500',
    },
    {
      id: 'lead-sources',
      title: 'Lead Sources',
      description: 'Track where leads come from',
      icon: Target,
      count: 0,
      color: 'bg-orange-500',
    },
    {
      id: 'templates',
      title: 'Quotation Templates',
      description: 'Manage quotation templates',
      icon: FileText,
      count: 1,
      color: 'bg-indigo-500',
    },
    {
      id: 'settings',
      title: 'Company Settings',
      description: 'Configure company information',
      icon: Settings,
      count: 0,
      color: 'bg-gray-500',
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Business Data Management</h1>
          <p className="text-gray-600 mt-2">
            Manage your company's core business data and configurations
          </p>
        </div>
        <div className="flex items-center gap-4">
          <NirmalaLogo size="lg" showText={false} linkToHome={false} />
          <Database className="h-8 w-8 text-blue-600" />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="manage">Manage Data</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessDataSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {section.title}
                    </CardTitle>
                    <div className={`p-2 rounded-full ${section.color}`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{section.count}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {section.description}
                    </p>
                    <div className="mt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => setActiveTab('manage')}
                      >
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quick Stats
              </CardTitle>
              <CardDescription>
                Overview of your business data health
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-green-700">Active Templates</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-blue-700">Total Employees</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-sm text-purple-700">Departments</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {businessDataSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5" />
                      {section.title}
                      <Badge variant="secondary" className="ml-auto">
                        {section.count}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        View All {section.title}
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Add New {section.title.slice(0, -1)}
                      </Button>
                      {section.count > 0 && (
                        <Button variant="outline" className="w-full justify-start">
                          Export {section.title}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Data Management Actions</CardTitle>
              <CardDescription>
                Bulk operations and data maintenance tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <Database className="mr-2 h-4 w-4" />
                  Backup All Data
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Export Reports
                </Button>
                <Button variant="outline" className="justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  System Settings
                </Button>
                <Button variant="outline" className="justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Analytics Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
