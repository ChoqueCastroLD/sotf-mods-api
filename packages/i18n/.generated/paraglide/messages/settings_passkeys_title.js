/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_TitleInputs */

const en_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkeys`)
};

const es_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claves de acceso (passkeys)`)
};

const de_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkeys`)
};

const fr_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clés d’accès (passkeys)`)
};

const it_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkey`)
};

const nl_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkeys`)
};

const pl_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klucze dostępu (passkeys)`)
};

const pt_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaves de acesso (passkeys)`)
};

const ru_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ключи доступа (passkeys)`)
};

const sv_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkeys`)
};

const tr_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçiş anahtarları (passkey)`)
};

const zh_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通行密钥（passkey）`)
};

const ja_settings_passkeys_title = /** @type {(inputs: Settings_Passkeys_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスキー`)
};

/**
* | output |
* | --- |
* | "Passkeys" |
*
* @param {Settings_Passkeys_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_title = /** @type {((inputs?: Settings_Passkeys_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_title(inputs)
	if (locale === "de") return de_settings_passkeys_title(inputs)
	if (locale === "fr") return fr_settings_passkeys_title(inputs)
	if (locale === "it") return it_settings_passkeys_title(inputs)
	if (locale === "nl") return nl_settings_passkeys_title(inputs)
	if (locale === "pl") return pl_settings_passkeys_title(inputs)
	if (locale === "pt") return pt_settings_passkeys_title(inputs)
	if (locale === "ru") return ru_settings_passkeys_title(inputs)
	if (locale === "sv") return sv_settings_passkeys_title(inputs)
	if (locale === "tr") return tr_settings_passkeys_title(inputs)
	if (locale === "zh") return zh_settings_passkeys_title(inputs)
	if (locale === "ja") return ja_settings_passkeys_title(inputs)
	return en_settings_passkeys_title(inputs)
});
