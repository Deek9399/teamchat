import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { enterRoom } from "../features/appSlice";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  //const [channels, loading, error] = useCollection(db.collection("rooms"));
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter channel name");
    if (channelName) {
      db.collection("rooms").add({ name: channelName });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    //addChannel and selectchannel are functions to create new channel or select one
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontsize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #631a34;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
