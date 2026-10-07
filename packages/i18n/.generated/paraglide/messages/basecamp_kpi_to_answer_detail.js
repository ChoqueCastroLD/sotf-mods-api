/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ comments: NonNullable<unknown>, reviews: NonNullable<unknown> }} Basecamp_Kpi_To_Answer_DetailInputs */

const en_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("en", i?.comments, {});
	const comments__number = registry.number("en", i?.comments, {});
	const reviews__plural = registry.plural("en", i?.reviews, {});
	const reviews__number = registry.number("en", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} comment, ${reviews__number} review`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} comment, ${reviews__number} reviews`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} comments, ${reviews__number} review`);
	return /** @type {LocalizedString} */ (`${comments__number} comments, ${reviews__number} reviews`)
	
};

const es_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("es", i?.comments, {});
	const comments__number = registry.number("es", i?.comments, {});
	const reviews__plural = registry.plural("es", i?.reviews, {});
	const reviews__number = registry.number("es", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} comentario, ${reviews__number} reseña`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} comentario, ${reviews__number} reseñas`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} comentarios, ${reviews__number} reseña`);
	return /** @type {LocalizedString} */ (`${comments__number} comentarios, ${reviews__number} reseñas`)
	
};

const de_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("de", i?.comments, {});
	const comments__number = registry.number("de", i?.comments, {});
	const reviews__plural = registry.plural("de", i?.reviews, {});
	const reviews__number = registry.number("de", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} Kommentar, ${reviews__number} Bewertung`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} Kommentar, ${reviews__number} Bewertungen`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} Kommentare, ${reviews__number} Bewertung`);
	return /** @type {LocalizedString} */ (`${comments__number} Kommentare, ${reviews__number} Bewertungen`)
	
};

const fr_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("fr", i?.comments, {});
	const comments__number = registry.number("fr", i?.comments, {});
	const reviews__plural = registry.plural("fr", i?.reviews, {});
	const reviews__number = registry.number("fr", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} commentaire, ${reviews__number} avis`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} commentaire, ${reviews__number} avis`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} commentaires, ${reviews__number} avis`);
	return /** @type {LocalizedString} */ (`${comments__number} commentaires, ${reviews__number} avis`)
	
};

const it_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("it", i?.comments, {});
	const comments__number = registry.number("it", i?.comments, {});
	const reviews__plural = registry.plural("it", i?.reviews, {});
	const reviews__number = registry.number("it", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} commento, ${reviews__number} recensione`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} commento, ${reviews__number} recensioni`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} commenti, ${reviews__number} recensione`);
	return /** @type {LocalizedString} */ (`${comments__number} commenti, ${reviews__number} recensioni`)
	
};

const nl_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("nl", i?.comments, {});
	const comments__number = registry.number("nl", i?.comments, {});
	const reviews__plural = registry.plural("nl", i?.reviews, {});
	const reviews__number = registry.number("nl", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} reactie, ${reviews__number} review`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} reactie, ${reviews__number} reviews`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} reacties, ${reviews__number} review`);
	return /** @type {LocalizedString} */ (`${comments__number} reacties, ${reviews__number} reviews`)
	
};

const pl_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("pl", i?.comments, {});
	const comments__number = registry.number("pl", i?.comments, {});
	const reviews__plural = registry.plural("pl", i?.reviews, {});
	const reviews__number = registry.number("pl", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} komentarz, ${reviews__number} recenzja`);
	if (comments__plural === "one" && reviews__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} komentarz, ${reviews__number} recenzje`);
	if (comments__plural === "one" && reviews__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} komentarz, ${reviews__number} recenzji`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} komentarz, ${reviews__number} recenzji`);
	if (comments__plural === "few" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} komentarze, ${reviews__number} recenzja`);
	if (comments__plural === "few" && reviews__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} komentarze, ${reviews__number} recenzje`);
	if (comments__plural === "few" && reviews__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} komentarze, ${reviews__number} recenzji`);
	if (comments__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} komentarze, ${reviews__number} recenzji`);
	if (comments__plural === "many" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} komentarzy, ${reviews__number} recenzja`);
	if (comments__plural === "many" && reviews__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} komentarzy, ${reviews__number} recenzje`);
	if (comments__plural === "many" && reviews__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} komentarzy, ${reviews__number} recenzji`);
	if (comments__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} komentarzy, ${reviews__number} recenzji`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} komentarza, ${reviews__number} recenzja`);
	if (reviews__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} komentarza, ${reviews__number} recenzje`);
	if (reviews__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} komentarza, ${reviews__number} recenzji`);
	return /** @type {LocalizedString} */ (`${comments__number} komentarza, ${reviews__number} recenzji`)
	
};

const pt_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("pt", i?.comments, {});
	const comments__number = registry.number("pt", i?.comments, {});
	const reviews__plural = registry.plural("pt", i?.reviews, {});
	const reviews__number = registry.number("pt", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} comentário, ${reviews__number} avaliação`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} comentário, ${reviews__number} avaliações`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} comentários, ${reviews__number} avaliação`);
	return /** @type {LocalizedString} */ (`${comments__number} comentários, ${reviews__number} avaliações`)
	
};

