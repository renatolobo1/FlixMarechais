import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
	const [categorias, setCategorias] = useState([]);
	const valoresIniciais = {
		nome: '',
		descricao: '',
		cor: '#000000'
	}
	const [valores, setValores] = useState(valoresIniciais);

	function setValor(chave, valor) {
		setValores({
			...valores,
			[chave]: valor
		})
	}

	function handlerChange(infosDoEvento) {
		const infos = infosDoEvento.target;
		setValor(infos.getAttribute('name'), infos.value);
	}

	function hangleSubmit(infosDoEvento) {
		infosDoEvento.preventDefault();
		setCategorias([
			...categorias,
			valores
		]);

		setValores(valoresIniciais);
	}

	return (
		<PageDefault>
			<h1>Cadastro de Categoria: {valores.nome} </h1>

			<form onSubmit={hangleSubmit}>

				<FormField
					label="Nome da Categoria: "
					type="text"
					name="nome"
					value={valores.nome}
					onChange={handlerChange}
				/>
				<FormField
					label="Descrição: "
					type="textarea"
					name="descricao"
					value={valores.descricao}
					onChange={handlerChange}
				/>
				<FormField
					label="Cor: "
					type="color"
					name="cor"
					value={valores.cor}
					onChange={handlerChange}
				/>
				<button>Cadastrar</button>
			</form>

			<ul>
				{categorias.map((categoria, indice) => {
					return (
						<li key={`${categoria}${indice}`}>
							{categoria.nome}
						</li>
					);
				})}
			</ul>

			<Link to="/">
				Ir pra Home
                </Link>
		</PageDefault>
	);
}

export default CadastroCategoria;
