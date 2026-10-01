/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Landing_Hall_Show_AllInputs */

const en_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`Show all ${count__number}`)
};

const es_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`Mostrar los ${count__number}`)
};

const de_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`Alle ${count__number} anzeigen`)
};

const fr_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`Afficher les ${count__number}`)
};

const it_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`Mostra tutti i ${count__number}`)
};

const nl_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`Toon alle ${count__number}`)
};

const pl_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`Pokaż wszystkie (${count__number})`)
};

const pt_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`Mostrar os ${count__number}`)
};

const ru_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`Показать все (${count__number})`)
};

const sv_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`Visa alla ${count__number}`)
};

const tr_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`Tümünü göster (${count__number})`)
};

const zh_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`显示全部 ${count__number} 个`)
};

const ja_landing_hall_show_all = /** @type {(inputs: Landing_Hall_Show_AllInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件すべて表示`)
};

/**
* | output |
* | --- |
* | "Show all {count__number}" |
*
* @param {Landing_Hall_Show_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hall_show_all = /** @type {((inputs: Landing_Hall_Show_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hall_Show_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hall_show_all(inputs)
	if (locale === "de") return de_landing_hall_show_all(inputs)
	if (locale === "fr") return fr_landing_hall_show_all(inputs)
	if (locale === "it") return it_landing_hall_show_all(inputs)
	if (locale === "nl") return nl_landing_hall_show_all(inputs)
	if (locale === "pl") return pl_landing_hall_show_all(inputs)
	if (locale === "pt") return pt_landing_hall_show_all(inputs)
	if (locale === "ru") return ru_landing_hall_show_all(inputs)
	if (locale === "sv") return sv_landing_hall_show_all(inputs)
	if (locale === "tr") return tr_landing_hall_show_all(inputs)
	if (locale === "zh") return zh_landing_hall_show_all(inputs)
	if (locale === "ja") return ja_landing_hall_show_all(inputs)
	return en_landing_hall_show_all(inputs)
});
