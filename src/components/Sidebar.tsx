import { Box, Link, Tooltip, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { BiCog, BiFile, BiLogOut, BiPaperPlane, BiSearch, BiStoreAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { colorMode, } = useColorMode()
    const menuItemColor = useColorModeValue("gray.200", "gray.700")
    
    return (
        <Box display="flex" justifyContent="space-between" flexDirection="column" width="70px" height="100vh" padding="20px 10px" background={colorMode === "light" ? "white" : "gray.800"}>
            <VStack spacing={3}>
                <Tooltip label="Search" aria-label="Search" placement="right" hasArrow >
                    <Link as={NavLink} to="/search" activeClassName="active-menu" display="flex" color="gray.500" background={menuItemColor} borderRadius="18px" justifyContent="center" alignItems="center" width="45px" height="45px">
                        <BiSearch size="25" />
                    </Link>
                </Tooltip>
                <Tooltip label="Schemas" aria-label="Schemas" placement="right" hasArrow >
                    <Link as={NavLink} to="/models" activeClassName="active-menu" display="flex" color="gray.500" background={menuItemColor} borderRadius="18px" justifyContent="center" alignItems="center" width="45px" height="45px">
                        <BiPaperPlane size="25" />
                    </Link>
                </Tooltip>
                <Tooltip label="Functions" aria-label="Functions" placement="right" hasArrow >
                    <Link as={NavLink} to="/functions" activeClassName="active-menu" display="flex" color="gray.500" background={menuItemColor} borderRadius="18px" justifyContent="center" alignItems="center" width="45px" height="45px">
                        <BiFile size="25" />
                    </Link>
                </Tooltip>
                <Tooltip label="Marketplace" aria-label="Marketplace" placement="right" hasArrow >
                    <Link as={NavLink} to="/marketplace" activeClassName="active-menu" display="flex" color="gray.500" background={menuItemColor} borderRadius="18px" justifyContent="center" alignItems="center" width="45px" height="45px">
                        <BiStoreAlt size="25" />
                    </Link>
                </Tooltip>
                <Tooltip label="Settings" aria-label="Settings" placement="right" hasArrow >
                    <Link as={NavLink} to="/settings" activeClassName="active-menu" display="flex" color="gray.500" background={menuItemColor} borderRadius="18px" justifyContent="center" alignItems="center" width="45px" height="45px">
                        <BiCog size="25" />
                    </Link>
                </Tooltip>
            </VStack>

            <VStack>
                <ColorModeSwitcher />
                <Tooltip label="Logout" aria-label="Logout" placement="right" hasArrow >
                    <Box display="flex" cursor="pointer" color="gray.500" background={colorMode === "light" ? "gray.200" : "gray.700"} borderRadius="15px" justifyContent="center" alignItems="center" width="45px" height="45px">
                        <BiLogOut size="25" />
                    </Box>
                </Tooltip>
            </VStack>
        </Box>
    )
}

export default Sidebar
