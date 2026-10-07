/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ from: NonNullable<unknown>, to: NonNullable<unknown>, total: NonNullable<unknown> }} Explore_Results_RangeInputs */

const en_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("en", i?.from, {});
	const to__number = registry.number("en", i?.to, {});
	const total__number = registry.number("en", i?.total, {});return /** @type {LocalizedString} */ (`Showing ${from__number}–${to__number} of ${total__number}`)
};

const es_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("es", i?.from, {});
	const to__number = registry.number("es", i?.to, {});
	const total__number = registry.number("es", i?.total, {});return /** @type {LocalizedString} */ (`Mostrando ${from__number}–${to__number} de ${total__number}`)
};

const de_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("de", i?.from, {});
	const to__number = registry.number("de", i?.to, {});
	const total__number = registry.number("de", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} von ${total__number}`)
};

const fr_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("fr", i?.from, {});
	const to__number = registry.number("fr", i?.to, {});
	const total__number = registry.number("fr", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} sur ${total__number}`)
};

const it_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("it", i?.from, {});
	const to__number = registry.number("it", i?.to, {});
	const total__number = registry.number("it", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} di ${total__number}`)
};

const nl_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("nl", i?.from, {});
	const to__number = registry.number("nl", i?.to, {});
	const total__number = registry.number("nl", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} van ${total__number}`)
};

const pl_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("pl", i?.from, {});
	const to__number = registry.number("pl", i?.to, {});
	const total__number = registry.number("pl", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} z ${total__number}`)
};

const pt_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("pt", i?.from, {});
	const to__number = registry.number("pt", i?.to, {});
	const total__number = registry.number("pt", i?.total, {});return /** @type {LocalizedString} */ (`Mostrando ${from__number}–${to__number} de ${total__number}`)
};

const ru_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("ru", i?.from, {});
	const to__number = registry.number("ru", i?.to, {});
	const total__number = registry.number("ru", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} из ${total__number}`)
};

const sv_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("sv", i?.from, {});
	const to__number = registry.number("sv", i?.to, {});
	const total__number = registry.number("sv", i?.total, {});return /** @type {LocalizedString} */ (`Visar ${from__number}–${to__number} av ${total__number}`)
};

const tr_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("tr", i?.from, {});
	const to__number = registry.number("tr", i?.to, {});
	const total__number = registry.number("tr", i?.total, {});return /** @type {LocalizedString} */ (`${total__number} sonuçtan ${from__number}–${to__number} arası`)
};

const zh_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("zh", i?.from, {});
	const to__number = registry.number("zh", i?.to, {});
	const total__number = registry.number("zh", i?.total, {});return /** @type {LocalizedString} */ (`第 ${from__number}–${to__number} 项，共 ${total__number} 项`)
};

const ja_explore_results_range = /** @type {(inputs: Explore_Results_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("ja", i?.from, {});
	const to__number = registry.number("ja", i?.to, {});
	const total__number = registry.number("ja", i?.total, {});return /** @type {LocalizedString} */ (`${total__number} 件中 ${from__number}–${to__number} 件`)
};

/**
* | output |
* | --- |
* | "Showing {from__number}–{to__number} of {total__number}" |
*
* @param {Explore_Results_RangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_results_range = /** @type {((inputs: Explore_Results_RangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Results_RangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_results_range(inputs)
	if (locale === "de") return de_explore_results_range(inputs)
	if (locale === "fr") return fr_explore_results_range(inputs)
	if (locale === "it") return it_explore_results_range(inputs)
	if (locale === "nl") return nl_explore_results_range(inputs)
	if (locale === "pl") return pl_explore_results_range(inputs)
	if (locale === "pt") return pt_explore_results_range(inputs)
	if (locale === "ru") return ru_explore_results_range(inputs)
	if (locale === "sv") return sv_explore_results_range(inputs)
	if (locale === "tr") return tr_explore_results_range(inputs)
	if (locale === "zh") return zh_explore_results_range(inputs)
	if (locale === "ja") return ja_explore_results_range(inputs)
	return en_explore_results_range(inputs)
});
