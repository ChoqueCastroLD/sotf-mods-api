/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Force_ApplyInputs */

const en_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply`)
};

const es_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicar`)
};

const de_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anwenden`)
};

const fr_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appliquer`)
};

const it_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Applica`)
};

const nl_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toepassen`)
};

const pl_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zastosuj`)
};

const pt_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicar`)
};

const ru_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Применить`)
};

const sv_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillämpa`)
};

const tr_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygula`)
};

const zh_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用`)
};

const ja_jams_editor_force_apply = /** @type {(inputs: Jams_Editor_Force_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`適用`)
};

/**
* | output |
* | --- |
* | "Apply" |
*
* @param {Jams_Editor_Force_ApplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_force_apply = /** @type {((inputs?: Jams_Editor_Force_ApplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Force_ApplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_force_apply(inputs)
	if (locale === "de") return de_jams_editor_force_apply(inputs)
	if (locale === "fr") return fr_jams_editor_force_apply(inputs)
	if (locale === "it") return it_jams_editor_force_apply(inputs)
	if (locale === "nl") return nl_jams_editor_force_apply(inputs)
	if (locale === "pl") return pl_jams_editor_force_apply(inputs)
	if (locale === "pt") return pt_jams_editor_force_apply(inputs)
	if (locale === "ru") return ru_jams_editor_force_apply(inputs)
	if (locale === "sv") return sv_jams_editor_force_apply(inputs)
	if (locale === "tr") return tr_jams_editor_force_apply(inputs)
	if (locale === "zh") return zh_jams_editor_force_apply(inputs)
	if (locale === "ja") return ja_jams_editor_force_apply(inputs)
	return en_jams_editor_force_apply(inputs)
});
