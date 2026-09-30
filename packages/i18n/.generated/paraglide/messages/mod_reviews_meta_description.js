/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} Mod_Reviews_Meta_DescriptionInputs */

const en_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Player reviews of ${i?.name}, a Sons of the Forest mod: ${count__number} review with ratings, verified downloads and creator replies.`);
	return /** @type {LocalizedString} */ (`Player reviews of ${i?.name}, a Sons of the Forest mod: ${count__number} reviews with ratings, verified downloads and creator replies.`)
	
};

const es_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Reseñas de ${i?.name}, un mod de Sons of the Forest: ${count__number} reseña con valoraciones, descargas verificadas y respuestas del creador.`);
	return /** @type {LocalizedString} */ (`Reseñas de ${i?.name}, un mod de Sons of the Forest: ${count__number} reseñas con valoraciones, descargas verificadas y respuestas del creador.`)
	
};

const de_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Spielerbewertungen zu ${i?.name}, einem Sons-of-the-Forest-Mod: ${count__number} Bewertung mit Sternen, verifizierten Downloads und Antworten des Erstellers.`);
	return /** @type {LocalizedString} */ (`Spielerbewertungen zu ${i?.name}, einem Sons-of-the-Forest-Mod: ${count__number} Bewertungen mit Sternen, verifizierten Downloads und Antworten des Erstellers.`)
	
};

const fr_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Avis des joueurs sur ${i?.name}, un mod Sons of the Forest : ${count__number} avis avec notes, téléchargements vérifiés et réponses du créateur.`);
	return /** @type {LocalizedString} */ (`Avis des joueurs sur ${i?.name}, un mod Sons of the Forest : ${count__number} avis avec notes, téléchargements vérifiés et réponses du créateur.`)
	
};

const it_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Recensioni dei giocatori su ${i?.name}, una mod di Sons of the Forest: ${count__number} recensione con voti, download verificati e risposte del creatore.`);
	return /** @type {LocalizedString} */ (`Recensioni dei giocatori su ${i?.name}, una mod di Sons of the Forest: ${count__number} recensioni con voti, download verificati e risposte del creatore.`)
	
};

const nl_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Spelersreviews van ${i?.name}, een Sons of the Forest-mod: ${count__number} review met beoordelingen, geverifieerde downloads en antwoorden van de maker.`);
	return /** @type {LocalizedString} */ (`Spelersreviews van ${i?.name}, een Sons of the Forest-mod: ${count__number} reviews met beoordelingen, geverifieerde downloads en antwoorden van de maker.`)
	
};

const pl_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Recenzje graczy moda ${i?.name} do Sons of the Forest: ${count__number} recenzja z ocenami, zweryfikowanymi pobraniami i odpowiedziami twórcy.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Recenzje graczy moda ${i?.name} do Sons of the Forest: ${count__number} recenzje z ocenami, zweryfikowanymi pobraniami i odpowiedziami twórcy.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Recenzje graczy moda ${i?.name} do Sons of the Forest: ${count__number} recenzji z ocenami, zweryfikowanymi pobraniami i odpowiedziami twórcy.`);
	return /** @type {LocalizedString} */ (`Recenzje graczy moda ${i?.name} do Sons of the Forest: ${count__number} recenzji z ocenami, zweryfikowanymi pobraniami i odpowiedziami twórcy.`)
	
};

const pt_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Avaliações de ${i?.name}, um mod de Sons of the Forest: ${count__number} avaliação com notas, downloads verificados e respostas do criador.`);
	return /** @type {LocalizedString} */ (`Avaliações de ${i?.name}, um mod de Sons of the Forest: ${count__number} avaliações com notas, downloads verificados e respostas do criador.`)
	
};

const ru_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Отзывы игроков о ${i?.name}, моде для Sons of the Forest: ${count__number} отзыв с оценками, подтверждёнными загрузками и ответами автора.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Отзывы игроков о ${i?.name}, моде для Sons of the Forest: ${count__number} отзыва с оценками, подтверждёнными загрузками и ответами автора.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Отзывы игроков о ${i?.name}, моде для Sons of the Forest: ${count__number} отзывов с оценками, подтверждёнными загрузками и ответами автора.`);
	return /** @type {LocalizedString} */ (`Отзывы игроков о ${i?.name}, моде для Sons of the Forest: ${count__number} отзыва с оценками, подтверждёнными загрузками и ответами автора.`)
	
};

const sv_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Spelarrecensioner av ${i?.name}, en mod till Sons of the Forest: ${count__number} recension med betyg, verifierade nedladdningar och svar från skaparen.`);
	return /** @type {LocalizedString} */ (`Spelarrecensioner av ${i?.name}, en mod till Sons of the Forest: ${count__number} recensioner med betyg, verifierade nedladdningar och svar från skaparen.`)
	
};

const tr_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bir Sons of the Forest modu olan ${i?.name} için oyuncu incelemeleri: puanlar, doğrulanmış indirmeler ve yapımcı yanıtlarıyla ${count__number} inceleme.`);
	return /** @type {LocalizedString} */ (`Bir Sons of the Forest modu olan ${i?.name} için oyuncu incelemeleri: puanlar, doğrulanmış indirmeler ve yapımcı yanıtlarıyla ${count__number} inceleme.`)
	
};

const zh_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest 模组 ${i?.name} 的玩家评价：${count__number} 条评价，含评分、已验证下载和作者回复。`)
};

const ja_mod_reviews_meta_description = /** @type {(inputs: Mod_Reviews_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest の MOD ${i?.name} のプレイヤーレビュー：評価、確認済みダウンロード、作者の返信つきで ${count__number} 件。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Player reviews of {name}, a Sons of the Forest mod: {count__number} review with ratings, verified downloads and creator replies." |
* | * | "Player reviews of {name}, a Sons of the Forest mod: {count__number} reviews with ratings, verified downloads and creator replies." |
*
* @param {Mod_Reviews_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_meta_description = /** @type {((inputs: Mod_Reviews_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_meta_description(inputs)
	if (locale === "de") return de_mod_reviews_meta_description(inputs)
	if (locale === "fr") return fr_mod_reviews_meta_description(inputs)
	if (locale === "it") return it_mod_reviews_meta_description(inputs)
	if (locale === "nl") return nl_mod_reviews_meta_description(inputs)
	if (locale === "pl") return pl_mod_reviews_meta_description(inputs)
	if (locale === "pt") return pt_mod_reviews_meta_description(inputs)
	if (locale === "ru") return ru_mod_reviews_meta_description(inputs)
	if (locale === "sv") return sv_mod_reviews_meta_description(inputs)
	if (locale === "tr") return tr_mod_reviews_meta_description(inputs)
	if (locale === "zh") return zh_mod_reviews_meta_description(inputs)
	if (locale === "ja") return ja_mod_reviews_meta_description(inputs)
	return en_mod_reviews_meta_description(inputs)
});
