import { NavBarContainer, DropdownOptionStyle } from "./style";
import { DropdownOption, DropDownProvider } from '../Dropdown'
import {Products, Developers, Company} from '../Content'

export function Navbar() {
  return (
    <DropDownProvider>
      <DropdownOptionStyle>
        <NavBarContainer>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
              />
            </li>
            <li>
              <DropdownOption
                name="Company"
                content={Company}
              />
            </li>
          </ul>
        </NavBarContainer>
      </DropdownOptionStyle>
    </DropDownProvider>
  )
}