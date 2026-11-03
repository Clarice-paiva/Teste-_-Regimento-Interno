const pptxgen=require('pptxgenjs');
const p=new pptxgen(); p.layout='LAYOUT_16x9'; p.title='Pauta DIREXE – ASSGER'; p.author='ASSGER';
const D='0B3C49',T='1C7C7D',A='F2A900',L='F3F6F7',W='FFFFFF',G='5B6B73',R='B3402A';
const HF='Cambria',BF='Calibri';
function base(title,sub){const s=p.addSlide();s.background={color:W};
 s.addText(title,{x:0.5,y:0.3,w:9,h:0.7,fontFace:HF,fontSize:28,bold:true,color:D,margin:0,isTextBox:true});
 if(sub)s.addText(sub,{x:0.5,y:0.95,w:9,h:0.35,fontFace:BF,fontSize:14,color:G,margin:0,isTextBox:true});
 s.addText('ASSGER · Diretoria Executiva · nov/2026',{x:0.5,y:5.25,w:6,h:0.25,fontFace:BF,fontSize:10,color:G,margin:0,isTextBox:true});
 return s;}
function card(s,x,y,w,h,head,body,fill=L){s.addShape(p.ShapeType.roundRect,{x,y,w,h,fill:{color:fill},line:{color:fill},rectRadius:0.08});
 s.addText(head,{x:x+0.15,y:y+0.1,w:w-0.3,h:0.4,fontFace:BF,fontSize:14,bold:true,color:T,margin:0,isTextBox:true});
 s.addText(body,{x:x+0.15,y:y+0.5,w:w-0.3,h:h-0.6,fontFace:BF,fontSize:14,color:D,margin:0,valign:'top',isTextBox:true});}
function stat(s,x,y,w,num,lab,col=T){s.addText(num,{x,y,w,h:0.7,fontFace:HF,fontSize:40,bold:true,color:col,margin:0,isTextBox:true});
 s.addText(lab,{x,y:y+0.72,w,h:0.55,fontFace:BF,fontSize:14,color:D,margin:0,valign:'top',isTextBox:true});}
function bullets(s,items,x,y,w,h){s.addText(items.map((t,i)=>({text:t,options:{bullet:true,breakLine:i<items.length-1,paraSpaceAfter:6}})),{x,y,w,h,fontFace:BF,fontSize:15,color:D,margin:0,valign:'top',isTextBox:true});}
function ask(s,t){s.addShape(p.ShapeType.roundRect,{x:0.5,y:4.55,w:9,h:0.55,fill:{color:D},line:{color:D},rectRadius:0.08});
 s.addText([{text:'Solicitação à DIREXE: ',options:{bold:true,color:A}},{text:t,options:{color:W}}],{x:0.7,y:4.55,w:8.6,h:0.55,fontFace:BF,fontSize:14,valign:'middle',margin:0,isTextBox:true});}
const ch=(c)=>Object.assign({showLegend:false,showValue:true,dataLabelFontSize:12,dataLabelColor:D,catAxisLabelFontSize:12,valAxisHidden:true,valGridLine:{style:'none'},catGridLine:{style:'none'},catAxisLabelColor:D,dataLabelFontFace:BF,catAxisLabelFontFace:BF},c);

// 1 capa
let s=p.addSlide();s.background={color:D};
s.addText('Assuntos de Governança, Riscos e Compliance',{x:0.7,y:1.4,w:8.6,h:1.3,fontFace:HF,fontSize:38,bold:true,color:W,margin:0,isTextBox:true});
s.addText('Reunião da Diretoria Executiva · 4 de novembro de 2026',{x:0.7,y:2.9,w:8.6,h:0.4,fontFace:BF,fontSize:18,color:A,margin:0,isTextBox:true});
s.addText('Assessoria de Governança, Riscos e Compliance – ASSGER',{x:0.7,y:3.4,w:8.6,h:0.4,fontFace:BF,fontSize:16,color:'CADCE0',margin:0,isTextBox:true});

