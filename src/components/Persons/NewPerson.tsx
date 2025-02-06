export default function NewPerson() {
  return (
    <div>
      <h3 className="header">Nova pessoa</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth_date">Nascimento</label>
          <input
            type="date"
            id="birth_date"
            name="birth_date"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Sexo</label>
          <select id="gender" name="gender" className="input" required>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="other">Outro</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cell_phone">Celular</label>
          <input
            type="text"
            id="cell_phone"
            name="cell_phone"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">Estado</label>
          <input
            type="text"
            id="state"
            name="state"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="neighborhood">Bairro</label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Rua</label>
          <input
            type="text"
            id="street"
            name="street"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Número</label>
          <input
            type="text"
            id="number"
            name="number"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip_code">CEP</label>
          <input
            type="text"
            id="zip_code"
            name="zip_code"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="complement">Complemento</label>
          <input
            type="text"
            id="complement"
            name="complement"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="reference_point">Ponto de referência</label>
          <input
            type="text"
            id="reference_point"
            name="reference_point"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="observations">Observações sobre a pessoa</label>
          <textarea
            id="observations"
            name="observations"
            className="input"
          ></textarea>
        </div>
        <button type="submit" className="button">
          Adicionar Pessoa
        </button>
      </form>
    </div>
  );
}