/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Scope_Social_Write_HintInputs */

const en_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post comments and reviews, and follow mods and creators.`)
};

const es_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar comentarios y reseñas, y seguir mods y creadores.`)
};

const de_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare und Bewertungen schreiben sowie Mods und Creator folgen.`)
};

const fr_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier des commentaires et des avis, et suivre des mods et des créateurs.`)
};

const it_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicare commenti e recensioni e seguire mod e creator.`)
};

const nl_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties en recensies plaatsen en mods en makers volgen.`)
};

const pl_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodawanie komentarzy i recenzji oraz obserwowanie modów i twórców.`)
};

const pt_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar comentários e avaliações, e seguir mods e criadores.`)
};

const ru_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии и отзывы, подписки на моды и авторов.`)
};

const sv_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriva kommentarer och recensioner samt följa moddar och skapare.`)
};

const tr_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum ve inceleme yazma, mod ve içerik üreticilerini takip etme.`)
};

const zh_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发表评论和评价，关注模组和创作者。`)
};

const ja_tokens_scope_social_write_hint = /** @type {(inputs: Tokens_Scope_Social_Write_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントとレビューの投稿、MOD やクリエイターのフォロー。`)
};

/**
* | output |
* | --- |
* | "Post comments and reviews, and follow mods and creators." |
*
* @param {Tokens_Scope_Social_Write_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_scope_social_write_hint = /** @type {((inputs?: Tokens_Scope_Social_Write_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Scope_Social_Write_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_scope_social_write_hint(inputs)
	if (locale === "de") return de_tokens_scope_social_write_hint(inputs)
	if (locale === "fr") return fr_tokens_scope_social_write_hint(inputs)
	if (locale === "it") return it_tokens_scope_social_write_hint(inputs)
	if (locale === "nl") return nl_tokens_scope_social_write_hint(inputs)
	if (locale === "pl") return pl_tokens_scope_social_write_hint(inputs)
	if (locale === "pt") return pt_tokens_scope_social_write_hint(inputs)
	if (locale === "ru") return ru_tokens_scope_social_write_hint(inputs)
	if (locale === "sv") return sv_tokens_scope_social_write_hint(inputs)
	if (locale === "tr") return tr_tokens_scope_social_write_hint(inputs)
	if (locale === "zh") return zh_tokens_scope_social_write_hint(inputs)
	if (locale === "ja") return ja_tokens_scope_social_write_hint(inputs)
	return en_tokens_scope_social_write_hint(inputs)
});