// 2 pauta
s=base('Pauta','Sete assuntos, três deles com decisão ou providência solicitada');
const pauta=[['1','Programa de Governança e Saneamento Normativo','Aprovação'],['2','Contratação das licenças Claude (SEI-100006/001060/2026)','Atenção ao processo'],['3','Inventário Normativo','Informe'],['4','Avaliação do site institucional (SEI-100006/001361/2026)','Providências das áreas'],['5','Due Diligence (SEI-100006/000861/2026)','Pesquisa de mercado em 2026'],['6','Revisão do Regimento Interno','Pendências DIREO e CONADM'],['7','Política de indicação de titulares de funções','Revisão SUPGEP']];
pauta.forEach((r,i)=>{const y=1.45+i*0.48;
 s.addShape(p.ShapeType.ellipse,{x:0.5,y:y,w:0.38,h:0.38,fill:{color:T},line:{color:T}});
 s.addText(r[0],{x:0.5,y,w:0.38,h:0.38,align:'center',valign:'middle',fontFace:BF,fontSize:14,bold:true,color:W,margin:0,isTextBox:true});
 s.addText(r[1],{x:1.05,y,w:5.9,h:0.38,fontFace:BF,fontSize:15,color:D,valign:'middle',margin:0,isTextBox:true});
 s.addText(r[2],{x:7.0,y,w:2.5,h:0.38,fontFace:BF,fontSize:13,italic:true,color:G,valign:'middle',margin:0,isTextBox:true});});

// 3 programa
s=base('1. Programa de Governança e Saneamento','Do diagnóstico ao saneamento: o que fazer com cada achado, com quem e em quanto tempo');
card(s,0.5,1.5,4.3,1.35,'Trilha A · Diagnóstico','Metodologia aplicada aos 63 instrumentos normativos, em 5 etapas e ordem hierárquica, em ondas sucessivas.');
card(s,5.2,1.5,4.3,1.35,'Trilha B · Saneamento','Tratamento, correção e encerramento dos achados validados. Começa na 1ª onda, sem esperar o fim do diagnóstico.');
card(s,0.5,3.0,2.8,1.4,'Governança','ASSGER coordena. Áreas gestoras tratam. DIREXE, COMAUD, CONADM e ASSJUR decidem e acompanham.');
card(s,3.6,3.0,2.8,1.4,'Reporte','Trimestral ao COMAUD. Semestral/anual ao CONADM. KPIs e plano de saneamento em planilha.');
card(s,6.7,3.0,2.8,1.4,'Maturidade em 3 anos','Ano 1 diagnóstico e prioritários. Ano 2 revisão anual. Ano 3 gestão permanente.');
ask(s,'aprovar o Programa. O CONADM já o aprovou na 280ª RO (14/07/2026).');
s.addNotes('Achado documentado e não tratado é mais grave, para órgãos de controle, do que a ausência de diagnóstico. Por isso as trilhas correm em paralelo.');

// 4 claude
s=base('2. Contratação das licenças Claude','SEI-100006/001060/2026 · 4 Team Standard + 1 Team Premium · 12 meses');
s.addChart(p.charts.BAR,[{name:'R$/ano',labels:['Preço oficial (direto)','Pratika','Licitapro','Evolvetec','GAH Licita'],values:[11145.6,16632,16705,17028,17648]}],ch({x:0.5,y:1.4,w:5.2,h:3.0,barDir:'bar',chartColors:[T,'9DB3B8','9DB3B8','9DB3B8','9DB3B8'],showTitle:true,title:'Valor anual (R$)',titleFontSize:13,titleColor:D,dataLabelFormatCode:'#,##0',catAxisOrientation:'maxMin'}));
bullets(s,['Intermediários cobram de 49% a 58% acima do preço oficial.','Nenhuma proponente comprovou credenciamento junto à Anthropic.','Valor muito abaixo do teto de dispensa (R$ 50 mil): contratação direta custa cerca de 22% do teto.','Manifestação da ASSJUR pedida em 28/08/2026 segue pendente.'],5.9,1.45,3.6,3.0);
ask(s,'priorizar a manifestação da ASSJUR. É condição para rodar o Programa em equipe.');

