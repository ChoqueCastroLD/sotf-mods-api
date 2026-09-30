/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Reviews_TitleInputs */

const en_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Reviews`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} review`);
	return /** @type {LocalizedString} */ (`${count__number} reviews`)
	
};

const es_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Reseñas`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reseña`);
	return /** @type {LocalizedString} */ (`${count__number} reseñas`)
	
};

const de_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Bewertungen`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Bewertung`);
	return /** @type {LocalizedString} */ (`${count__number} Bewertungen`)
	
};

const fr_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Avis`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} avis`);
	return /** @type {LocalizedString} */ (`${count__number} avis`)
	
};

const it_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Recensioni`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} recensione`);
	return /** @type {LocalizedString} */ (`${count__number} recensioni`)
	
};

const nl_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Reviews`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} review`);
	return /** @type {LocalizedString} */ (`${count__number} reviews`)
	
};

const pl_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Recenzje`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} recenzja`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} recenzje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} recenzji`);
	return /** @type {LocalizedString} */ (`${count__number} recenzji`)
	
};

const pt_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Avaliações`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} avaliação`);
	return /** @type {LocalizedString} */ (`${count__number} avaliações`)
	
};

const ru_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Отзывы`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} отзыв`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} отзыва`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} отзывов`);
	return /** @type {LocalizedString} */ (`${count__number} отзыва`)
	
};

const sv_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Recensioner`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} recension`);
	return /** @type {LocalizedString} */ (`${count__number} recensioner`)
	
};

const tr_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`İncelemeler`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} inceleme`);
	return /** @type {LocalizedString} */ (`${count__number} inceleme`)
	
};

const zh_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`评价`);
	return /** @type {LocalizedString} */ (`${count__number} 条评价`)
	
};

const ja_mod_reviews_title = /** @type {(inputs: Mod_Reviews_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`レビュー`);
	return /** @type {LocalizedString} */ (`レビュー ${count__number} 件`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Reviews" |
* | * | "one" | "{count__number} review" |
* | * | * | "{count__number} reviews" |
*
* @param {Mod_Reviews_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_title = /** @type {((inputs: Mod_Reviews_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_title(inputs)
	if (locale === "de") return de_mod_reviews_title(inputs)
	if (locale === "fr") return fr_mod_reviews_title(inputs)
	if (locale === "it") return it_mod_reviews_title(inputs)
	if (locale === "nl") return nl_mod_reviews_title(inputs)
	if (locale === "pl") return pl_mod_reviews_title(inputs)
	if (locale === "pt") return pt_mod_reviews_title(inputs)
	if (locale === "ru") return ru_mod_reviews_title(inputs)
	if (locale === "sv") return sv_mod_reviews_title(inputs)
	if (locale === "tr") return tr_mod_reviews_title(inputs)
	if (locale === "zh") return zh_mod_reviews_title(inputs)
	if (locale === "ja") return ja_mod_reviews_title(inputs)
	return en_mod_reviews_title(inputs)
});
