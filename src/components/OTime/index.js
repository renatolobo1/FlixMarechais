import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  margin-right: 300px;
  align-items: center;
  /* letter-spacing: 4px; */
  line-height: 2em;
  color: #fff;
  text-shadow: 0.1em 0.1em #810e24;
`;

function OTime(){
  return (
    <>
      <Main>
        O nome do time foi escolhido em homenagem aos Marechais,
        Deodoro da Fonseca e Floriano Peixoto, alagoanos e primeiro e segundo presidentes do Brasil, respectivamente. O time começou suas atividades
        em dezembro de 2011 com a fusão de 3 (Três) times Alagoanos, sendo eles: "Maceió Crabs, Maceió Vikings 
        e Maceió Black Rats" e foi efetivamente fundado em 15 de fevereiro de 2013.
      </Main>

    </>
  );
}

export default OTime;