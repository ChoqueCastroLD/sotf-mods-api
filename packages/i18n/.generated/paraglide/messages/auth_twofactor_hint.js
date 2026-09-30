/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Twofactor_HintInputs */

const en_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The 6-digit code from your app, or one of your recovery codes.`)
};

const es_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El código de 6 dígitos de tu app o uno de tus códigos de recuperación.`)
};

const de_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der 6-stellige Code aus deiner App oder einer deiner Wiederherstellungscodes.`)
};

const fr_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le code à 6 chiffres de votre application, ou l’un de vos codes de récupération.`)
};

const it_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il codice a 6 cifre della tua app o uno dei tuoi codici di recupero.`)
};

const nl_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De 6-cijferige code uit je app of een van je herstelcodes.`)
};

const pl_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`6-cyfrowy kod z aplikacji lub jeden z kodów odzyskiwania.`)
};

const pt_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O código de 6 dígitos do seu app ou um dos seus códigos de recuperação.`)
};

const ru_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`6-значный код из приложения или один из кодов восстановления.`)
};

const sv_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den sexsiffriga koden från din app eller en av dina återställningskoder.`)
};

const tr_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulamandaki 6 haneli kod veya kurtarma kodlarından biri.`)
};

const zh_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用中的 6 位验证码，或其中一个恢复码。`)
};

const ja_auth_twofactor_hint = /** @type {(inputs: Auth_Twofactor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリの6桁のコード、またはリカバリーコードのいずれか。`)
};

/**
* | output |
* | --- |
* | "The 6-digit code from your app, or one of your recovery codes." |
*
* @param {Auth_Twofactor_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_twofactor_hint = /** @type {((inputs?: Auth_Twofactor_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_twofactor_hint(inputs)
	if (locale === "de") return de_auth_twofactor_hint(inputs)
	if (locale === "fr") return fr_auth_twofactor_hint(inputs)
	if (locale === "it") return it_auth_twofactor_hint(inputs)
	if (locale === "nl") return nl_auth_twofactor_hint(inputs)
	if (locale === "pl") return pl_auth_twofactor_hint(inputs)
	if (locale === "pt") return pt_auth_twofactor_hint(inputs)
	if (locale === "ru") return ru_auth_twofactor_hint(inputs)
	if (locale === "sv") return sv_auth_twofactor_hint(inputs)
	if (locale === "tr") return tr_auth_twofactor_hint(inputs)
	if (locale === "zh") return zh_auth_twofactor_hint(inputs)
	if (locale === "ja") return ja_auth_twofactor_hint(inputs)
	return en_auth_twofactor_hint(inputs)
});
