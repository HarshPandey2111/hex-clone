function Integrations() {
    return (
      <section className="bg-[#0F1114] py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Instant integration with the whole stack
        </h2>
        <p className="text-[#C7B2AE] max-w-2xl mx-auto mb-10">
          Connect seamlessly with tools like dbt, Snowflake, Airbyte, Fivetran, and more.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
          {["snowflake", "dbt", "airbyte", "fivetran"].map((logo, i) => (
            <img
              key={i}
              src={`/logos/${logo}.svg`}
              alt={logo}
              className="h-10 mx-auto opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </section>
    );
  }
  
  export default Integrations;
  