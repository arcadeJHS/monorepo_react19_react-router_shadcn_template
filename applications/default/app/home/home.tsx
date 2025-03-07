// import logoLight from "./logo-light.svg";
// import { Button } from '@discharge/ui';
// import { add } from '@discharge/utils';

// export function Welcome() {
//   return (
//     <main className="flex items-center justify-center pt-16 pb-4">
//       <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
//         <header className="flex flex-col items-center gap-9">
//           <div className="w-[500px] max-w-[100vw] p-4">
//             <img
//               src={logoLight}
//               alt="React Router"
//               className="block w-full"
//             />
//           </div>
//         </header>
//         <div className="max-w-[300px] w-full space-y-6 px-4">
//           <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
//             <p className="leading-6 text-center">
//               What&apos;s next?
//             </p>

//             <Button
//               variant="outline" 
//               onClick={ () => { console.log(add(Number(3), Number(5))); }}>
//               Add
//             </Button>

//           </nav>
//         </div>
//       </div>
//     </main>
//   );
// }

import { AppSidebar } from "@ui/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ui/components/ui/breadcrumb"
import { Separator } from "@ui/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@ui/components/ui/sidebar"
import { ThemeSwitcher } from '@discharge/ui';

export function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
