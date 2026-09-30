/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Comments_EmptyInputs */

const en_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No comments yet. Questions, tips and bug reports go here.`)
};

const es_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay comentarios. Aquí van las preguntas, los trucos y los bugs.`)
};

const de_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Kommentare. Fragen, Tipps und Fehlerberichte gehören hierher.`)
};

const fr_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de commentaires. Questions, astuces et bugs, c’est ici.`)
};

const it_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun commento. Domande, consigli e bug vanno qui.`)
};

const nl_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reacties. Vragen, tips en bugs horen hier.`)
};

const pl_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak komentarzy. Pytania, porady i błędy zgłaszaj tutaj.`)
};

const pt_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há comentários. Dúvidas, dicas e bugs vão aqui.`)
};

const ru_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментариев пока нет. Вопросы, советы и баги — сюда.`)
};

const sv_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kommentarer än. Frågor, tips och buggar hör hemma här.`)
};

const tr_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yorum yok. Sorular, ipuçları ve hatalar buraya.`)
};

const zh_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评论。提问、技巧和 bug 反馈都可以写在这里。`)
};

const ja_mod_comments_empty = /** @type {(inputs: Mod_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだコメントはありません。質問、コツ、バグ報告はこちらへ。`)
};

/**
* | output |
* | --- |
* | "No comments yet. Questions, tips and bug reports go here." |
*
* @param {Mod_Comments_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_comments_empty = /** @type {((inputs?: Mod_Comments_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Comments_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_comments_empty(inputs)
	if (locale === "de") return de_mod_comments_empty(inputs)
	if (locale === "fr") return fr_mod_comments_empty(inputs)
	if (locale === "it") return it_mod_comments_empty(inputs)
	if (locale === "nl") return nl_mod_comments_empty(inputs)
	if (locale === "pl") return pl_mod_comments_empty(inputs)
	if (locale === "pt") return pt_mod_comments_empty(inputs)
	if (locale === "ru") return ru_mod_comments_empty(inputs)
	if (locale === "sv") return sv_mod_comments_empty(inputs)
	if (locale === "tr") return tr_mod_comments_empty(inputs)
	if (locale === "zh") return zh_mod_comments_empty(inputs)
	if (locale === "ja") return ja_mod_comments_empty(inputs)
	return en_mod_comments_empty(inputs)
});
