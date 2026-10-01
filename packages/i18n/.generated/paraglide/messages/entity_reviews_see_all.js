/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Entity_Reviews_See_AllInputs */

const en_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Be the first to review`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Open 1 review`);
	return /** @type {LocalizedString} */ (`Open all ${count__number} reviews`)
	
};

const es_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Sé el primero en valorar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Abrir 1 reseña`);
	return /** @type {LocalizedString} */ (`Abrir las ${count__number} reseñas`)
	
};

const de_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Schreibe die erste Bewertung`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`1 Bewertung öffnen`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} Bewertungen öffnen`)
	
};

const fr_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Soyez le premier à donner un avis`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ouvrir 1 avis`);
	return /** @type {LocalizedString} */ (`Ouvrir les ${count__number} avis`)
	
};

const it_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Sii il primo a recensire`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Apri 1 recensione`);
	return /** @type {LocalizedString} */ (`Apri tutte le ${count__number} recensioni`)
	
};

const nl_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Schrijf de eerste recensie`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`1 recensie openen`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} recensies openen`)
	
};

const pl_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Dodaj pierwszą recenzję`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Otwórz 1 recenzję`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Otwórz ${count__number} recenzje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Otwórz ${count__number} recenzji`);
	return /** @type {LocalizedString} */ (`Otwórz ${count__number} recenzji`)
	
};

const pt_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Seja o primeiro a avaliar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Abrir 1 avaliação`);
	return /** @type {LocalizedString} */ (`Abrir as ${count__number} avaliações`)
	
};

const ru_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Оставьте первый отзыв`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Открыть ${count__number} отзыв`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Открыть ${count__number} отзыва`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Открыть ${count__number} отзывов`);
	return /** @type {LocalizedString} */ (`Открыть ${count__number} отзыва`)
	
};

const sv_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Skriv den första recensionen`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Öppna 1 recension`);
	return /** @type {LocalizedString} */ (`Öppna alla ${count__number} recensioner`)
	
};

const tr_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`İlk değerlendirmeyi sen yaz`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`1 değerlendirmeyi aç`);
	return /** @type {LocalizedString} */ (`${count__number} değerlendirmenin tümünü aç`)
	
};

const zh_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`来写第一条评价吧`);
	return /** @type {LocalizedString} */ (`查看全部 ${count__number} 条评价`)
	
};

const ja_entity_reviews_see_all = /** @type {(inputs: Entity_Reviews_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`最初のレビューを書く`);
	return /** @type {LocalizedString} */ (`${count__number} 件のレビューをすべて開く`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Be the first to review" |
* | * | "one" | "Open 1 review" |
* | * | * | "Open all {count__number} reviews" |
*
* @param {Entity_Reviews_See_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_reviews_see_all = /** @type {((inputs: Entity_Reviews_See_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Reviews_See_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_reviews_see_all(inputs)
	if (locale === "de") return de_entity_reviews_see_all(inputs)
	if (locale === "fr") return fr_entity_reviews_see_all(inputs)
	if (locale === "it") return it_entity_reviews_see_all(inputs)
	if (locale === "nl") return nl_entity_reviews_see_all(inputs)
	if (locale === "pl") return pl_entity_reviews_see_all(inputs)
	if (locale === "pt") return pt_entity_reviews_see_all(inputs)
	if (locale === "ru") return ru_entity_reviews_see_all(inputs)
	if (locale === "sv") return sv_entity_reviews_see_all(inputs)
	if (locale === "tr") return tr_entity_reviews_see_all(inputs)
	if (locale === "zh") return zh_entity_reviews_see_all(inputs)
	if (locale === "ja") return ja_entity_reviews_see_all(inputs)
	return en_entity_reviews_see_all(inputs)
});
