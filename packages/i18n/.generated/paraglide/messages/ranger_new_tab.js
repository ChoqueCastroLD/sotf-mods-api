/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_New_TabInputs */

const en_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(opens in a new tab)`)
};

const es_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(se abre en una pestaña nueva)`)
};

const de_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(öffnet in neuem Tab)`)
};

const fr_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(s’ouvre dans un nouvel onglet)`)
};

const it_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(si apre in una nuova scheda)`)
};

const nl_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(opent in een nieuw tabblad)`)
};

const pl_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(otwiera się w nowej karcie)`)
};

const pt_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(abre em uma nova aba)`)
};

const ru_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(откроется в новой вкладке)`)
};

const sv_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(öppnas i en ny flik)`)
};

const tr_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(yeni sekmede açılır)`)
};

const zh_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（在新标签页中打开）`)
};

const ja_ranger_new_tab = /** @type {(inputs: Ranger_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（新しいタブで開きます）`)
};

/**
* | output |
* | --- |
* | "(opens in a new tab)" |
*
* @param {Ranger_New_TabInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_new_tab = /** @type {((inputs?: Ranger_New_TabInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_New_TabInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_new_tab(inputs)
	if (locale === "de") return de_ranger_new_tab(inputs)
	if (locale === "fr") return fr_ranger_new_tab(inputs)
	if (locale === "it") return it_ranger_new_tab(inputs)
	if (locale === "nl") return nl_ranger_new_tab(inputs)
	if (locale === "pl") return pl_ranger_new_tab(inputs)
	if (locale === "pt") return pt_ranger_new_tab(inputs)
	if (locale === "ru") return ru_ranger_new_tab(inputs)
	if (locale === "sv") return sv_ranger_new_tab(inputs)
	if (locale === "tr") return tr_ranger_new_tab(inputs)
	if (locale === "zh") return zh_ranger_new_tab(inputs)
	if (locale === "ja") return ja_ranger_new_tab(inputs)
	return en_ranger_new_tab(inputs)
});
