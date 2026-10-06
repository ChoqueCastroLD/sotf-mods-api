/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_IntroInputs */

const en_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments, bug reports and reviews on your mods. Reply from here.`)
};

const es_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios, reportes de bugs y reseñas de tus mods. Responde desde aquí.`)
};

const de_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare, Fehlerberichte und Bewertungen zu deinen Mods. Antworte direkt hier.`)
};

const fr_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires, rapports de bug et avis sur vos mods. Répondez d’ici.`)
};

const it_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti, segnalazioni di bug e recensioni delle tue mod. Rispondi da qui.`)
};

const nl_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties, bugmeldingen en reviews over je mods. Antwoord hier.`)
};

const pl_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze, zgłoszenia błędów i recenzje twoich modów. Odpowiadaj stąd.`)
};

const pt_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários, relatórios de bugs e avaliações dos seus mods. Responda daqui.`)
};

const ru_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии, сообщения об ошибках и отзывы о ваших модах. Отвечайте прямо здесь.`)
};

const sv_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer, felrapporter och recensioner om dina moddar. Svara härifrån.`)
};

const tr_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarına gelen yorumlar, hata bildirimleri ve incelemeler. Buradan yanıtla.`)
};

const zh_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组收到的评论、错误报告和评价。直接在这里回复。`)
};

const ja_basecamp_inbox_intro = /** @type {(inputs: Basecamp_Inbox_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD に届いたコメント、不具合報告、レビュー。ここから返信できます。`)
};

/**
* | output |
* | --- |
* | "Comments, bug reports and reviews on your mods. Reply from here." |
*
* @param {Basecamp_Inbox_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_intro = /** @type {((inputs?: Basecamp_Inbox_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_intro(inputs)
	if (locale === "de") return de_basecamp_inbox_intro(inputs)
	if (locale === "fr") return fr_basecamp_inbox_intro(inputs)
	if (locale === "it") return it_basecamp_inbox_intro(inputs)
	if (locale === "nl") return nl_basecamp_inbox_intro(inputs)
	if (locale === "pl") return pl_basecamp_inbox_intro(inputs)
	if (locale === "pt") return pt_basecamp_inbox_intro(inputs)
	if (locale === "ru") return ru_basecamp_inbox_intro(inputs)
	if (locale === "sv") return sv_basecamp_inbox_intro(inputs)
	if (locale === "tr") return tr_basecamp_inbox_intro(inputs)
	if (locale === "zh") return zh_basecamp_inbox_intro(inputs)
	if (locale === "ja") return ja_basecamp_inbox_intro(inputs)
	return en_basecamp_inbox_intro(inputs)
});
