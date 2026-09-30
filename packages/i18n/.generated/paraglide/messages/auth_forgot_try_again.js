/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Forgot_Try_AgainInputs */

const en_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use another email`)
};

const es_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar otro email`)
};

const de_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere E-Mail verwenden`)
};

const fr_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser un autre e-mail`)
};

const it_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa un’altra email`)
};

const nl_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ander e-mailadres gebruiken`)
};

const pl_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj innego adresu`)
};

const pt_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar outro e-mail`)
};

const ru_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Указать другой email`)
};

const sv_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd en annan e-postadress`)
};

const tr_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir e-posta kullan`)
};

const zh_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用其他邮箱`)
};

const ja_auth_forgot_try_again = /** @type {(inputs: Auth_Forgot_Try_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別のメールアドレスを使う`)
};

/**
* | output |
* | --- |
* | "Use another email" |
*
* @param {Auth_Forgot_Try_AgainInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_forgot_try_again = /** @type {((inputs?: Auth_Forgot_Try_AgainInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Forgot_Try_AgainInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_forgot_try_again(inputs)
	if (locale === "de") return de_auth_forgot_try_again(inputs)
	if (locale === "fr") return fr_auth_forgot_try_again(inputs)
	if (locale === "it") return it_auth_forgot_try_again(inputs)
	if (locale === "nl") return nl_auth_forgot_try_again(inputs)
	if (locale === "pl") return pl_auth_forgot_try_again(inputs)
	if (locale === "pt") return pt_auth_forgot_try_again(inputs)
	if (locale === "ru") return ru_auth_forgot_try_again(inputs)
	if (locale === "sv") return sv_auth_forgot_try_again(inputs)
	if (locale === "tr") return tr_auth_forgot_try_again(inputs)
	if (locale === "zh") return zh_auth_forgot_try_again(inputs)
	if (locale === "ja") return ja_auth_forgot_try_again(inputs)
	return en_auth_forgot_try_again(inputs)
});
