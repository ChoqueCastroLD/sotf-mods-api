/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Empty_Open_TextInputs */

const en_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing is waiting for an answer. New comments and reports on your mods land here.`)
};

const es_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada espera respuesta. Los nuevos comentarios y reportes de tus mods llegan aquí.`)
};

const de_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts wartet auf eine Antwort. Neue Kommentare und Berichte zu deinen Mods landen hier.`)
};

const fr_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien n’attend de réponse. Les nouveaux commentaires et rapports sur vos mods arrivent ici.`)
};

const it_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente attende risposta. I nuovi commenti e rapporti sulle tue mod arrivano qui.`)
};

const nl_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets wacht op antwoord. Nieuwe reacties en rapporten over je mods komen hier binnen.`)
};

const pl_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic nie czeka na odpowiedź. Nowe komentarze i raporty o twoich modach trafiają tutaj.`)
};

const pt_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada aguarda resposta. Novos comentários e relatórios dos seus mods chegam aqui.`)
};

const ru_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничто не ждёт ответа. Новые комментарии и отчёты о ваших модах приходят сюда.`)
};

const sv_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget väntar på svar. Nya kommentarer och rapporter om dina moddar hamnar här.`)
};

const tr_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıt bekleyen bir şey yok. Modlarına gelen yeni yorumlar ve raporlar buraya düşer.`)
};

const zh_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有等待回复的内容。你的模组的新评论和报告会出现在这里。`)
};

const ja_basecamp_inbox_empty_open_text = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を待っているものはありません。MOD への新しいコメントやレポートはここに届きます。`)
};

/**
* | output |
* | --- |
* | "Nothing is waiting for an answer. New comments and reports on your mods land here." |
*
* @param {Basecamp_Inbox_Empty_Open_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_empty_open_text = /** @type {((inputs?: Basecamp_Inbox_Empty_Open_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Empty_Open_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_empty_open_text(inputs)
	if (locale === "de") return de_basecamp_inbox_empty_open_text(inputs)
	if (locale === "fr") return fr_basecamp_inbox_empty_open_text(inputs)
	if (locale === "it") return it_basecamp_inbox_empty_open_text(inputs)
	if (locale === "nl") return nl_basecamp_inbox_empty_open_text(inputs)
	if (locale === "pl") return pl_basecamp_inbox_empty_open_text(inputs)
	if (locale === "pt") return pt_basecamp_inbox_empty_open_text(inputs)
	if (locale === "ru") return ru_basecamp_inbox_empty_open_text(inputs)
	if (locale === "sv") return sv_basecamp_inbox_empty_open_text(inputs)
	if (locale === "tr") return tr_basecamp_inbox_empty_open_text(inputs)
	if (locale === "zh") return zh_basecamp_inbox_empty_open_text(inputs)
	if (locale === "ja") return ja_basecamp_inbox_empty_open_text(inputs)
	return en_basecamp_inbox_empty_open_text(inputs)
});
