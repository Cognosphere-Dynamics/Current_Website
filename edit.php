
    <?php
;

    if (isset($_GET['status'])) {
        //* check payment status
        if ($_GET['status'] == 'cancelled') {
            // echo 'YOu cancel the payment';

        } elseif ($_GET['status'] == 'successful') {
            $txid = $_GET['transaction_id'];

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => "https://api.flutterwave.com/v3/transactions/{$txid}/verify",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => array(
                    "Content-Type: application/json",
                    "Authorization: Bearer FLWSECK_TEST-723f1df37c2341965123d79b4ee5015e-X"
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);
            // echo $response;


            // echo '<pre>';
            // echo $response;

            // echo '</pre>';

            $res = json_decode($response);


            // $amountPaid = $res->data->charged_amount;
            $charged_amount = $res->data->charged_amount;

            $amountToPay = $res->data->meta->price;
            $status = $res->data->status;
            $message = $res->message;
            $trans_id = $res->data->id;
            $fingerprint =  $res->data->device_fingerprint;
            $flw_ref =  $res->data->flw_ref;
            $tx_ref =  $res->data->tx_ref;

            $amount =  $res->data->amount;
            $app_fee =  $res->data->app_fee;
            $currency =  $res->data->currency;
            $auth_model =  $res->data->auth_model;
            $ip =  $res->data->ip;
            $created_at =  $res->data->created_at;
            $account_id =  $res->data->account_id;

            $payment_type =  $res->data->payment_type;
            $firstname = $res->data->meta->firstname;
            $lastname = $res->data->meta->lastname;
            $username = $res->data->meta->username;
            $email = $res->data->meta->email;
            $phone = $res->data->meta->phone;
            $price = $res->data->meta->price;
            $amount = $res->data->meta->amount;
            $org_name = $res->data->meta->org_name;
            $org_website = $res->data->meta->org_website;
            $admin_mobile_app = $res->data->meta->admin_mobile_app;
            $add_social_profile = $res->data->meta->add_social_profile;
            $ai_subscription = $res->data->meta->ai_subscription;
            $external_advert = $res->data->meta->external_advert;
            $amount_settled = $res->data->amount_settled;


       
            // echo $api_key;

            if ($res->status) {

              
            } else {
        
            }
        }
    }


    ?>
