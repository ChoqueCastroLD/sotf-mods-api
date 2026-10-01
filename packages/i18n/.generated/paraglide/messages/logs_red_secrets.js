/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Red_SecretsInputs */

const en_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens and keys`)
};

const es_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens y claves`)
};

const de_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens und Schlüssel`)
};

const fr_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jetons et clés`)
};

const it_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token e chiavi`)
};

const nl_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens en sleutels`)
};

const pl_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokeny i klucze`)
};

const pt_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens e chaves`)
};

const ru_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Токены и ключи`)
};

const sv_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens och nycklar`)
};

const tr_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token ve anahtarlar`)
};

const zh_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`令牌和密钥`)
};

const ja_logs_red_secrets = /** @type {(inputs: Logs_Red_SecretsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トークンとキー`)
};

/**
* | output |
* | --- |
* | "Tokens and keys" |
*
* @param {Logs_Red_SecretsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_red_secrets = /** @type {((inputs?: Logs_Red_SecretsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Red_SecretsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_red_secrets(inputs)
	if (locale === "de") return de_logs_red_secrets(inputs)
	if (locale === "fr") return fr_logs_red_secrets(inputs)
	if (locale === "it") return it_logs_red_secrets(inputs)
	if (locale === "nl") return nl_logs_red_secrets(inputs)
	if (locale === "pl") return pl_logs_red_secrets(inputs)
	if (locale === "pt") return pt_logs_red_secrets(inputs)
	if (locale === "ru") return ru_logs_red_secrets(inputs)
	if (locale === "sv") return sv_logs_red_secrets(inputs)
	if (locale === "tr") return tr_logs_red_secrets(inputs)
	if (locale === "zh") return zh_logs_red_secrets(inputs)
	if (locale === "ja") return ja_logs_red_secrets(inputs)
	return en_logs_red_secrets(inputs)
});
