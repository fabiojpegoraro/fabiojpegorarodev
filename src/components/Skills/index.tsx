import styled from 'styled-components';
import { skills, certifications } from '../../data/resume';

const SkillsSection = styled.section`
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const SkillCategory = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillTag = styled.span`
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CertificationsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
`;

const CertificationsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CertificationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
`;

const CertificationBadge = styled.span`
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

export const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Habilidades</SectionTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillCategory>{skill.category}</SkillCategory>
              <SkillDescription>{skill.description}</SkillDescription>
              <SkillTags>
                {skill.items.map((item, itemIndex) => (
                  <SkillTag key={itemIndex}>{item}</SkillTag>
                ))}
              </SkillTags>
            </SkillCard>
          ))}
        </SkillsGrid>
        <CertificationsSection>
          <CertificationsTitle>Certificações</CertificationsTitle>
          <CertificationsList>
            {certifications.map((cert, index) => (
              <CertificationBadge key={index}>{cert}</CertificationBadge>
            ))}
          </CertificationsList>
        </CertificationsSection>
      </Container>
    </SkillsSection>
  );
};
