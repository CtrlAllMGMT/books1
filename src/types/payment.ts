export type Payment = {
    /**
     * Unique ID of the payment generated by the server. Maximum length allowed [2000]
     */
    payment_id: string;

    /**
     * Mode through which payment is made. This can be check, cash, creditcard, banktransfer, bankremittance,
     * autotransaction or others. In german
     * Maximum length [100]
     * Get all methods by: https://inventory.zoho.eu/api/v1/meta/paymentmodes
     */
    payment_mode:
        | "braintree"
        | "paypal"
        | "banktransfer"
        | "Banküberweisung"
        | "authorizeNet";

    payment_number: string;

    /**
     * Amount paid in the respective payment.
     */
    amount: number;

    /**
     * Denotes any additional bank charges. - Use this field for paypal etc. transaction costs.
     */
    bank_charges: number;

    /**
     * Date on which payment is made. Date Format [yyyy-mm-dd]
     */
    date: string;

    /**
     * Reference number generated for the payment.
     * A string of your choice can also be used as the reference number. Maximum length of the reference number [100]
     * Zoho uses this field to write the transaction Id of the gateway into it.
     */
    reference_number: string;

    /**
     * Description about the payment.
     */
    description: string;

    /**
     * Customer ID of the customer involved in the payment.
     */
    customer_id: string;

    created_time: string;
    last_modified_time: string;

    /**
     * ID of the cash/ bank account the payment has to be deposited.
     * Use this field to write the payment to a specific bank or online payments account.
     * For example paypal, braintree or others.
     */
    account_id: string;

    /**
     * List of invoices associated with the payment. Each invoice object contains invoice_id,
     * invoice_number, date, invoice_amount, amount_applied and balance_amount.
     */
    invoices: {
        invoice_id: string;
        amount_applied: number;
    }[];

    /**
     * Zoho returns this string with all the invoices, that this payment was applied to.
     * It looks like this: "INV-002847, INV-002859"
     */
    invoice_numbers: string;
};

/**
 * The list payment is special
 */
export type ListPayment = Pick<
    Payment,
    | "payment_id"
    | "payment_mode"
    | "invoice_numbers"
    | "payment_number"
    | "amount"
    | "account_id"
    | "description"
    | "reference_number"
    | "customer_id"
    | "created_time"
    | "last_modified_time"
    | "date"
> &
    Partial<Pick<Payment, "invoices">> & {
        /**
         * Gives you an array of invoice numbers related
         * to this payment. Wwe added this, as "invoices" array
         * does not exist for payment list and payments with just one invoice attached
         */
        invoice_numbers_array: string[];
        /**
         * Custom field gateway transaction id - exist only, if you have created that field in
         * Zoho
         */
        cf_gateway_transaction_id: string;
    };

export type CreatePayment = Pick<
    Payment,
    "customer_id" | "payment_mode" | "amount" | "invoices" | "date"
> &
    Partial<
        Pick<
            Payment,
            "reference_number" | "bank_charges" | "account_id" | "description"
        >
    >;

export type CreatePaymentRes = {
    /**
     * Unique ID of the payment generated by the server. Maximum length allowed [2000]
     */
    payment_id: string;

    /**
     * Mode through which payment is made. This can be check, cash, creditcard, banktransfer, bankremittance,
     * autotransaction or others. In german
     * Maximum length [100]
     * Get all methods by: https://inventory.zoho.eu/api/v1/meta/paymentmodes
     */
    payment_mode: "braintree" | "paypal" | "banktransfer" | "Banküberweisung";
    card_type: string;

    payment_number: string;
    payment_number_prefix: string;
    payment_number_suffix: string;

    payment_link_id: string;

    /**
     * Amount paid in the respective payment.
     */
    amount: number;
    unused_amount: number;

    /**
     * Denotes any additional bank charges. - Use this field for paypal etc. transaction costs.
     */
    bank_charges: number;

    /**
     * Date on which payment is made. Date Format [yyyy-mm-dd]
     */
    date: string;

    /**
     * Reference number generated for the payment.
     * A string of your choice can also be used as the reference number. Maximum length of the reference number [100]
     * Zoho uses this field to write the transaction Id of the gateway into it.
     */
    reference_number: string;

    /**
     * Description about the payment.
     */
    description: string;

    /**
     * Customer ID of the customer involved in the payment.
     */
    customer_id: string;
    customer_name: string;

    created_time: string;
    updated_time: string;

    /**
     * ID of the cash/ bank account the payment has to be deposited.
     * Use this field to write the payment to a specific bank or online payments account.
     * For example paypal, braintree or others.
     */
    account_id: string;
    account_name: string;
    account_type: string;

    currency_id: string;
    currency_symbol: string;
    currency_code: string;

    /**
     * List of invoices associated with the payment. Each invoice object contains invoice_id,
     * invoice_number, date, invoice_amount, amount_applied and balance_amount.
     */
    invoices: {
        invoice_id: string;
        amount_applied: number;
    }[];

    /**
     * Zoho returns this string with all the invoices, that this payment was applied to.
     * It looks like this: "INV-002847, INV-002859"
     */
    invoice_numbers: string;
};