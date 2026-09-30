/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_New_TabInputs */

const en_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open in new tab`)
};

const es_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir en pestaña nueva`)
};

const de_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In neuem Tab öffnen`)
};

const fr_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir dans un nouvel onglet`)
};

const it_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri in una nuova scheda`)
};

const nl_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openen in nieuw tabblad`)
};

const pl_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz w nowej karcie`)
};

const pt_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir num novo separador`)
};

const ru_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть в новой вкладке`)
};

const sv_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna i ny flik`)
};

const tr_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni sekmede aç`)
};

const zh_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在新标签页打开`)
};

const ja_cmdk_act_new_tab = /** @type {(inputs: Cmdk_Act_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいタブで開く`)
};

/**
* | output |
* | --- |
* | "Open in new tab" |
*
* @param {Cmdk_Act_New_TabInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_new_tab = /** @type {((inputs?: Cmdk_Act_New_TabInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_New_TabInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_new_tab(inputs)
	if (locale === "de") return de_cmdk_act_new_tab(inputs)
	if (locale === "fr") return fr_cmdk_act_new_tab(inputs)
	if (locale === "it") return it_cmdk_act_new_tab(inputs)
	if (locale === "nl") return nl_cmdk_act_new_tab(inputs)
	if (locale === "pl") return pl_cmdk_act_new_tab(inputs)
	if (locale === "pt") return pt_cmdk_act_new_tab(inputs)
	if (locale === "ru") return ru_cmdk_act_new_tab(inputs)
	if (locale === "sv") return sv_cmdk_act_new_tab(inputs)
	if (locale === "tr") return tr_cmdk_act_new_tab(inputs)
	if (locale === "zh") return zh_cmdk_act_new_tab(inputs)
	if (locale === "ja") return ja_cmdk_act_new_tab(inputs)
	return en_cmdk_act_new_tab(inputs)
});