const ru_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("ru", i?.comments, {});
	const comments__number = registry.number("ru", i?.comments, {});
	const reviews__plural = registry.plural("ru", i?.reviews, {});
	const reviews__number = registry.number("ru", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} комментарий, ${reviews__number} отзыв`);
	if (comments__plural === "one" && reviews__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} комментарий, ${reviews__number} отзыва`);
	if (comments__plural === "one" && reviews__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} комментарий, ${reviews__number} отзывов`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} комментарий, ${reviews__number} отзыва`);
	if (comments__plural === "few" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} комментария, ${reviews__number} отзыв`);
	if (comments__plural === "few" && reviews__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} комментария, ${reviews__number} отзыва`);
	if (comments__plural === "few" && reviews__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} комментария, ${reviews__number} отзывов`);
	if (comments__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} комментария, ${reviews__number} отзыва`);
	if (comments__plural === "many" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} комментариев, ${reviews__number} отзыв`);
	if (comments__plural === "many" && reviews__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} комментариев, ${reviews__number} отзыва`);
	if (comments__plural === "many" && reviews__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} комментариев, ${reviews__number} отзывов`);
	if (comments__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} комментариев, ${reviews__number} отзыва`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} комментария, ${reviews__number} отзыв`);
	if (reviews__plural === "few") return /** @type {LocalizedString} */ (`${comments__number} комментария, ${reviews__number} отзыва`);
	if (reviews__plural === "many") return /** @type {LocalizedString} */ (`${comments__number} комментария, ${reviews__number} отзывов`);
	return /** @type {LocalizedString} */ (`${comments__number} комментария, ${reviews__number} отзыва`)
	
};

const sv_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("sv", i?.comments, {});
	const comments__number = registry.number("sv", i?.comments, {});
	const reviews__plural = registry.plural("sv", i?.reviews, {});
	const reviews__number = registry.number("sv", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} kommentar, ${reviews__number} recension`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} kommentar, ${reviews__number} recensioner`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} kommentarer, ${reviews__number} recension`);
	return /** @type {LocalizedString} */ (`${comments__number} kommentarer, ${reviews__number} recensioner`)
	
};

const tr_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {const comments__plural = registry.plural("tr", i?.comments, {});
	const comments__number = registry.number("tr", i?.comments, {});
	const reviews__plural = registry.plural("tr", i?.reviews, {});
	const reviews__number = registry.number("tr", i?.reviews, {});
	if (comments__plural === "one" && reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} yorum, ${reviews__number} değerlendirme`);
	if (comments__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} yorum, ${reviews__number} değerlendirme`);
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${comments__number} yorum, ${reviews__number} değerlendirme`);
	return /** @type {LocalizedString} */ (`${comments__number} yorum, ${reviews__number} değerlendirme`)
	
};

const zh_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {
	const comments__plural = registry.plural("zh", i?.comments, {});
	const comments__number = registry.number("zh", i?.comments, {});
	const reviews__plural = registry.plural("zh", i?.reviews, {});
	const reviews__number = registry.number("zh", i?.reviews, {});return /** @type {LocalizedString} */ (`${comments__number} 条评论，${reviews__number} 条评价`)
};

const ja_basecamp_kpi_to_answer_detail = /** @type {(inputs: Basecamp_Kpi_To_Answer_DetailInputs) => LocalizedString} */ (i) => {
	const comments__plural = registry.plural("ja", i?.comments, {});
	const comments__number = registry.number("ja", i?.comments, {});
	const reviews__plural = registry.plural("ja", i?.reviews, {});
	const reviews__number = registry.number("ja", i?.reviews, {});return /** @type {LocalizedString} */ (`コメント ${comments__number} 件、レビュー ${reviews__number} 件`)
};

/**
* | comments__plural | reviews__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{comments__number} comment, {reviews__number} review" |
* | "one" | * | "{comments__number} comment, {reviews__number} reviews" |
* | * | "one" | "{comments__number} comments, {reviews__number} review" |
* | * | * | "{comments__number} comments, {reviews__number} reviews" |
*
* @param {Basecamp_Kpi_To_Answer_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_to_answer_detail = /** @type {((inputs: Basecamp_Kpi_To_Answer_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_To_Answer_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "de") return de_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "fr") return fr_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "it") return it_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "nl") return nl_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "pl") return pl_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "pt") return pt_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "ru") return ru_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "sv") return sv_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "tr") return tr_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "zh") return zh_basecamp_kpi_to_answer_detail(inputs)
	if (locale === "ja") return ja_basecamp_kpi_to_answer_detail(inputs)
	return en_basecamp_kpi_to_answer_detail(inputs)
});
