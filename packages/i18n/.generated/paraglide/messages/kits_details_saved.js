/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Details_SavedInputs */

const en_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details saved`)
};

const es_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles guardados`)
};

const de_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details gespeichert`)
};

const fr_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails enregistrés`)
};

const it_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli salvati`)
};

const nl_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details opgeslagen`)
};

const pl_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano szczegóły`)
};

const pt_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes salvos`)
};

const ru_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сведения сохранены`)
};

const sv_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljerna har sparats`)
};

const tr_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar kaydedildi`)
};

const zh_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详细信息已保存`)
};

const ja_kits_details_saved = /** @type {(inputs: Kits_Details_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細を保存しました`)
};

/**
* | output |
* | --- |
* | "Details saved" |
*
* @param {Kits_Details_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_details_saved = /** @type {((inputs?: Kits_Details_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Details_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_details_saved(inputs)
	if (locale === "de") return de_kits_details_saved(inputs)
	if (locale === "fr") return fr_kits_details_saved(inputs)
	if (locale === "it") return it_kits_details_saved(inputs)
	if (locale === "nl") return nl_kits_details_saved(inputs)
	if (locale === "pl") return pl_kits_details_saved(inputs)
	if (locale === "pt") return pt_kits_details_saved(inputs)
	if (locale === "ru") return ru_kits_details_saved(inputs)
	if (locale === "sv") return sv_kits_details_saved(inputs)
	if (locale === "tr") return tr_kits_details_saved(inputs)
	if (locale === "zh") return zh_kits_details_saved(inputs)
	if (locale === "ja") return ja_kits_details_saved(inputs)
	return en_kits_details_saved(inputs)
});
