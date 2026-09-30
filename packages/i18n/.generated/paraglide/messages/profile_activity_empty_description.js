/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Activity_Empty_DescriptionInputs */

const en_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hasn’t released, commented, reviewed or reported anything in the last 12 months.`)
};

const es_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} no ha publicado, comentado, reseñado ni reportado nada en los últimos 12 meses.`)
};

const de_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hat in den letzten 12 Monaten nichts veröffentlicht, kommentiert, bewertet oder gemeldet.`)
};

const fr_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} n’a rien publié, commenté, évalué ni signalé au cours des 12 derniers mois.`)
};

const it_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non ha pubblicato, commentato, recensito né segnalato nulla negli ultimi 12 mesi.`)
};

const nl_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} heeft de afgelopen 12 maanden niets gepubliceerd, becommentarieerd, beoordeeld of gemeld.`)
};

const pl_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} przez ostatnie 12 miesięcy niczego nie wydał(a), nie skomentował(a), nie ocenił(a) ani nie zgłosił(a).`)
};

const pt_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} não publicou, comentou, avaliou nem relatou nada nos últimos 12 meses.`)
};

const ru_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} за последние 12 месяцев ничего не публиковал(а), не комментировал(а), не оценивал(а) и не сообщал(а).`)
};

const sv_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} har inte släppt, kommenterat, recenserat eller rapporterat något de senaste 12 månaderna.`)
};

const tr_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} son 12 ayda hiçbir şey yayınlamadı, yorumlamadı, incelemedi ya da bildirmedi.`)
};

const zh_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 在过去 12 个月里没有发布、评论、评价或报告任何内容。`)
};

const ja_profile_activity_empty_description = /** @type {(inputs: Profile_Activity_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} は過去 12 か月、リリース・コメント・レビュー・報告を行っていません。`)
};

/**
* | output |
* | --- |
* | "{name} hasn’t released, commented, reviewed or reported anything in the last 12 months." |
*
* @param {Profile_Activity_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_empty_description = /** @type {((inputs: Profile_Activity_Empty_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Empty_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_empty_description(inputs)
	if (locale === "de") return de_profile_activity_empty_description(inputs)
	if (locale === "fr") return fr_profile_activity_empty_description(inputs)
	if (locale === "it") return it_profile_activity_empty_description(inputs)
	if (locale === "nl") return nl_profile_activity_empty_description(inputs)
	if (locale === "pl") return pl_profile_activity_empty_description(inputs)
	if (locale === "pt") return pt_profile_activity_empty_description(inputs)
	if (locale === "ru") return ru_profile_activity_empty_description(inputs)
	if (locale === "sv") return sv_profile_activity_empty_description(inputs)
	if (locale === "tr") return tr_profile_activity_empty_description(inputs)
	if (locale === "zh") return zh_profile_activity_empty_description(inputs)
	if (locale === "ja") return ja_profile_activity_empty_description(inputs)
	return en_profile_activity_empty_description(inputs)
});
