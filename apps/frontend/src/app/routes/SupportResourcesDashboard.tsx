const SupportResourcesDashboard = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col bg-slate-500 h-80 w-60 p-5 justify-around">
        <label htmlFor="name">Nazwa</label>
        <input type="text" name="name" />

        <label htmlFor="description">Opis</label>
        <input type="text" name="description" />

        <label htmlFor="age-min">Minimalny wiek</label>
        <input type="number" name="age-min" />

        <label htmlFor="age-max">Maksymalny wiek</label>
        <input type="number" name="age-max" />

        <label htmlFor="provider">Dostawca</label>
        <input type="text" name="provider" />
      </form>

      {/* Services form */}
      <form>
        <label htmlFor="type">Typ</label>
        <select name="type">
          <option value="email">E-mail</option>
          <option value="phone">Telefon</option>
          <option value="webchat">Czat</option>
        </select>

        <label htmlFor="contact">Kontakt</label>
        <input type="text" name="contact" />

        <label htmlFor="operator-payment">Opłata operatora</label>
        <input type="checkbox" name="operator-payment" />

        <label htmlFor="responder-profession">Rodzaj pracownika</label>
        <input type="text" name="responder-profession" />

        <label htmlFor="event">
          Dodatkowe wydarzenie mające miejsce w trakcie dyżuru
        </label>
        <input type="text" name="event" />

        <label htmlFor="timezone">Strefa czasowa</label>
        <input type="text" name="timezone" />

        <label htmlFor="start-time">Godzina startu</label>
        <input type="time" name="start-time" />

        <label htmlFor="end-time">Godzina końca</label>
        <input type="time" name="end-time" />

        <label htmlFor="rrule-frequency">Częstotliwość (format rrule)</label>
        <input type="text" name="rrule-frequency" />

        <label htmlFor="rrule-count">Liczba wystąpień (format rrule)</label>
        <input type="number" name="rrule-count" />

        <label htmlFor="rrule-interval">
          Interwał wystąpień (format rrule)
        </label>
        <input type="number" name="rrule-interval" />

        <fieldset>
          <legend>Według dni (format rrule)</legend>

          <label htmlFor="monday">monday</label>
          <input type="checkbox" name="monday" value="monday" />

          <label htmlFor="tuesday">tuesday</label>
          <input type="checkbox" name="tuesday" value="tuesday" />

          <label htmlFor="wednesday">wednesday</label>
          <input type="checkbox" name="wednesday" value="wednesday" />

          <label htmlFor="thursday">thursday</label>
          <input type="checkbox" name="thursday" value="thursday" />

          <label htmlFor="friday">friday</label>
          <input type="checkbox" name="friday" value="friday" />

          <label htmlFor="saturday">saturday</label>
          <input type="checkbox" name="saturday" value="saturday" />

          <label htmlFor="sunday">sunday</label>
          <input type="checkbox" name="sunday" value="sunday" />
        </fieldset>

        <label htmlFor="exluded-dates">Wykluczone daty</label>
        <input type="date" name="exluded-dates" />

        <label htmlFor="additional-dates">Dodatkowe daty</label>
        <input type="date" name="additional-dates" />
      </form>
    </div>
  );
};

export default SupportResourcesDashboard;
