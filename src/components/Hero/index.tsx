import styled, { keyframes } from 'styled-components';
import { personalInfo } from '../../data/resume';

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(99, 102, 241, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 70%,
      rgba(34, 211, 238, 0.1) 0%,
      transparent 50%
    );
    animation: ${pulse} 8s ease-in-out infinite;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  max-width: 900px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

const Greeting = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: 800;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Location = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &::before {
    content: '📍';
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: ${({ theme }) => theme.colors.text};
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

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  animation: ${float} 2s ease-in-out infinite;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  cursor: pointer;
`;

export const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <Greeting>Olá, eu sou</Greeting>
        <Name>{personalInfo.name}</Name>
        <Title>{personalInfo.title}</Title>
        <Location>{personalInfo.location}</Location>
        <CTAContainer>
          <PrimaryButton href="#contact">
            Entre em Contato
          </PrimaryButton>
          <SecondaryButton href="#experience">
            Ver Experiência
          </SecondaryButton>
        </CTAContainer>
      </HeroContent>
      <ScrollIndicator onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        ↓
      </ScrollIndicator>
    </HeroSection>
  );
};