// 5 inventario
s=base('3. Inventário Normativo','1ª etapa do programa de conformidade · posição de 09/10/2026');
stat(s,0.5,1.4,1.9,'63','instrumentos normativos vigentes');
stat(s,2.5,1.4,1.9,'129','referências externas mapeadas');
stat(s,4.5,1.4,1.9,'426','vínculos entre normas e referências');
stat(s,6.5,1.4,3.0,'17','referências revogadas ou parcialmente revogadas, citadas por 22 normativos',R);
s.addChart(p.charts.BAR,[{name:'Qtd',labels:['POPs','Políticas','Normas','Regimentos','Outros'],values:[33,10,6,5,9]}],ch({x:0.5,y:2.85,w:4.6,h:1.65,barDir:'col',chartColors:[T]}));
bullets(s,['Base para achar normas desatualizadas, em conflito ou em desacordo com a lei.','Em validação: 14 vínculos a revisar, 15 não classificados, 130 internos a ligar.'],5.4,2.9,4.1,1.6);
ask(s,'tomar ciência. Sem pedido de decisão.');

// 6 site
s=base('4. Avaliação do site institucional','SEI-100006/001361/2026 · 59 itens avaliados · informações até 30/09/2026');
s.addChart(p.charts.DOUGHNUT,[{name:'Status',labels:['Atendido','Parcial','Pendente','Não atendido','Não localizado'],values:[21,10,9,15,4]}],{x:0.4,y:1.35,w:3.6,h:3.1,chartColors:[T,'8FC1C2',A,R,'8A969B'],showLegend:true,legendPos:'b',legendFontSize:11,legendColor:D,showPercent:false,showValue:true,dataLabelColor:W,dataLabelFontSize:12,holeSize:55});
s.addChart(p.charts.BAR,[{name:'Itens com providência',labels:['PRESI','DIRAF','CONADM','DIREO','CONFIS','DIRPLA'],values:[24,17,6,2,1,1]}],ch({x:4.1,y:1.35,w:5.4,h:3.1,barDir:'bar',chartColors:[T],showTitle:true,title:'Itens com providência, por órgão',titleFontSize:13,titleColor:D,catAxisOrientation:'maxMin'}));
ask(s,'determinar que as áreas atualizem as informações do site. 64% dos itens exigem providência.');

// 7 site destaques
s=base('4. Site: o que mais se destaca','Itens para a DIREXE acompanhar');
card(s,0.5,1.45,4.3,1.4,'Demonstrações financeiras',"Demonstrações contábeis auditadas não publicadas, incluindo as de 2022 e 2023. Áreas: GERCOT, SUPFIC e DIRAF.");
card(s,5.2,1.45,4.3,1.4,'Remuneração e cargos','Sem link para o Portal da Transparência. Aba “Servidores” mostra só terceirizados. “Quem é Quem” sem os principais cargos.');
card(s,0.5,3.0,4.3,1.4,'Documentos de governança','Ausentes: Plano de Integridade, política de igualdade e política de dividendos. Carta Anual parada em 2024.');
card(s,5.2,3.0,4.3,1.4,'Conteúdo e atendimento','Perguntas Frequentes “em desenvolvimento”. Ações e programas sob a ASSPRIN, que está extinta. Horários do Bonde desatualizados.');
ask(s,'cada Diretoria atualizar seus itens. Publicação pela ASSTAD, a partir do conteúdo enviado.');

