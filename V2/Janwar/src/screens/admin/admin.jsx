import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenuAcc";
import { Link } from "react-router-dom";
import Title from "../../components/common/Title";
import { orderData } from "../../data/data";
import { currencyFormat } from "../../utils/helper";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { BaseLinkGreen, BaseButtonGreen, BaseButtonRed } from "../../styles/button";

const ButtonGroupWrapper = styled.div`
  gap: 8px;
  @media (max-width: ${breakpoints.sm}) {
    button,
    a {
      min-width: 100px;
    }
  }
`;
const OrderDetailScreenWrapper = styled.main`
  .btn-and-title-wrapper {
    margin-bottom: 24px;
    .title {
      margin-bottom: 0;
    }

    .btn-go-back {
      margin-right: 12px;
      transition: ${defaultTheme.default_transition};

      &:hover {
        margin-right: 16px;
      }
    }
  }

  .order-d-top {
    background-color: ${defaultTheme.color_whitesmoke};
    padding: 26px 32px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.05);

    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      row-gap: 12px;
    }
  }
`;
const OrderDetailListWrapper = styled.div`
  padding: 24px;
  margin-top: 40px;
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: ${defaultTheme.md}) {
    padding: 18px;
  }

  @media (max-width: ${defaultTheme.md}) {
    padding: 12px;
  }

  .order-d-item {
    grid-template-columns: 80px 1fr 1fr 32px;
    gap: 20px;
    padding: 12px 0;
    border-bottom: 1px solid ${defaultTheme.color_whitesmoke};
    position: relative;

    @media (max-width: ${defaultTheme.xl}) {
      grid-template-columns: 80px 3fr 2fr 32px;
      padding: 16px 0;
      gap: 16px;
    }

    @media (max-width: ${defaultTheme.sm}) {
      grid-template-columns: 50px 3fr 2fr;
      gap: 16px;
    }

    @media (max-width: ${defaultTheme.xs}) {
      grid-template-columns: 100%;
      gap: 12px;
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }

    &-img {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      @media (max-width: ${breakpoints.sm}) {
        width: 50px;
        height: 50px;
      }

      @media (max-width: ${breakpoints.sm}) {
        width: 100%;
        height: 100%;
      }
    }

    &-calc {
      p {
        display: inline-block;
        margin-right: 50px;

        @media (max-width: ${defaultTheme.lg}) {
          margin-right: 20px;
        }
      }
    }

    &-btn {
      margin-bottom: auto;
      &:hover {
        color: ${defaultTheme.color_sea_green};
      }

      @media (max-width: ${breakpoints.sm}) {
        position: absolute;
        right: 0;
        top: 10px;
      }

      @media (max-width: ${defaultTheme.xs}) {
        width: 28px;
        height: 28px;
        z-index: 5;
        background-color: ${defaultTheme.color_white};
        border-radius: 50%;
        right: 8px;
        top: 24px;
      }
    }
  }
`;
const breadcrumbItems = [
  { label: "Admin Page", link: "/" },
];


const AdminPage = () => {
  const Board = ({ info }) => {
    return (
      <div>
        {info.map((data) => (
          <><div className="order-d-top flex justify-between items-start">
          <div className="order-d-top-l">
            <h4 className="text-3xl order-d-no">
                {data.name}
            </h4>
            <p className="text-lg font-medium text-gray">
              Complain: {data.complain}
            </p>
          </div>
          <div className="order-d-top-r text-xxl text-gray font-semibold">
            <ButtonGroupWrapper className="flex items-center">
            <BaseButtonGreen>Resolved</BaseButtonGreen>
            <BaseButtonRed>Ignore</BaseButtonRed>
            </ButtonGroupWrapper>
          </div>
        </div>
          </>
        ))}
      </div>
    );
  };

  const info = [
    { name: 'John', complain: 'My Bitch Hasnain turned out to be infertile' },
    { name: 'Alice', complain: 'My Stud Mehdy had Erectile Dysfunction' },
    { name: 'Bob', complain: 'Software update needed' }
  ];
  return (
    <OrderDetailScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <div className="order-d-wrapper">
            <div className="bg-white">
              <div className="header mx-4 my-8">
                <div className="heading-with-subtitle">
                  <div className="wrap">
                    <h2 className="title text-center text-4xl mb-5">Complaint Board</h2>
                    <p className="sub-title text-center">
                      Manage Conflicts here
                    </p>
                  </div>
                </div>
              </div>
              <div className="ManageConflict">
                <div className="wrap">
                  <Board info={info} />
                </div>
              </div>
              </div>
              <hr></hr><hr></hr>
              <OrderDetailListWrapper className="order-d-list">
                {orderData[0].items?.map((item) => {
                  return (
                    <div className="order-d-item grid" key={item.id}>
                      <div className="order-d-item-img">
                        <img
                          src={item.imgSource}
                          alt=""
                          className="object-fit-cover"
                        />
                      </div>
                      <div className="order-d-item-info">
                        <p className="text-xl font-bold">{item.name}</p>
                        <p className="text-md font-bold">
                          Color: &nbsp;
                          <span className="font-medium text-gray">
                            {item.color}
                          </span>
                        </p>
                      </div>
                      <div className="order-d-item-calc">
                        <p className="font-bold text-lg">
                          Qty: &nbsp;
                          <span className="text-gray">{item.quantity}</span>
                        </p>
                        <p className="font-bold text-lg">
                          Price: &nbsp;
                          <span className="text-gray">
                            {currencyFormat(item.price)}
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-xl text-outerspace order-d-item-btn"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>
                  );
                })}
              </OrderDetailListWrapper>
              <hr></hr><hr></hr>
              <div className="order-d-top flex justify-between items-start">
                <div className="order-d-top-l">
                  <h4 className="text-3xl order-d-no">
                    Post Accessories
                  </h4>
                  <p className="text-lg font-medium text-gray">
                    You can place your accessories here
                  </p>
                </div>
                <div className="order-d-top-r text-xxl text-gray font-semibold">
                <Link to="/postacc">
                  <ButtonGroupWrapper className="flex items-center">
                  <BaseLinkGreen to="/postacc">Post Add</BaseLinkGreen>
                  </ButtonGroupWrapper>
                </Link>
                </div>
              </div>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </OrderDetailScreenWrapper>
  );
};

export default AdminPage;
