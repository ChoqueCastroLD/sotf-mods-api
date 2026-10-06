/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Empty_TextInputs */

const en_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments, bug reports and reviews on your mods will show up here.`)
};

const es_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aquí aparecerán los comentarios, reportes de bugs y reseñas de tus mods.`)
};

const de_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare, Fehlerberichte und Bewertungen zu deinen Mods erscheinen hier.`)
};

const fr_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les commentaires, rapports de bug et avis sur vos mods apparaîtront ici.`)
};

const it_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui compariranno commenti, segnalazioni di bug e recensioni delle tue mod.`)
};

const nl_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties, bugmeldingen en reviews over je mods verschijnen hier.`)
};

const pl_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutaj pojawią się komentarze, zgłoszenia błędów i recenzje twoich modów.`)
};

const pt_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários, relatórios de bugs e avaliações dos seus mods vão aparecer aqui.`)
};

const ru_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь появятся комментарии, сообщения об ошибках и отзывы о ваших модах.`)
};

const sv_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer, felrapporter och recensioner om dina moddar visas här.`)
};

const tr_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarına gelen yorumlar, hata bildirimleri ve incelemeler burada görünecek.`)
};

const zh_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组收到的评论、错误报告和评价会显示在这里。`)
};

const ja_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD へのコメント、不具合報告、レビューがここに表示されます。`)
};

/**
* | output |
* | --- |
* | "Comments, bug reports and reviews on your mods will show up here." |
*
* @param {Basecamp_Inbox_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_empty_text = /** @type {((inputs?: Basecamp_Inbox_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_empty_text(inputs)
	if (locale === "de") return de_basecamp_inbox_empty_text(inputs)
	if (locale === "fr") return fr_basecamp_inbox_empty_text(inputs)
	if (locale === "it") return it_basecamp_inbox_empty_text(inputs)
	if (locale === "nl") return nl_basecamp_inbox_empty_text(inputs)
	if (locale === "pl") return pl_basecamp_inbox_empty_text(inputs)
	if (locale === "pt") return pt_basecamp_inbox_empty_text(inputs)
	if (locale === "ru") return ru_basecamp_inbox_empty_text(inputs)
	if (locale === "sv") return sv_basecamp_inbox_empty_text(inputs)
	if (locale === "tr") return tr_basecamp_inbox_empty_text(inputs)
	if (locale === "zh") return zh_basecamp_inbox_empty_text(inputs)
	if (locale === "ja") return ja_basecamp_inbox_empty_text(inputs)
	return en_basecamp_inbox_empty_text(inputs)
});
