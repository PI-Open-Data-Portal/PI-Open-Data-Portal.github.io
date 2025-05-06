---
title: Problemas a resolver
---

Multiple data source with different results (Dependendo que quem faz a publicação de dados pode haver diferenças na sua nomenclatura como por exemplo o nome das empresas ou de produtos, o que gera problemas ao realizar estatísticas sobre os dados pois pode resultar em conclusões diferentes à realidade.

Inconsistency in data points(por exemplo aqueles id em que alguns estão na descrição de transporte já outros preenchem no sítio devido o que pode criar confusão pois também existem situações que que ambos estão preenchidos com ids diferentes).

Elementos duplicados: Uma base de dados com grandes dimensões, pode conter dados duplicados, causados por erros humanos na sua inserção e falhas no controle de qualidade. Isto leva ao sobrecarregamento do sistema e reduz a eficiência operacional. O processo de remoção de dados duplicados é geralmente efetuado com recurso a  softwares, que identificam dados duplicados e substituem as cópias que tanto podem ser executados no momento de inserção dos dados ou quando estes já estão armazenados na base de dados.

Missing data(Em alguns data points há elementos em falta )
O problema mais geral para resolver é a estrutura da base de dados em si ,criar tabelas bem estruturadas,views, índices para agilizar o processo de adicionar e obter conteúdo da base de dados.
