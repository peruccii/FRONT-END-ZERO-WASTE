import * as yup from 'yup'

export const geradorSchema = object({
    nome: yup.string().required().min(3).max(100),
    telefone: yup.string().required().min(14),
    email: yup.string().email().required(),
    senha: yup.string().required().min(5),
    cnpj: yup.string().test(function (value) {
        const { cpf } = this.parent
        if (!cpf) return value != null
        return true
    }),
    cpf: yup.string().test(function (value) {
        const { cnpj } = this.parent
        if (!cnpj) return value != null
        return true
    }),
    data_nascimento: yup.date().required(),
    cep: yup.string().required()
})

