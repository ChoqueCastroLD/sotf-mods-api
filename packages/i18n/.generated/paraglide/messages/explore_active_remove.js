/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Explore_Active_RemoveInputs */

const en_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove filter: ${i?.label}`)
};

const es_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar filtro: ${i?.label}`)
};

const de_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter entfernen: ${i?.label}`)
};

const fr_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer le filtre : ${i?.label}`)
};

const it_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi filtro: ${i?.label}`)
};

const nl_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter verwijderen: ${i?.label}`)
};

const pl_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń filtr: ${i?.label}`)
};

const pt_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover filtro: ${i?.label}`)
};

const ru_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Убрать фильтр: ${i?.label}`)
};

const sv_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort filter: ${i?.label}`)
};

const tr_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtreyi kaldır: ${i?.label}`)
};

const zh_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除筛选：${i?.label}`)
};

const ja_explore_active_remove = /** @type {(inputs: Explore_Active_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`絞り込みを解除：${i?.label}`)
};

/**
* | output |
* | --- |
* | "Remove filter: {label}" |
*
* @param {Explore_Active_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_active_remove = /** @type {((inputs: Explore_Active_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Active_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_active_remove(inputs)
	if (locale === "de") return de_explore_active_remove(inputs)
	if (locale === "fr") return fr_explore_active_remove(inputs)
	if (locale === "it") return it_explore_active_remove(inputs)
	if (locale === "nl") return nl_explore_active_remove(inputs)
	if (locale === "pl") return pl_explore_active_remove(inputs)
	if (locale === "pt") return pt_explore_active_remove(inputs)
	if (locale === "ru") return ru_explore_active_remove(inputs)
	if (locale === "sv") return sv_explore_active_remove(inputs)
	if (locale === "tr") return tr_explore_active_remove(inputs)
	if (locale === "zh") return zh_explore_active_remove(inputs)
	if (locale === "ja") return ja_explore_active_remove(inputs)
	return en_explore_active_remove(inputs)
});
