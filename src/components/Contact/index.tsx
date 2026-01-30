import styled from 'styled-components';
import { personalInfo } from '../../data/resume';

const ContactSection = styled.section`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    margin: ${({ theme }) => theme.spacing.md} auto 0;
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
`;

const ContactLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ContactValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['2xl']};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.glow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glowStrong};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Vamos Conversar?</SectionTitle>
        <Subtitle>
          Estou sempre aberto a novas oportunidades e projetos interessantes.
          Entre em contato!
        </Subtitle>
        <ContactGrid>
          <ContactCard href={`mailto:${personalInfo.email}`}>
            <ContactIcon>📧</ContactIcon>
            <ContactLabel>E-mail</ContactLabel>
            <ContactValue>{personalInfo.email}</ContactValue>
          </ContactCard>
          <ContactCard href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>
            <ContactIcon>📱</ContactIcon>
            <ContactLabel>Telefone</ContactLabel>
            <ContactValue>{personalInfo.phone}</ContactValue>
          </ContactCard>
          <ContactCard href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <ContactIcon>💼</ContactIcon>
            <ContactLabel>LinkedIn</ContactLabel>
            <ContactValue>Ver Perfil</ContactValue>
          </ContactCard>
        </ContactGrid>
        <CTAButton href={`mailto:${personalInfo.email}`}>
          Enviar E-mail
        </CTAButton>
      </Container>
    </ContactSection>
  );
};