// 8 DD
s=base('5. Due Diligence e Background Check','SEI-100006/000861/2026 · adequações concluídas');
const st=[['LGPD','Encarregado: sem impedimento, com adequações incorporadas'],['Segurança da informação','COMISEINF favorável às redações em 27/10/2026'],['Jurídico','Apontamentos da ASSJUR analisados e ajustados'],['Pesquisa de preços','Pendente. Compete à GERADM (RILC art. 21; RI art. 31, V)'],['Orçamento','DIRPLA analisa a disponibilidade após a pesquisa']];
st.forEach((r,i)=>{const x=0.5+i*1.82;const done=i<3;
 s.addShape(p.ShapeType.roundRect,{x,y:1.5,w:1.7,h:2.6,fill:{color:done?L:'FFF3D6'},line:{color:done?L:A},rectRadius:0.08});
 s.addText(done?'Concluído':'A fazer',{x:x+0.1,y:1.58,w:1.5,h:0.3,fontFace:BF,fontSize:12,bold:true,color:done?T:'8A5A00',margin:0,isTextBox:true});
 s.addText(r[0],{x:x+0.1,y:1.92,w:1.5,h:0.55,fontFace:BF,fontSize:14,bold:true,color:D,margin:0,valign:'top',isTextBox:true});
 s.addText(r[1],{x:x+0.1,y:2.5,w:1.5,h:1.5,fontFace:BF,fontSize:13,color:D,margin:0,valign:'top',isTextBox:true});});
s.addText('Antes: assinatura do despacho de tipificação, do ETP e do TR, e aprovação do PES 035/2026.',{x:0.5,y:4.15,w:9,h:0.3,fontFace:BF,fontSize:13,color:G,margin:0,isTextBox:true});
ask(s,'realizar a pesquisa de mercado ainda em 2026.');

// 9 regimento
s=base('6. Revisão do Regimento Interno','SEI-100006/000240/2022');
bullets(s,['A proposta de revisão foi comparada ao regimento vigente e aos 31 POPs: divergências, lacunas e sobreposições de competência já foram identificadas.','A proposta seguiu para as unidades. Ainda faltam manifestações, e a consolidação depende delas.','DIREO: informar as novas superintendências criadas na reestruturação.','CONADM: pendências desde julho de 2026.'],0.5,1.5,5.2,3.0);
card(s,6.0,1.5,3.5,1.35,'Aguardando','DIREO e CONADM');
card(s,6.0,3.0,3.5,1.4,'Depois disso','Consolidar contribuições e submeter a revisão.');
ask(s,'DIREO atualizar as informações das novas superintendências.');

// 10 politica
s=base('7. Política de indicação de titulares','SEI-100006/001300/2026 · em revisão na SUPGEP · leitura preliminar da minuta');
card(s,0.5,1.45,4.3,1.4,'Minuta incompleta','Código “POL-CENTRAL-000X”, processo, datas e aprovações em branco.');
card(s,5.2,1.45,4.3,1.4,'Escopo inconsistente','O objetivo cita só Funções Gratificadas, mas a indicação trata de cargos em comissão (extraquadros).');
card(s,0.5,3.0,4.3,1.4,'Certidões','O texto exige certidão da Justiça Estadual, mas a lista do item 6.B não a inclui.');
card(s,5.2,3.0,4.3,1.4,'Independência e vedações','Comissão de verificação formada pela própria área de pessoas. Vedações a validar frente à Lei 13.303/2016, art. 17.');
ask(s,'acompanhar a revisão da SUPGEP, com retorno pendente.');

// 11 encaminhamentos
s=base('Encaminhamentos solicitados','O que pedimos à Diretoria Executiva');
const enc=[['Aprovar','Programa de Governança e Saneamento Normativo'],['Priorizar','Manifestação da ASSJUR no SEI-100006/001060/2026'],['Determinar','Atualização do site pelas Diretorias, com destaque às demonstrações financeiras'],['Realizar em 2026','Pesquisa de mercado do SEI-100006/000861/2026 (GERADM)'],['Atualizar','DIREO: novas superintendências para o Regimento Interno'],['Acompanhar','Retorno da SUPGEP sobre a política de indicação']];
enc.forEach((r,i)=>{const y=1.4+i*0.55;
 s.addText(r[0],{x:0.5,y,w:2.2,h:0.45,fontFace:BF,fontSize:16,bold:true,color:T,valign:'middle',margin:0,isTextBox:true});
 s.addText(r[1],{x:2.8,y,w:6.7,h:0.45,fontFace:BF,fontSize:15,color:D,valign:'middle',margin:0,isTextBox:true});});
p.writeFile({fileName:'Pauta_DIREXE_ASSGER.pptx'}).then(()=>console.log('ok'));
