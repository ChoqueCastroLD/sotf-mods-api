/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Kind_ModInputs */

const en_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods only`)
};

const es_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo mods`)
};

const de_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Mods`)
};

const fr_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods uniquement`)
};

const it_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo mod`)
};

const nl_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen mods`)
};

const pl_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko mody`)
};

const pt_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Somente mods`)
};

const ru_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только моды`)
};

const sv_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast moddar`)
};

const tr_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca modlar`)
};

const zh_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅模组`)
};

const ja_jams_editor_kind_mod = /** @type {(inputs: Jams_Editor_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod のみ`)
};

/**
* | output |
* | --- |
* | "Mods only" |
*
* @param {Jams_Editor_Kind_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_kind_mod = /** @type {((inputs?: Jams_Editor_Kind_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Kind_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_kind_mod(inputs)
	if (locale === "de") return de_jams_editor_kind_mod(inputs)
	if (locale === "fr") return fr_jams_editor_kind_mod(inputs)
	if (locale === "it") return it_jams_editor_kind_mod(inputs)
	if (locale === "nl") return nl_jams_editor_kind_mod(inputs)
	if (locale === "pl") return pl_jams_editor_kind_mod(inputs)
	if (locale === "pt") return pt_jams_editor_kind_mod(inputs)
	if (locale === "ru") return ru_jams_editor_kind_mod(inputs)
	if (locale === "sv") return sv_jams_editor_kind_mod(inputs)
	if (locale === "tr") return tr_jams_editor_kind_mod(inputs)
	if (locale === "zh") return zh_jams_editor_kind_mod(inputs)
	if (locale === "ja") return ja_jams_editor_kind_mod(inputs)
	return en_jams_editor_kind_mod(inputs)
});
