import styled from 'styled-components';
import { personalInfo } from '../../data/resume';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const Logo = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-2px);
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
`;

const TechStack = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <Logo>{personalInfo.name.split(' ')[0]}</Logo>
        <SocialLinks>
          <SocialLink
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            in
          </SocialLink>
          <SocialLink
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
          >
            @
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {currentYear} {personalInfo.name}. Todos os direitos reservados.
        </Copyright>
        <TechStack>
          Desenvolvido com <span>React</span> + <span>TypeScript</span> + <span>Styled Components</span>
        </TechStack>
      </Container>
    </FooterWrapper>
  );
};
