import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { ShowMoreText } from "../Text/ShowMore";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const DescriptionDiv = styled(Grid)`
  padding: 26px 68px 34px 50px;
  max-width: 850px;
  min-height: 301px;
  border-radius: 15px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 10px;
    width: unset;
  }
`;

const PresenterName = styled(Typography)`
  font-family: "IRANSans";
  margin-bottom: 10px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FollowGrid = styled(Grid)`
  text-align: center;
`;

const FatherGrid = styled(Grid)`
  font-family: "IRANSans";
`;

const PresenterImage = styled(Avatar)`
  width: 128px;
  height: 128px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Title = styled.span`
  font-family: "IRANSans";
  font-size: 10px;
  letter-spacing: -0.29px;
  color: #c2c2c2;
`;

const Education = styled.span`
  font-family: "IRANSans";
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #7a7a7a;
`;

const PresenterDesc = styled.div`
  font-family: "IRANSans";
  min-height: 150px;
  margin-top: 25px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #7a7a7a;
`;

const FollowButton = styled(Button)`
  width: 174px;
  height: 34px;
  border-radius: 17px;
  background-color: #91bfd9;
  font-family: "IRANSans";
  color:#ffffff
  font-size: 14px;
  margin-top:8px;
`;

export interface PresenterDescriptionProps {
  prsenterUniversity: string;
  prsenterName: string;
  prsenterImage: string;
  prsenterEducation: string;
  description: string;
}

export const PresenterDescription: FC<PresenterDescriptionProps> = (props) => {
  return (
    <DescriptionDiv
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <FatherGrid
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
        >
          <Grid item lg={2} xl={3} md={3} sm={3} xs={12}>
            <PresenterImage
              src={props.prsenterImage}
              title={props.prsenterName}
            />
          </Grid>
          <Grid item lg={3} xl={5} md={2} sm={2} xs={12}>
            <FatherGrid
              item
              xs={12}
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={10} lg={11} xl={11} md={11} sm={10}>
                <PresenterName variant="h6" gutterBottom>
                  {props.prsenterName}
                </PresenterName>
              </Grid>
              <Grid item xs={10} lg={11} xl={11} md={11} sm={10}>
                <Title>دانشگاه:</Title>{" "}
                <Education>{props.prsenterUniversity}</Education>
              </Grid>
              <div>
                <Title>رشته:</Title>{" "}
                <Education>{props.prsenterEducation}</Education>
              </div>
            </FatherGrid>
          </Grid>
          <Grid item lg={3} xl={1} md={2} sm={4}></Grid>
          <FollowGrid item lg={4} xl={4} md={5} sm={3} xs={12}>
            <FollowButton>دنبال کردن</FollowButton>
          </FollowGrid>
        </FatherGrid>
      </Grid>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <PresenterDesc>
          <ShowMoreText text={props.description} />
        </PresenterDesc>
      </Grid>
    </DescriptionDiv>
  );
};

export default PresenterDescription;
