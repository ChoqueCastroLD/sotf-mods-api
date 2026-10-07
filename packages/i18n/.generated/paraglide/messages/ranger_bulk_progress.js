/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ done: NonNullable<unknown>, total: NonNullable<unknown> }} Ranger_Bulk_ProgressInputs */

const en_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Working… ${i?.done} of ${i?.total}`)
};

const es_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Procesando… ${i?.done} de ${i?.total}`)
};

const de_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wird bearbeitet… ${i?.done} von ${i?.total}`)
};

const fr_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traitement… ${i?.done} sur ${i?.total}`)
};

const it_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Elaborazione… ${i?.done} di ${i?.total}`)
};

const nl_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bezig… ${i?.done} van ${i?.total}`)
};

const pl_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przetwarzanie… ${i?.done} z ${i?.total}`)
};

const pt_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Processando… ${i?.done} de ${i?.total}`)
};

const ru_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выполняется… ${i?.done} из ${i?.total}`)
};

const sv_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Arbetar… ${i?.done} av ${i?.total}`)
};

const tr_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İşleniyor… ${i?.done}/${i?.total}`)
};

const zh_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`处理中… ${i?.done}/${i?.total}`)
};

const ja_ranger_bulk_progress = /** @type {(inputs: Ranger_Bulk_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`処理中… ${i?.total} 件中 ${i?.done} 件`)
};

/**
* | output |
* | --- |
* | "Working… {done} of {total}" |
*
* @param {Ranger_Bulk_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_progress = /** @type {((inputs: Ranger_Bulk_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_progress(inputs)
	if (locale === "de") return de_ranger_bulk_progress(inputs)
	if (locale === "fr") return fr_ranger_bulk_progress(inputs)
	if (locale === "it") return it_ranger_bulk_progress(inputs)
	if (locale === "nl") return nl_ranger_bulk_progress(inputs)
	if (locale === "pl") return pl_ranger_bulk_progress(inputs)
	if (locale === "pt") return pt_ranger_bulk_progress(inputs)
	if (locale === "ru") return ru_ranger_bulk_progress(inputs)
	if (locale === "sv") return sv_ranger_bulk_progress(inputs)
	if (locale === "tr") return tr_ranger_bulk_progress(inputs)
	if (locale === "zh") return zh_ranger_bulk_progress(inputs)
	if (locale === "ja") return ja_ranger_bulk_progress(inputs)
	return en_ranger_bulk_progress(inputs)
});
