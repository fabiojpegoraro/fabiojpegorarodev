import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { personalInfo } from '../../data/resume';

const HeaderWrapper = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.md} 0;
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.backgroundSecondary : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : 'transparent')};
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    transition: width ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};

    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileNav = styled.nav<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.md};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    z-index: 99;
  }
`;

const navItems = [
  { label: 'Sobre', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Formação', href: '#education' },
  { label: 'Contato', href: '#contact' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderWrapper $scrolled={scrolled}>
        <HeaderContent>
          <Logo href="#hero">Fábio Pegoraro</Logo>
          <Nav>
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </Nav>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </HeaderContent>
      </HeaderWrapper>
      <MobileNav $isOpen={mobileMenuOpen}>
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </MobileNav>
    </>
  );
};
