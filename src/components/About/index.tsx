import styled from 'styled-components';
import { summary } from '../../data/resume';

const AboutSection = styled.section`
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
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
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

const AboutContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const AboutText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  text-align: justify;

  &:first-of-type::first-letter {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    float: left;
    margin-right: ${({ theme }) => theme.spacing.sm};
    line-height: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-align: left;
  }
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Highlight = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  font-style: italic;
`;

export const About = () => {
  const paragraphs = summary.split('\n\n');

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>Sobre Mim</SectionTitle>
        <AboutContent>
          {paragraphs.map((paragraph, index) => (
            <AboutText key={index}>{paragraph}</AboutText>
          ))}
          <HighlightBox>
            <Highlight>
              "Meu foco atual é continuar evoluindo como desenvolvedor front-end, 
              contribuindo para a entrega de aplicações bem estruturadas, confiáveis 
              e de alto desempenho."
            </Highlight>
          </HighlightBox>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};
