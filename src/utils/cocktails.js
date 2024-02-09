export const COCKTAILS = [
    {
        "id": 1,
        "name": "Caipirinha",
        "ingredientes": [
            {"ingrediente": "Cachaça", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Limão", "quantidade": "1 unidade", "tipo":"Outros"},
            {"ingrediente": "Açúcar", "quantidade": "1 colher de chá", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo baixo",
        "descricao": "Uma bebida brasileira refrescante feita com cachaça, limão e açúcar, servida com gelo.",
        "teor_alcoolico": "Baixo",
        "caracteristicas": ["Refrescante", "Cítrico"],
        "image": "https://guiadacozinha.com.br/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-09-at-14.45.45.jpeg"
    },
    {
        "id": 2,
        "name": "Americano",
        "ingredientes": [
            {"ingrediente": "Vermute Doce", "quantidade": "1 oz" ,"tipo":"Destilado"},
            {"ingrediente": "Campari", "quantidade": "1 oz","tipo":"Bitter"},
            {"ingrediente": "Água com gás", "quantidade": "1 oz","tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto","tipo":"Outros"}
        ],
        "tipo_copo": "Copo alto",
        "descricao": "Um coquetel italiano-americano leve e refrescante com vermute doce, Campari e água com gás, servido com gelo.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Refrescante", "Levemente Amargo"],
        "image": "https://hips.hearstapps.com/hmg-prod/images/delish-221213-americano-066-rl-1671658013.jpg?crop=0.639xw:0.959xh;0.298xw,0.00240xh&resize=1200:*"
    },
    {
        "id": 3,
        "name": "Negroni",
        "ingredientes": [
            {"ingrediente": "Gin", "quantidade": "1 oz", "tipo":"Destilado"},
            {"ingrediente": "Vermute Doce", "quantidade": "1 oz", "tipo":"Destilado"},
            {"ingrediente": "Campari", "quantidade": "1 oz", "tipo":"Bitter"},
            {"ingrediente": "Gelo", "quantidade": "a gosto","tipo":"Outros"},
            {"ingrediente": "Casca de laranja (para decorar)", "quantidade": "opcional","tipo":"Outros"}
        ],
        "tipo_copo": "Copo baixo",
        "descricao": "Um coquetel clássico italiano feito com gin, vermute tinto e Campari, servido com gelo e decorado com casca de laranja.",
        "teor_alcoolico": "Alto",
        "caracteristicas": ["Amargo", "Fortemente Aromático"],
        "image": "https://www.liquor.com/thmb/KPTRXSVO7vyx7O2fPyNkLh9JQPo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mezcal-negroni-1500x1500-primary-6f6c472050a949c8a55aa07e1b5a2d1b.jpg"
    },
    {
        "id": 4,
        "name": "Martini",
        "ingredientes": [
            {"ingrediente": "Gin", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Vermute Seco", "quantidade": "1/2 oz", "tipo":"Destilado"},
            {"ingrediente": "Azeitona (para decorar)", "quantidade": "opcional", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Taça de Martini",
        "descricao": "Um clássico coquetel de gin com um toque de vermute seco, geralmente servido com uma azeitona como decoração.",
        "teor_alcoolico": "Alto",
        "caracteristicas": ["Elegante", "Seco"],
        "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dirty-martini-3e964eb.jpg?quality=90&resize=500,454"
    },
    {
        "id": 5,
        "name": "Margarita",
        "ingredientes": [
            {"ingrediente": "Tequila", "quantidade": "1 1/2 oz", "tipo":"Destilado"},
            {"ingrediente": "Licor de Laranja", "quantidade": "1 oz", "tipo":"Licor"},
            {"ingrediente": "Suco de Limão", "quantidade": "3/4 oz", "tipo":"Suco"},
            {"ingrediente": "Sal (para a borda do copo)", "quantidade": "a gosto", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo de Margarita",
        "descricao": "Um coquetel mexicano feito com tequila, licor de laranja e suco de limão, geralmente servido com a borda do copo salgada.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Cítrico", "Refrescante"],
        "image": "https://images.cocktailwave.com/tr:h-1200,w-1200/margarita.png"
    },
    {
        "id": 6,
        "name": "Piña Colada",
        "ingredientes": [
            {"ingrediente": "Rum", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Creme de Coco", "quantidade": "2 oz", "tipo":"Outros"},
            {"ingrediente": "Suco de Abacaxi", "quantidade": "2 oz", "tipo":"Suco"},
            {"ingrediente": "Abacaxi (para decorar)", "quantidade": "opcional", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo alto",
        "descricao": "Um coquetel tropical feito com rum, creme de coco e suco de abacaxi, geralmente decorado com uma fatia de abacaxi.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Tropical", "Doce"],
        "image": "https://images.immediate.co.uk/production/volatile/sites/30/2013/11/pina-colada-c68aca7.jpg?quality=90&resize=556,505"
    },
    {
        "id": 7,
        "name": "Whiskey Sour",
        "ingredientes": [
            {"ingrediente": "Bourbon", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Suco de Limão", "quantidade": "3/4 oz", "tipo":"Suco"},
            {"ingrediente": "Clara de Ovo", "quantidade": "1 oz", "tipo":"Outros"},
            {"ingrediente": "Açúcar", "quantidade": "3/4 oz", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo baixo",
        "descricao": "Um coquetel clássico à base de bourbon, suco de limão, clara de ovo e açúcar, servido com gelo.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Ácido", "Agridoce"],
        "image": "https://cdn.diffords.com/contrib/stock-images/2023/08/64ddebc768b4d.jpg"
    },
    {
        "id": 8,
        "name": "Mai Tai",
        "ingredientes": [
            {"ingrediente": "Rum Claro", "quantidade": "1 oz", "tipo":"Destilado"},
            {"ingrediente": "Rum Escuro", "quantidade": "1 oz", "tipo":"Destilado"},
            {"ingrediente": "Licor de Curaçao", "quantidade": "1/2 oz", "tipo":"Licor"},
            {"ingrediente": "Xarope de Orgeat", "quantidade": "1/2 oz", "tipo":"Xarope"},
            {"ingrediente": "Suco de Limão", "quantidade": "3/4 oz", "tipo":"Suco"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo baixo",
        "descricao": "Um coquetel tiki clássico com rum claro, rum escuro, curaçao de laranja, xarope de orgeat e suco de limão.",
        "teor_alcoolico": "Alto",
        "caracteristicas": ["Frutado", "Exótico"],
        "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/10/Mai-Tai-80422f5.jpg?quality=90&resize=556,505"
    },
    {
        "id": 9,
        "name": "Cosmopolitan",
        "ingredientes": [
            {"ingrediente": "Vodka", "quantidade": "1 1/2 oz", "tipo":"Destilado"},
            {"ingrediente": "Licor de Laranja", "quantidade": "1 oz", "tipo":"Licor"},
            {"ingrediente": "Suco de Cranberry", "quantidade": "1/2 oz", "tipo":"Suco"},
            {"ingrediente": "Suco de Limão", "quantidade": "1/4 oz", "tipo":"Suco"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Taça de Martini",
        "descricao": "Um coquetel sofisticado com vodka, licor de laranja, suco de cranberry e suco de limão.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Cítrico", "Elegante"],
        "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cosmopolitan-7a6874f.jpg?quality=90&resize=440,400"
    },
    {
        "id": 10,
        "name": "Mojito",
        "ingredientes": [
            {"ingrediente": "Rum Branco", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Hortelã", "quantidade": "8 folhas", "tipo":"Outros"},
            {"ingrediente": "Açúcar", "quantidade": "2 colheres de chá", "tipo":"Outros"},
            {"ingrediente": "Suco de Limão", "quantidade": "1 oz", "tipo":"Suco"},
            {"ingrediente": "Água com gás", "quantidade": "a gosto", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo alto",
        "descricao": "Um refrescante coquetel cubano com rum branco, hortelã, açúcar, suco de limão e água com gás.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Refrescante", "Herbal"],
        "image": "https://www.foodandwine.com/thmb/e8AvEfBBfwjg3xmt6E__rRvSZlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mojito-FT-RECIPE1022-2000-85cdb1eb59454847b713713e32e365c0.jpg"
    },
    {
        "id": 11,
        "name": "Old Fashioned",
        "ingredientes": [
            {"ingrediente": "Bourbon", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Açúcar", "quantidade": "1 colher de chá", "tipo":"Outros"},
            {"ingrediente": "Angostura Bitters", "quantidade": "2-3 dashes", "tipo":"Bitter"},
            {"ingrediente": "Laranja (para decorar)", "quantidade": "opcional", "tipo":"Outros"},
            {"ingrediente": "Cereja (para decorar)", "quantidade": "opcional", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo baixo",
        "descricao": "Um coquetel clássico com bourbon, açúcar, angostura bitters e decoração de laranja e cereja.",
        "teor_alcoolico": "Alto",
        "caracteristicas": ["Robusto", "Aromático"],
        "image": "https://www.allrecipes.com/thmb/DQIEfVzC7KndUnnHJbmB44a0u3Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221320-old-fashioned-cocktail-ddmfs-3X4-13181414-bf1365252476463b9650096c28b5acfd.jpg"
    },
    {
        "id": 12,
        "name": "Gin Tônica",
        "ingredientes": [
            {"ingrediente": "Gin", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Água Tônica", "quantidade": "a gosto", "tipo":"Outros"},
            {"ingrediente": "Limão (para decorar)", "quantidade": "opcional", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo alto",
        "descricao": "Um coquetel simples e clássico com gin, água tônica e decoração de limão, servido com gelo.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Refrescante", "Cítrico"],
        "image": "https://s2-receitas.glbimg.com/nWYVYEO7MVp7oOOT7fuTIFtujpo=/0x0:626x938/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/5/Y/t9vMasReyP8U2rvSG4Yw/gin-de-limao.jpg"
    },
    {
        "id": 13,
        "name": "Daiquiri",
        "ingredientes": [
            {"ingrediente": "Rum Branco", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Suco de Limão", "quantidade": "3/4 oz", "tipo":"Suco"},
            {"ingrediente": "Xarope de Açúcar", "quantidade": "1/2 oz", "tipo":"Xarope"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Taça de Martini",
        "descricao": "Um coquetel clássico cubano com rum branco, suco de limão e xarope de açúcar, servido com gelo.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Cítrico", "Doce"],
        "image": "https://images.absolutdrinks.com/drink-images/Raw/Absolut/b7b8f998-daab-4602-aaa8-9a750bed7ebc.jpg?imwidth=500"
    },
    {
        "id": 14,
        "name": "Manhattan",
        "ingredientes": [
            {"ingrediente": "Bourbon", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Vermute Doce", "quantidade": "1 oz", "tipo":"Destilado"},
            {"ingrediente": "Angostura Bitters", "quantidade": "2-3 dashes", "tipo":"Bitter"},
            {"ingrediente": "Cereja (para decorar)", "quantidade": "opcional", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Taça de Martini",
        "descricao": "Um coquetel elegante com bourbon, vermute doce, angostura bitters e decoração de cereja, servido com gelo.",
        "teor_alcoolico": "Alto",
        "caracteristicas": ["Elegante", "Aromático"],
        "image": "https://images.cocktailwave.com/tr:h-1200,w-1200/manhattan.png"
    },
    {
        "id": 15,
        "name": "Tom Collins",
        "ingredientes": [
            {"ingrediente": "Gin", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Suco de Limão", "quantidade": "3/4 oz", "tipo":"Suco"},
            {"ingrediente": "Xarope de Açúcar", "quantidade": "1/2 oz", "tipo":"Xarope"},
            {"ingrediente": "Água com gás", "quantidade": "a gosto", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo alto",
        "descricao": "Um coquetel refrescante com gin, suco de limão, xarope de açúcar e água com gás, servido com gelo.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Refrescante", "Cítrico"],
        "image": "https://www.foodandwine.com/thmb/FQpExQKVkFu_CeDh7OuPpED7mK4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tom-Collins-FT-RECIPE0922-2000-c9c8b25aba1d4bf89fd8030ee114b67b.jpg"
    },
    {
        "id": 16,
        "name": "Singapore Sling",
        "ingredientes": [
            {"ingrediente": "Gin", "quantidade": "1 1/2 oz", "tipo":"Destilado"},
            {"ingrediente": "Licor de Cereja", "quantidade": "1/2 oz", "tipo":"Licor"},
            {"ingrediente": "Licor de Grand Marnier", "quantidade": "1/4 oz", "tipo":"Licor"},
            {"ingrediente": "Suco de Abacaxi", "quantidade": "1 oz", "tipo":"Suco"},
            {"ingrediente": "Suco de Limão", "quantidade": "1/2 oz", "tipo":"Suco"},
            {"ingrediente": "Xarope de Grenadine", "quantidade": "1/4 oz", "tipo":"Xarope"},
            {"ingrediente": "Água com gás", "quantidade": "a gosto", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo alto",
        "descricao": "Um coquetel tropical complexo com gin, licores, sucos e água com gás, servido com gelo.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Frutado", "Complexo"],
        "image": "https://www.thespruceeats.com/thmb/gtU-6Rrk1P83rr2uuI4_jIz8B7E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-singapore-sling-recipe-760602-hero-01-6b28bfe6b32946acb9ae1d3bb289c19d.jpg"
    },
    {
        "id": 17,
        "name": "Aperol Spritz",
        "ingredientes": [
            {"ingrediente": "Aperol", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Prosecco", "quantidade": "3 oz", "tipo":"Outros"},
            {"ingrediente": "Água com gás", "quantidade": "1 oz", "tipo":"Outros"},
            {"ingrediente": "Laranja (para decorar)", "quantidade": "opcional", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Taça de Vinho",
        "descricao": "Um coquetel italiano refrescante com Aperol, Prosecco e água com gás, geralmente decorado com uma fatia de laranja.",
        "teor_alcoolico": "Baixo",
        "caracteristicas": ["Refrescante", "Aperitivo"],
        "image": "https://i0.wp.com/craftybartending.com/wp-content/uploads/2018/04/Aperol-Spritz-Cocktail.jpg"
    },
    {
        "id": 18,
        "name": "White Russian",
        "ingredientes": [
            {"ingrediente": "Vodka", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Licor de Café", "quantidade": "1 oz", "tipo":"Licor"},
            {"ingrediente": "Creme de Leite", "quantidade": "1 oz", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo baixo",
        "descricao": "Um coquetel cremoso com vodka, licor de café e creme de leite, servido com gelo.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Cremoso", "Doce"],
        "image": "https://www.liquor.com/thmb/wzgqg2FC1Sqbwo_PAJofVVZIMRk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__12__20073201__white-russian-720x720-article-cbe4b9a832c64f8da0bb09407caefa7f.jpg"
    },
    {
        "id": 19,
        "name": "Whiskey Smash",
        "ingredientes": [
            {"ingrediente": "Bourbon", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Xarope de Açúcar", "quantidade": "3/4 oz", "tipo":"Xarope"},
            {"ingrediente": "Suco de Limão", "quantidade": "1/2 oz", "tipo":"Suco"},
            {"ingrediente": "Hortelã", "quantidade": "8 folhas", "tipo":"Outros"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Copo baixo",
        "descricao": "Um coquetel refrescante com bourbon, hortelã, xarope de açúcar e suco de limão, servido com gelo.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Refrescante", "Agridoce"],
        "image": "https://www.liquor.com/thmb/IjKQql6LcjTyCWuqbi_aMicEL6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-smash-720x720-recipe-c696cdf017494dbd981e51dca3f4402e.jpg"
    },
    {
        "id": 20,
        "name": "Gimlet",
        "ingredientes": [
            {"ingrediente": "Gin", "quantidade": "2 oz", "tipo":"Destilado"},
            {"ingrediente": "Xarope de Açúcar", "quantidade": "3/4 oz", "tipo":"Xarope"},
            {"ingrediente": "Suco de Limão", "quantidade": "3/4 oz", "tipo":"Suco"},
            {"ingrediente": "Gelo", "quantidade": "a gosto", "tipo":"Outros"}
        ],
        "tipo_copo": "Taça de Martini",
        "descricao": "Um coquetel clássico com gin, xarope de açúcar e suco de limão, geralmente servido em uma taça de martini.",
        "teor_alcoolico": "Médio",
        "caracteristicas": ["Cítrico", "Elegante"],
        "image": "https://www.liquor.com/thmb/_H72TXt_gqo3rqnlqZWmmokDgQo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cucumber-gimlet-720x720-primary-e71711784f934d2f8784752599ba2e60.jpg"
    }
];
