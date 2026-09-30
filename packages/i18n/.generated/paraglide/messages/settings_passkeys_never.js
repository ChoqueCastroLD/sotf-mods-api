/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_NeverInputs */

const en_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Never used`)
};

const es_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca usada`)
};

const de_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie verwendet`)
};

const fr_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jamais utilisée`)
};

const it_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mai usata`)
};

const nl_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nooit gebruikt`)
};

const pl_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nigdy nie użyty`)
};

const pt_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca usada`)
};

const ru_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не использовался`)
};

const sv_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aldrig använd`)
};

const tr_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hiç kullanılmadı`)
};

const zh_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从未使用`)
};

const ja_settings_passkeys_never = /** @type {(inputs: Settings_Passkeys_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未使用`)
};

/**
* | output |
* | --- |
* | "Never used" |
*
* @param {Settings_Passkeys_NeverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_never = /** @type {((inputs?: Settings_Passkeys_NeverInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_NeverInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_never(inputs)
	if (locale === "de") return de_settings_passkeys_never(inputs)
	if (locale === "fr") return fr_settings_passkeys_never(inputs)
	if (locale === "it") return it_settings_passkeys_never(inputs)
	if (locale === "nl") return nl_settings_passkeys_never(inputs)
	if (locale === "pl") return pl_settings_passkeys_never(inputs)
	if (locale === "pt") return pt_settings_passkeys_never(inputs)
	if (locale === "ru") return ru_settings_passkeys_never(inputs)
	if (locale === "sv") return sv_settings_passkeys_never(inputs)
	if (locale === "tr") return tr_settings_passkeys_never(inputs)
	if (locale === "zh") return zh_settings_passkeys_never(inputs)
	if (locale === "ja") return ja_settings_passkeys_never(inputs)
	return en_settings_passkeys_never(inputs)
});
