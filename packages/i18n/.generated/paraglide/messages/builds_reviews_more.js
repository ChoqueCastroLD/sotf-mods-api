/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Builds_Reviews_MoreInputs */

const en_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} more review`);
	return /** @type {LocalizedString} */ (`${count__number} more reviews`)
	
};

const es_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reseña más`);
	return /** @type {LocalizedString} */ (`${count__number} reseñas más`)
	
};

const de_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} weitere Bewertung`);
	return /** @type {LocalizedString} */ (`${count__number} weitere Bewertungen`)
	
};

const fr_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} autre avis`);
	return /** @type {LocalizedString} */ (`${count__number} autres avis`)
	
};

const it_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ancora ${count__number} recensione`);
	return /** @type {LocalizedString} */ (`Altre ${count__number} recensioni`)
	
};

const nl_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nog ${count__number} review`);
	return /** @type {LocalizedString} */ (`Nog ${count__number} reviews`)
	
};

const pl_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} recenzja`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} recenzje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} recenzji`);
	return /** @type {LocalizedString} */ (`Jeszcze ${count__number} recenzji`)
	
};

const pt_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mais ${count__number} avaliação`);
	return /** @type {LocalizedString} */ (`Mais ${count__number} avaliações`)
	
};

const ru_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ещё ${count__number} отзыв`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Ещё ${count__number} отзыва`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Ещё ${count__number} отзывов`);
	return /** @type {LocalizedString} */ (`Ещё ${count__number} отзыва`)
	
};

const sv_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} recension till`);
	return /** @type {LocalizedString} */ (`${count__number} recensioner till`)
	
};

const tr_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} inceleme daha`);
	return /** @type {LocalizedString} */ (`${count__number} inceleme daha`)
	
};

const zh_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还有 ${count__number} 条评价`)
};

const ja_builds_reviews_more = /** @type {(inputs: Builds_Reviews_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ほかにレビュー ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} more review" |
* | * | "{count__number} more reviews" |
*
* @param {Builds_Reviews_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_reviews_more = /** @type {((inputs: Builds_Reviews_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Reviews_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_reviews_more(inputs)
	if (locale === "de") return de_builds_reviews_more(inputs)
	if (locale === "fr") return fr_builds_reviews_more(inputs)
	if (locale === "it") return it_builds_reviews_more(inputs)
	if (locale === "nl") return nl_builds_reviews_more(inputs)
	if (locale === "pl") return pl_builds_reviews_more(inputs)
	if (locale === "pt") return pt_builds_reviews_more(inputs)
	if (locale === "ru") return ru_builds_reviews_more(inputs)
	if (locale === "sv") return sv_builds_reviews_more(inputs)
	if (locale === "tr") return tr_builds_reviews_more(inputs)
	if (locale === "zh") return zh_builds_reviews_more(inputs)
	if (locale === "ja") return ja_builds_reviews_more(inputs)
	return en_builds_reviews_more(inputs)
});
