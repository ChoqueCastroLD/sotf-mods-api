/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Email_Not_Verified_DetailInputs */

const en_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open the link we emailed you to verify your address, then try again. You can request a new link in Settings.`)
};

const es_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abre el enlace que te enviamos por email para verificar tu dirección y vuelve a intentarlo. Puedes pedir un enlace nuevo en Ajustes.`)
};

const de_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffne den Link aus unserer E-Mail, um deine Adresse zu bestätigen, und versuch es dann erneut. Einen neuen Link kannst du in den Einstellungen anfordern.`)
};

const fr_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrez le lien que nous vous avons envoyé par e-mail pour vérifier votre adresse, puis réessayez. Vous pouvez demander un nouveau lien dans les Paramètres.`)
};

const it_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri il link che ti abbiamo inviato via email per verificare l’indirizzo, poi riprova. Puoi chiedere un nuovo link nelle Impostazioni.`)
};

const nl_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open de link die we je hebben gemaild om je adres te bevestigen en probeer het daarna opnieuw. Een nieuwe link vraag je aan via Instellingen.`)
};

const pl_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz link, który wysłaliśmy e-mailem, aby potwierdzić adres, i spróbuj ponownie. Nowy link możesz zamówić w Ustawieniach.`)
};

const pt_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abra o link que enviamos por e-mail para confirmar seu endereço e tente de novo. Você pode pedir um novo link em Configurações.`)
};

const ru_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Откройте ссылку из нашего письма, чтобы подтвердить адрес, и попробуйте снова. Новую ссылку можно запросить в настройках.`)
};

const sv_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna länken vi mejlade dig för att verifiera adressen och försök sedan igen. Du kan begära en ny länk under Inställningar.`)
};

const tr_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresini doğrulamak için e-postayla gönderdiğimiz bağlantıyı aç, sonra tekrar dene. Ayarlar’dan yeni bir bağlantı isteyebilirsin.`)
};

const zh_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开我们发送的邮件中的链接以验证邮箱地址，然后重试。你可以在“设置”中重新获取链接。`)
};

const ja_errors_code_email_not_verified_detail = /** @type {(inputs: Errors_Code_Email_Not_Verified_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お送りしたメールのリンクを開いてアドレスを確認し、もう一度お試しください。新しいリンクは設定から再送できます。`)
};

/**
* | output |
* | --- |
* | "Open the link we emailed you to verify your address, then try again. You can request a new link in Settings." |
*
* @param {Errors_Code_Email_Not_Verified_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_email_not_verified_detail = /** @type {((inputs?: Errors_Code_Email_Not_Verified_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Email_Not_Verified_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_email_not_verified_detail(inputs)
	if (locale === "de") return de_errors_code_email_not_verified_detail(inputs)
	if (locale === "fr") return fr_errors_code_email_not_verified_detail(inputs)
	if (locale === "it") return it_errors_code_email_not_verified_detail(inputs)
	if (locale === "nl") return nl_errors_code_email_not_verified_detail(inputs)
	if (locale === "pl") return pl_errors_code_email_not_verified_detail(inputs)
	if (locale === "pt") return pt_errors_code_email_not_verified_detail(inputs)
	if (locale === "ru") return ru_errors_code_email_not_verified_detail(inputs)
	if (locale === "sv") return sv_errors_code_email_not_verified_detail(inputs)
	if (locale === "tr") return tr_errors_code_email_not_verified_detail(inputs)
	if (locale === "zh") return zh_errors_code_email_not_verified_detail(inputs)
	if (locale === "ja") return ja_errors_code_email_not_verified_detail(inputs)
	return en_errors_code_email_not_verified_detail(inputs)
});
