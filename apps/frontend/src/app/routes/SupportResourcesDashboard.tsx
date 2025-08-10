const SupportResourcesDashboard = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col bg-slate-500 h-80 w-60 p-5 justify-around">
        <label htmlFor="name">Nazwa</label>
        <input type="text" name="name" />

        <label htmlFor="provider">Dostawca</label>
        <input type="text" name="provider" />

        <label htmlFor="type">Typ</label>
        <select name="type">
          <option value="email">E-mail</option>
          <option value="phone">Telefon</option>
          <option value="webchat">Czat</option>
        </select>

        <label htmlFor="resource-value">Wartość</label>
        <input type="text" name="resource-value" />

        <label htmlFor="operator-payment">Opłata operatora</label>
        <input type="checkbox" name="operator-payment" />
      </form>
    </div>
  );
};

export default SupportResourcesDashboard;
