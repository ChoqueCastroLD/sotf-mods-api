/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Queue_Filtered_Empty_TitleInputs */

const en_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching items`)
};

const es_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay elementos que coincidan`)
};

const de_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine passenden Einträge`)
};

const fr_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun élément ne correspond`)
};

const it_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun elemento corrisponde`)
};

const nl_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen overeenkomende items`)
};

const pl_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pasujących pozycji`)
};

const pt_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum item corresponde`)
};

const ru_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничего не найдено`)
};

const sv_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga matchande objekt`)
};

const tr_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen öğe yok`)
};

const zh_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合条件的项目`)
};

const ja_ranger_queue_filtered_empty_title = /** @type {(inputs: Ranger_Queue_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`該当する項目はありません`)
};

/**
* | output |
* | --- |
* | "No matching items" |
*
* @param {Ranger_Queue_Filtered_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_queue_filtered_empty_title = /** @type {((inputs?: Ranger_Queue_Filtered_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Queue_Filtered_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_queue_filtered_empty_title(inputs)
	if (locale === "de") return de_ranger_queue_filtered_empty_title(inputs)
	if (locale === "fr") return fr_ranger_queue_filtered_empty_title(inputs)
	if (locale === "it") return it_ranger_queue_filtered_empty_title(inputs)
	if (locale === "nl") return nl_ranger_queue_filtered_empty_title(inputs)
	if (locale === "pl") return pl_ranger_queue_filtered_empty_title(inputs)
	if (locale === "pt") return pt_ranger_queue_filtered_empty_title(inputs)
	if (locale === "ru") return ru_ranger_queue_filtered_empty_title(inputs)
	if (locale === "sv") return sv_ranger_queue_filtered_empty_title(inputs)
	if (locale === "tr") return tr_ranger_queue_filtered_empty_title(inputs)
	if (locale === "zh") return zh_ranger_queue_filtered_empty_title(inputs)
	if (locale === "ja") return ja_ranger_queue_filtered_empty_title(inputs)
	return en_ranger_queue_filtered_empty_title(inputs)
});
