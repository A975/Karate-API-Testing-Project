function fn() {
  
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  // var config = {
  //   env: env,
  //   };
    
  //   config.baseQAURL = 'https://apis.shared.dev-spectrum.net/entservices/identity-management/v1/graphql';
  //   config.baseUATURL ='https://apis.shared.uat-spectrum.net/entservices/identity-management/v1/graphql'
  //   return config;
  
  if (!env) {
  
    env = 'qa';

  }
  
  if (env == 'qa') {

    var config = {
      baseUrl: "https://qa.api.enterprise.spectrumtoolbox.com/login/v2/login",
    };

    
  } 
  else if (env == 'uat') {
  
    var config = {
    
      baseUrl: "https://apis.shared.uat-spectrum.net/entservices/identity-management/v1/graphql",
    
    };
    
  }
  
  return config;
  
 }