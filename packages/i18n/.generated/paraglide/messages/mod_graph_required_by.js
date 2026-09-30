/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Graph_Required_ByInputs */

const en_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Required by`)
};

const es_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requerido por`)
};

const de_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benötigt von`)
};

const fr_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requis par`)
};

const it_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesto da`)
};

const nl_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vereist door`)
};

const pl_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymagany przez`)
};

const pt_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exigido por`)
};

const ru_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Требуется для`)
};

const sv_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krävs av`)
};

const tr_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şunlar için gerekli`)
};

const zh_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`被以下模组依赖`)
};

const ja_mod_graph_required_by = /** @type {(inputs: Mod_Graph_Required_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必要とするMod`)
};

/**
* | output |
* | --- |
* | "Required by" |
*
* @param {Mod_Graph_Required_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_graph_required_by = /** @type {((inputs?: Mod_Graph_Required_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Graph_Required_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_graph_required_by(inputs)
	if (locale === "de") return de_mod_graph_required_by(inputs)
	if (locale === "fr") return fr_mod_graph_required_by(inputs)
	if (locale === "it") return it_mod_graph_required_by(inputs)
	if (locale === "nl") return nl_mod_graph_required_by(inputs)
	if (locale === "pl") return pl_mod_graph_required_by(inputs)
	if (locale === "pt") return pt_mod_graph_required_by(inputs)
	if (locale === "ru") return ru_mod_graph_required_by(inputs)
	if (locale === "sv") return sv_mod_graph_required_by(inputs)
	if (locale === "tr") return tr_mod_graph_required_by(inputs)
	if (locale === "zh") return zh_mod_graph_required_by(inputs)
	if (locale === "ja") return ja_mod_graph_required_by(inputs)
	return en_mod_graph_required_by(inputs)
});
