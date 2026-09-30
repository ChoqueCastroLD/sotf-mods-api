/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Successor_HintInputs */

const en_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One of your published mods.`)
};

const es_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uno de tus mods publicados.`)
};

const de_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einer deiner veröffentlichten Mods.`)
};

const fr_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’un de vos mods publiés.`)
};

const it_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una delle tue mod pubblicate.`)
};

const nl_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een van je gepubliceerde mods.`)
};

const pl_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeden z twoich opublikowanych modów.`)
};

const pt_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um dos seus mods publicados.`)
};

const ru_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Один из ваших опубликованных модов.`)
};

const sv_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En av dina publicerade moddar.`)
};

const tr_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlanmış modlarından biri.`)
};

const zh_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已发布的模组之一。`)
};

const ja_basecamp_settings_successor_hint = /** @type {(inputs: Basecamp_Settings_Successor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開中の自分の MOD から選びます。`)
};

/**
* | output |
* | --- |
* | "One of your published mods." |
*
* @param {Basecamp_Settings_Successor_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_successor_hint = /** @type {((inputs?: Basecamp_Settings_Successor_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Successor_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_successor_hint(inputs)
	if (locale === "de") return de_basecamp_settings_successor_hint(inputs)
	if (locale === "fr") return fr_basecamp_settings_successor_hint(inputs)
	if (locale === "it") return it_basecamp_settings_successor_hint(inputs)
	if (locale === "nl") return nl_basecamp_settings_successor_hint(inputs)
	if (locale === "pl") return pl_basecamp_settings_successor_hint(inputs)
	if (locale === "pt") return pt_basecamp_settings_successor_hint(inputs)
	if (locale === "ru") return ru_basecamp_settings_successor_hint(inputs)
	if (locale === "sv") return sv_basecamp_settings_successor_hint(inputs)
	if (locale === "tr") return tr_basecamp_settings_successor_hint(inputs)
	if (locale === "zh") return zh_basecamp_settings_successor_hint(inputs)
	if (locale === "ja") return ja_basecamp_settings_successor_hint(inputs)
	return en_basecamp_settings_successor_hint(inputs)
});
