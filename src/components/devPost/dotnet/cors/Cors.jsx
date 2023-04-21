import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Cors = () => {
  const appSettingsCode = `
    {
        "Logging": {
          "LogLevel": {
            "Default": "Information",
            "Microsoft": "Warning",
            "Microsoft.Hosting.Lifetime": "Information"
          }
        },
        "frontend_url": "http://localhost:3000",
      }`;
  const startupCode = `
      public void ConfigureServices(IServiceCollection services)
      {
        //services injection
        services.AddControllers();

        // Add CORS (Cross-Origin Resource Sharing) support to the application
        services.AddCors(options => {
            
            var frontendURL = Configuration.GetValue<string>("frontend_url"); // Get the frontend URL from the appsettings.Development.json configuration file

            // Add a default CORS policy that allows requests from the frontend URL with any HTTP method and any header
            options.AddDefaultPolicy(builder =>
            {
                builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
            });
        });
      }`;

      const useCorseCode = `
      public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();


            //Adding the Using CORS required code
            app.UseCors();
                      
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

           
        }`

  return (
    <div>
      <h4>CORS</h4>
      <hr></hr>
      <p>
        CORS stands for Cross-Origin Resource Sharing, which is a security
        feature in web browsers that restricts web pages from making requests to
        a different domain than the one that served the web page.
      </p>
      <h4>How to grant access?</h4>
      <p>
        Here are some steps to allow a React App to connect with our REST API
        via CORS
      </p>
      <ol>
        <li>
          <p>
            Let's start by adding our front end URL into the
            <code> appsettings.Development.json</code> that exists in the root
            folder of the project<br></br>
            In this example the values will be{" "}
            <code>"frontend_url": "http://localhost:3000"</code> <br>
            </br><strong>Warrning: </strong>Notice that there isn't any <code>"/"</code> at the end of the URL, otherwise it will not work properly.
            <br></br>That being said, the file will looks like this:
          </p>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {appSettingsCode}
          </SyntaxHighlighter>
        </li>
        <li>
          <p>
            The next piece of the puzzle should be add the CORS code to the{" "}
            <code>Startup.cs</code> file
          </p>
          <SyntaxHighlighter language="csharp" style={nightOwl}>
            {startupCode}
          </SyntaxHighlighter>
        </li>
        <li>
          <p>Finally, is required to add <code>app.UserCors();</code> call to let the application know to use CORS policy defined in the step 2 <br></br>
            Here's an example of how it looks like.
          </p>
          <SyntaxHighlighter language="csharp" style={nightOwl}>
            {useCorseCode}
          </SyntaxHighlighter>
        </li>        
      </ol>
      <p>That should be all you need to allow connection between a local React site and a REST API with Net 6</p>
    </div>
  );
};
