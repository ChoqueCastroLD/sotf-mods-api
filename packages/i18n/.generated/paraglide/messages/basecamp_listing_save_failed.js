/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Save_FailedInputs */

const en_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The listing could not be saved`)
};

const es_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar la ficha`)
};

const de_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Seite konnte nicht gespeichert werden`)
};

const fr_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La fiche n’a pas pu être enregistrée`)
};

const it_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile salvare la scheda`)
};

const nl_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De pagina kon niet worden opgeslagen`)
};

const pl_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać strony`)
};

const pt_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar a página`)
};

const ru_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить страницу`)
};

const sv_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidan kunde inte sparas`)
};

const tr_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa kaydedilemedi`)
};

const zh_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存页面`)
};

const ja_basecamp_listing_save_failed = /** @type {(inputs: Basecamp_Listing_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページを保存できませんでした`)
};

/**
* | output |
* | --- |
* | "The listing could not be saved" |
*
* @param {Basecamp_Listing_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_save_failed = /** @type {((inputs?: Basecamp_Listing_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_save_failed(inputs)
	if (locale === "de") return de_basecamp_listing_save_failed(inputs)
	if (locale === "fr") return fr_basecamp_listing_save_failed(inputs)
	if (locale === "it") return it_basecamp_listing_save_failed(inputs)
	if (locale === "nl") return nl_basecamp_listing_save_failed(inputs)
	if (locale === "pl") return pl_basecamp_listing_save_failed(inputs)
	if (locale === "pt") return pt_basecamp_listing_save_failed(inputs)
	if (locale === "ru") return ru_basecamp_listing_save_failed(inputs)
	if (locale === "sv") return sv_basecamp_listing_save_failed(inputs)
	if (locale === "tr") return tr_basecamp_listing_save_failed(inputs)
	if (locale === "zh") return zh_basecamp_listing_save_failed(inputs)
	if (locale === "ja") return ja_basecamp_listing_save_failed(inputs)
	return en_basecamp_listing_save_failed(inputs)
});
