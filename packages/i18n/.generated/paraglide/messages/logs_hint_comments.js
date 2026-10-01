/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Hint_CommentsInputs */

const en_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something not working? Share your log and paste the link in your comment.`)
};

const es_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Algo no funciona? Comparte tu log y pega el enlace en tu comentario.`)
};

const de_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas funktioniert nicht? Teile dein Log und füge den Link in deinen Kommentar ein.`)
};

const fr_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelque chose ne marche pas ? Partagez votre log et collez le lien dans votre commentaire.`)
};

const it_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa non funziona? Condividi il tuo log e incolla il link nel commento.`)
};

const nl_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt er iets niet? Deel je log en plak de link in je reactie.`)
};

const pl_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś nie działa? Udostępnij swój log i wklej link w komentarzu.`)
};

const pt_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo não funciona? Partilhe o seu log e cole a ligação no seu comentário.`)
};

const ru_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что-то не работает? Поделитесь логом и вставьте ссылку в комментарий.`)
};

const sv_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar något inte? Dela din logg och klistra in länken i din kommentar.`)
};

const tr_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir şey çalışmıyor mu? Logunuzu paylaşın ve bağlantıyı yorumunuza yapıştırın.`)
};

const zh_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有东西不能用？分享你的日志，并把链接粘贴到评论中。`)
};

const ja_logs_hint_comments = /** @type {(inputs: Logs_Hint_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`うまく動かない場合は、ログを共有してリンクをコメントに貼り付けてください。`)
};

/**
* | output |
* | --- |
* | "Something not working? Share your log and paste the link in your comment." |
*
* @param {Logs_Hint_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_hint_comments = /** @type {((inputs?: Logs_Hint_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Hint_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_hint_comments(inputs)
	if (locale === "de") return de_logs_hint_comments(inputs)
	if (locale === "fr") return fr_logs_hint_comments(inputs)
	if (locale === "it") return it_logs_hint_comments(inputs)
	if (locale === "nl") return nl_logs_hint_comments(inputs)
	if (locale === "pl") return pl_logs_hint_comments(inputs)
	if (locale === "pt") return pt_logs_hint_comments(inputs)
	if (locale === "ru") return ru_logs_hint_comments(inputs)
	if (locale === "sv") return sv_logs_hint_comments(inputs)
	if (locale === "tr") return tr_logs_hint_comments(inputs)
	if (locale === "zh") return zh_logs_hint_comments(inputs)
	if (locale === "ja") return ja_logs_hint_comments(inputs)
	return en_logs_hint_comments(inputs)
});
