/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Editor_Static_TitleInputs */

const en_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit editor`)
};

const es_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editor de kits`)
};

const de_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit-Editor`)
};

const fr_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Éditeur de kit`)
};

const it_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editor dei kit`)
};

const nl_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiteditor`)
};

const pl_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytor zestawu`)
};

const pt_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editor de kits`)
};

const ru_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Редактор набора`)
};

const sv_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitredigerare`)
};

const tr_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit düzenleyici`)
};

const zh_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装编辑器`)
};

const ja_kits_editor_static_title = /** @type {(inputs: Kits_Editor_Static_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットエディター`)
};

/**
* | output |
* | --- |
* | "Kit editor" |
*
* @param {Kits_Editor_Static_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_editor_static_title = /** @type {((inputs?: Kits_Editor_Static_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Editor_Static_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_editor_static_title(inputs)
	if (locale === "de") return de_kits_editor_static_title(inputs)
	if (locale === "fr") return fr_kits_editor_static_title(inputs)
	if (locale === "it") return it_kits_editor_static_title(inputs)
	if (locale === "nl") return nl_kits_editor_static_title(inputs)
	if (locale === "pl") return pl_kits_editor_static_title(inputs)
	if (locale === "pt") return pt_kits_editor_static_title(inputs)
	if (locale === "ru") return ru_kits_editor_static_title(inputs)
	if (locale === "sv") return sv_kits_editor_static_title(inputs)
	if (locale === "tr") return tr_kits_editor_static_title(inputs)
	if (locale === "zh") return zh_kits_editor_static_title(inputs)
	if (locale === "ja") return ja_kits_editor_static_title(inputs)
	return en_kits_editor_static_title(inputs)
});
