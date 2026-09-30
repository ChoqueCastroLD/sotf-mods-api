/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Email_DisposableInputs */

const en_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disposable email addresses can’t be used. Use an address you’ll keep.`)
};

const es_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pueden usar emails desechables. Usa una dirección que vayas a conservar.`)
};

const de_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wegwerf-Adressen sind nicht erlaubt. Nutze eine Adresse, die du behältst.`)
};

const fr_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les adresses jetables ne sont pas acceptées. Utilisez une adresse que vous garderez.`)
};

const it_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gli indirizzi email usa e getta non sono accettati. Usa un indirizzo che terrai.`)
};

const nl_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wegwerpadressen kunnen niet worden gebruikt. Gebruik een adres dat je houdt.`)
};

const pl_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie można używać jednorazowych adresów e-mail. Podaj adres, który zachowasz.`)
};

const pt_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não é possível usar e-mails descartáveis. Use um endereço que você vai manter.`)
};

const ru_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одноразовые адреса не подходят. Укажите адрес, которым будете пользоваться.`)
};

const sv_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Engångsadresser kan inte användas. Använd en adress som du behåller.`)
};

const tr_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tek kullanımlık e-posta adresleri kullanılamaz. Kullanmaya devam edeceğin bir adres gir.`)
};

const zh_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不能使用一次性邮箱，请使用你会长期保留的地址。`)
};

const ja_auth_error_email_disposable = /** @type {(inputs: Auth_Error_Email_DisposableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使い捨てのメールアドレスは使えません。今後も使うアドレスを入力してください。`)
};

/**
* | output |
* | --- |
* | "Disposable email addresses can’t be used. Use an address you’ll keep." |
*
* @param {Auth_Error_Email_DisposableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_email_disposable = /** @type {((inputs?: Auth_Error_Email_DisposableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Email_DisposableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_email_disposable(inputs)
	if (locale === "de") return de_auth_error_email_disposable(inputs)
	if (locale === "fr") return fr_auth_error_email_disposable(inputs)
	if (locale === "it") return it_auth_error_email_disposable(inputs)
	if (locale === "nl") return nl_auth_error_email_disposable(inputs)
	if (locale === "pl") return pl_auth_error_email_disposable(inputs)
	if (locale === "pt") return pt_auth_error_email_disposable(inputs)
	if (locale === "ru") return ru_auth_error_email_disposable(inputs)
	if (locale === "sv") return sv_auth_error_email_disposable(inputs)
	if (locale === "tr") return tr_auth_error_email_disposable(inputs)
	if (locale === "zh") return zh_auth_error_email_disposable(inputs)
	if (locale === "ja") return ja_auth_error_email_disposable(inputs)
	return en_auth_error_email_disposable(inputs)
});
