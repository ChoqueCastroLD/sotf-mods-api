/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rating: NonNullable<unknown> }} Ui_Domain_Rating_Out_OfInputs */

const en_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rated ${i?.rating} out of 5`)
};

const es_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Valorado con ${i?.rating} de 5`)
};

const de_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bewertet mit ${i?.rating} von 5`)
};

const fr_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Noté ${i?.rating} sur 5`)
};

const it_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Valutata ${i?.rating} su 5`)
};

const nl_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beoordeeld met ${i?.rating} van de 5`)
};

const pl_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ocena ${i?.rating} na 5`)
};

const pt_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avaliado com ${i?.rating} de 5`)
};

const ru_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Оценка ${i?.rating} из 5`)
};

const sv_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Betyg ${i?.rating} av 5`)
};

const tr_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`5 üzerinden ${i?.rating} puan`)
};

const zh_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`评分 ${i?.rating}（满分 5）`)
};

const ja_ui_domain_rating_out_of = /** @type {(inputs: Ui_Domain_Rating_Out_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`5 段階中 ${i?.rating}`)
};

/**
* | output |
* | --- |
* | "Rated {rating} out of 5" |
*
* @param {Ui_Domain_Rating_Out_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rating_out_of = /** @type {((inputs: Ui_Domain_Rating_Out_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rating_Out_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rating_out_of(inputs)
	if (locale === "de") return de_ui_domain_rating_out_of(inputs)
	if (locale === "fr") return fr_ui_domain_rating_out_of(inputs)
	if (locale === "it") return it_ui_domain_rating_out_of(inputs)
	if (locale === "nl") return nl_ui_domain_rating_out_of(inputs)
	if (locale === "pl") return pl_ui_domain_rating_out_of(inputs)
	if (locale === "pt") return pt_ui_domain_rating_out_of(inputs)
	if (locale === "ru") return ru_ui_domain_rating_out_of(inputs)
	if (locale === "sv") return sv_ui_domain_rating_out_of(inputs)
	if (locale === "tr") return tr_ui_domain_rating_out_of(inputs)
	if (locale === "zh") return zh_ui_domain_rating_out_of(inputs)
	if (locale === "ja") return ja_ui_domain_rating_out_of(inputs)
	return en_ui_domain_rating_out_of(inputs)
});
