/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Emails_Notify_Creator_ReviewsInputs */

const en_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new review`);
	return /** @type {LocalizedString} */ (`${count__number} new reviews`)
	
};

const es_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reseña nueva`);
	return /** @type {LocalizedString} */ (`${count__number} reseñas nuevas`)
	
};

const de_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neue Bewertung`);
	return /** @type {LocalizedString} */ (`${count__number} neue Bewertungen`)
	
};

const fr_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouvel avis`);
	return /** @type {LocalizedString} */ (`${count__number} nouveaux avis`)
	
};

const it_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuova recensione`);
	return /** @type {LocalizedString} */ (`${count__number} nuove recensioni`)
	
};

const nl_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuwe beoordeling`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe beoordelingen`)
	
};

const pl_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowa recenzja`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe recenzje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych recenzji`);
	return /** @type {LocalizedString} */ (`${count__number} nowej recenzji`)
	
};

const pt_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nova avaliação`);
	return /** @type {LocalizedString} */ (`${count__number} novas avaliações`)
	
};

const ru_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый отзыв`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых отзыва`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых отзывов`);
	return /** @type {LocalizedString} */ (`${count__number} нового отзыва`)
	
};

const sv_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny recension`);
	return /** @type {LocalizedString} */ (`${count__number} nya recensioner`)
	
};

const tr_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yeni inceleme`);
	return /** @type {LocalizedString} */ (`${count__number} yeni inceleme`)
	
};

const zh_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 条新评价`)
};

const ja_emails_notify_creator_reviews = /** @type {(inputs: Emails_Notify_Creator_ReviewsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`新しいレビュー ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new review" |
* | * | "{count__number} new reviews" |
*
* @param {Emails_Notify_Creator_ReviewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_reviews = /** @type {((inputs: Emails_Notify_Creator_ReviewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_ReviewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_reviews(inputs)
	if (locale === "de") return de_emails_notify_creator_reviews(inputs)
	if (locale === "fr") return fr_emails_notify_creator_reviews(inputs)
	if (locale === "it") return it_emails_notify_creator_reviews(inputs)
	if (locale === "nl") return nl_emails_notify_creator_reviews(inputs)
	if (locale === "pl") return pl_emails_notify_creator_reviews(inputs)
	if (locale === "pt") return pt_emails_notify_creator_reviews(inputs)
	if (locale === "ru") return ru_emails_notify_creator_reviews(inputs)
	if (locale === "sv") return sv_emails_notify_creator_reviews(inputs)
	if (locale === "tr") return tr_emails_notify_creator_reviews(inputs)
	if (locale === "zh") return zh_emails_notify_creator_reviews(inputs)
	if (locale === "ja") return ja_emails_notify_creator_reviews(inputs)
	return en_emails_notify_creator_reviews(inputs)
});
