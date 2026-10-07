/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Sort_UpdatesInputs */

const en_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates first`)
};

const es_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizaciones primero`)
};

const de_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates zuerst`)
};

const fr_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mises à jour d'abord`)
};

const it_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima gli aggiornamenti`)
};

const nl_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates eerst`)
};

const pl_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw aktualizacje`)
};

const pt_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizações primeiro`)
};

const ru_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала с обновлениями`)
};

const sv_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdateringar först`)
};

const tr_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce güncellemeler`)
};

const zh_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`优先显示有更新的`)
};

const ja_me_sort_updates = /** @type {(inputs: Me_Sort_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新ありを先頭に`)
};

/**
* | output |
* | --- |
* | "Updates first" |
*
* @param {Me_Sort_UpdatesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_sort_updates = /** @type {((inputs?: Me_Sort_UpdatesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Sort_UpdatesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_sort_updates(inputs)
	if (locale === "de") return de_me_sort_updates(inputs)
	if (locale === "fr") return fr_me_sort_updates(inputs)
	if (locale === "it") return it_me_sort_updates(inputs)
	if (locale === "nl") return nl_me_sort_updates(inputs)
	if (locale === "pl") return pl_me_sort_updates(inputs)
	if (locale === "pt") return pt_me_sort_updates(inputs)
	if (locale === "ru") return ru_me_sort_updates(inputs)
	if (locale === "sv") return sv_me_sort_updates(inputs)
	if (locale === "tr") return tr_me_sort_updates(inputs)
	if (locale === "zh") return zh_me_sort_updates(inputs)
	if (locale === "ja") return ja_me_sort_updates(inputs)
	return en_me_sort_updates(inputs)
});
