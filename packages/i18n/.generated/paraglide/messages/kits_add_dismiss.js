/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Add_DismissInputs */

const en_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

const es_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar`)
};

const de_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließen`)
};

const fr_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer`)
};

const it_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi`)
};

const nl_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluiten`)
};

const pl_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij`)
};

const pt_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar`)
};

const ru_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть`)
};

const sv_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng`)
};

const tr_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapat`)
};

const zh_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭`)
};

const ja_kits_add_dismiss = /** @type {(inputs: Kits_Add_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じる`)
};

/**
* | output |
* | --- |
* | "Close" |
*
* @param {Kits_Add_DismissInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_dismiss = /** @type {((inputs?: Kits_Add_DismissInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_DismissInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_dismiss(inputs)
	if (locale === "de") return de_kits_add_dismiss(inputs)
	if (locale === "fr") return fr_kits_add_dismiss(inputs)
	if (locale === "it") return it_kits_add_dismiss(inputs)
	if (locale === "nl") return nl_kits_add_dismiss(inputs)
	if (locale === "pl") return pl_kits_add_dismiss(inputs)
	if (locale === "pt") return pt_kits_add_dismiss(inputs)
	if (locale === "ru") return ru_kits_add_dismiss(inputs)
	if (locale === "sv") return sv_kits_add_dismiss(inputs)
	if (locale === "tr") return tr_kits_add_dismiss(inputs)
	if (locale === "zh") return zh_kits_add_dismiss(inputs)
	if (locale === "ja") return ja_kits_add_dismiss(inputs)
	return en_kits_add_dismiss(inputs)
});
