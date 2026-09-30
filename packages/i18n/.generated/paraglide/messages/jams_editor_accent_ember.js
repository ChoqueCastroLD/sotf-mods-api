/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Accent_EmberInputs */

const en_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ember red`)
};

const es_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rojo brasa`)
};

const de_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glutrot`)
};

const fr_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rouge braise`)
};

const it_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rosso brace`)
};

const nl_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gloedrood`)
};

const pl_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czerwień żaru`)
};

const pt_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vermelho brasa`)
};

const ru_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Цвет тлеющих углей`)
};

const sv_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glödröd`)
};

const tr_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kor kırmızısı`)
};

const zh_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`余烬红`)
};

const ja_jams_editor_accent_ember = /** @type {(inputs: Jams_Editor_Accent_EmberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エンバーレッド`)
};

/**
* | output |
* | --- |
* | "Ember red" |
*
* @param {Jams_Editor_Accent_EmberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_accent_ember = /** @type {((inputs?: Jams_Editor_Accent_EmberInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Accent_EmberInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_accent_ember(inputs)
	if (locale === "de") return de_jams_editor_accent_ember(inputs)
	if (locale === "fr") return fr_jams_editor_accent_ember(inputs)
	if (locale === "it") return it_jams_editor_accent_ember(inputs)
	if (locale === "nl") return nl_jams_editor_accent_ember(inputs)
	if (locale === "pl") return pl_jams_editor_accent_ember(inputs)
	if (locale === "pt") return pt_jams_editor_accent_ember(inputs)
	if (locale === "ru") return ru_jams_editor_accent_ember(inputs)
	if (locale === "sv") return sv_jams_editor_accent_ember(inputs)
	if (locale === "tr") return tr_jams_editor_accent_ember(inputs)
	if (locale === "zh") return zh_jams_editor_accent_ember(inputs)
	if (locale === "ja") return ja_jams_editor_accent_ember(inputs)
	return en_jams_editor_accent_ember(inputs)
});
