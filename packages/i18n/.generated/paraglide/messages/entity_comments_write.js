/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Entity_Comments_WriteInputs */

const en_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write a comment…`)
};

const es_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe un comentario…`)
};

const de_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar schreiben…`)
};

const fr_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrire un commentaire…`)
};

const it_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi un commento…`)
};

const nl_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijf een reactie…`)
};

const pl_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz komentarz…`)
};

const pt_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escreva um comentário…`)
};

const ru_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Напишите комментарий…`)
};

const sv_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv en kommentar…`)
};

const tr_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yaz…`)
};

const zh_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写评论…`)
};

const ja_entity_comments_write = /** @type {(inputs: Entity_Comments_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを書く…`)
};

/**
* | output |
* | --- |
* | "Write a comment…" |
*
* @param {Entity_Comments_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_comments_write = /** @type {((inputs?: Entity_Comments_WriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Comments_WriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_comments_write(inputs)
	if (locale === "de") return de_entity_comments_write(inputs)
	if (locale === "fr") return fr_entity_comments_write(inputs)
	if (locale === "it") return it_entity_comments_write(inputs)
	if (locale === "nl") return nl_entity_comments_write(inputs)
	if (locale === "pl") return pl_entity_comments_write(inputs)
	if (locale === "pt") return pt_entity_comments_write(inputs)
	if (locale === "ru") return ru_entity_comments_write(inputs)
	if (locale === "sv") return sv_entity_comments_write(inputs)
	if (locale === "tr") return tr_entity_comments_write(inputs)
	if (locale === "zh") return zh_entity_comments_write(inputs)
	if (locale === "ja") return ja_entity_comments_write(inputs)
	return en_entity_comments_write(inputs)
});
