/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Kind_AnyInputs */

const en_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods and builds`)
};

const es_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods y builds`)
};

const de_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods und Builds`)
};

const fr_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods et builds`)
};

const it_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod e build`)
};

const nl_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods en builds`)
};

const pl_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody i buildy`)
};

const pt_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods e builds`)
};

const ru_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды и сборки`)
};

const sv_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar och builds`)
};

const tr_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar ve build'ler`)
};

const zh_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组和构建`)
};

const ja_jams_editor_kind_any = /** @type {(inputs: Jams_Editor_Kind_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod とビルド`)
};

/**
* | output |
* | --- |
* | "Mods and builds" |
*
* @param {Jams_Editor_Kind_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_kind_any = /** @type {((inputs?: Jams_Editor_Kind_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Kind_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_kind_any(inputs)
	if (locale === "de") return de_jams_editor_kind_any(inputs)
	if (locale === "fr") return fr_jams_editor_kind_any(inputs)
	if (locale === "it") return it_jams_editor_kind_any(inputs)
	if (locale === "nl") return nl_jams_editor_kind_any(inputs)
	if (locale === "pl") return pl_jams_editor_kind_any(inputs)
	if (locale === "pt") return pt_jams_editor_kind_any(inputs)
	if (locale === "ru") return ru_jams_editor_kind_any(inputs)
	if (locale === "sv") return sv_jams_editor_kind_any(inputs)
	if (locale === "tr") return tr_jams_editor_kind_any(inputs)
	if (locale === "zh") return zh_jams_editor_kind_any(inputs)
	if (locale === "ja") return ja_jams_editor_kind_any(inputs)
	return en_jams_editor_kind_any(inputs)
});
