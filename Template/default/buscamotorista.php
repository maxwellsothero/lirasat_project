<?php
header("Access-Control-Allow-Origin: *");
function ranking(){
  $curl = curl_init();

  // Substitua a URL e a chave de autorização pelos valores reais
  $url = "https://integration.systemsatx.com.br/Tracking/Report/DriverRanking";
  $authorization = "%2FJSzMpCRi2lb23Dva2CfPqWjJNUGNAoI8HPQ%2F9u22cYcGWj0LH3JTma2BkxN0Uy2JZiyPDR5qdjGO9iuLkS9FG6J8TgxIZeziSDmXFNO6aLXdHZmauwRa%2FVLDkfwmu3Y4VZGZ6oRbHbd3N%2FxQj2zhOQYuaBoIego3LrrCjScFvUyBrSzQdtx68QPyAtTXT14KlGpIIJWgyR2iCQvV2eYc0mOhjkhqXw%2Fc4hGw%2FuxSbfGAWeCjW%2FdLojuLXYMy6n1w6FHveH9RE79OqNXjGJU9CwqGOju81gV1qsOHynd3TIJc0ex5Msba3AVhvJNLt64iT1PL2oxT5K9O8psnIBk%2FSRKc2h2FghlDiKr8%2BY1S4GeNOuJ0xTJcetfIphsBXiy92I3ZOCEVOPwRU3GTIyefgsE7jCTcZm9kPBNGiuOBSg%3D";

  curl_setopt_array($curl, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => "{\n  \"StartDate\": \"2023-11-11T12:46:56.316Z\",\n  \"EndDate\": \"2023-11-18T12:46:56.316Z\"\n  \n}",
    CURLOPT_HTTPHEADER => [
      "Accept: application/json",
      "Authorization: $authorization",
      "Content-Type: application/json"
    ],
  ]);

  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err) {
    echo '<p  class="text-danger">Erro na requisição cURL: ' . $err . '</p>';
  } else {
   
    echo  $response;
   
  
 
  }
}

//ranking();
?>
