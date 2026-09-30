/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_AutoInputs */

const en_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatic: the items laid out on the mat.`)
};

const es_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automática: los elementos colocados sobre la mesa.`)
};

const de_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch: die Einträge auf der Unterlage ausgelegt.`)
};

const fr_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatique : les éléments disposés sur le plan de travail.`)
};

const it_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatica: gli elementi disposti sul tappetino.`)
};

const nl_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch: de items neergelegd op de mat.`)
};

const pl_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatyczna: elementy rozłożone na macie.`)
};

const pt_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automática: os itens organizados na bancada.`)
};

const ru_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автоматическая: элементы, разложенные на коврике.`)
};

const sv_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatiskt: objekten utlagda på mattan.`)
};

const tr_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik: öğeler masaya dizilir.`)
};

const zh_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动：把各项内容摆在工作台上。`)
};

const ja_kits_cover_auto = /** @type {(inputs: Kits_Cover_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動：アイテムをマットに並べた画像。`)
};

/**
* | output |
* | --- |
* | "Automatic: the items laid out on the mat." |
*
* @param {Kits_Cover_AutoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_auto = /** @type {((inputs?: Kits_Cover_AutoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_AutoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_auto(inputs)
	if (locale === "de") return de_kits_cover_auto(inputs)
	if (locale === "fr") return fr_kits_cover_auto(inputs)
	if (locale === "it") return it_kits_cover_auto(inputs)
	if (locale === "nl") return nl_kits_cover_auto(inputs)
	if (locale === "pl") return pl_kits_cover_auto(inputs)
	if (locale === "pt") return pt_kits_cover_auto(inputs)
	if (locale === "ru") return ru_kits_cover_auto(inputs)
	if (locale === "sv") return sv_kits_cover_auto(inputs)
	if (locale === "tr") return tr_kits_cover_auto(inputs)
	if (locale === "zh") return zh_kits_cover_auto(inputs)
	if (locale === "ja") return ja_kits_cover_auto(inputs)
	return en_kits_cover_auto(inputs)
});
