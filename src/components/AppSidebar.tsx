import {
  User2,
  ChevronUp,
  ChevronDown,
  QrCode,
  CircleUser,
  User,
  MapPin,
  Building,
  ArrowRight,
  SquarePen,
  Key,
  SquareCheckBig,
  UsersRound
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const items = [
  
  {
    title: "QR Codes",
    url: "/dashboard/users",
    icon: QrCode,
  },
  {
    title: "Super Admin",
    url: "/dashboard/payments",
    icon: CircleUser,
  },
  {
    title: "Admin",
    url: "#",
    icon: User,
  },
  {
    title: "Branches",
    url: "#",
    icon: MapPin,
  },
  {
    title: "Entity",
    url: "#",
    icon: Building,
  },
];

const items2 =[
  
  {
    title: "Actions",
    url: "/dashboard/users",
    icon: SquarePen,
  },
  {
    title: "Reset keys",
    url: "/dashboard/payments",
    icon: Key,
  },
  {
    title: "Hr & Compliance",
    url: "#",
    icon: SquareCheckBig,
  },
  
];
const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className="px-0">
                <Image src="/renre-logo.png" alt="logo" width={180} height={120} />
                {/* <span>Renre</span> */}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
     
      <SidebarContent>
        <SidebarGroup>
          
          <SidebarGroupContent >
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton asChild size={"lg"}>
                    <Link href={item.url} className="px-3 gap-4">
                      <item.icon className="w-15 h-15 ml-1" />
                     
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
       
        {/* COLLAPSABLE */}
        <Collapsible className="group/collapsible">
          <SidebarGroup className="relative">
            <SidebarGroupLabel asChild className="text-[16px] bg-[var(--custom-color)] py-5 border-b-[6px] border-[var(--sidebar-accent)] text-[var(--custom-label)] px-4">
              <CollapsibleTrigger>
              <UsersRound size={28} className="mr-2"/>
                People
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent className="absolute top-12 rounded-[0.25rem] left-0  bg-[var(--custom-white)] text-[var(--custom-text)] w-[70%] z-10">
                <SidebarMenu>
                  {["People", "Inactive", "Awaiting Approval"].map((item, index) => (
                    <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link href="/#" className="gap-1">
                      <ArrowRight />
                        {item}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                    ))}
                  
                 
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu>
              {items2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size={"lg"}>
                    <Link href={item.url} className="px-3  gap-4">
                      <item.icon className="w-15 h-15 ml-1" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
