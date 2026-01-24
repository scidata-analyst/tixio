import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import data from "@/app/dashboard/data.json"

export default function UserView() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 p-4 py-4 md:gap-6 md:py-6">
              <Card size="sm" className="mx-auto w-full">
                <CardHeader>
                  <CardTitle>User Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <CardDescription>Name</CardDescription>
                    <div className="text-muted-foreground">
                      {data[0].name}
                    </div>
                  </div>

                  <div className="mt-4">
                    <CardDescription>Email</CardDescription>
                    <div className="text-muted-foreground">
                      {data[0].email}
                    </div>
                  </div>

                  <div className="mt-4">
                    <CardDescription>Role</CardDescription>
                    <div className="text-muted-foreground">
                      {data[0].role}
                    </div>
                  </div>

                  <div className="mt-4">
                    <CardDescription>Status</CardDescription>
                    <div className="text-muted-foreground">
                      {data[0].status}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Toggle User
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
