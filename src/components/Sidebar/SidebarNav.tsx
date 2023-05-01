import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { RiDashboardLine, RiGroup2Fill, RiGroupFill, RiProductHuntLine, RiTruckFill } from "react-icons/ri";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
      <NavSection title="CADASTROS">
        <NavLink icon={RiTruckFill} href="/fornecedores">Fornecedores</NavLink>
        <NavLink icon={RiGroupFill} href="/grupos">Grupos</NavLink>
        <NavLink icon={RiGroup2Fill} href="/subgrupos">Subgrupos</NavLink>
        <NavLink icon={RiProductHuntLine} href="/produtos">Produtos</NavLink>
      </NavSection>
      <NavSection title="MOVIMENTAÇÃO">
        <NavLink icon={RiGroupFill} href="/fracionamento">Fracionamento</NavLink>
      </NavSection>
      <NavSection title="RELATÓRIOS">
        <NavLink icon={RiDashboardLine} href="/relatorio01">Fracionamento</NavLink>
      </NavSection>
    </Stack >
  )
}
