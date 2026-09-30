/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rating: NonNullable<unknown>, count: NonNullable<unknown> }} Ui_Domain_Rating_SummaryInputs */

const en_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Rated ${i?.rating} out of 5 from ${count__number} review`);
	return /** @type {LocalizedString} */ (`Rated ${i?.rating} out of 5 from ${count__number} reviews`)
	
};

const es_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Valoración de ${i?.rating} sobre 5 con ${count__number} reseña`);
	return /** @type {LocalizedString} */ (`Valoración de ${i?.rating} sobre 5 con ${count__number} reseñas`)
	
};

const de_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bewertet mit ${i?.rating} von 5 aus ${count__number} Bewertung`);
	return /** @type {LocalizedString} */ (`Bewertet mit ${i?.rating} von 5 aus ${count__number} Bewertungen`)
	
};

const fr_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Noté ${i?.rating} sur 5 d’après ${count__number} avis`);
	return /** @type {LocalizedString} */ (`Noté ${i?.rating} sur 5 d’après ${count__number} avis`)
	
};

const it_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Valutazione ${i?.rating} su 5 da ${count__number} recensione`);
	return /** @type {LocalizedString} */ (`Valutazione ${i?.rating} su 5 da ${count__number} recensioni`)
	
};

const nl_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Beoordeeld met ${i?.rating} van 5 op basis van ${count__number} review`);
	return /** @type {LocalizedString} */ (`Beoordeeld met ${i?.rating} van 5 op basis van ${count__number} reviews`)
	
};

const pl_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ocena ${i?.rating} na 5 z ${count__number} recenzji`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Ocena ${i?.rating} na 5 z ${count__number} recenzji`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Ocena ${i?.rating} na 5 z ${count__number} recenzji`);
	return /** @type {LocalizedString} */ (`Ocena ${i?.rating} na 5 z ${count__number} recenzji`)
	
};

const pt_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nota ${i?.rating} de 5 em ${count__number} avaliação`);
	return /** @type {LocalizedString} */ (`Nota ${i?.rating} de 5 em ${count__number} avaliações`)
	
};

const ru_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Оценка ${i?.rating} из 5 по ${count__number} отзыву`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Оценка ${i?.rating} из 5 по ${count__number} отзывам`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Оценка ${i?.rating} из 5 по ${count__number} отзывам`);
	return /** @type {LocalizedString} */ (`Оценка ${i?.rating} из 5 по ${count__number} отзыва`)
	
};

const sv_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Betyg ${i?.rating} av 5 från ${count__number} recension`);
	return /** @type {LocalizedString} */ (`Betyg ${i?.rating} av 5 från ${count__number} recensioner`)
	
};

const tr_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} incelemeye göre 5 üzerinden ${i?.rating}`);
	return /** @type {LocalizedString} */ (`${count__number} incelemeye göre 5 üzerinden ${i?.rating}`)
	
};

const zh_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`5 分制评分 ${i?.rating}，共 ${count__number} 条评价`)
};

const ja_ui_domain_rating_summary = /** @type {(inputs: Ui_Domain_Rating_SummaryInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`5 段階中 ${i?.rating}（レビュー ${count__number} 件）`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Rated {rating} out of 5 from {count__number} review" |
* | * | "Rated {rating} out of 5 from {count__number} reviews" |
*
* @param {Ui_Domain_Rating_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rating_summary = /** @type {((inputs: Ui_Domain_Rating_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rating_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rating_summary(inputs)
	if (locale === "de") return de_ui_domain_rating_summary(inputs)
	if (locale === "fr") return fr_ui_domain_rating_summary(inputs)
	if (locale === "it") return it_ui_domain_rating_summary(inputs)
	if (locale === "nl") return nl_ui_domain_rating_summary(inputs)
	if (locale === "pl") return pl_ui_domain_rating_summary(inputs)
	if (locale === "pt") return pt_ui_domain_rating_summary(inputs)
	if (locale === "ru") return ru_ui_domain_rating_summary(inputs)
	if (locale === "sv") return sv_ui_domain_rating_summary(inputs)
	if (locale === "tr") return tr_ui_domain_rating_summary(inputs)
	if (locale === "zh") return zh_ui_domain_rating_summary(inputs)
	if (locale === "ja") return ja_ui_domain_rating_summary(inputs)
	return en_ui_domain_rating_summary(inputs)
});
