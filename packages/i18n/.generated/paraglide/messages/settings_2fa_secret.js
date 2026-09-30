/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_SecretInputs */

const en_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Setup key`)
};

const es_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave de configuración`)
};

const de_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einrichtungsschlüssel`)
};

const fr_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé de configuration`)
};

const it_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiave di configurazione`)
};

const nl_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installatiesleutel`)
};

const pl_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klucz konfiguracji`)
};

const pt_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave de configuração`)
};

const ru_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ключ настройки`)
};

const sv_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsnyckel`)
};

const tr_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulum anahtarı`)
};

const zh_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置密钥`)
};

const ja_settings_2fa_secret = /** @type {(inputs: Settings_2fa_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セットアップキー`)
};

/**
* | output |
* | --- |
* | "Setup key" |
*
* @param {Settings_2fa_SecretInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_secret = /** @type {((inputs?: Settings_2fa_SecretInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_SecretInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_secret(inputs)
	if (locale === "de") return de_settings_2fa_secret(inputs)
	if (locale === "fr") return fr_settings_2fa_secret(inputs)
	if (locale === "it") return it_settings_2fa_secret(inputs)
	if (locale === "nl") return nl_settings_2fa_secret(inputs)
	if (locale === "pl") return pl_settings_2fa_secret(inputs)
	if (locale === "pt") return pt_settings_2fa_secret(inputs)
	if (locale === "ru") return ru_settings_2fa_secret(inputs)
	if (locale === "sv") return sv_settings_2fa_secret(inputs)
	if (locale === "tr") return tr_settings_2fa_secret(inputs)
	if (locale === "zh") return zh_settings_2fa_secret(inputs)
	if (locale === "ja") return ja_settings_2fa_secret(inputs)
	return en_settings_2fa_secret(inputs)
});
