/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reviews_Not_EnoughInputs */

const en_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not enough reviews for a score yet.`)
};

const es_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay reseñas suficientes para una nota.`)
};

const de_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nicht genug Bewertungen für eine Wertung.`)
};

const fr_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore assez d’avis pour une note.`)
};

const it_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ci sono ancora abbastanza recensioni per un punteggio.`)
};

const nl_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niet genoeg reviews voor een score.`)
};

const pl_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za mało recenzji, by wystawić ocenę.`)
};

const pt_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há avaliações suficientes para uma nota.`)
};

const ru_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока мало отзывов для оценки.`)
};

const sv_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte tillräckligt många recensioner för ett betyg än.`)
};

const tr_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puan için henüz yeterli inceleme yok.`)
};

const zh_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价数量还不足以计算评分。`)
};

const ja_ui_domain_reviews_not_enough = /** @type {(inputs: Ui_Domain_Reviews_Not_EnoughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スコアを出すにはレビューがまだ足りません。`)
};

/**
* | output |
* | --- |
* | "Not enough reviews for a score yet." |
*
* @param {Ui_Domain_Reviews_Not_EnoughInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reviews_not_enough = /** @type {((inputs?: Ui_Domain_Reviews_Not_EnoughInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reviews_Not_EnoughInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reviews_not_enough(inputs)
	if (locale === "de") return de_ui_domain_reviews_not_enough(inputs)
	if (locale === "fr") return fr_ui_domain_reviews_not_enough(inputs)
	if (locale === "it") return it_ui_domain_reviews_not_enough(inputs)
	if (locale === "nl") return nl_ui_domain_reviews_not_enough(inputs)
	if (locale === "pl") return pl_ui_domain_reviews_not_enough(inputs)
	if (locale === "pt") return pt_ui_domain_reviews_not_enough(inputs)
	if (locale === "ru") return ru_ui_domain_reviews_not_enough(inputs)
	if (locale === "sv") return sv_ui_domain_reviews_not_enough(inputs)
	if (locale === "tr") return tr_ui_domain_reviews_not_enough(inputs)
	if (locale === "zh") return zh_ui_domain_reviews_not_enough(inputs)
	if (locale === "ja") return ja_ui_domain_reviews_not_enough(inputs)
	return en_ui_domain_reviews_not_enough(inputs)
});
