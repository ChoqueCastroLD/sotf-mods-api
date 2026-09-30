/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Avatar_LabelInputs */

const en_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

const es_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

const de_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

const fr_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

const it_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

const nl_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

const pl_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Awatar`)
};

const pt_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

const ru_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аватар`)
};

const sv_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

const tr_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar`)
};

const zh_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像`)
};

const ja_settings_avatar_label = /** @type {(inputs: Settings_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アバター`)
};

/**
* | output |
* | --- |
* | "Avatar" |
*
* @param {Settings_Avatar_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_avatar_label = /** @type {((inputs?: Settings_Avatar_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Avatar_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_avatar_label(inputs)
	if (locale === "de") return de_settings_avatar_label(inputs)
	if (locale === "fr") return fr_settings_avatar_label(inputs)
	if (locale === "it") return it_settings_avatar_label(inputs)
	if (locale === "nl") return nl_settings_avatar_label(inputs)
	if (locale === "pl") return pl_settings_avatar_label(inputs)
	if (locale === "pt") return pt_settings_avatar_label(inputs)
	if (locale === "ru") return ru_settings_avatar_label(inputs)
	if (locale === "sv") return sv_settings_avatar_label(inputs)
	if (locale === "tr") return tr_settings_avatar_label(inputs)
	if (locale === "zh") return zh_settings_avatar_label(inputs)
	if (locale === "ja") return ja_settings_avatar_label(inputs)
	return en_settings_avatar_label(inputs)
});
