/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Comments_EmptyInputs */

const en_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No comments yet. Questions about the modpack and tips go here.`)
};

const es_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay comentarios. Aquí van las preguntas sobre el modpack y los consejos.`)
};

const de_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Kommentare. Fragen zum Modpack und Tipps gehören hierher.`)
};

const fr_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun commentaire pour l’instant. Les questions sur le modpack et les astuces vont ici.`)
};

const it_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun commento. Qui vanno domande sul modpack e consigli.`)
};

const nl_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reacties. Vragen over de modpack en tips horen hier.`)
};

const pl_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak komentarzy. Tu trafiają pytania o modpack i porady.`)
};

const pt_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há comentários. Perguntas sobre o modpack e dicas vão aqui.`)
};

const ru_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментариев пока нет. Здесь задают вопросы о модпаке и делятся советами.`)
};

const sv_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kommentarer än. Frågor om modpaketet och tips hamnar här.`)
};

const tr_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yorum yok. Mod paketiyle ilgili sorular ve ipuçları buraya.`)
};

const zh_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评论。关于整合包的问题和技巧可以写在这里。`)
};

const ja_modpacks_comments_empty = /** @type {(inputs: Modpacks_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだコメントはありません。Modパックについての質問やヒントはここへ。`)
};

/**
* | output |
* | --- |
* | "No comments yet. Questions about the modpack and tips go here." |
*
* @param {Modpacks_Comments_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_comments_empty = /** @type {((inputs?: Modpacks_Comments_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Comments_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_comments_empty(inputs)
	if (locale === "de") return de_modpacks_comments_empty(inputs)
	if (locale === "fr") return fr_modpacks_comments_empty(inputs)
	if (locale === "it") return it_modpacks_comments_empty(inputs)
	if (locale === "nl") return nl_modpacks_comments_empty(inputs)
	if (locale === "pl") return pl_modpacks_comments_empty(inputs)
	if (locale === "pt") return pt_modpacks_comments_empty(inputs)
	if (locale === "ru") return ru_modpacks_comments_empty(inputs)
	if (locale === "sv") return sv_modpacks_comments_empty(inputs)
	if (locale === "tr") return tr_modpacks_comments_empty(inputs)
	if (locale === "zh") return zh_modpacks_comments_empty(inputs)
	if (locale === "ja") return ja_modpacks_comments_empty(inputs)
	return en_modpacks_comments_empty(inputs)
});
