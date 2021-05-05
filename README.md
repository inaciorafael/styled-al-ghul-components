<div style="display: flex; align-items: center;">
	<h1>Styled Al Ghul Components</h1>
</div>

> Básicamente um conjunto de componentes React Native escrito com o poderoso [styled components](https://styled-components.com/) afim de agilizar a escrita das estilizações mais utilizadas durante o desenvolvimento da aplicação.

<div
	style="display: flex; flex-direction: row"
>
	<img
		alt="styled-components"
		src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
		width="200px"
	/>
	<img
		alt="Ra's Al Ghul"
		src="https://hugelolcdn.com/i/576477.gif"
		width="250px"
	/>
</div>

- Primeiro você deve [instalar o styled components](https://styled-components.com/docs/basics#installation) no seu projeto.
- Copie o arquivo **~/src/styles/index.js** na sua pasta de estilos.
> Obs: Por enquanto esses componentes servem somente para facilitar a minha vida, no futuro talvez eu crie uma lib caso seja necessário.

# Utilização
~~~javascript
import { Wrapper, Row } from './seu/path/onde/se/encontra/os/estilos/copiados';
import { Text } from 'react-native';

export default function App () {
	return (
		<Wrapper
			flex={1}
			p={15}
			bg='#5E9840'
		>
			<Text
				style={{ color: '#FFF' }}
			>
				Content
			</Text>
		</Wrapper>
	)
}
~~~

# Props
> Os componentes a seguir aceitam essas mesmas props.

- [Wrapper](#wrapper)
- [Box](#box)
- [Column](#column)
- [Row](#row)

|  Prop  | default |  Type  |          Descrição         |   Exemplo  |
|:------:|:-------:|:------:|:--------------------------:|:----------:|
|   bg   |    -    | string |      background-color      |  bg='#FFF' |
|  flex  |    -    | number |              -             |  flex={1}  |
|    p   |    0    | number |           padding          |   p={15}   |
|   pt   |    0    | number |         padding-top        |   pt={15}  |
|   pr   |    0    | number |        padding-right       |   pr={15}  |
|   pb   |    0    | number |       padding-bottom       |   pb={15}  |
|   pl   |    0    | number |        padding-left        |   pl={15}  |
|    m   |    0    | number |           margin           |    m={5}   |
|   mt   |    0    | number |         margin-top         |   mt={5}   |
|   mr   |    0    | number |        margin-right        |   mr={5}   |
|   mb   |    0    | number |        margin-bottom       |   mb={5}   |
|   ml   |    0    | number |         margin-left        |   ml={5}   |
| radius |    0    | number |        border-radius       | radius={8} |
|   rtl  |    0    | number |   border-top-left-radius   |   rtl={8}  |
|   rtr  |    0    | number |   border-top-right-radius  |   rtr={8}  |
|   rbl  |    0    | number |  border-bottom-left-radius |   rbl={8}  |
|   rbr  |    0    | number | border-bottom-right-radius |   rbr={8}  |


<h2 id="wrapper">Wrapper props</h2>

|   Prop  | default |  Type  |     Descrição    |                                                 Exemplo                                                |
|:-------:|:-------:|:------:|:----------------:|:------------------------------------------------------------------------------------------------------:|
|   flex  |    -    | number |         -        |                                                flex={1}                                                |
|  align  |    -    | string |    align-items   |                             align={'flex-start'\|\|'center'\|\|'flex-end'}                             |
| justify |    -    | string |  justify-content | justify={'flex-start'\|\|'center'\|\|'flex-end'\|\|'space-between'\|\|'space-around'\|\|'space-evenly' |
|    bg   |    -    | string | background-color |                                                bg='#FFF'                                               |

<h2 id="box">Box props</h2>

|    Prop   | default |  Type  |     Descrição    |                                                 Exemplo                                                |
|:---------:|:-------:|:------:|:----------------:|:------------------------------------------------------------------------------------------------------:|
| direction |    -    | string |  flex-direction  |                                      direction={'row'\|\|'column'}                                     |
|    flex   |    -    | number |         -        |                                                flex={2}                                                |
|   align   |    -    | string |    align-items   |                             align={'flex-start'\|\|'center'\|\|'flex-end'}                             |
|  justify  |    -    | string |  justify-content | justify={'flex-start'\|\|'center'\|\|'flex-end'\|\|'space-between'\|\|'space-around'\|\|'space-evenly' |
|     bg    |    -    | string | background-color |                                                bg='#FFF'                                               |

<h2 id="column">Column props</h2>

|   Prop  | default |  Type  |     Descrição    |                                                 Exemplo                                                |
|:-------:|:-------:|:------:|:----------------:|:------------------------------------------------------------------------------------------------------:|
|  align  |    -    | string |    align-items   |                             align={'flex-start'\|\|'center'\|\|'flex-end'}                             |
| justify |    -    | string |  justify-content | justify={'flex-start'\|\|'center'\|\|'flex-end'\|\|'space-between'\|\|'space-around'\|\|'space-evenly' |
|    bg   |    -    | string | background-color |                                                bg='#FFF'                                               |


<h2 id="row">Row props</h2>

|   Prop  | default |   Type  |     Descrição    |                                                 Exemplo                                                |
|:-------:|:-------:|:-------:|:----------------:|:------------------------------------------------------------------------------------------------------:|
|  block  |  false  | boolean |    width: 100%   |                                              block={true}                                              |
|  align  |    -    |  string |    align-items   |                             align={'flex-start'\|\|'center'\|\|'flex-end'}                             |
| justify |    -    |  string |  justify-content | justify={'flex-start'\|\|'center'\|\|'flex-end'\|\|'space-between'\|\|'space-around'\|\|'space-evenly' |
|    bg   |    -    |  string | background-color |                                                bg='#FFF'                                               |