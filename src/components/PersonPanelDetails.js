import { React } from "react";
import styled from "styled-components";

import Cloud from "../_starter/shared/Icons/Cloud";
import LinkIcon from "../_starter/shared/Icons/Link";
import LinkedInIcon from "../_starter/shared/Icons/LinkedIn";
import TwitterIcon from "../_starter/shared/Icons/Twitter";
import { getColor } from "../_starter/theme/theme";

import { usePersonContext } from "../contexts/person";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-height: 96px;
  text-align: center;
`;

const PersonName = styled.h2`
  color: ${getColor("greyDark")};
  font-size: 24px;
  font-weight: 300;
  line-height: 1;
  margin: 0 0 8px 0;
  padding: 0;
`;

const PersonTitle = styled.h2`
  color: ${getColor("greyDark")};
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  margin: 0;
  padding: 0;
`;

const PersonCompany = styled.a`
  color: #337ab7;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  margin: 0;
  padding: 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PersonLinks = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`;

const CrmLink = styled.a`
  display: flex;
  color: ${getColor("vendorSalesforceBlue")};
`;

const LinkedInLink = styled.a`
  display: flex;
  color: ${getColor("vendorLinkedInBlue")};
`;

const TwitterLink = styled.a`
  display: flex;
  color: ${getColor("vendorTwitterBlue")};
`;

const PersonalLink = styled.a`
  display: flex;
  color: ${getColor("greyDarkest")};
`;

export const PersonPanelDetails = () => {
  const person = usePersonContext();

  return (
    <DetailsContainer>
      <PersonName>{person.details?.display_name}</PersonName>
      <PersonTitle>{person.details?.title}</PersonTitle>
      <PersonCompany href={person.details?.person_company_website}>
        {person.details?.person_company_name}
      </PersonCompany>

      <PersonLinks>
        {person.details?.crm_url && (
          <CrmLink href={person.details?.crm_url}>
            <Cloud />
          </CrmLink>
        )}
        {person.details?.linkedin_url && (
          <LinkedInLink href={person.details?.linkedin_url}>
            <LinkedInIcon />
          </LinkedInLink>
        )}
        {person.details?.twitter_url && (
          <TwitterLink href={person.details?.twitter_url}>
            <TwitterIcon />
          </TwitterLink>
        )}
        {person.details?.personal_website && (
          <PersonalLink href={person.details?.personal_website}>
            <LinkIcon />
          </PersonalLink>
        )}
      </PersonLinks>
    </DetailsContainer>
  );
};
