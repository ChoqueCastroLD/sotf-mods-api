/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Comments_EmptyInputs */

const en_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No comments yet. Start the conversation.`)
};

const es_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay comentarios. Empieza la conversación.`)
};

const de_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Kommentare. Starte die Unterhaltung.`)
};

const fr_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de commentaires. Lancez la discussion.`)
};

const it_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun commento. Inizia la conversazione.`)
};

const nl_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reacties. Begin het gesprek.`)
};

const pl_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak komentarzy. Zacznij rozmowę.`)
};

const pt_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há comentários. Comece a conversa.`)
};

const ru_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментариев пока нет. Начните обсуждение.`)
};

const sv_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kommentarer än. Starta samtalet.`)
};

const tr_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yorum yok. Sohbeti başlat.`)
};

const zh_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评论，来开启讨论吧。`)
};

const ja_kitsocial_comments_empty = /** @type {(inputs: Kitsocial_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだコメントはありません。最初のコメントを書きましょう。`)
};

/**
* | output |
* | --- |
* | "No comments yet. Start the conversation." |
*
* @param {Kitsocial_Comments_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_comments_empty = /** @type {((inputs?: Kitsocial_Comments_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Comments_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_comments_empty(inputs)
	if (locale === "de") return de_kitsocial_comments_empty(inputs)
	if (locale === "fr") return fr_kitsocial_comments_empty(inputs)
	if (locale === "it") return it_kitsocial_comments_empty(inputs)
	if (locale === "nl") return nl_kitsocial_comments_empty(inputs)
	if (locale === "pl") return pl_kitsocial_comments_empty(inputs)
	if (locale === "pt") return pt_kitsocial_comments_empty(inputs)
	if (locale === "ru") return ru_kitsocial_comments_empty(inputs)
	if (locale === "sv") return sv_kitsocial_comments_empty(inputs)
	if (locale === "tr") return tr_kitsocial_comments_empty(inputs)
	if (locale === "zh") return zh_kitsocial_comments_empty(inputs)
	if (locale === "ja") return ja_kitsocial_comments_empty(inputs)
	return en_kitsocial_comments_empty(inputs)
});
