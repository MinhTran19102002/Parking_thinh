import styled, { css } from 'styled-components';
import { Image, Popover } from 'antd';

export const SlotStyled = styled.div`
  height: 100px;
  border: solid 1px #666;
  border-radius: 4px;
  position: absolute;

  .slot-id {

  }
`

export const DetailFloorStyled = styled(Popover)`
  .ant-popover-content {
    border: 1px solid #000;
  }
`;