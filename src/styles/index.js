import styled from 'styled-components/native';

export const GlobalProps = styled.View`
	/* Padding */
	${({ p }) => p ? `padding: ${p}px;` : null}
	${({ pt }) => pt ? `padding-top: ${pt}px;` : null}
	${({ pr }) => pr ? `padding-right: ${pr}px;` : null}
	${({ pb }) => pb ? `padding-bottom: ${pb}px;` : null}
	${({ pl }) => pl ? `padding-left: ${pl}px;` : null}
	/* Margin */
	${({ m }) => m ? `margin: ${m}px;` : null}
	${({ mt }) => mt ? `margin-top: ${mt}px;` : null}
	${({ mr }) => mr ? `margin-right: ${mr}px;` : null}
	${({ mb }) => mb ? `margin-bottom: ${mb}px;` : null}
	${({ ml }) => ml ? `margin-left: ${ml}px;` : null}
	/* Radius */
	${({ radius }) => radius ? `border-radius:${radius}px;` : null}
	${({ rtl }) => rtl ? `border-top-left-radius: ${rtl}px;` : null}
	${({ rtr }) => rtr ? `border-top-right-radius: ${rtr}px;` : null}
	${({ rbl }) => rbl ? `border-bottom-left-radius: ${rbl}px;` : null}
	${({ rbr }) => rbr ? `border-bottom-right-radius: ${rbr}px;` : null}
`;

export const Title = styled.Text`
	font-size: 25px;
	font-weight: bold;
`;

export const ContentText = styled.Text`
	font-size: 20px;
`;

export const Wrapper = styled(GlobalProps)`
	/* Flex */
	${({ flex }) => flex ? `flex: ${flex};` : null}
	${({ align }) => align ? `align-items: ${align};` : null}
	${({ justify }) => justify ? `justify-content: ${justify};` : null}
	${({ bg }) => bg ? `background-color: ${bg};` : null}
`;

export const Box = styled(GlobalProps)`
	${({ direction }) => direction ? `flex-direction: ${direction};` : null}
	${({ align }) => align ? `align-items: ${align};` : null}
	${({ justify }) => justify ? `justify-content: ${justify};` : null}
	${({ flex }) => flex ? `flex: ${flex};` : null}
	${({ bg }) => bg ? `background-color: ${bg};` : null}
`;

export const Column = styled(GlobalProps)`
	flex-direction: column;
	${({ align }) => align ? `align-items: ${align};` : null}
	${({ justify }) => justify ? `justify-content: ${justify};` : null}
	${({ bg }) => bg ? `background-color: ${bg};` : null}
`;

export const Row = styled(GlobalProps)`
	flex-direction: row;
	${({ block }) => block ? 'width: 100%;' : null}
	${({ align }) => align ? `align-items: ${align};` : null}
	${({ justify }) => justify ? `justify-content: ${justify};` : null}
	${({ bg }) => bg ? `background-color: ${bg};` : null}
`;

export const Space = styled.View`
	${({ horizontal }) => horizontal ? `width: ${horizontal}px;` : null}
	${({ vertical }) => vertical ? `height: ${vertical}px;` : null}
	${({ bg }) => bg ? `background-color: ${bg};` : null}
`;