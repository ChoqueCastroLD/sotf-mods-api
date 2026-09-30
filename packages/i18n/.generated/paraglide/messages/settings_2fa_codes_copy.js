/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Codes_CopyInputs */

const en_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy codes`)
};

const es_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar códigos`)
};

const de_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codes kopieren`)
};

const fr_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier les codes`)
};

const it_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia i codici`)
};

const nl_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codes kopiëren`)
};

const pl_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj kody`)
};

const pt_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar códigos`)
};

const ru_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать коды`)
};

const sv_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera koder`)
};

const tr_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kodları kopyala`)
};

const zh_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制恢复码`)
};

const ja_settings_2fa_codes_copy = /** @type {(inputs: Settings_2fa_Codes_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コードをコピー`)
};

/**
* | output |
* | --- |
* | "Copy codes" |
*
* @param {Settings_2fa_Codes_CopyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_codes_copy = /** @type {((inputs?: Settings_2fa_Codes_CopyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Codes_CopyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_codes_copy(inputs)
	if (locale === "de") return de_settings_2fa_codes_copy(inputs)
	if (locale === "fr") return fr_settings_2fa_codes_copy(inputs)
	if (locale === "it") return it_settings_2fa_codes_copy(inputs)
	if (locale === "nl") return nl_settings_2fa_codes_copy(inputs)
	if (locale === "pl") return pl_settings_2fa_codes_copy(inputs)
	if (locale === "pt") return pt_settings_2fa_codes_copy(inputs)
	if (locale === "ru") return ru_settings_2fa_codes_copy(inputs)
	if (locale === "sv") return sv_settings_2fa_codes_copy(inputs)
	if (locale === "tr") return tr_settings_2fa_codes_copy(inputs)
	if (locale === "zh") return zh_settings_2fa_codes_copy(inputs)
	if (locale === "ja") return ja_settings_2fa_codes_copy(inputs)
	return en_settings_2fa_codes_copy(inputs)
});
