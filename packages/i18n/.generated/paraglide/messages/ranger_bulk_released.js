/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Bulk_ReleasedInputs */

const en_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Released: ${i?.count}`)
};

const es_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Liberados: ${i?.count}`)
};

const de_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Freigegeben: ${i?.count}`)
};

const fr_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Libérés : ${i?.count}`)
};

const it_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rilasciati: ${i?.count}`)
};

const nl_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vrijgegeven: ${i?.count}`)
};

const pl_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zwolniono: ${i?.count}`)
};

const pt_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Liberados: ${i?.count}`)
};

const ru_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Освобождено: ${i?.count}`)
};

const sv_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Släppta: ${i?.count}`)
};

const tr_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bırakılan: ${i?.count}`)
};

const zh_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已释放：${i?.count}`)
};

const ja_ranger_bulk_released = /** @type {(inputs: Ranger_Bulk_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`解除しました: ${i?.count}`)
};

/**
* | output |
* | --- |
* | "Released: {count}" |
*
* @param {Ranger_Bulk_ReleasedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_released = /** @type {((inputs: Ranger_Bulk_ReleasedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_ReleasedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_released(inputs)
	if (locale === "de") return de_ranger_bulk_released(inputs)
	if (locale === "fr") return fr_ranger_bulk_released(inputs)
	if (locale === "it") return it_ranger_bulk_released(inputs)
	if (locale === "nl") return nl_ranger_bulk_released(inputs)
	if (locale === "pl") return pl_ranger_bulk_released(inputs)
	if (locale === "pt") return pt_ranger_bulk_released(inputs)
	if (locale === "ru") return ru_ranger_bulk_released(inputs)
	if (locale === "sv") return sv_ranger_bulk_released(inputs)
	if (locale === "tr") return tr_ranger_bulk_released(inputs)
	if (locale === "zh") return zh_ranger_bulk_released(inputs)
	if (locale === "ja") return ja_ranger_bulk_released(inputs)
	return en_ranger_bulk_released(inputs)
});
