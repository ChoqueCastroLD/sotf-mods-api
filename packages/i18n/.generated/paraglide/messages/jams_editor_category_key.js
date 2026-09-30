/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Category_KeyInputs */

const en_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Key`)
};

const es_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave`)
};

const de_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schlüssel`)
};

const fr_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé`)
};

const it_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiave`)
};

const nl_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleutel`)
};

const pl_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klucz`)
};

const pt_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave`)
};

const ru_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ключ`)
};

const sv_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyckel`)
};

const tr_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anahtar`)
};

const zh_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`键`)
};

const ja_jams_editor_category_key = /** @type {(inputs: Jams_Editor_Category_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キー`)
};

/**
* | output |
* | --- |
* | "Key" |
*
* @param {Jams_Editor_Category_KeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_category_key = /** @type {((inputs?: Jams_Editor_Category_KeyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Category_KeyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_category_key(inputs)
	if (locale === "de") return de_jams_editor_category_key(inputs)
	if (locale === "fr") return fr_jams_editor_category_key(inputs)
	if (locale === "it") return it_jams_editor_category_key(inputs)
	if (locale === "nl") return nl_jams_editor_category_key(inputs)
	if (locale === "pl") return pl_jams_editor_category_key(inputs)
	if (locale === "pt") return pt_jams_editor_category_key(inputs)
	if (locale === "ru") return ru_jams_editor_category_key(inputs)
	if (locale === "sv") return sv_jams_editor_category_key(inputs)
	if (locale === "tr") return tr_jams_editor_category_key(inputs)
	if (locale === "zh") return zh_jams_editor_category_key(inputs)
	if (locale === "ja") return ja_jams_editor_category_key(inputs)
	return en_jams_editor_category_key(inputs)
});
