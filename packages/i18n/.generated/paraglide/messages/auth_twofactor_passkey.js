/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Twofactor_PasskeyInputs */

const en_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a passkey instead`)
};

const es_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar una clave de acceso`)
};

const de_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stattdessen einen Passkey verwenden`)
};

const fr_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser plutôt une clé d’accès`)
};

const it_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa invece una passkey`)
};

const nl_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik in plaats daarvan een passkey`)
};

const pl_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj zamiast tego klucza dostępu`)
};

const pt_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar uma chave de acesso`)
};

const ru_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Использовать ключ доступа`)
};

const sv_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd en passkey istället`)
};

const tr_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bunun yerine geçiş anahtarı kullan`)
};

const zh_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`改用通行密钥`)
};

const ja_auth_twofactor_passkey = /** @type {(inputs: Auth_Twofactor_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代わりにパスキーを使う`)
};

/**
* | output |
* | --- |
* | "Use a passkey instead" |
*
* @param {Auth_Twofactor_PasskeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_twofactor_passkey = /** @type {((inputs?: Auth_Twofactor_PasskeyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_PasskeyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_twofactor_passkey(inputs)
	if (locale === "de") return de_auth_twofactor_passkey(inputs)
	if (locale === "fr") return fr_auth_twofactor_passkey(inputs)
	if (locale === "it") return it_auth_twofactor_passkey(inputs)
	if (locale === "nl") return nl_auth_twofactor_passkey(inputs)
	if (locale === "pl") return pl_auth_twofactor_passkey(inputs)
	if (locale === "pt") return pt_auth_twofactor_passkey(inputs)
	if (locale === "ru") return ru_auth_twofactor_passkey(inputs)
	if (locale === "sv") return sv_auth_twofactor_passkey(inputs)
	if (locale === "tr") return tr_auth_twofactor_passkey(inputs)
	if (locale === "zh") return zh_auth_twofactor_passkey(inputs)
	if (locale === "ja") return ja_auth_twofactor_passkey(inputs)
	return en_auth_twofactor_passkey(inputs)
});
