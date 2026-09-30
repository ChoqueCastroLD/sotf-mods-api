/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Details_SaveInputs */

const en_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save details`)
};

const es_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar detalles`)
};

const de_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details speichern`)
};

const fr_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer les détails`)
};

const it_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva dettagli`)
};

const nl_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details opslaan`)
};

const pl_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz szczegóły`)
};

const pt_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar detalhes`)
};

const ru_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить сведения`)
};

const sv_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara detaljer`)
};

const tr_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntıları kaydet`)
};

const zh_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存详细信息`)
};

const ja_kits_details_save = /** @type {(inputs: Kits_Details_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細を保存`)
};

/**
* | output |
* | --- |
* | "Save details" |
*
* @param {Kits_Details_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_details_save = /** @type {((inputs?: Kits_Details_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Details_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_details_save(inputs)
	if (locale === "de") return de_kits_details_save(inputs)
	if (locale === "fr") return fr_kits_details_save(inputs)
	if (locale === "it") return it_kits_details_save(inputs)
	if (locale === "nl") return nl_kits_details_save(inputs)
	if (locale === "pl") return pl_kits_details_save(inputs)
	if (locale === "pt") return pt_kits_details_save(inputs)
	if (locale === "ru") return ru_kits_details_save(inputs)
	if (locale === "sv") return sv_kits_details_save(inputs)
	if (locale === "tr") return tr_kits_details_save(inputs)
	if (locale === "zh") return zh_kits_details_save(inputs)
	if (locale === "ja") return ja_kits_details_save(inputs)
	return en_kits_details_save(inputs)
});
