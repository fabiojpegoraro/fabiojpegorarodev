import styled from 'styled-components';
import { experiences } from '../../data/resume';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 8px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing['3xl']};
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 14px;
    height: 14px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.backgroundSecondary};
    box-shadow: ${({ theme }) => theme.shadows.glow};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 2px;
    }
  }
`;

const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Company = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const Period = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const Role = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ActivitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Activity = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.6;
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Experiência Profissional</SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <ExperienceCard>
                <ExperienceHeader>
                  <Company>{exp.company}</Company>
                  <Period>{exp.period}</Period>
                </ExperienceHeader>
                <Role>{exp.role}</Role>
                <ActivitiesList>
                  {exp.activities.map((activity, actIndex) => (
                    <Activity key={actIndex}>{activity}</Activity>
                  ))}
                </ActivitiesList>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};
