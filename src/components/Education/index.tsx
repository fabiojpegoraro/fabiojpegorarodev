import styled from 'styled-components';
import { education } from '../../data/resume';

const EducationSection = styled.section`
  position: relative;
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const EducationIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Degree = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Institution = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Period = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Education = () => {
  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle>Formação Acadêmica</SectionTitle>
        <EducationGrid>
          {education.map((edu, index) => (
            <EducationCard key={index}>
              <EducationIcon>🎓</EducationIcon>
              <Degree>{edu.degree}</Degree>
              <Institution>{edu.institution}</Institution>
              <Period>{edu.period}</Period>
            </EducationCard>
          ))}
        </EducationGrid>
      </Container>
    </EducationSection>
  );
};
