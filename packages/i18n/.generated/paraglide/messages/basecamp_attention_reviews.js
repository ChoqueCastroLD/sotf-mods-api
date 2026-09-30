/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} Basecamp_Attention_ReviewsInputs */

const en_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} review without a reply`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} reviews without a reply`)
	
};

const es_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} reseña sin responder`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} reseñas sin responder`)
	
};

const de_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} Bewertung ohne Antwort`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} Bewertungen ohne Antwort`)
	
};

const fr_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} : ${count__number} avis sans réponse`);
	return /** @type {LocalizedString} */ (`${i?.name} : ${count__number} avis sans réponse`)
	
};

const it_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} recensione senza risposta`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} recensioni senza risposta`)
	
};

const nl_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} review zonder antwoord`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} reviews zonder antwoord`)
	
};

const pl_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} recenzja bez odpowiedzi`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} recenzje bez odpowiedzi`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} recenzji bez odpowiedzi`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} recenzji bez odpowiedzi`)
	
};

const pt_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} avaliação sem resposta`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} avaliações sem resposta`)
	
};

const ru_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} отзыв без ответа`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} отзыва без ответа`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} отзывов без ответа`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} отзыва без ответа`)
	
};

const sv_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} recension utan svar`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} recensioner utan svar`)
	
};

const tr_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} inceleme yanıtsız`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} inceleme yanıtsız`)
	
};

const zh_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：${count__number} 条评价尚未回复`)
};

const ja_basecamp_attention_reviews = /** @type {(inputs: Basecamp_Attention_ReviewsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：未返信のレビューが ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: {count__number} review without a reply" |
* | * | "{name}: {count__number} reviews without a reply" |
*
* @param {Basecamp_Attention_ReviewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_reviews = /** @type {((inputs: Basecamp_Attention_ReviewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_ReviewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_reviews(inputs)
	if (locale === "de") return de_basecamp_attention_reviews(inputs)
	if (locale === "fr") return fr_basecamp_attention_reviews(inputs)
	if (locale === "it") return it_basecamp_attention_reviews(inputs)
	if (locale === "nl") return nl_basecamp_attention_reviews(inputs)
	if (locale === "pl") return pl_basecamp_attention_reviews(inputs)
	if (locale === "pt") return pt_basecamp_attention_reviews(inputs)
	if (locale === "ru") return ru_basecamp_attention_reviews(inputs)
	if (locale === "sv") return sv_basecamp_attention_reviews(inputs)
	if (locale === "tr") return tr_basecamp_attention_reviews(inputs)
	if (locale === "zh") return zh_basecamp_attention_reviews(inputs)
	if (locale === "ja") return ja_basecamp_attention_reviews(inputs)
	return en_basecamp_attention_reviews(inputs)
});
