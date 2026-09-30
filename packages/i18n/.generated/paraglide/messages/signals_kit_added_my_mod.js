/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown>, kit: NonNullable<unknown> }} Signals_Kit_Added_My_ModInputs */

const en_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} added ${i?.mod} to the kit “${i?.kit}”`)
};

const es_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} añadió ${i?.mod} al kit «${i?.kit}»`)
};

const de_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat ${i?.mod} zum Kit „${i?.kit}“ hinzugefügt`)
};

const fr_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a ajouté ${i?.mod} au kit « ${i?.kit} »`)
};

const it_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha aggiunto ${i?.mod} al kit «${i?.kit}»`)
};

const nl_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} heeft ${i?.mod} toegevoegd aan de kit “${i?.kit}”`)
};

const pl_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} dodał(a) ${i?.mod} do zestawu „${i?.kit}”`)
};

const pt_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} adicionou ${i?.mod} ao kit “${i?.kit}”`)
};

const ru_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} добавил(а) ${i?.mod} в набор «${i?.kit}»`)
};

const sv_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} lade till ${i?.mod} i kitet ”${i?.kit}”`)
};

const tr_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} modunu “${i?.kit}” kitine ekledi`)
};

const zh_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 将 ${i?.mod} 添加到了套件“${i?.kit}”`)
};

const ja_signals_kit_added_my_mod = /** @type {(inputs: Signals_Kit_Added_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} さんが ${i?.mod} をキット「${i?.kit}」に追加しました`)
};

/**
* | output |
* | --- |
* | "{actor} added {mod} to the kit “{kit}”" |
*
* @param {Signals_Kit_Added_My_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_kit_added_my_mod = /** @type {((inputs: Signals_Kit_Added_My_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Kit_Added_My_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_kit_added_my_mod(inputs)
	if (locale === "de") return de_signals_kit_added_my_mod(inputs)
	if (locale === "fr") return fr_signals_kit_added_my_mod(inputs)
	if (locale === "it") return it_signals_kit_added_my_mod(inputs)
	if (locale === "nl") return nl_signals_kit_added_my_mod(inputs)
	if (locale === "pl") return pl_signals_kit_added_my_mod(inputs)
	if (locale === "pt") return pt_signals_kit_added_my_mod(inputs)
	if (locale === "ru") return ru_signals_kit_added_my_mod(inputs)
	if (locale === "sv") return sv_signals_kit_added_my_mod(inputs)
	if (locale === "tr") return tr_signals_kit_added_my_mod(inputs)
	if (locale === "zh") return zh_signals_kit_added_my_mod(inputs)
	if (locale === "ja") return ja_signals_kit_added_my_mod(inputs)
	return en_signals_kit_added_my_mod(inputs)
});
