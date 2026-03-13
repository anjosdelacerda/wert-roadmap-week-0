export const pedidos = [
  {
    id: 1,
    cliente: "Ana",
    cidade: "Curitiba",
    status: "entregue",
    total: 150.5,
    itens: 3,
    paymentMethods: [
      {
        id: "pm_1",
        type: "credit_card",
        brand: "Visa",
        last4: "4321",
        holderName: "Ana Souza",
        cardHash: "hash_cc_a91f2b7c3d"
      }
    ],
    addresses: [
      {
        id: "addr_1",
        label: "casa",
        street: "Rua das Flores, 120",
        city: "Curitiba",
        state: "PR",
        zipCode: "80000-000"
      },
      {
        id: "addr_2",
        label: "trabalho",
        street: "Av. Sete de Setembro, 890",
        city: "Curitiba",
        state: "PR",
        zipCode: "80230-010"
      }
    ]
  },
  {
    id: 2,
    cliente: "Carlos",
    cidade: "São Paulo",
    status: "pendente",
    total: 89.9,
    itens: 1,
    paymentMethods: [
      {
        id: "pm_2",
        type: "credit_card",
        brand: "Mastercard",
        last4: "1122",
        holderName: "Carlos Lima",
        cardHash: "hash_cc_b82aa19f10"
      }
    ],
    addresses: [
      {
        id: "addr_3",
        label: "casa",
        street: "Rua Vergueiro, 300",
        city: "São Paulo",
        state: "SP",
        zipCode: "04101-000"
      }
    ]
  },
  {
    id: 3,
    cliente: "Bruna",
    cidade: "Curitiba",
    status: "entregue",
    total: 420.0,
    itens: 5,
    paymentMethods: [
      {
        id: "pm_3",
        type: "credit_card",
        brand: "Visa",
        last4: "4321",
        holderName: "Bruna Alves",
        cardHash: "hash_cc_c71bb20d8e"
      },
      {
        id: "pm_4",
        type: "credit_card",
        brand: "Elo",
        last4: "7788",
        holderName: "Bruna Alves",
        cardHash: "hash_cc_d90ef17ca2"
      }
    ],
    addresses: [
      {
        id: "addr_4",
        label: "casa",
        street: "Rua das Flores, 120",
        city: "Curitiba",
        state: "PR",
        zipCode: "80000-000"
      },
      {
        id: "addr_5",
        label: "casa da tia",
        street: "Rua XV de Novembro, 450",
        city: "Curitiba",
        state: "PR",
        zipCode: "80020-310"
      }
    ]
  },
  {
    id: 4,
    cliente: "Pedro",
    cidade: "Rio de Janeiro",
    status: "cancelado",
    total: 199.9,
    itens: 2,
    paymentMethods: [
      {
        id: "pm_5",
        type: "credit_card",
        brand: "Mastercard",
        last4: "5566",
        holderName: "Pedro Martins",
        cardHash: "hash_cc_e19bd774f1"
      }
    ],
    addresses: [
      {
        id: "addr_6",
        label: "casa",
        street: "Rua do Catete, 80",
        city: "Rio de Janeiro",
        state: "RJ",
        zipCode: "22220-000"
      },
      {
        id: "addr_7",
        label: "trabalho",
        street: "Av. Rio Branco, 500",
        city: "Rio de Janeiro",
        state: "RJ",
        zipCode: "20040-002"
      }
    ]
  },
  {
    id: 5,
    cliente: "Julia",
    cidade: "Curitiba",
    status: "pendente",
    total: 59.9,
    itens: 1,
    paymentMethods: [
      {
        id: "pm_6",
        type: "credit_card",
        brand: "Visa",
        last4: "9900",
        holderName: "Julia Rocha",
        cardHash: "hash_cc_f23ad008c7"
      }
    ],
    addresses: [
      {
        id: "addr_8",
        label: "casa",
        street: "Rua Chile, 45",
        city: "Curitiba",
        state: "PR",
        zipCode: "80510-220"
      }
    ]
  },
  {
    id: 6,
    cliente: "Marcos",
    cidade: "São Paulo",
    status: "entregue",
    total: 150.5,
    itens: 3,
    paymentMethods: [
      {
        id: "pm_7",
        type: "credit_card",
        brand: "Visa",
        last4: "4321",
        holderName: "Marcos Vinicius",
        cardHash: "hash_cc_g61ac88ee4"
      }
    ],
    addresses: [
      {
        id: "addr_9",
        label: "casa",
        street: "Rua Vergueiro, 300",
        city: "São Paulo",
        state: "SP",
        zipCode: "04101-000"
      },
      {
        id: "addr_10",
        label: "trabalho",
        street: "Av. Paulista, 1000",
        city: "São Paulo",
        state: "SP",
        zipCode: "01310-100"
      }
    ]
  },
  {
    id: 7,
    cliente: "Fernanda",
    cidade: "Belo Horizonte",
    status: "pendente",
    total: 89.9,
    itens: 2,
    paymentMethods: [
      {
        id: "pm_8",
        type: "credit_card",
        brand: "Mastercard",
        last4: "1122",
        holderName: "Fernanda Costa",
        cardHash: "hash_cc_h54be6619a"
      },
      {
        id: "pm_9",
        type: "credit_card",
        brand: "Hipercard",
        last4: "2244",
        holderName: "Fernanda Costa",
        cardHash: "hash_cc_i92da4710f"
      }
    ],
    addresses: [
      {
        id: "addr_11",
        label: "casa",
        street: "Rua da Bahia, 700",
        city: "Belo Horizonte",
        state: "MG",
        zipCode: "30160-011"
      }
    ]
  },
  {
    id: 8,
    cliente: "Lucas",
    cidade: "Curitiba",
    status: "entregue",
    total: 420.0,
    itens: 5,
    paymentMethods: [
      {
        id: "pm_10",
        type: "credit_card",
        brand: "Elo",
        last4: "7788",
        holderName: "Lucas Mendes",
        cardHash: "hash_cc_j30acfe145"
      }
    ],
    addresses: [
      {
        id: "addr_12",
        label: "casa",
        street: "Rua Chile, 45",
        city: "Curitiba",
        state: "PR",
        zipCode: "80510-220"
      },
      {
        id: "addr_13",
        label: "casa da mãe",
        street: "Rua XV de Novembro, 450",
        city: "Curitiba",
        state: "PR",
        zipCode: "80020-310"
      }
    ]
  },
  {
    id: 9,
    cliente: "Patricia",
    cidade: "Rio de Janeiro",
    status: "cancelado",
    total: 199.9,
    itens: 2,
    paymentMethods: [
      {
        id: "pm_11",
        type: "credit_card",
        brand: "Visa",
        last4: "9900",
        holderName: "Patricia Gomes",
        cardHash: "hash_cc_k77bdde192"
      }
    ],
    addresses: [
      {
        id: "addr_14",
        label: "casa",
        street: "Rua do Catete, 80",
        city: "Rio de Janeiro",
        state: "RJ",
        zipCode: "22220-000"
      }
    ]
  },
  {
    id: 10,
    cliente: "Rafael",
    cidade: "Curitiba",
    status: "pendente",
    total: 59.9,
    itens: 1,
    paymentMethods: [
      {
        id: "pm_12",
        type: "credit_card",
        brand: "Mastercard",
        last4: "5566",
        holderName: "Rafael Nunes",
        cardHash: "hash_cc_l18ce127ab"
      }
    ],
    addresses: [
      {
        id: "addr_15",
        label: "casa",
        street: "Rua das Flores, 120",
        city: "Curitiba",
        state: "PR",
        zipCode: "80000-000"
      },
      {
        id: "addr_16",
        label: "trabalho",
        street: "Av. Sete de Setembro, 890",
        city: "Curitiba",
        state: "PR",
        zipCode: "80230-010"
      }
    ]
  },
  {
    id: 11,
    cliente: "Camila",
    cidade: "São Paulo",
    status: "entregue",
    total: 320.75,
    itens: 4,
    paymentMethods: [
      {
        id: "pm_13",
        type: "credit_card",
        brand: "Visa",
        last4: "1234",
        holderName: "Camila Barbosa",
        cardHash: "hash_cc_m83af781ce"
      }
    ],
    addresses: [
      {
        id: "addr_17",
        label: "casa",
        street: "Rua Augusta, 210",
        city: "São Paulo",
        state: "SP",
        zipCode: "01305-000"
      }
    ]
  },
  {
    id: 12,
    cliente: "Diego",
    cidade: "Belo Horizonte",
    status: "pendente",
    total: 150.5,
    itens: 3,
    paymentMethods: [
      {
        id: "pm_14",
        type: "credit_card",
        brand: "Visa",
        last4: "4321",
        holderName: "Diego Ferreira",
        cardHash: "hash_cc_n72ddaa901"
      }
    ],
    addresses: [
      {
        id: "addr_18",
        label: "casa",
        street: "Rua da Bahia, 700",
        city: "Belo Horizonte",
        state: "MG",
        zipCode: "30160-011"
      },
      {
        id: "addr_19",
        label: "trabalho",
        street: "Av. Afonso Pena, 1500",
        city: "Belo Horizonte",
        state: "MG",
        zipCode: "30130-005"
      }
    ]
  },
  {
    id: 13,
    cliente: "Aline",
    cidade: "Curitiba",
    status: "entregue",
    total: 89.9,
    itens: 2,
    paymentMethods: [
      {
        id: "pm_15",
        type: "credit_card",
        brand: "Hipercard",
        last4: "2244",
        holderName: "Aline Ribeiro",
        cardHash: "hash_cc_o51cb218fe"
      }
    ],
    addresses: [
      {
        id: "addr_20",
        label: "casa",
        street: "Rua Chile, 45",
        city: "Curitiba",
        state: "PR",
        zipCode: "80510-220"
      }
    ]
  },
  {
    id: 14,
    cliente: "Thiago",
    cidade: "Rio de Janeiro",
    status: "cancelado",
    total: 420.0,
    itens: 6,
    paymentMethods: [
      {
        id: "pm_16",
        type: "credit_card",
        brand: "Elo",
        last4: "7788",
        holderName: "Thiago Pires",
        cardHash: "hash_cc_p04eda72d9"
      }
    ],
    addresses: [
      {
        id: "addr_21",
        label: "casa",
        street: "Rua do Catete, 80",
        city: "Rio de Janeiro",
        state: "RJ",
        zipCode: "22220-000"
      },
      {
        id: "addr_22",
        label: "casa da tia",
        street: "Rua Haddock Lobo, 120",
        city: "Rio de Janeiro",
        state: "RJ",
        zipCode: "20260-132"
      }
    ]
  },
  {
    id: 15,
    cliente: "Beatriz",
    cidade: "São Paulo",
    status: "pendente",
    total: 59.9,
    itens: 1,
    paymentMethods: [
      {
        id: "pm_17",
        type: "credit_card",
        brand: "Mastercard",
        last4: "1122",
        holderName: "Beatriz Santos",
        cardHash: "hash_cc_q65fae992b"
      }
    ],
    addresses: [
      {
        id: "addr_23",
        label: "casa",
        street: "Rua Augusta, 210",
        city: "São Paulo",
        state: "SP",
        zipCode: "01305-000"
      },
      {
        id: "addr_24",
        label: "trabalho",
        street: "Av. Paulista, 1000",
        city: "São Paulo",
        state: "SP",
        zipCode: "01310-100"
      }
    ]
  }
]
