/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Twofactor_BackInputs */

const en_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to log in`)
};

const es_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a iniciar sesión`)
};

const de_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zur Anmeldung`)
};

const fr_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à la connexion`)
};

const it_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna all’accesso`)
};

const nl_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar inloggen`)
};

const pl_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do logowania`)
};

const pt_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao login`)
};

const ru_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад ко входу`)
};

const sv_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till inloggning`)
};

const tr_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Girişe dön`)
};

const zh_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回登录`)
};

const ja_auth_twofactor_back = /** @type {(inputs: Auth_Twofactor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインに戻る`)
};

/**
* | output |
* | --- |
* | "Back to log in" |
*
* @param {Auth_Twofactor_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_twofactor_back = /** @type {((inputs?: Auth_Twofactor_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_twofactor_back(inputs)
	if (locale === "de") return de_auth_twofactor_back(inputs)
	if (locale === "fr") return fr_auth_twofactor_back(inputs)
	if (locale === "it") return it_auth_twofactor_back(inputs)
	if (locale === "nl") return nl_auth_twofactor_back(inputs)
	if (locale === "pl") return pl_auth_twofactor_back(inputs)
	if (locale === "pt") return pt_auth_twofactor_back(inputs)
	if (locale === "ru") return ru_auth_twofactor_back(inputs)
	if (locale === "sv") return sv_auth_twofactor_back(inputs)
	if (locale === "tr") return tr_auth_twofactor_back(inputs)
	if (locale === "zh") return zh_auth_twofactor_back(inputs)
	if (locale === "ja") return ja_auth_twofactor_back(inputs)
	return en_auth_twofactor_back(inputs)
});
